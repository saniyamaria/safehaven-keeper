
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ban, AlertTriangle, Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  getContentFilters, 
  updateContentFilter, 
  getBlockedWebsites, 
  addBlockedWebsite, 
  removeBlockedWebsite, 
  getFilterSettings, 
  updateFilterSettings 
} from "@/services/contentFilteringService";
import { ContentFilter, BlockedWebsite, FilterSettings } from "@/types/api";

const ContentFiltering = () => {
  const [contentFilters, setContentFilters] = useState<ContentFilter[]>([]);
  const [blockedWebsites, setBlockedWebsites] = useState<BlockedWebsite[]>([]);
  const [filterSettings, setFilterSettings] = useState<FilterSettings | null>(null);
  const [newDomain, setNewDomain] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const [filtersRes, websitesRes, settingsRes] = await Promise.all([
          getContentFilters(),
          getBlockedWebsites(),
          getFilterSettings()
        ]);

        if (filtersRes.success && filtersRes.data) {
          setContentFilters(filtersRes.data);
        }

        if (websitesRes.success && websitesRes.data) {
          setBlockedWebsites(websitesRes.data);
        }

        if (settingsRes.success && settingsRes.data) {
          setFilterSettings(settingsRes.data);
        }
      } catch (error) {
        console.error("Error loading content filtering data:", error);
        toast({
          title: "Error loading data",
          description: "Could not load content filtering settings",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [toast]);

  const toggleContentFilter = async (id: string) => {
    const filter = contentFilters.find(f => f.id === id);
    if (!filter) return;

    const updatedFilter = { ...filter, active: !filter.active };
    
    try {
      const response = await updateContentFilter(updatedFilter);
      
      if (response.success) {
        setContentFilters(filters => 
          filters.map(f => f.id === id ? updatedFilter : f)
        );
        
        toast({
          title: updatedFilter.active ? "Category Blocked" : "Category Allowed",
          description: `${filter.name} is now ${updatedFilter.active ? "blocked" : "allowed"}`,
        });
      }
    } catch (error) {
      console.error("Error updating content filter:", error);
      toast({
        title: "Update failed",
        description: "Could not update content filter",
        variant: "destructive",
      });
    }
  };

  const handleAddBlockedWebsite = async () => {
    if (!newDomain) {
      toast({
        title: "Please enter a domain",
        description: "You need to enter a domain to block",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await addBlockedWebsite(newDomain, "Custom Block");
      
      if (response.success && response.data) {
        setBlockedWebsites(prev => [response.data!, ...prev]);
        setNewDomain("");
        
        toast({
          title: "Website blocked",
          description: `${newDomain} has been added to the block list`,
        });
      }
    } catch (error) {
      console.error("Error adding blocked website:", error);
      toast({
        title: "Failed to block website",
        description: "Could not add website to block list",
        variant: "destructive",
      });
    }
  };

  const handleRemoveBlockedWebsite = async (id: string) => {
    try {
      const response = await removeBlockedWebsite(id);
      
      if (response.success) {
        setBlockedWebsites(blockedWebsites.filter(site => site.id !== id));
        
        toast({
          title: "Website unblocked",
          description: "The website has been removed from the block list",
        });
      }
    } catch (error) {
      console.error("Error removing blocked website:", error);
      toast({
        title: "Failed to unblock website",
        description: "Could not remove website from block list",
        variant: "destructive",
      });
    }
  };

  const toggleFilterSetting = async (setting: keyof FilterSettings) => {
    if (!filterSettings) return;
    
    const updatedSettings = { 
      ...filterSettings, 
      [setting]: !filterSettings[setting] 
    };
    
    try {
      const response = await updateFilterSettings(updatedSettings);
      
      if (response.success && response.data) {
        setFilterSettings(response.data);
        
        toast({
          title: "Settings updated",
          description: `${setting} is now ${updatedSettings[setting] ? "enabled" : "disabled"}`,
        });
      }
    } catch (error) {
      console.error("Error updating filter settings:", error);
      toast({
        title: "Failed to update settings",
        description: "Could not update filter settings",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Content Filtering</CardTitle>
          <CardDescription>Loading content filtering settings...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

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
                  onClick={handleAddBlockedWebsite}
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
                      onClick={() => handleRemoveBlockedWebsite(site.id)}
                    >
                      <X className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            {filterSettings && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Safe Search Enforcement</Label>
                    <Switch 
                      checked={filterSettings.safeSearchEnabled}
                      onCheckedChange={() => toggleFilterSetting('safeSearchEnabled')}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Force safe search on Google, Bing, and other search engines
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>YouTube Restricted Mode</Label>
                    <Switch 
                      checked={filterSettings.youtubeRestrictedMode}
                      onCheckedChange={() => toggleFilterSetting('youtubeRestrictedMode')}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enable YouTube's restricted mode to filter inappropriate content
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Block App Store Downloads</Label>
                    <Switch 
                      checked={filterSettings.blockAppStoreDownloads}
                      onCheckedChange={() => toggleFilterSetting('blockAppStoreDownloads')}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Require parent approval for new app installations
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Image Content Filtering</Label>
                    <Switch 
                      checked={filterSettings.imageContentFilteringEnabled}
                      onCheckedChange={() => toggleFilterSetting('imageContentFilteringEnabled')}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Block inappropriate images across all websites and apps
                  </p>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ContentFiltering;
