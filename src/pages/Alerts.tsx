
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bell, BellOff, Calendar, Clock, MapPin, ShieldAlert, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Mock alert data
const alertsData = [
  {
    id: 1,
    type: "Emergency",
    status: "Active",
    user: "Sarah",
    location: "Downtown Area",
    time: "Just now",
    date: "Today",
  },
  {
    id: 2,
    type: "Boundary",
    status: "Resolved",
    user: "Jack",
    location: "Mall",
    time: "1 hour ago",
    date: "Today",
  },
  {
    id: 3,
    type: "Curfew",
    status: "Resolved",
    user: "Sarah",
    location: "Friend's House",
    time: "Yesterday",
    date: "Yesterday",
  },
];

const Alerts = () => {
  const [activeAlerts, setActiveAlerts] = useState(
    alertsData.filter(alert => alert.status === "Active")
  );
  const resolvedAlerts = alertsData.filter(alert => alert.status === "Resolved");
  const { toast } = useToast();

  const resolveAlert = (id: number) => {
    setActiveAlerts(prev => prev.filter(alert => alert.id !== id));
    toast({
      title: "Alert Resolved",
      description: "The alert has been marked as resolved",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Alerts</h1>
        
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="active" className="relative">
              Active
              {activeAlerts.length > 0 && (
                <Badge className="ml-2 bg-alert-600">{activeAlerts.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
            <TabsTrigger value="settings">Alert Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-4">
            {activeAlerts.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">No Active Alerts</p>
                  <p className="text-muted-foreground">All alerts have been resolved.</p>
                </CardContent>
              </Card>
            ) : (
              activeAlerts.map(alert => (
                <Card key={alert.id} className="border-alert-300 bg-alert-50">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="h-5 w-5 text-alert-600" />
                          <CardTitle>{alert.type} Alert</CardTitle>
                        </div>
                        <CardDescription>From {alert.user}</CardDescription>
                      </div>
                      <Badge className="bg-alert-600">{alert.status}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{alert.time}</span>
                      </div>
                      
                      <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button 
                          className="bg-alert-600 hover:bg-alert-700"
                          size="sm"
                          onClick={() => resolveAlert(alert.id)}
                        >
                          Resolve Alert
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
          
          <TabsContent value="resolved" className="space-y-4">
            {resolvedAlerts.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <BellOff className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">No Resolved Alerts</p>
                  <p className="text-muted-foreground">There are no resolved alerts to display.</p>
                </CardContent>
              </Card>
            ) : (
              resolvedAlerts.map(alert => (
                <Card key={alert.id} className="border-gray-200 bg-gray-50">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="h-5 w-5 text-gray-400" />
                          <CardTitle className="text-gray-500">{alert.type} Alert</CardTitle>
                        </div>
                        <CardDescription>From {alert.user}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-gray-500">
                        {alert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{alert.time}</span>
                      </div>
                      
                      <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Alert Settings</CardTitle>
                <CardDescription>
                  Configure how and when you receive alerts from family members
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Emergency Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        These alerts are sent when a family member triggers their emergency button.
                      </p>
                      <Button className="w-full bg-safehaven-600 hover:bg-safehaven-700">
                        Configure Emergency Alerts
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Boundary Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get notified when family members enter or leave designated safe areas.
                      </p>
                      <Button className="w-full bg-safehaven-600 hover:bg-safehaven-700">
                        Configure Boundary Alerts
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Curfew Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Set time-based alerts to ensure family members are where they should be.
                      </p>
                      <Button className="w-full bg-safehaven-600 hover:bg-safehaven-700">
                        Configure Curfew Alerts
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Notification Methods</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Choose how you want to receive alerts (app, SMS, email).
                      </p>
                      <Button className="w-full bg-safehaven-600 hover:bg-safehaven-700">
                        Configure Notifications
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Alerts;
