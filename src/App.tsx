import { Suspense } from "react";

import { RouterProvider } from "react-router-dom";

import LoaderContainer from "./features/LoaderContainer";
import { Router } from "./router/index.tsx";

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<LoaderContainer />}>
      <RouterProvider router={Router} />
    </Suspense>
  );
};

export default App;
