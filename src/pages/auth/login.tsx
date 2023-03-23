import RowContainer from '@src/common/container/RowContainer';
import AuthTab from '@src/components/auth/AuthTab';
import Input from '@src/components/auth/Input';
import { useRouter } from 'next/router';

function Login(): JSX.Element {
  return (
    <RowContainer>
      <div className="pt-6 pb-36 max-w-lg mx-auto lg:border lg:px-12 lg:my-12">
        <AuthTab />
        <form action="">
          <Input id="email" label="Email adress *" type="email" />
          <Input id="email" label="Password *" type="password" />
          <button
            type="button"
            className="bg-custom-red text-white w-full py-2 mb-4"
          >
            Login
          </button>
        </form>
        <span>Lost your password?</span>
      </div>
    </RowContainer>
  );
}

export default Login;
