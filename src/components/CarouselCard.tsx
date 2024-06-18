import { Carousel } from "@mantine/carousel";
import {
  Card,
  Title,
  Group,
  Badge,
  Button,
  Image,
  Text,
} from "@mantine/core";
import { Trip } from "../providers/types";
import { useNavigate } from "react-router-dom";

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
      padding="lg"
      radius="md"
      maw={"120vh"}
      style={{
        backgroundSize:"contain",
        backgroundImage:
          'url("https://media.istockphoto.com/id/838523506/vector/vector-illustration-green-watermelon-striped-seamless-hand-drawn-pattern.jpg?s=612x612&w=0&k=20&c=7_3jQ9Nvt3A7hiimTrnZAPO60D-yt8al4DaRvYdZEEE=")',
      }}
    >
      <Title>{title}</Title>
      <Carousel
        orientation="horizontal"
        height={"30vh"}
        slideSize="40%"
        slideGap="lg"
        align="start"
        loop
      >
        {year_trip.map((trip, index) => (
          <Carousel.Slide key={"slide_" + index}>
            <Card
              style={{
                backgroundSize:"contain",
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/watermelon-seeds-background_1409-1016.jpg")',
              }}
              padding="lg"
              radius="md"
              withBorder
              key={"card_" + index}
            >
              <Card.Section>
                <Image src={trip.card_img} height={160} alt="Norway" />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text c={"var(--mantine-color-white)"} fw={500}>{trip.card_title}</Text>
                <Badge color={color}>{trip.year}</Badge>
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
  );
}

export default CarouselCard;
