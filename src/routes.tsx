import { createBrowserRouter } from "react-router-dom";
import { AboutHerPage, GalleryPage, HomePage } from "./pages";
import {
  CRAZY_20,
  CRAZY_21,
  CRAZY_22,
  CRAZY_23,
  CRAZY_24,
  EILAT21,
  EILAT24,
  EILAT_ZUKIM,
  GERMANY22,
  MEET,
  NORTH21,
  NORTH23,
  SAFARI,
} from "./providers/image_provider";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/germany",
    element: <GalleryPage imageMap={GERMANY22} />,
  },
  {
    path: "/north23",
    element: <GalleryPage imageMap={NORTH23} />,
  },
  {
    path: "/north21",
    element: <GalleryPage imageMap={NORTH21} />,
  },
  {
    path: "/eilat24",
    element: <GalleryPage imageMap={EILAT24} />,
  },
  {
    path: "/eilat_zukim",
    element: <GalleryPage imageMap={EILAT_ZUKIM} />,
  },
  {
    path: "/crazy_24",
    element: <GalleryPage imageMap={CRAZY_24} />,
  },
  {
    path: "/crazy_21",
    element: <GalleryPage imageMap={CRAZY_21} />,
  },
  {
    path: "/crazy_23",
    element: <GalleryPage imageMap={CRAZY_23} />,
  },
  {
    path: "/crazy_22",
    element: <GalleryPage imageMap={CRAZY_22} />,
  },
  {
    path: "/crazy_20",
    element: <GalleryPage imageMap={CRAZY_20} />,
  },
  {
    path: "/safari",
    element: <GalleryPage imageMap={SAFARI} />,
  },
  {
    path: "/meet",
    element: <GalleryPage imageMap={MEET} />,
  },
  {
    path: "/eilat21",
    element: <GalleryPage imageMap={EILAT21} />,
  },
  {
    path: "/about",
    element: <AboutHerPage/>,
  },
]);
