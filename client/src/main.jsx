import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Index.js";
import { store } from "../src/store/index.js";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/explore",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/reels",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/message",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/threads",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      />
    </Provider>
  </StrictMode>
);
