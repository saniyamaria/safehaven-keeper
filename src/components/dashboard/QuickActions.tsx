
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, Bell, Shield, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Button 
          variant="outline" 
          className="justify-start bg-safehaven-50 hover:bg-safehaven-100 hover:text-safehaven-700"
          onClick={() => navigate("/locations")}
        >
          <MapPin className="mr-2 h-4 w-4 text-safehaven-600" />
          Check Locations
        </Button>
        <Button 
          variant="outline" 
          className="justify-start bg-safehaven-50 hover:bg-safehaven-100 hover:text-safehaven-700"
          onClick={() => navigate("/messages")}
        >
          <MessageSquare className="mr-2 h-4 w-4 text-safehaven-600" />
          Send Message
        </Button>
        <Button 
          variant="outline" 
          className="justify-start bg-safehaven-50 hover:bg-safehaven-100 hover:text-safehaven-700"
          onClick={() => navigate("/alerts")}
        >
          <Bell className="mr-2 h-4 w-4 text-safehaven-600" />
          View Alerts
        </Button>
        <Button 
          variant="outline" 
          className="justify-start bg-safehaven-50 hover:bg-safehaven-100 hover:text-safehaven-700"
          onClick={() => navigate("/profile")}
        >
          <Settings className="mr-2 h-4 w-4 text-safehaven-600" />
          Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
