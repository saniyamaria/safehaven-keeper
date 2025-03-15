
import { fetchApi, mockApiResponse } from './api';
import { AuthCredentials, UserData, ApiResponse } from '@/types/api';

// Mock user data for development
const mockUsers = [
  {
    id: '1',
    name: 'Parent User',
    email: 'parent@example.com',
    role: 'parent' as const,
    profileImage: '/avatar-parent.png',
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com',
    role: 'child' as const,
    profileImage: '/avatar-child-1.png',
  },
  {
    id: '3',
    name: 'Jack',
    email: 'jack@example.com',
    role: 'child' as const,
    profileImage: '/avatar-child-2.png',
  },
];

// Login function
export async function login(credentials: AuthCredentials): Promise<ApiResponse<UserData>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (user) {
      // Store token in localStorage (in production, this would be a JWT from the server)
      localStorage.setItem('authToken', 'mock-auth-token');
      localStorage.setItem('user', JSON.stringify(user));
      
      return mockApiResponse(user);
    }
    
    return mockApiResponse(null as any, 500, false);
  }
  
  // For production
  return fetchApi<UserData>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}

// Register function
export async function register(userData: AuthCredentials & { name: string }): Promise<ApiResponse<UserData>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const newUser = {
      id: (mockUsers.length + 1).toString(),
      name: userData.name,
      email: userData.email,
      role: 'parent' as const,
    };
    
    localStorage.setItem('authToken', 'mock-auth-token');
    localStorage.setItem('user', JSON.stringify(newUser));
    
    return mockApiResponse(newUser);
  }
  
  // For production
  return fetchApi<UserData>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
}

// Logout function
export async function logout(): Promise<ApiResponse<null>> {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  
  // For development, just return a successful response
  if (process.env.NODE_ENV === 'development') {
    return mockApiResponse(null);
  }
  
  // For production
  return fetchApi<null>('/auth/logout', {
    method: 'POST',
  });
}

// Get current user
export async function getCurrentUser(): Promise<ApiResponse<UserData>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const userData = localStorage.getItem('user');
    
    if (userData) {
      return mockApiResponse(JSON.parse(userData));
    }
    
    return mockApiResponse(null as any, 500, false);
  }
  
  // For production
  return fetchApi<UserData>('/auth/me');
}

// Add child account
export async function addChild(childData: { name: string, email: string }): Promise<ApiResponse<UserData>> {
  // For development, use mock data
  if (process.env.NODE_ENV === 'development') {
    const newChild = {
      id: (mockUsers.length + 1).toString(),
      name: childData.name,
      email: childData.email,
      role: 'child' as const,
    };
    
    mockUsers.push(newChild);
    
    return mockApiResponse(newChild);
  }
  
  // For production
  return fetchApi<UserData>('/auth/add-child', {
    method: 'POST',
    body: JSON.stringify(childData),
  });
}
