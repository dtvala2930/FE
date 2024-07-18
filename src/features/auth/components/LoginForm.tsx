import * as z from 'zod';

import { Button, Link } from '@/components/Elemements';
import { Form, FormItemBlock, InputField } from '@/components/Form';
import { useLoading } from '@/hooks/useLoading';
import { useLogin } from '@/libs/auth';
import { EMAIL_REGEX, ROUTES } from '@/utils/constants';

import './AuthForm.scss';

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
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
    password: z.string().min(1, 'Password is required'),
  });

  const login = useLogin();

  return (
    <>
      <div className="auth">
        <div className="auth__logo">
          <img src="/images/avt.jpeg" alt="tempt" />
        </div>
        <div className="auth__body">
          <Form<LoginValues, typeof schema>
            onSubmit={async (values) => {
              setLoading(true);
              await login
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
                    <span style={{ marginRight: '10px' }}>
                      If you don't have account yet. Please register by follow
                      the link
                    </span>
                    <Link to={`/${ROUTES.AUTH.REGISTER}`} themeType="text-link">
                      Register
                    </Link>
                  </div>
                  <div className="form__footer">
                    <Button type="submit" themeType="login">
                      Log in
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
