
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, MonitorSmartphone, Ban, Youtube, Chrome, Link, Globe } from "lucide-react";

// Mock activity data
const activityData = [
  {
    id: 1,
    type: "location",
    time: "9:32 AM",
    description: "Arrived at School",
    icon: MapPin,
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    type: "app",
    time: "10:15 AM",
    description: "Used YouTube App (30 minutes)",
    app: "YouTube",
    icon: Youtube,
    iconColor: "text-red-500",
  },
  {
    id: 3,
    type: "web",
    time: "11:45 AM",
    description: "Visited educational-games.com",
    app: "Chrome",
    icon: Chrome,
    iconColor: "text-blue-500",
  },
  {
    id: 4,
    type: "block",
    time: "12:30 PM",
    description: "Attempted to visit blocked site",
    site: "gaming-site.com",
    icon: Ban,
    iconColor: "text-red-500",
  },
  {
    id: 5,
    type: "location",
    time: "3:15 PM",
    description: "Left School",
    icon: MapPin,
    iconColor: "text-blue-500",
  },
  {
    id: 6,
    type: "location",
    time: "3:45 PM",
    description: "Arrived at Home",
    icon: MapPin,
    iconColor: "text-green-500",
  },
];

const ActivityTimeline = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Activity Timeline</CardTitle>
        <Badge>Today</Badge>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6 border-l">
          {activityData.map((activity, index) => (
            <div key={activity.id} className="mb-8 relative last:mb-0">
              <div className="absolute -left-[25px] p-2 rounded-full bg-white shadow">
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              
              <div className="flex flex-col space-y-1">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                
                <h4 className="font-medium">{activity.description}</h4>
                
                {activity.type === 'block' && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Globe className="h-3 w-3 mr-1" />
                    <span>{activity.site}</span>
                    <Badge className="ml-2 bg-red-500 text-[10px]">Blocked</Badge>
                  </div>
                )}
                
                {(activity.type === 'app' || activity.type === 'web') && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MonitorSmartphone className="h-3 w-3 mr-1" />
                    <span>{activity.app}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
