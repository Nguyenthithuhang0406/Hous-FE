import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));

const App = () => {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default App;
