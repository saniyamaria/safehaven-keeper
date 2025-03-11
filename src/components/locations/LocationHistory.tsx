
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, MapPin, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock location history data
const locationData = [
  {
    id: 1,
    name: "Sarah",
    location: "School",
    address: "123 Education St",
    arrivedAt: "8:30 AM",
    leftAt: "3:15 PM",
    date: "Today",
    status: "Safe Zone",
  },
  {
    id: 2,
    name: "Sarah",
    location: "Library",
    address: "456 Knowledge Ave",
    arrivedAt: "3:45 PM",
    leftAt: "5:00 PM",
    date: "Today",
    status: "Safe Zone",
  },
  {
    id: 3,
    name: "Jack",
    location: "Basketball Court",
    address: "789 Sports Blvd",
    arrivedAt: "4:00 PM",
    leftAt: "6:30 PM",
    date: "Today",
    status: "Safe Zone",
  },
  {
    id: 4,
    name: "Sarah",
    location: "Unknown",
    address: "Residential Area",
    arrivedAt: "5:15 PM",
    leftAt: "5:45 PM",
    date: "Today",
    status: "Caution",
  },
  {
    id: 5,
    name: "Sarah",
    location: "Home",
    address: "321 Family St",
    arrivedAt: "6:00 PM",
    leftAt: "Present",
    date: "Today",
    status: "Safe Zone",
  },
];

const LocationHistory = () => {
  const [familyMember, setFamilyMember] = useState<string>("all");
  
  const filteredLocations = familyMember === "all" 
    ? locationData 
    : locationData.filter(location => location.name.toLowerCase() === familyMember);

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CardTitle>Location History</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <Select value={familyMember} onValueChange={setFamilyMember}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Family member" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Members</SelectItem>
                <SelectItem value="sarah">Sarah</SelectItem>
                <SelectItem value="jack">Jack</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="list" className="w-full">
          <div className="border-b px-4">
            <TabsList className="mb-0 justify-start">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="list" className="m-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="hidden md:table-cell">Address</TableHead>
                    <TableHead>Arrived</TableHead>
                    <TableHead className="hidden sm:table-cell">Left</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLocations.map((location) => (
                    <TableRow key={location.id}>
                      <TableCell>{location.name}</TableCell>
                      <TableCell>{location.location}</TableCell>
                      <TableCell className="hidden md:table-cell">{location.address}</TableCell>
                      <TableCell>{location.arrivedAt}</TableCell>
                      <TableCell className="hidden sm:table-cell">{location.leftAt}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            location.status === "Safe Zone" 
                              ? "border-green-500 text-green-700 bg-green-50" 
                              : "border-yellow-500 text-yellow-700 bg-yellow-50"
                          }
                        >
                          {location.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="map" className="m-0 p-4">
            <div className="h-[400px] bg-slate-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-4 rounded-lg bg-background/80 backdrop-blur-sm shadow-sm">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-safehaven-600" />
                <p className="text-muted-foreground mb-2">Map view will be integrated here.</p>
                <p className="text-xs text-muted-foreground">For now, this is a placeholder for the location map view.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LocationHistory;
