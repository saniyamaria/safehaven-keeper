
import { Activity, MapPin, MessageSquare, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Mock activity data
const activities = [
  {
    id: 1,
    type: "location",
    user: "Sarah",
    action: "arrived at School",
    time: "10 minutes ago",
    icon: <MapPin className="h-4 w-4 text-safehaven-500" />,
  },
  {
    id: 2,
    type: "message",
    user: "Jack",
    action: "sent a message",
    time: "25 minutes ago",
    icon: <MessageSquare className="h-4 w-4 text-safehaven-500" />,
  },
  {
    id: 3,
    type: "alert",
    user: "Dad",
    action: "cleared an alert",
    time: "1 hour ago",
    icon: <Bell className="h-4 w-4 text-safehaven-500" />,
  },
  {
    id: 4,
    type: "location",
    user: "Mom",
    action: "left Work",
    time: "1 hour ago",
    icon: <MapPin className="h-4 w-4 text-safehaven-500" />,
  },
  {
    id: 5,
    type: "message",
    user: "Sarah",
    action: "sent a message",
    time: "2 hours ago",
    icon: <MessageSquare className="h-4 w-4 text-safehaven-500" />,
  },
];

const ActivityFeed = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <Activity className="h-5 w-5 text-safehaven-500" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        {activities.map((activity, index) => (
          <div key={activity.id}>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                {activity.icon}
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium leading-none">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
            {index < activities.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
