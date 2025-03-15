
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, User, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleContinue = () => {
    if (!selectedRole) {
      toast({
        title: "Please select a role",
        description: "You need to select a role to continue",
        variant: "destructive",
      });
      return;
    }

    // Save the role in localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      user.role = selectedRole;
      localStorage.setItem("user", JSON.stringify(user));
    }

    // Redirect to the appropriate dashboard
    navigate(selectedRole === "parent" ? "/parent-dashboard" : "/child-dashboard");
  };

  return (
    <AuthLayout
      title="Select Your Role"
      subtitle="Choose your role in the SafeHaven family protection system"
    >
      <div className="w-full max-w-md mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card 
            className={`cursor-pointer border-2 ${
              selectedRole === "parent" ? "border-safehaven-600" : "border-transparent"
            } hover:border-safehaven-600 transition-all`}
            onClick={() => setSelectedRole("parent")}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-safehaven-50 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-safehaven-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Parent/Guardian</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your child's activity and manage safety settings
              </p>
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer border-2 ${
              selectedRole === "child" ? "border-safehaven-600" : "border-transparent"
            } hover:border-safehaven-600 transition-all`}
            onClick={() => setSelectedRole("child")}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-safehaven-50 flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-safehaven-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Child</h3>
              <p className="text-sm text-muted-foreground">
                Access your protected device with parental monitoring
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Button 
          onClick={handleContinue} 
          className="w-full bg-safehaven-600 hover:bg-safehaven-700"
        >
          Continue
        </Button>
      </div>
    </AuthLayout>
  );
};

export default RoleSelection;
