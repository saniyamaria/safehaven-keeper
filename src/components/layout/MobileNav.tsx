
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, Home, Map, MessageSquare, Bell, Settings, LogOut } from "lucide-react";

interface MobileNavProps {
  onLogout: () => void;
}

export function MobileNav({ onLogout }: MobileNavProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className="flex flex-col h-full py-4">
      <div className="flex items-center gap-2 px-2">
        <Shield className="h-6 w-6 text-safehaven-600" />
        <span className="text-xl font-bold">SafeHaven</span>
      </div>
      <Separator className="my-4" />
      <nav className="flex flex-col gap-2">
        <Button 
          variant="ghost" 
          className={`justify-start ${location.pathname === "/dashboard" ? "font-bold bg-accent" : ""}`}
          onClick={() => navigate("/dashboard")}
        >
          <Home className="mr-2 h-5 w-5" />
          Dashboard
        </Button>
        <Button 
          variant="ghost" 
          className={`justify-start ${location.pathname === "/locations" ? "font-bold bg-accent" : ""}`}
          onClick={() => navigate("/locations")}
        >
          <Map className="mr-2 h-5 w-5" />
          Locations
        </Button>
        <Button 
          variant="ghost" 
          className={`justify-start ${location.pathname === "/messages" ? "font-bold bg-accent" : ""}`}
          onClick={() => navigate("/messages")}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Messages
        </Button>
        <Button 
          variant="ghost" 
          className={`justify-start ${location.pathname === "/alerts" ? "font-bold bg-accent" : ""}`}
          onClick={() => navigate("/alerts")}
        >
          <Bell className="mr-2 h-5 w-5" />
          Alerts
        </Button>
        <Separator className="my-4" />
        <Button 
          variant="ghost" 
          className={`justify-start ${location.pathname === "/profile" ? "font-bold bg-accent" : ""}`}
          onClick={() => navigate("/profile")}
        >
          <Settings className="mr-2 h-5 w-5" />
          Settings
        </Button>
        <Button 
          variant="ghost" 
          className="justify-start text-destructive hover:text-destructive" 
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Log out
        </Button>
      </nav>
    </div>
  );
}
