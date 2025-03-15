
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BellOff, Clock, MapPin, ShieldAlert } from "lucide-react";
import { Alert } from "@/types/alerts";

interface ResolvedAlertsListProps {
  alerts: Alert[];
}

const ResolvedAlertsList = ({ alerts }: ResolvedAlertsListProps) => {
  if (alerts.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <BellOff className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg font-medium mb-2">No Resolved Alerts</p>
          <p className="text-muted-foreground">There are no resolved alerts to display.</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-4">
      {alerts.map(alert => (
        <Card key={alert.id} className="border-gray-200 bg-gray-50">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-gray-400" />
                  <CardTitle className="text-gray-500">{alert.type} Alert</CardTitle>
                </div>
                <CardContent className="p-0">From {alert.user}</CardContent>
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
      ))}
    </div>
  );
};

export default ResolvedAlertsList;
