
import { Alert } from "@/types/alerts";

// Mock alert data
export const alertsData: Alert[] = [
  {
    id: 1,
    type: "Emergency",
    status: "Active",
    user: "Sarah",
    location: "Downtown Area",
    time: "Just now",
    date: "Today",
  },
  {
    id: 2,
    type: "Boundary",
    status: "Resolved",
    user: "Jack",
    location: "Mall",
    time: "1 hour ago",
    date: "Today",
  },
  {
    id: 3,
    type: "Curfew",
    status: "Resolved",
    user: "Sarah",
    location: "Friend's House",
    time: "Yesterday",
    date: "Yesterday",
  },
];
