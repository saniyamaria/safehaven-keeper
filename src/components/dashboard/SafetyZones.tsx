
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plus, Home, School, Park, Building } from "lucide-react";

// Mock safety zones data
const safetyZonesData = [
  {
    id: 1,
    name: "Home",
    radius: 200,
    address: "123 Main Street",
    active: true,
    icon: Home,
  },
  {
    id: 2,
    name: "School",
    radius: 300,
    address: "456 Education Ave",
    active: true,
    icon: School,
  },
  {
    id: 3,
    name: "Grandparents' House",
    radius: 150,
    address: "789 Family Lane",
    active: true,
    icon: Building,
  },
  {
    id: 4,
    name: "Basketball Court",
    radius: 100,
    address: "101 Sports Center Dr",
    active: false,
    icon: Park,
  }
];

const SafetyZones = () => {
  const [zones, setZones] = useState(safetyZonesData);

  const toggleZoneStatus = (id: number) => {
    setZones(zones.map(zone => 
      zone.id === id ? { ...zone, active: !zone.active } : zone
    ));
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Safety Zones</CardTitle>
          <CardDescription>
            Define areas where your children are allowed to go
          </CardDescription>
        </div>
        <Button className="bg-safehaven-600 hover:bg-safehaven-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Zone
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {zones.map((zone) => (
            <div key={zone.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-safehaven-100 flex items-center justify-center mr-3">
                  <zone.icon className="h-5 w-5 text-safehaven-600" />
                </div>
                <div>
                  <h3 className="font-medium">{zone.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {zone.address}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Radius: {zone.radius}m
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Badge className={zone.active ? "bg-green-500 mr-4" : "bg-gray-300 mr-4"}>
                  {zone.active ? "Active" : "Inactive"}
                </Badge>
                <Button variant="outline" size="sm" onClick={() => toggleZoneStatus(zone.id)}>
                  {zone.active ? "Disable" : "Enable"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyZones;
