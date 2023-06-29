import { QueryClient } from 'react-query';
import axios from 'axios';

export const apiClient = () =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false
    }
  }
});
