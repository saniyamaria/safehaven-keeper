
export interface Alert {
  id: number;
  type: string;
  status: string;
  user: string;
  location?: string;
  time: string;
  date: string;
  message?: string;
  app?: string;
  duration?: string;
}
