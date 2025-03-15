
import { fetchApi, mockApiResponse } from './api';
import { Alert } from '@/types/alerts';
import { ApiResponse } from '@/types/api';

// Get all alerts
export async function getAlerts(): Promise<ApiResponse<Alert[]>> {
  // For development, use mock data from the alertsData file
  if (process.env.NODE_ENV === 'development') {
    const { alertsData } = await import('@/data/alertsData');
    return mockApiResponse(alertsData);
  }
  
  // For production
  return fetchApi<Alert[]>('/alerts');
}

// Update alert status
export async function updateAlertStatus(id: number, status: string): Promise<ApiResponse<Alert>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const { alertsData } = await import('@/data/alertsData');
    const alert = alertsData.find(a => a.id === id);
    
    if (alert) {
      alert.status = status;
      return mockApiResponse(alert);
    }
    
    return mockApiResponse(null as any, 500, false);
  }
  
  // For production
  return fetchApi<Alert>(`/alerts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
}

// Create a new alert (for testing)
export async function createAlert(alertData: Omit<Alert, 'id'>): Promise<ApiResponse<Alert>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const { alertsData } = await import('@/data/alertsData');
    const newAlert: Alert = {
      id: alertsData.length + 1,
      ...alertData,
    };
    
    alertsData.unshift(newAlert);
    
    return mockApiResponse(newAlert);
  }
  
  // For production
  return fetchApi<Alert>('/alerts', {
    method: 'POST',
    body: JSON.stringify(alertData),
  });
}
