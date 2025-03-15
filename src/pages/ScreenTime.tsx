
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertTriangle, Ban, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScreenTimeUsage from "@/components/screen-time/ScreenTimeUsage";
import ScreenTimeLimits from "@/components/screen-time/ScreenTimeLimits";
import ScreenTimeSchedule from "@/components/screen-time/ScreenTimeSchedule";

const ScreenTime = () => {
  const { toast } = useToast();
  
  const handleSaveChanges = () => {
    toast({
      title: "Settings Saved",
      description: "Screen time settings have been updated",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Screen Time Management</h1>
        
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="limits">Time Limits</TabsTrigger>
            <TabsTrigger value="schedule">Schedules</TabsTrigger>
            <TabsTrigger value="apps">App Limits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="usage">
            <ScreenTimeUsage />
          </TabsContent>
          
          <TabsContent value="limits">
            <ScreenTimeLimits onSave={handleSaveChanges} />
          </TabsContent>
          
          <TabsContent value="schedule">
            <ScreenTimeSchedule onSave={handleSaveChanges} />
          </TabsContent>
          
          <TabsContent value="apps">
            <Card>
              <CardHeader>
                <CardTitle>App Usage Limits</CardTitle>
                <CardDescription>
                  Set time limits for specific applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-md flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Social Media</h3>
                        <p className="text-sm text-muted-foreground">Instagram, TikTok, Snapchat</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge>1 hour / day</Badge>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center">
                        <Ban className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Games</h3>
                        <p className="text-sm text-muted-foreground">Minecraft, Roblox, Fortnite</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge>2 hours / day</Badge>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center">
                        <Clock className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Educational Apps</h3>
                        <p className="text-sm text-muted-foreground">Khan Academy, Duolingo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge>Unlimited</Badge>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New App Limit
                  </Button>
                  
                  <div className="flex justify-end mt-6">
                    <Button 
                      className="bg-safehaven-600 hover:bg-safehaven-700"
                      onClick={handleSaveChanges}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ScreenTime;
