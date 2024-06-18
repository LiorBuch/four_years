import { MantineProvider, AppShell, Group, ActionIcon } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { IconHome, IconUserCircle,IconTrident } from "@tabler/icons-react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { THEME } from "../theme";

function Page({ children }: PropsWithChildren<{}>) {
  const navigate = useNavigate();
  return (
    <MantineProvider theme={THEME}>
      <Notifications />
      <AppShell header={{ height: 60 }}>
        <AppShell.Header>
          <Group p={2} justify="center" preventGrowOverflow={false}>
            <ActionIcon component="a" size={"lg"} href={"https://www.youtube.com/watch?v=9erLsEHAZRI"}>
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
            <ActionIcon size={"lg"} onClick={()=>navigate("/about")}>
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
