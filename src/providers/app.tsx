import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { queryClient } from 'src/libs/react-query';

import { Button, Spinner } from '@/components/Elemements';
import { Notifications } from '@/components/Notifications';

const ErrorFallback = () => {
  return (
    <div className="box-warning">
      <div className="inner">
        <div className="box-warning__memo">
          Your session has expired, please log in again
        </div>
        <Button onClick={() => window.location.assign(window.location.origin)}>
          Go to Login
        </Button>
      </div>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <Notifications />
            <Spinner />
            {/* <AuthLoader
              renderLoading={() => (
                <div>
                  <Spinner />
                </div>
              )}
            > */}
            <Router>{children}</Router>
            {/* </AuthLoader> */}
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
