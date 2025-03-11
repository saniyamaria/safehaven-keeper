
import AuthLayout from "./AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <AuthLayout 
      title="Create Your Account" 
      subtitle="Join SafeHaven to keep your loved ones safe and connected"
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
