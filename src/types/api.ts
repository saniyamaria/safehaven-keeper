
// API response interfaces
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Authentication types
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'parent' | 'child';
  profileImage?: string;
}

// Screen time types
export interface ScreenTimeData {
  id: string;
  userId: string;
  date: string;
  deviceType: 'Phone' | 'Tablet' | 'Computer';
  appName: string;
  usageTime: number; // in minutes
  category: string;
}

export interface ScreenTimeLimit {
  id: string;
  userId: string;
  deviceType: string;
  dailyLimit: number; // in minutes
  weekdayLimit: number; // in minutes
  weekendLimit: number; // in minutes
  bedtimeStart: string; // HH:MM format
  bedtimeEnd: string; // HH:MM format
  isDowntimeEnabled: boolean;
  downtimeStart?: string; // HH:MM format
  downtimeEnd?: string; // HH:MM format
  isBreakTimeEnabled: boolean;
  breakDuration?: number; // in minutes
  breakInterval?: number; // in minutes
}

// Content filtering types
export interface ContentFilter {
  id: string;
  name: string;
  active: boolean;
  severity: 'low' | 'medium' | 'high';
}

export interface BlockedWebsite {
  id: string;
  domain: string;
  category: string;
  blockedAt: string;
  blockedBy: string;
}

export interface FilterSettings {
  safeSearchEnabled: boolean;
  youtubeRestrictedMode: boolean;
  blockAppStoreDownloads: boolean;
  imageContentFilteringEnabled: boolean;
}
