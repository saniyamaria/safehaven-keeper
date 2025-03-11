
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const EmergencyAlertButton = () => {
  const [alertSent, setAlertSent] = useState(false);
  const { toast } = useToast();

  const sendAlert = () => {
    // Simulate sending an alert
    setAlertSent(true);
    
    toast({
      title: "Emergency Alert Sent",
      description: "Your emergency contacts have been notified of your situation.",
      variant: "destructive",
    });
    
    // Reset after 5 seconds
    setTimeout(() => {
      setAlertSent(false);
    }, 5000);
  };

  return (
    <Card className="border-alert-600 bg-background">
      <CardHeader className="pb-2">
        <CardTitle className="text-alert-600 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Emergency Alert
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Press the button below to send an emergency alert to all your trusted contacts.
      </CardContent>
      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button 
              className={`w-full font-bold ${
                alertSent 
                  ? "bg-alert-200 text-alert-900 hover:bg-alert-200" 
                  : "bg-alert-600 hover:bg-alert-700 text-white animate-pulse-slow"
              }`}
              disabled={alertSent}
            >
              {alertSent ? "Alert Sent" : "Send Emergency Alert"}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-alert-600">Confirm Emergency Alert</AlertDialogTitle>
              <AlertDialogDescription>
                This will immediately notify all your emergency contacts with your current location. Are you sure you want to proceed?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-alert-600 hover:bg-alert-700" onClick={sendAlert}>
                Send Alert
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default EmergencyAlertButton;
