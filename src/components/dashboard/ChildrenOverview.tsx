
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, User, Clock, Shield, AlertTriangle } from "lucide-react";

// Mock children data
const childrenData = [
  {
    id: 1,
    name: "Sarah",
    age: 14,
    status: "online",
    location: "Home",
    deviceStatus: "Protected",
    recentIssues: 0,
  },
  {
    id: 2,
    name: "Jack",
    age: 10,
    status: "online",
    location: "School",
    deviceStatus: "Protected",
    recentIssues: 2,
  },
];

const ChildrenOverview = () => {
  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle>Children Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {childrenData.map((child) => (
            <div key={child.id} className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-safehaven-100 flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-safehaven-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{child.name}, {child.age}</h3>
                  <div className="flex items-center text-sm">
                    <div className={`w-2 h-2 rounded-full ${child.status === 'online' ? 'bg-green-500' : 'bg-gray-400'} mr-2`}></div>
                    <span className="mr-4">{child.status === 'online' ? 'Online now' : 'Offline'}</span>
                    <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
                    <span className="text-muted-foreground">{child.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-500" />
                  <span className="text-sm text-green-600">{child.deviceStatus}</span>
                </div>
                
                {child.recentIssues > 0 && (
                  <Badge className="bg-amber-500">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    {child.recentIssues} {child.recentIssues === 1 ? 'issue' : 'issues'}
                  </Badge>
                )}
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="md:ml-2"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
          
          <Button 
            variant="outline" 
            className="w-full border-dashed"
          >
            <User className="mr-2 h-4 w-4" />
            Add Child
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChildrenOverview;
