
import { Alert } from "@/types/alerts";

// Mock alert data
export const alertsData: Alert[] = [
  {
    id: 1,
    type: "Screen Time",
    status: "Active",
    user: "Sarah",
    time: "Just now",
    date: "Today",
    message: "Daily limit exceeded",
    app: "TikTok",
    duration: "1h 15m over limit"
  },
  {
    id: 2,
    type: "Content",
    status: "Active",
    user: "Jack",
    time: "1 hour ago",
    date: "Today",
    message: "Attempted to access blocked content",
    app: "Web Browser"
  },
  {
    id: 3,
    type: "Screen Time",
    status: "Resolved",
    user: "Sarah",
    time: "Yesterday",
    date: "Yesterday",
    message: "Device used during bedtime hours",
    duration: "15 minutes"
  },
];
