import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./Layout/RootLayout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { AboutLayout } from "./Layout/AboutLayout";
import { Detail } from "./Pages/Detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <AboutLayout />,
          children: [
            {
              index: true,
              element: <About />,
            },
            {
              path: "detail",
              element: <Detail />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
