
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Clock, Monitor, Smartphone, AlertTriangle } from "lucide-react";

// Mock data for screen time usage
const dailyUsageData = [
  { device: "Phone", time: 3.5, limit: 4 },
  { device: "Tablet", time: 1.2, limit: 2 },
  { device: "Computer", time: 2.1, limit: 3 }
];

const ScreenTimeUsage = () => {
  const totalScreenTime = dailyUsageData.reduce((sum, item) => sum + item.time, 0);
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5 text-safehaven-600" />
            Today's Screen Time
          </CardTitle>
          <CardDescription>
            Summary of today's device usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold">{totalScreenTime.toFixed(1)} hrs</div>
            <div className="text-sm text-muted-foreground mt-1">Total screen time today</div>
          </div>
          
          <div className="space-y-4">
            {dailyUsageData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.device === "Phone" ? (
                      <Smartphone className="mr-2 h-4 w-4 text-muted-foreground" />
                    ) : item.device === "Tablet" ? (
                      <Monitor className="mr-2 h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Monitor className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{item.device}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm">{item.time} hrs</span>
                    <span className="text-sm text-muted-foreground mx-1">/</span>
                    <span className="text-sm text-muted-foreground">{item.limit} hrs limit</span>
                  </div>
                </div>
                <Progress 
                  value={Math.min((item.time / item.limit) * 100, 100)} 
                  className={`h-2 ${item.time > item.limit * 0.9 ? 'bg-red-200' : 'bg-safehaven-200'}`}
                />
                {item.time > item.limit * 0.9 && (
                  <div className="flex items-center text-xs text-amber-600">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    <span>Approaching daily limit</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-6">
            <Button variant="outline" className="mr-2">View Details</Button>
            <Button className="bg-safehaven-600 hover:bg-safehaven-700">Weekly Report</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Most Used Applications</CardTitle>
          <CardDescription>Apps with the highest usage today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="font-medium">YouTube</div>
              <div className="text-sm text-muted-foreground">1h 15m</div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="font-medium">Minecraft</div>
              <div className="text-sm text-muted-foreground">45m</div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="font-medium">TikTok</div>
              <div className="text-sm text-muted-foreground">30m</div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="font-medium">Khan Academy</div>
              <div className="text-sm text-muted-foreground">25m</div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="font-medium">Chrome Browser</div>
              <div className="text-sm text-muted-foreground">15m</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScreenTimeUsage;
