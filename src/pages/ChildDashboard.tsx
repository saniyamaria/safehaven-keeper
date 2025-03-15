
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EmergencyAlertButton from "@/components/dashboard/EmergencyAlertButton";
import { Clock, MapPin, Shield, MessageSquare } from "lucide-react";

const ChildDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in and has child role
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      if (userData.role !== "child") {
        navigate("/role-selection");
      }
    } catch (e) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">My SafeHaven</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-safehaven-600" />
                My Safe Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-safehaven-600" />
                    <span className="font-medium">Current Location</span>
                  </div>
                  <span>Home (Safe Zone)</span>
                </div>
                
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-safehaven-600" />
                    <span className="font-medium">Screen Time Today</span>
                  </div>
                  <span>2h 15m / 4h 00m</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-safehaven-600" />
                    <span className="font-medium">Protection Status</span>
                  </div>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
                
                <div className="pt-4">
                  <Button 
                    onClick={() => navigate("/messages")}
                    className="w-full bg-safehaven-600 hover:bg-safehaven-700"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Parent
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Emergency Help</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <EmergencyAlertButton />
              <p className="text-sm text-center mt-4 text-muted-foreground">
                Press this button if you feel unsafe or need immediate help from your parents.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>My Safe Zones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Home</span>
                  <span className="text-green-600">Currently Here</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">School</span>
                  <span className="text-gray-500">1.2 miles away</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Grandparents' House</span>
                  <span className="text-gray-500">3.5 miles away</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Basketball Court</span>
                  <span className="text-gray-500">0.5 miles away</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">School</span>
                  <span className="text-gray-500">8:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Basketball Practice</span>
                  <span className="text-gray-500">4:00 PM - 5:30 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Homework Time</span>
                  <span className="text-gray-500">7:00 PM - 8:30 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ChildDashboard;
