import * as z from 'zod';

import { Button, Link } from '@/components/Elemements';
import { Form, FormItemBlock, InputField } from '@/components/Form';
import { useLoading } from '@/hooks/useLoading';
import { useLogin, useRegister } from '@/libs/auth';
import { EMAIL_REGEX, ROUTES } from '@/utils/constants';

import './AuthForm.scss';

type RegisterValues = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { setLoading } = useLoading();

  const schema = z.object({
    email: z
      .string()
      .min(1, 'Email is required')
      .refine(
        (value) => {
          const emailRegex = EMAIL_REGEX;
          return emailRegex.test(value);
        },
        {
          message: 'Invalid email format',
        },
      ),
    firstName: z.string().min(1, 'Firstname is required'),
    lastName: z.string().min(1, 'Lastname is required'),
    password: z.string().min(1, 'Password is required'),
  });

  const register = useRegister();

  return (
    <>
      <div className="auth">
        <div className="auth__logo">
          <img src="/images/avt.jpeg" alt="tempt" />
        </div>
        <div className="auth__body">
          <Form<RegisterValues, typeof schema>
            onSubmit={async (values) => {
              setLoading(true);
              await register
                .mutateAsync(values)
                .then(() => {
                  onSuccess();
                  setLoading(false);
                })
                .catch((error) => {
                  setLoading(false);
                });
            }}
            className="form"
            schema={schema}
            id="login-form"
            isResetForm={false}
          >
            {({ register, formState }) => {
              return (
                <>
                  <div className="form__body">
                    <div className="form__row">
                      <FormItemBlock
                        label="Email"
                        className="ele d-flex"
                        themeType="no-pl-main"
                        htmlFor="email"
                      >
                        <InputField
                          id="email"
                          type="text"
                          error={formState.errors['email']?.message}
                          registration={register('email')}
                        />
                      </FormItemBlock>
                    </div>
                    <div className="form__row">
                      <FormItemBlock
                        label="First name"
                        className="ele d-flex"
                        themeType="no-pl-main"
                        htmlFor="firstName"
                      >
                        <InputField
                          id="firstName"
                          type="text"
                          error={formState.errors['firstName']?.message}
                          registration={register('firstName')}
                        />
                      </FormItemBlock>
                    </div>
                    <div className="form__row">
                      <FormItemBlock
                        label="Last name"
                        className="ele d-flex"
                        themeType="no-pl-main"
                        htmlFor="lastName"
                      >
                        <InputField
                          id="lastName"
                          type="text"
                          error={formState.errors['lastName']?.message}
                          registration={register('lastName')}
                        />
                      </FormItemBlock>
                    </div>
                    <div className="form__row">
                      <FormItemBlock
                        label="Password"
                        className="ele d-flex"
                        themeType="no-pl-main"
                        htmlFor="password"
                      >
                        <InputField
                          id="password"
                          type="password"
                          error={formState.errors['password']?.message}
                          registration={register('password')}
                        />
                      </FormItemBlock>
                    </div>
                  </div>
                  <div>
                    <span style={{ marginRight: '10px' }}>Back to log in</span>
                    <Link to={`/${ROUTES.AUTH.LOGIN}`} themeType="text-link">
                      Log in
                    </Link>
                  </div>
                  <div className="form__footer">
                    <Button type="submit" themeType="login">
                      Submit
                    </Button>
                  </div>
                </>
              );
            }}
          </Form>
        </div>
      </div>
    </>
  );
};
