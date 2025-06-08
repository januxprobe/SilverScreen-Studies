import SignUpForm from '../../components/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;