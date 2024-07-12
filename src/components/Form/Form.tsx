import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';
import { ZodType } from 'zod';

import { useLoading } from '@/hooks/useLoading';

import './Form.scss';

type FormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  schema?: Schema;
  className?: string;
  id?: string;
  isResetForm?: boolean;
  onChange?: (itemEle: any) => void;
  onWatch?: (dataDefault: TFormValues, dataNew: TFormValues) => void;
  isHandleLeavePage?: boolean;
  isLoadData?: boolean;
  disable?: boolean;
  isSubmit?: boolean;
  isConfirmPopupVisible?: boolean; // New prop for conditional rendering
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown> = ZodType<unknown>,
>({
  onSubmit,
  onChange,
  children,
  className,
  options,
  id,
  schema,
  isResetForm = true,
  isLoadData = true,
  onWatch,
  disable,
  isSubmit = false,
  isConfirmPopupVisible = false,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });
  const [openPopupConfirmSubmit, setOpenPopupConfirmSubmit] = useState(false);
  const [onConfirmSubmit, setOnConfirmSubmit] = useState(false);
  const { isLoading } = useLoading();

  const [dataDefault, setDataDefault] = useState<TFormValues | null>(null);
  useEffect(() => {
    if (isLoadData) {
      const checkKey: any[] = [];
      Object.keys(methods.getValues()).forEach((key) => {
        if (methods.getValues()[key]) {
          checkKey.push(methods.getValues()[key]);
        }
      });
      if (dataDefault === null) {
        setTimeout(() => {
          setDataDefault(methods.getValues());
        }, 500);
      }
    }
  }, [methods.getValues()]);

  useEffect(() => {
    if (isLoadData) {
      if (dataDefault) {
        onWatch && onWatch(dataDefault, methods.watch());
      }
    }
  }, [methods.watch()]);

  const handleSubmit = async (formData: TFormValues, e: React.FormEvent) => {
    e.preventDefault();

    if (disable || isLoading) {
      return;
    }

    const isValid = await methods.trigger();

    if (!openPopupConfirmSubmit && onConfirmSubmit && isConfirmPopupVisible) {
      try {
        setOnConfirmSubmit(false);
        setOpenPopupConfirmSubmit(false);

        // Trigger form validation

        if (isValid) {
          await onSubmit(formData);
          if (isResetForm) {
            methods.reset();
          }
        }
      } catch (error) {
        console.error(error);
      }
    } else if (!isConfirmPopupVisible) {
      if (isValid) {
        await onSubmit(formData);
        if (isResetForm) {
          methods.reset();
        }
      }
    } else {
      setOpenPopupConfirmSubmit(true);
      setOnConfirmSubmit(false);
    }
  };

  // Clear error when after form valid status
  useEffect(() => {
    if (schema && methods.formState.isValid) {
      methods.clearErrors();
    }
  }, [schema, methods.formState.isValid]);

  return (
    <form
      onChange={onChange}
      autoComplete="off"
      className={className}
      onSubmit={(e) => handleSubmit(methods.getValues(), e)}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
