
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
  {
    id: 4,
    type: "Screen Time",
    status: "Active",
    user: "Jack",
    time: "2 hours ago",
    date: "Today",
    message: "App usage limit reached",
    app: "Minecraft",
    duration: "1h limit reached"
  },
  {
    id: 5,
    type: "Content",
    status: "Resolved",
    user: "Sarah",
    time: "2 days ago",
    date: "Apr 15, 2023",
    message: "Inappropriate content blocked",
    app: "YouTube"
  },
  {
    id: 6,
    type: "Screen Time",
    status: "Resolved",
    user: "Jack",
    time: "3 days ago",
    date: "Apr 14, 2023",
    message: "Break time ignored",
    duration: "Missed 3 breaks"
  }
];
