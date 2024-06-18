import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ROUTES } from "./routes";
import { THEME } from "./theme";
import { RouterProvider } from "react-router-dom";

function App() {
  
  return (
    <MantineProvider theme={THEME}>
      <Notifications />
      <RouterProvider router={ROUTES} />
    </MantineProvider>
  );
}

export default App;
