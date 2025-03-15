
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Ban, Clock, Plus, School, Moon } from "lucide-react";

interface ScreenTimeScheduleProps {
  onSave: () => void;
}

const ScreenTimeSchedule = ({ onSave }: ScreenTimeScheduleProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Daily Schedules</CardTitle>
          <CardDescription>
            Set up times when devices can and cannot be used
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-md p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <School className="h-5 w-5 mr-2 text-amber-500" />
                  <h3 className="font-medium">School Hours</h3>
                </div>
                <Switch defaultChecked />
              </div>
              
              <p className="text-sm text-muted-foreground">
                Block non-educational apps and websites during school hours
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Time</Label>
                  <Input type="time" defaultValue="08:00" />
                </div>
                <div className="space-y-2">
                  <Label>End Time</Label>
                  <Input type="time" defaultValue="15:00" />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="monday" className="rounded" defaultChecked />
                <label htmlFor="monday" className="text-sm">Mon</label>
                
                <input type="checkbox" id="tuesday" className="rounded ml-2" defaultChecked />
                <label htmlFor="tuesday" className="text-sm">Tue</label>
                
                <input type="checkbox" id="wednesday" className="rounded ml-2" defaultChecked />
                <label htmlFor="wednesday" className="text-sm">Wed</label>
                
                <input type="checkbox" id="thursday" className="rounded ml-2" defaultChecked />
                <label htmlFor="thursday" className="text-sm">Thu</label>
                
                <input type="checkbox" id="friday" className="rounded ml-2" defaultChecked />
                <label htmlFor="friday" className="text-sm">Fri</label>
                
                <input type="checkbox" id="saturday" className="rounded ml-2" />
                <label htmlFor="saturday" className="text-sm">Sat</label>
                
                <input type="checkbox" id="sunday" className="rounded ml-2" />
                <label htmlFor="sunday" className="text-sm">Sun</label>
              </div>
            </div>
            
            <div className="border rounded-md p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Moon className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="font-medium">Bedtime</h3>
                </div>
                <Switch defaultChecked />
              </div>
              
              <p className="text-sm text-muted-foreground">
                Block all apps and device usage during sleep hours
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Time</Label>
                  <Input type="time" defaultValue="21:00" />
                </div>
                <div className="space-y-2">
                  <Label>End Time</Label>
                  <Input type="time" defaultValue="07:00" />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="bedtime-monday" className="rounded" defaultChecked />
                <label htmlFor="bedtime-monday" className="text-sm">Mon</label>
                
                <input type="checkbox" id="bedtime-tuesday" className="rounded ml-2" defaultChecked />
                <label htmlFor="bedtime-tuesday" className="text-sm">Tue</label>
                
                <input type="checkbox" id="bedtime-wednesday" className="rounded ml-2" defaultChecked />
                <label htmlFor="bedtime-wednesday" className="text-sm">Wed</label>
                
                <input type="checkbox" id="bedtime-thursday" className="rounded ml-2" defaultChecked />
                <label htmlFor="bedtime-thursday" className="text-sm">Thu</label>
                
                <input type="checkbox" id="bedtime-friday" className="rounded ml-2" defaultChecked />
                <label htmlFor="bedtime-friday" className="text-sm">Fri</label>
                
                <input type="checkbox" id="bedtime-saturday" className="rounded ml-2" defaultChecked />
                <label htmlFor="bedtime-saturday" className="text-sm">Sat</label>
                
                <input type="checkbox" id="bedtime-sunday" className="rounded ml-2" defaultChecked />
                <label htmlFor="bedtime-sunday" className="text-sm">Sun</label>
              </div>
            </div>
            
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add New Schedule
            </Button>
            
            <div className="flex justify-end mt-4">
              <Button 
                className="bg-safehaven-600 hover:bg-safehaven-700"
                onClick={onSave}
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

export default ScreenTimeSchedule;
