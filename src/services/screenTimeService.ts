
import { fetchApi, mockApiResponse } from './api';
import { ScreenTimeData, ScreenTimeLimit, ApiResponse } from '@/types/api';

// Mock screen time data
const mockScreenTimeData: ScreenTimeData[] = [
  {
    id: '1',
    userId: '2', // Sarah
    date: new Date().toISOString().split('T')[0],
    deviceType: 'Phone',
    appName: 'TikTok',
    usageTime: 75, // 1h 15m
    category: 'Social Media',
  },
  {
    id: '2',
    userId: '2', // Sarah
    date: new Date().toISOString().split('T')[0],
    deviceType: 'Phone',
    appName: 'YouTube',
    usageTime: 45, // 45m
    category: 'Video',
  },
  {
    id: '3',
    userId: '2', // Sarah
    date: new Date().toISOString().split('T')[0],
    deviceType: 'Tablet',
    appName: 'Minecraft',
    usageTime: 60, // 1h
    category: 'Gaming',
  },
  {
    id: '4',
    userId: '3', // Jack
    date: new Date().toISOString().split('T')[0],
    deviceType: 'Computer',
    appName: 'Chrome',
    usageTime: 90, // 1h 30m
    category: 'Web Browsing',
  },
];

// Mock screen time limits
const mockScreenTimeLimits: ScreenTimeLimit[] = [
  {
    id: '1',
    userId: '2', // Sarah
    deviceType: 'Phone',
    dailyLimit: 240, // 4 hours
    weekdayLimit: 180, // 3 hours
    weekendLimit: 360, // 6 hours
    bedtimeStart: '21:00',
    bedtimeEnd: '07:00',
    isDowntimeEnabled: true,
    downtimeStart: '22:00',
    downtimeEnd: '06:00',
    isBreakTimeEnabled: true,
    breakDuration: 15,
    breakInterval: 60,
  },
  {
    id: '2',
    userId: '3', // Jack
    deviceType: 'All',
    dailyLimit: 180, // 3 hours
    weekdayLimit: 120, // 2 hours
    weekendLimit: 240, // 4 hours
    bedtimeStart: '20:00',
    bedtimeEnd: '07:00',
    isDowntimeEnabled: true,
    downtimeStart: '21:00',
    downtimeEnd: '06:30',
    isBreakTimeEnabled: true,
    breakDuration: 15,
    breakInterval: 60,
  },
];

// Get screen time data for a specific user
export async function getScreenTimeData(userId: string): Promise<ApiResponse<ScreenTimeData[]>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const userScreenTime = mockScreenTimeData.filter(data => data.userId === userId);
    return mockApiResponse(userScreenTime);
  }
  
  // For production
  return fetchApi<ScreenTimeData[]>(`/screen-time/${userId}`);
}

// Get screen time limits for a user
export async function getScreenTimeLimits(userId: string): Promise<ApiResponse<ScreenTimeLimit>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const userLimits = mockScreenTimeLimits.find(limit => limit.userId === userId);
    
    if (userLimits) {
      return mockApiResponse(userLimits);
    }
    
    return mockApiResponse(null as any, 500, false);
  }
  
  // For production
  return fetchApi<ScreenTimeLimit>(`/screen-time/limits/${userId}`);
}

// Update screen time limits
export async function updateScreenTimeLimits(limits: ScreenTimeLimit): Promise<ApiResponse<ScreenTimeLimit>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const index = mockScreenTimeLimits.findIndex(limit => limit.id === limits.id);
    
    if (index !== -1) {
      mockScreenTimeLimits[index] = limits;
      return mockApiResponse(limits);
    }
    
    return mockApiResponse(null as any, 500, false);
  }
  
  // For production
  return fetchApi<ScreenTimeLimit>('/screen-time/limits', {
    method: 'PUT',
    body: JSON.stringify(limits),
  });
}
