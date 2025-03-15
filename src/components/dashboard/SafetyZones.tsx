
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, School, MapPin } from "lucide-react";

// Mock data for safety zones
const safeZones = [
  {
    id: 1,
    name: "Home",
    radius: "150m",
    address: "123 Main Street",
    active: true,
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: 2,
    name: "School",
    radius: "200m",
    address: "456 Education Blvd",
    active: true,
    icon: <School className="h-4 w-4" />,
  },
  {
    id: 3,
    name: "Grandparents",
    radius: "100m",
    address: "789 Elder Lane",
    active: false,
    icon: <Home className="h-4 w-4" />,
  }
];

const SafetyZones = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Safety Zones</CardTitle>
        <Button variant="outline" size="sm">
          <MapPin className="h-4 w-4 mr-2" />
          Add Zone
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {safeZones.map(zone => (
            <div key={zone.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${zone.active ? 'bg-safehaven-100' : 'bg-gray-100'}`}>
                  {zone.icon}
                </div>
                <div>
                  <h4 className="font-medium">{zone.name}</h4>
                  <p className="text-sm text-muted-foreground">{zone.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={zone.active ? "default" : "outline"} className={zone.active ? "bg-safehaven-600" : ""}>
                  {zone.active ? "Active" : "Inactive"}
                </Badge>
                <span className="text-xs text-muted-foreground">{zone.radius}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyZones;
