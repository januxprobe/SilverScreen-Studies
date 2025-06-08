import SignUpForm from '../../components/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-12">
      <div className="border p-8 rounded-lg shadow-xl bg-card w-full max-w-md">
        <h2 className="text-3xl font-headline font-semibold mb-6 text-center text-card-foreground">Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
