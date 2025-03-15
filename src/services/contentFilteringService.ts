
import { fetchApi, mockApiResponse } from './api';
import { ContentFilter, BlockedWebsite, FilterSettings, ApiResponse } from '@/types/api';

// Mock content filters
const mockContentFilters: ContentFilter[] = [
  { id: '1', name: 'Adult Content', active: true, severity: 'high' },
  { id: '2', name: 'Violence', active: true, severity: 'high' },
  { id: '3', name: 'Gambling', active: true, severity: 'high' },
  { id: '4', name: 'Social Media', active: true, severity: 'medium' },
  { id: '5', name: 'Gaming', active: false, severity: 'low' },
  { id: '6', name: 'Streaming', active: false, severity: 'low' },
];

// Mock blocked websites
const mockBlockedWebsites: BlockedWebsite[] = [
  { 
    id: '1', 
    domain: 'inappropriate-content.com', 
    category: 'Adult Content',
    blockedAt: '2023-09-15T10:30:00Z',
    blockedBy: 'Parent User'
  },
  { 
    id: '2', 
    domain: 'violentgames.com', 
    category: 'Violence',
    blockedAt: '2023-09-15T10:35:00Z',
    blockedBy: 'Parent User'
  },
  { 
    id: '3', 
    domain: 'gambling-site.com', 
    category: 'Gambling',
    blockedAt: '2023-09-15T10:40:00Z',
    blockedBy: 'Parent User'
  },
  { 
    id: '4', 
    domain: 'social-media-example.com', 
    category: 'Social Media',
    blockedAt: '2023-09-15T10:45:00Z',
    blockedBy: 'Parent User'
  },
];

// Mock filter settings
const mockFilterSettings: FilterSettings = {
  safeSearchEnabled: true,
  youtubeRestrictedMode: true,
  blockAppStoreDownloads: true,
  imageContentFilteringEnabled: true,
};

// Get content filters
export async function getContentFilters(): Promise<ApiResponse<ContentFilter[]>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    return mockApiResponse(mockContentFilters);
  }
  
  // For production
  return fetchApi<ContentFilter[]>('/content-filtering/filters');
}

// Update content filter
export async function updateContentFilter(filter: ContentFilter): Promise<ApiResponse<ContentFilter>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const index = mockContentFilters.findIndex(f => f.id === filter.id);
    
    if (index !== -1) {
      mockContentFilters[index] = filter;
      return mockApiResponse(filter);
    }
    
    return mockApiResponse(null as any, 500, false);
  }
  
  // For production
  return fetchApi<ContentFilter>('/content-filtering/filters', {
    method: 'PUT',
    body: JSON.stringify(filter),
  });
}

// Get blocked websites
export async function getBlockedWebsites(): Promise<ApiResponse<BlockedWebsite[]>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    return mockApiResponse(mockBlockedWebsites);
  }
  
  // For production
  return fetchApi<BlockedWebsite[]>('/content-filtering/blocked-websites');
}

// Add blocked website
export async function addBlockedWebsite(domain: string, category: string): Promise<ApiResponse<BlockedWebsite>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const newBlockedWebsite: BlockedWebsite = {
      id: (mockBlockedWebsites.length + 1).toString(),
      domain,
      category,
      blockedAt: new Date().toISOString(),
      blockedBy: 'Parent User',
    };
    
    mockBlockedWebsites.push(newBlockedWebsite);
    
    return mockApiResponse(newBlockedWebsite);
  }
  
  // For production
  return fetchApi<BlockedWebsite>('/content-filtering/blocked-websites', {
    method: 'POST',
    body: JSON.stringify({ domain, category }),
  });
}

// Remove blocked website
export async function removeBlockedWebsite(id: string): Promise<ApiResponse<null>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const index = mockBlockedWebsites.findIndex(website => website.id === id);
    
    if (index !== -1) {
      mockBlockedWebsites.splice(index, 1);
      return mockApiResponse(null);
    }
    
    return mockApiResponse(null as any, 500, false);
  }
  
  // For production
  return fetchApi<null>(`/content-filtering/blocked-websites/${id}`, {
    method: 'DELETE',
  });
}

// Get filter settings
export async function getFilterSettings(): Promise<ApiResponse<FilterSettings>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    return mockApiResponse(mockFilterSettings);
  }
  
  // For production
  return fetchApi<FilterSettings>('/content-filtering/settings');
}

// Update filter settings
export async function updateFilterSettings(settings: FilterSettings): Promise<ApiResponse<FilterSettings>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    Object.assign(mockFilterSettings, settings);
    return mockApiResponse(mockFilterSettings);
  }
  
  // For production
  return fetchApi<FilterSettings>('/content-filtering/settings', {
    method: 'PUT',
    body: JSON.stringify(settings),
  });
}
