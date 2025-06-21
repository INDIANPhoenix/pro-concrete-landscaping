import React from 'react';
import ErrorBoundary from '@/components/error-boundary';

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </ErrorBoundary>
  );
} 