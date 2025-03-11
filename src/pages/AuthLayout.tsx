
import { ReactNode } from "react";
import { Shield } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-safehaven-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-safehaven-100 mb-4">
          <Shield className="h-8 w-8 text-safehaven-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
