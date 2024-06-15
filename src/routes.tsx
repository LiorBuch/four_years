import { createBrowserRouter } from "react-router-dom";
import { GalleryPage, HomePage } from "./pages";
import { GERMANY22 } from "./providers/image_provider";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/germany",
    element: <GalleryPage imageMap={GERMANY22}/>,
  },
  {
    path: "/north23",
    element: <GalleryPage imageMap={GERMANY22}/>,
  },
]);
