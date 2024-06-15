import { MantineProvider, AppShell, Group, ActionIcon } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { IconHome, IconUserCircle,IconTrident } from "@tabler/icons-react";
import { PropsWithChildren } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { THEME } from "../theme";

function Page({ children }: PropsWithChildren<{}>) {
  const navigate = useNavigate();
  return (
    <MantineProvider theme={THEME}>
      <Notifications />
      <AppShell header={{ height: 60 }}>
        <AppShell.Header>
          <Group p={2} justify="center" preventGrowOverflow={false}>
            <ActionIcon size={"lg"}>
              <IconTrident size={"lg"} />
            </ActionIcon>
            <ActionIcon
              variant="gradient"
              size={64}
              gradient={{ from: "blue", to: "cyan" }}
              onClick={() => navigate("/")}
            >
              <IconHome size={48} />
            </ActionIcon>
            <ActionIcon size={"lg"}>
              <IconUserCircle size={"lg"} />
            </ActionIcon>
          </Group>
        </AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default Page;
