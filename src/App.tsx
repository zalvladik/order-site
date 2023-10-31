import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import LoaderContainer from "./features/LoaderContainer";
import { Router } from "./router/index.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoaderContainer />}>
        <RouterProvider router={Router} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
