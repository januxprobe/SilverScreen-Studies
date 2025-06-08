import SignInForm from '../../components/SignInForm';

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;