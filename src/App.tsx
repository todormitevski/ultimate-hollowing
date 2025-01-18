import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import { lazy, Suspense } from "react";
// import Error from "./pages/Error";
// import Home from "./pages/Home";
// import Rules from "./pages/Rules";
// import About from "./pages/About";

const Home = lazy(() => import("./pages/Home"));
const loadingDiv = <div>Loading...</div>;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: (
        <RootLayout>
          <Home sl1={false} />
        </RootLayout>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={loadingDiv}>
              <Home sl1={false} />
            </Suspense>
          ),
        },
        {
          path: "soul-level-one",
          element: (
            <Suspense fallback={loadingDiv}>
              <Home sl1={true} />
            </Suspense>
          ),
        },
        // TODO: rules & about pages
        {
          path: "rules",
          element: (
            <Suspense fallback={loadingDiv}>
              <Home sl1={false} />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={loadingDiv}>
              <Home sl1={false} />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
