import { Carousel } from "@mantine/carousel";
import { Card, Title, Group, Badge, Button, Image, Text } from "@mantine/core";
import { Trip } from "../providers/types";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

function CarouselCard({
  title,
  color,
  year_trip,
}: {
  title: string;
  color: string;
  year_trip: Trip[];
}) {
  const navigate = useNavigate();
  return (
    <Card
      shadow="sm"
      padding={isMobile ? "xs" : "lg"}
      radius="md"
      maw={isMobile ? "20em" : "80em"}
      style={{
        backgroundSize: "contain",
        backgroundImage:
          'url("https://media.istockphoto.com/id/838523506/vector/vector-illustration-green-watermelon-striped-seamless-hand-drawn-pattern.jpg?s=612x612&w=0&k=20&c=7_3jQ9Nvt3A7hiimTrnZAPO60D-yt8al4DaRvYdZEEE=")',
      }}
    >
      <Title>{title}</Title>
      <Carousel
        orientation="horizontal"
        height={"30vh"}
        slideSize="40%"
        slideGap={isMobile ? "xs" : "lg"}
        align="start"
        loop
        withControls={!isMobile}
        withIndicators={isMobile}
      >
        {year_trip.map((trip, index) => (
          <Carousel.Slide key={"slide_" + index}>
            <Card
              mah={isMobile ? "20em" : "20em"}
              maw={isMobile ? "15em" : "20em"}
              style={{
                backgroundSize: "contain",
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/watermelon-seeds-background_1409-1016.jpg")',
              }}
              padding={isMobile ? "xs" : "lg"}
              radius="md"
              withBorder
              key={"card_" + index}
            >
              <Card.Section>
                <Image
                  src={trip.card_img}
                  height={isMobile ? "100vh" : 160}
                  alt="Norway"
                  pb={isMobile ? "xs" : 0}
                />
              </Card.Section>

              <Group
                justify="space-between"
                mt={isMobile ? "0em" : "md"}
                mb="xs"
              >
                <Text c={"var(--mantine-color-white)"} fw={500}>
                  {trip.card_title}
                </Text>
                <Badge size={isMobile ? "xs" : "md"} color={color}>
                  {trip.year}
                </Badge>
              </Group>

              <Text size="xs" c="dimmed">
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
  );
}

export default CarouselCard;
