
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, MapPin, ShieldAlert } from "lucide-react";
import { Alert } from "@/types/alerts";
import { useToast } from "@/hooks/use-toast";

interface ActiveAlertsListProps {
  alerts: Alert[];
  onResolveAlert: (id: number) => void;
}

const ActiveAlertsList = ({ alerts, onResolveAlert }: ActiveAlertsListProps) => {
  const { toast } = useToast();
  
  if (alerts.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg font-medium mb-2">No Active Alerts</p>
          <p className="text-muted-foreground">All alerts have been resolved.</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-4">
      {alerts.map(alert => (
        <Card key={alert.id} className="border-alert-300 bg-alert-50">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-alert-600" />
                  <CardTitle>{alert.type} Alert</CardTitle>
                </div>
                <CardContent className="p-0">From {alert.user}</CardContent>
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
                  onClick={() => onResolveAlert(alert.id)}
                >
                  Resolve Alert
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ActiveAlertsList;
