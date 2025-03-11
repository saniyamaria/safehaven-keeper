
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone } from "lucide-react";

interface FamilyMemberProps {
  name: string;
  status: "online" | "offline" | "unknown";
  lastSeen?: string;
  location?: string;
  avatarUrl?: string;
}

const FamilyMemberCard = ({ name, status, lastSeen, location, avatarUrl }: FamilyMemberProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "offline":
        return "bg-gray-400";
      case "unknown":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "online":
        return "Online";
      case "offline":
        return "Offline";
      case "unknown":
        return "Unknown";
      default:
        return "Unknown";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-background">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback className="bg-safehaven-100 text-safehaven-800">
                {name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{name}</CardTitle>
              <div className="flex items-center mt-1">
                <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor()} mr-2`}></div>
                <CardDescription>{getStatusText()}</CardDescription>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {lastSeen && (
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Clock className="mr-1 h-4 w-4" />
            <span>Last seen: {lastSeen}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{location}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm" className="text-safehaven-600">
          <MapPin className="mr-1 h-4 w-4" /> Track
        </Button>
        <Button variant="outline" size="sm" className="text-safehaven-600">
          <Phone className="mr-1 h-4 w-4" /> Call
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FamilyMemberCard;
