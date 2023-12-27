'use client';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ParallaxProvider } from 'react-scroll-parallax';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </QueryClientProvider>
  );
}