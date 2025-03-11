
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import LocationTracker from "@/components/dashboard/LocationTracker";
import FamilyMemberCard from "@/components/dashboard/FamilyMemberCard";
import EmergencyAlertButton from "@/components/dashboard/EmergencyAlertButton";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import QuickActions from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  // Mock family members data
  const familyMembers = [
    {
      id: 1,
      name: "Sarah",
      status: "online" as const,
      lastSeen: "Just now",
      location: "Home",
      avatarUrl: "",
    },
    {
      id: 2,
      name: "Jack",
      status: "online" as const,
      lastSeen: "Just now",
      location: "Basketball Court",
      avatarUrl: "",
    },
    {
      id: 3,
      name: "Mom",
      status: "offline" as const,
      lastSeen: "1 hour ago",
      location: "Work",
      avatarUrl: "",
    },
  ];

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");
    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <LocationTracker />
          
          <div className="md:col-span-1 space-y-6">
            <EmergencyAlertButton />
            <QuickActions />
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Family Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {familyMembers.map((member) => (
            <FamilyMemberCard
              key={member.id}
              name={member.name}
              status={member.status}
              lastSeen={member.lastSeen}
              location={member.location}
              avatarUrl={member.avatarUrl}
            />
          ))}
        </div>
        
        <div className="mt-6">
          <ActivityFeed />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
