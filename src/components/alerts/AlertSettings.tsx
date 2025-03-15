
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, School, Building, Map } from "lucide-react";

const AlertSettings = () => {
  return (
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
  );
};

export default AlertSettings;
