import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { /*lazy,*/ Suspense } from "react";
// const Home = lazy(() => import("./pages/Home"));
// const Error = lazy(() => import("./pages/Error"));
// const Rules = lazy(() => import("./pages/Rules"));
// const About = lazy(() => import("./pages/About"));

import Home from "./pages/Home";
import Error from "./pages/Error";
import Rules from "./pages/Rules";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: (
        <RootLayout>
          <Error />
        </RootLayout>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingIndicator />}>
              <Home sl1={false} />
            </Suspense>
          ),
        },
        {
          path: "soul-level-one",
          element: (
            <Suspense fallback={<LoadingIndicator />}>
              <Home sl1={true} />
            </Suspense>
          ),
        },
        {
          path: "rules",
          element: (
            <Suspense fallback={<LoadingIndicator />}>
              <Rules />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<LoadingIndicator />}>
              <About />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
