
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bell, Ban, Clock, Shield, Lock, Settings } from "lucide-react";
import LocationTracker from "@/components/dashboard/LocationTracker";
import SafetyZones from "@/components/dashboard/SafetyZones";
import ContentFiltering from "@/components/dashboard/ContentFiltering";
import ChildrenOverview from "@/components/dashboard/ChildrenOverview";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";

const ParentDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in and has parent role
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const userData = JSON.parse(user);
      if (userData.role !== "parent") {
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
        <h1 className="text-3xl font-bold mb-6">Parent Control Center</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="md:col-span-3">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="location">Location & Zones</TabsTrigger>
                <TabsTrigger value="content">Content Filtering</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <ChildrenOverview />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-safehaven-600" />
                        Safety Alerts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>Zone Departure Alerts</span>
                          </div>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Ban className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>Content Blocking Alerts</span>
                          </div>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>Screen Time Alerts</span>
                          </div>
                          <Badge variant="outline">Disabled</Badge>
                        </div>
                        <Button 
                          className="w-full mt-2 bg-safehaven-600 hover:bg-safehaven-700"
                          onClick={() => navigate("/alerts")}
                        >
                          View All Alerts
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Lock className="mr-2 h-5 w-5 text-safehaven-600" />
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <MapPin className="mr-2 h-4 w-4" />
                          Add Safe Zone
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Ban className="mr-2 h-4 w-4" />
                          Block Website
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Settings className="mr-2 h-4 w-4" />
                          Manage Device Settings
                        </Button>
                        <Button className="w-full justify-start mt-2 bg-alert-600 hover:bg-alert-700">
                          <Bell className="mr-2 h-4 w-4" />
                          Check In Request
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="location" className="space-y-4">
                <LocationTracker />
                <SafetyZones />
              </TabsContent>
              
              <TabsContent value="content" className="space-y-4">
                <ContentFiltering />
              </TabsContent>
              
              <TabsContent value="activity" className="space-y-4">
                <ActivityTimeline />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Daily Summary</CardTitle>
                <CardDescription>May 15, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Screen Time</p>
                    <p className="text-2xl font-bold">3h 42m</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Content Blocks</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Zone Alerts</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;
