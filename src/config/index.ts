export const PORT = (import.meta.env.VITE_PORT as number) || 3000;

export const API_URL =
  (import.meta.env.VITE_API_URL as string) || window.location.origin;
export const API_PATH = (import.meta.env.VITE_API_PATH as string) || '';

export const TIME_INTERVAL =
  (import.meta.env.VITE_TIME_INTERVAL as number) || 5000; // 5s
