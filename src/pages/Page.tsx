import { AppShell, Group, ActionIcon } from "@mantine/core";
import { IconHome, IconUserCircle, IconTrident } from "@tabler/icons-react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Page.module.css"

function Page({ children }: PropsWithChildren<{}>) {
  const navigate = useNavigate();
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header withBorder className={classes.app_header}>
        <Group p={2} justify="center" preventGrowOverflow={false}>
          <ActionIcon
            component="a"
            size={"lg"}
            href={"https://www.youtube.com/watch?v=9erLsEHAZRI"}
          >
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
          <ActionIcon size={"lg"} onClick={() => navigate("/about")}>
            <IconUserCircle size={"lg"} />
          </ActionIcon>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
          {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default Page;
