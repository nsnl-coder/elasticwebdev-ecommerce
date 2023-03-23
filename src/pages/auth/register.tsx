import RowContainer from '@src/common/container/RowContainer';
import AuthTab from '@src/components/auth/AuthTab';
import Input from '@src/components/auth/Input';

function Register(): JSX.Element {
  return (
    <RowContainer>
      <div className="pt-6 pb-36 max-w-lg mx-auto lg:border lg:px-12 lg:my-12">
        <AuthTab />
        <form action="">
          <Input id="email" label="Email adress *" type="email" />
          <Input id="email" label="Password *" type="password" />
          <Input id="email" label="Confirm password *" type="password" />
          <p className="text-p2 mb-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <button
            type="button"
            className="bg-custom-red text-white w-full py-2 mb-4"
          >
            Register
          </button>
        </form>
      </div>
    </RowContainer>
  );
}

export default Register;
