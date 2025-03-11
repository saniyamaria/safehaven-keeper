
import AuthLayout from "./AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout 
      title="Welcome to SafeHaven" 
      subtitle="Sign in to your account to access your family's safety tools"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
