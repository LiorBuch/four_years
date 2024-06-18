import { BackgroundImage, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ROUTES } from "./routes";
import { THEME } from "./theme";
import { RouterProvider } from "react-router-dom";
import ConffetiEffect from "./components/ConfettiEffect";
import classes from "./App.module.css"
function App() {
  return (
    <MantineProvider theme={THEME}>
      <Notifications />
      <BackgroundImage className={classes.background_img} src="https://github.com/LiorBuch/four_years/blob/main/public/assets/out/misc/background.png?raw=true"></BackgroundImage>
        <ConffetiEffect />
        <RouterProvider router={ROUTES} />
      
    </MantineProvider>
  );
}

export default App;
