import { Image, MantineProvider } from "@mantine/core";
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
      <Image className={classes.background_img} src="https://github.com/LiorBuch/four_years/blob/main/public/assets/misc/background_strawberry.png?raw=true"></Image>
      <Image className={classes.background_img_a} src="https://github.com/LiorBuch/four_years/blob/main/public/assets/misc/background_strawberry.png?raw=true"></Image>
      <Image className={classes.background_img_b} src="https://github.com/LiorBuch/four_years/blob/main/public/assets/misc/background_strawberry.png?raw=true"></Image>
      <Image className={classes.background_img_c} src="https://github.com/LiorBuch/four_years/blob/main/public/assets/misc/background_strawberry.png?raw=true"></Image>
        <ConffetiEffect />
        <RouterProvider router={ROUTES} />
      
    </MantineProvider>
  );
}

export default App;
