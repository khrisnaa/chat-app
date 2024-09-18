'use client';

import { AuthSocialButton } from '@/app/(site)/components/auth-social-button';
import { Button } from '@/app/components/button';
import { Input } from '@/app/components/inputs/input';
import { useCallback, useState } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

type Variant = 'LOGIN' | 'REGISTER';

export const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      //Axios register
    }

    if (variant === 'LOGIN') {
      //Nextauth signin
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //Nextauth social signin
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="rounded-lg bg-white px-4 py-8 shadow-sm sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email address"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} type="submit" fullWidth>
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2 px-2 text-sm text-gray-500">
          <div>
            {variant === 'LOGIN'
              ? 'New to Messenger?'
              : 'Already have an account?'}
          </div>
          <div onClick={toggleVariant} className="cursor-pointer underline">
            {variant === 'LOGIN' ? 'Create an account' : 'Log in'}
          </div>
        </div>
      </div>
    </div>
  );
};
