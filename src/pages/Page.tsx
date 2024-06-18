import { AppShell, Group, ActionIcon } from "@mantine/core";
import { IconHome, IconUserCircle, IconTrident } from "@tabler/icons-react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Page.module.css"

function Page({ children }: PropsWithChildren<{}>) {
  const navigate = useNavigate();
  return (
    <AppShell header={{ height: "3.5em" }}>
      <AppShell.Header withBorder className={classes.app_header}>
        <Group p={"0em"} justify="center" preventGrowOverflow={false}>
          <ActionIcon
            component="a"
            size={"lg"}
            href={"https://www.youtube.com/watch?v=9erLsEHAZRI"}
          >
            <IconTrident size={"lg"} />
          </ActionIcon>
          <ActionIcon
            variant="gradient"
            size={"4em"}
            gradient={{ from: "blue", to: "cyan" }}
            onClick={() => navigate("/")}
          >
            <IconHome size={"48em"} />
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
