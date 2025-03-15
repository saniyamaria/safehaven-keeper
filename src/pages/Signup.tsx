
import AuthLayout from "./AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <AuthLayout 
      title="Create Your Account" 
      subtitle="Join KidShield to keep your children safe online"
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
