
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ban, AlertTriangle, Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Mock blocked websites data
const blockedWebsitesData = [
  { id: 1, domain: "inappropriate-content.com", category: "Adult Content" },
  { id: 2, domain: "violentgames.com", category: "Violence" },
  { id: 3, domain: "gambling-site.com", category: "Gambling" },
  { id: 4, domain: "social-media-example.com", category: "Social Media" },
];

// Mock content filter categories
const contentFiltersData = [
  { id: 1, name: "Adult Content", active: true, severity: "high" },
  { id: 2, name: "Violence", active: true, severity: "high" },
  { id: 3, name: "Gambling", active: true, severity: "high" },
  { id: 4, name: "Social Media", active: true, severity: "medium" },
  { id: 5, name: "Gaming", active: false, severity: "low" },
  { id: 6, name: "Streaming", active: false, severity: "low" },
];

const ContentFiltering = () => {
  const [blockedWebsites, setBlockedWebsites] = useState(blockedWebsitesData);
  const [contentFilters, setContentFilters] = useState(contentFiltersData);
  const [newDomain, setNewDomain] = useState("");
  const { toast } = useToast();

  const toggleContentFilter = (id: number) => {
    setContentFilters(filters => 
      filters.map(filter => 
        filter.id === id ? { ...filter, active: !filter.active } : filter
      )
    );
  };

  const addBlockedWebsite = () => {
    if (!newDomain) {
      toast({
        title: "Please enter a domain",
        description: "You need to enter a domain to block",
        variant: "destructive",
      });
      return;
    }

    setBlockedWebsites([
      ...blockedWebsites,
      { 
        id: blockedWebsites.length + 1, 
        domain: newDomain, 
        category: "Custom Block" 
      }
    ]);
    
    setNewDomain("");
    
    toast({
      title: "Website blocked",
      description: `${newDomain} has been added to the block list`,
    });
  };

  const removeBlockedWebsite = (id: number) => {
    setBlockedWebsites(blockedWebsites.filter(site => site.id !== id));
    
    toast({
      title: "Website unblocked",
      description: "The website has been removed from the block list",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Content Filtering</CardTitle>
        <CardDescription>
          Protect your child from inappropriate content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="categories">
          <TabsList className="mb-4">
            <TabsTrigger value="categories">Content Categories</TabsTrigger>
            <TabsTrigger value="websites">Blocked Websites</TabsTrigger>
            <TabsTrigger value="settings">Filter Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <div className="space-y-4">
              {contentFilters.map((filter) => (
                <div key={filter.id} className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      {filter.severity === "high" ? (
                        <Ban className="h-5 w-5 text-red-500" />
                      ) : filter.severity === "medium" ? (
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{filter.name}</h3>
                      <div className="text-xs text-muted-foreground mt-1">
                        {filter.severity === "high" 
                          ? "Strictly blocked content" 
                          : filter.severity === "medium"
                          ? "Potentially inappropriate"
                          : "Minor restrictions"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Badge 
                      className={filter.active 
                        ? "bg-green-500 mr-4" 
                        : "bg-gray-300 mr-4"
                      }
                    >
                      {filter.active ? "Blocked" : "Allowed"}
                    </Badge>
                    <Switch 
                      checked={filter.active}
                      onCheckedChange={() => toggleContentFilter(filter.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="websites">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Input 
                  placeholder="Enter website domain to block"
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                />
                <Button 
                  className="bg-safehaven-600 hover:bg-safehaven-700"
                  onClick={addBlockedWebsite}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Block
                </Button>
              </div>
              
              <div className="space-y-3">
                {blockedWebsites.map((site) => (
                  <div key={site.id} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <h3 className="font-medium">{site.domain}</h3>
                      <div className="text-xs text-muted-foreground mt-1">
                        Category: {site.category}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => removeBlockedWebsite(site.id)}
                    >
                      <X className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Safe Search Enforcement</Label>
                  <Switch defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Force safe search on Google, Bing, and other search engines
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>YouTube Restricted Mode</Label>
                  <Switch defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Enable YouTube's restricted mode to filter inappropriate content
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Block App Store Downloads</Label>
                  <Switch defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Require parent approval for new app installations
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Image Content Filtering</Label>
                  <Switch defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Block inappropriate images across all websites and apps
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ContentFiltering;
