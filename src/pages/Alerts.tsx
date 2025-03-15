
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { alertsData } from "@/data/alertsData";
import ActiveAlertsList from "@/components/alerts/ActiveAlertsList";
import ResolvedAlertsList from "@/components/alerts/ResolvedAlertsList";
import AlertSettings from "@/components/alerts/AlertSettings";

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
          
          <TabsContent value="active">
            <ActiveAlertsList alerts={activeAlerts} onResolveAlert={resolveAlert} />
          </TabsContent>
          
          <TabsContent value="resolved">
            <ResolvedAlertsList alerts={resolvedAlerts} />
          </TabsContent>
          
          <TabsContent value="settings">
            <AlertSettings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Alerts;
