"use client";

import { ClerkProvider } from '@clerk/nextjs';
// Add any other client-side providers here

export function Providers({ children }) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}