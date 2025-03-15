
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

interface ScreenTimeLimitsProps {
  onSave: () => void;
}

const ScreenTimeLimits = ({ onSave }: ScreenTimeLimitsProps) => {
  const [dailyLimit, setDailyLimit] = useState<number[]>([4]);
  const [weekdayLimit, setWeekdayLimit] = useState<number[]>([3]);
  const [weekendLimit, setWeekendLimit] = useState<number[]>([6]);
  const [enableBedtime, setEnableBedtime] = useState(true);
  const [enableDowntime, setEnableDowntime] = useState(true);
  
  const handleSave = () => {
    onSave();
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Daily Screen Time Limits</CardTitle>
          <CardDescription>
            Set the maximum amount of screen time allowed per day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Total daily screen time</Label>
                  <span className="font-medium">{dailyLimit[0]} hours</span>
                </div>
                <Slider 
                  value={dailyLimit} 
                  min={1} 
                  max={10} 
                  step={0.5}
                  onValueChange={setDailyLimit} 
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Weekday limit</Label>
                  <span className="font-medium">{weekdayLimit[0]} hours</span>
                </div>
                <Slider 
                  value={weekdayLimit} 
                  min={1} 
                  max={8} 
                  step={0.5}
                  onValueChange={setWeekdayLimit} 
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Weekend limit</Label>
                  <span className="font-medium">{weekendLimit[0]} hours</span>
                </div>
                <Slider 
                  value={weekendLimit} 
                  min={1} 
                  max={10} 
                  step={0.5}
                  onValueChange={setWeekendLimit} 
                />
              </div>
            </div>
            
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="block font-medium">Bedtime Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Block device usage during sleeping hours
                  </p>
                </div>
                <Switch 
                  checked={enableBedtime}
                  onCheckedChange={setEnableBedtime}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="block font-medium">Scheduled Downtime</Label>
                  <p className="text-sm text-muted-foreground">
                    Block non-essential apps during specific times
                  </p>
                </div>
                <Switch 
                  checked={enableDowntime}
                  onCheckedChange={setEnableDowntime}
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button variant="outline" className="mr-2">
                Reset to Default
              </Button>
              <Button 
                className="bg-safehaven-600 hover:bg-safehaven-700"
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Break Time Settings</CardTitle>
          <CardDescription>
            Enforce breaks between screen time sessions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="block font-medium">Require Breaks</Label>
                <p className="text-sm text-muted-foreground">
                  15 minute break after every hour of use
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label className="block font-medium">Activity Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Remind to do physical activity during breaks
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex justify-end mt-4">
              <Button 
                className="bg-safehaven-600 hover:bg-safehaven-700"
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScreenTimeLimits;
