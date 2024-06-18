import { createBrowserRouter } from "react-router-dom";
import { AboutHerPage, GalleryPage, HomePage } from "./pages";
import IMAGE_PROVIDER from "./providers/image_provider";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/germany/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.GERMANY22} />,
  },
  {
    path: "/north23/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.NORTH23} />,
  },
  {
    path: "/north21/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.NORTH21} />,
  },
  {
    path: "/eilat24/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.EILAT24} />,
  },
  {
    path: "/eilat_zukim/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.EILAT_ZUKIM} />,
  },
  {
    path: "/crazy_24/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.CRAZY_24} />,
  },
  {
    path: "/crazy_21/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.CRAZY_21} />,
  },
  {
    path: "/crazy_23/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.CRAZY_23} />,
  },
  {
    path: "/crazy_22/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.CRAZY_22} />,
  },
  {
    path: "/crazy_20/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.CRAZY_20} />,
  },
  {
    path: "/safari/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.SAFARI} />,
  },
  {
    path: "/meet/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.MEET} />,
  },
  {
    path: "/eilat21/",
    element: <GalleryPage imageMap={IMAGE_PROVIDER.EILAT21} />,
  },
  {
    path: "/about/",
    element: <AboutHerPage/>,
  },
]);
