
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Mock location data for the demo
const mockLocations = [
  { id: 1, label: "Home", latitude: 37.7749, longitude: -122.4194 },
  { id: 2, label: "School", latitude: 37.7748, longitude: -122.4242 },
  { id: 3, label: "Park", latitude: 37.7694, longitude: -122.4862 },
  { id: 4, label: "Library", latitude: 37.7785, longitude: -122.4152 },
];

const LocationTracker = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("1");
  const [isLoading, setIsLoading] = useState(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="col-span-3 h-[400px]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>Location Tracker</CardTitle>
          <div className="flex items-center space-x-2">
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {mockLocations.map((location) => (
                  <SelectItem key={location.id} value={location.id.toString()}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">Refresh</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-73px)]">
        <div className="relative w-full h-full rounded-b-lg overflow-hidden">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
              <div className="h-8 w-8 rounded-full border-4 border-safehaven-200 border-t-safehaven-600 animate-spin"></div>
            </div>
          ) : (
            <div ref={mapContainerRef} className="w-full h-full bg-slate-200">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-4 rounded-lg bg-background/80 backdrop-blur-sm shadow-sm">
                  <p className="text-muted-foreground mb-2">Map integration will be added here.</p>
                  <p className="text-xs text-muted-foreground">For now, this is a placeholder for the location map.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationTracker;
