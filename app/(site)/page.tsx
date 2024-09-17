import { AuthForm } from '@/app/(site)/components/auth-form';
import Image from 'next/image';

const Page = () => {
  return (
    <main className="flex min-h-full flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/logo.svg"
          alt="logo"
          width={48}
          height={48}
          className="mx-auto h-12 w-12"
        />
        <div className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </div>
      </div>
      <AuthForm />
    </main>
  );
};
export default Page;
