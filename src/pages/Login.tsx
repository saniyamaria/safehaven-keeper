
import AuthLayout from "./AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout 
      title="Welcome to KidShield" 
      subtitle="Sign in to your account to access your child safety tools"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
