import {
  Badge,
  Button,
  Card,
  Center,
  Group,
  Stack,
  Title,
  Text,
  Image,
  Grid,
  Timeline,
  Progress,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import TRIPS from "../providers/trip_provider";
import { useNavigate } from "react-router-dom";
import Page from "./Page";

export function HomePage() {
  const navigate = useNavigate();

  const getColor = (year: number) => {
    if (year === 2024) return "green";
    if (year === 2023) return "grape";
    if (year === 2022) return "red";
    if (year === 2021) return "blue";
    if (year === 2020) return "lime";
  };
  return (
    <Page>
      <Grid>
        <Grid.Col span={8}>
          <Center p={"sm"}>
            <Stack>
              <Title size="h1">Welcome! Have a Loved day!</Title>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Carousel
                  orientation="horizontal"
                  height={"30vh"}
                  slideSize="25%"
                  slideGap="md"
                  align="start"
                  loop
                >
                  {TRIPS.map((trip, index) => (
                    <Carousel.Slide key={"slide_" + index}>
                      <Card
                        shadow="sm"
                        padding="lg"
                        radius="md"
                        withBorder
                        key={"card_" + index}
                      >
                        <Card.Section>
                          <Image
                            src={trip.card_img}
                            height={160}
                            alt="Norway"
                          />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                          <Text fw={500}>{trip.card_title}</Text>
                          <Badge color={getColor(trip.year)}>{trip.year}</Badge>
                        </Group>

                        <Text size="sm" c="dimmed">
                          {trip.card_des.map((des) => (
                            <>
                              {des}
                              <br />
                            </>
                          ))}
                        </Text>

                        <Button
                          color="blue"
                          fullWidth
                          mt="md"
                          radius="md"
                          onClick={() => navigate(trip.gallery_uri)}
                        >
                          Go To Trips Gallery!
                        </Button>
                      </Card>
                    </Carousel.Slide>
                  ))}
                </Carousel>
              </Card>
            </Stack>
          </Center>
        </Grid.Col>
        <Grid.Col span={2}>
          <Center p={"sm"}>
            <Timeline bulletSize={24} active={1} h={"40vh"}>
              <Timeline.Item title="Start" />
              <Timeline.Item title="4 Years Ago" />
              <Timeline.Item title="3 Years Ago" />
              <Timeline.Item title="2 Years Ago" />
              <Timeline.Item title="1 Years Ago" />
              <Timeline.Item title="Today" />
            </Timeline>
          </Center>
        </Grid.Col>
      </Grid>
    </Page>
  );
}
export default HomePage;
