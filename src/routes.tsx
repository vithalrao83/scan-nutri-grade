
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import ScannerPage from "./pages/ScannerPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResultsPage from "./pages/ResultsPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/scanner",
    element: <ScannerPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/results/:barcode",
    element: <ResultsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
