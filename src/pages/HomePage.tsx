import {
  Center,
  Stack,
  Title,
  Grid,
} from "@mantine/core";
import TRIPS from "../providers/trip_provider";
import Page from "./Page";
import CarouselCard from "../components/CarouselCard";

export function HomePage() {
  return (
    <Page>
      <Grid>
        <Grid.Col>
          <Center p={"sm"}>
            <Stack>
              <Title size="h1">Welcome! Have a Loved day!</Title>
              <CarouselCard color="green" key={"2024_year_carousel"} year_trip={TRIPS.filter((trip)=>trip.year == 2024)} title="@2024"/>
              <CarouselCard color="grape" key={"2023_year_carousel"} year_trip={TRIPS.filter((trip)=>trip.year == 2023)} title="@2023"/>
              <CarouselCard color="red" key={"2022_year_carousel"} year_trip={TRIPS.filter((trip)=>trip.year == 2022)} title="@2022"/>
              <CarouselCard color="blue" key={"2021_year_carousel"} year_trip={TRIPS.filter((trip)=>trip.year == 2021)} title="@2021"/>
              <CarouselCard color="lime" key={"2020_year_carousel"} year_trip={TRIPS.filter((trip)=>trip.year == 2020)} title="@2020"/>
            </Stack>
          </Center>
        </Grid.Col>
      </Grid>
    </Page>
  );
}
export default HomePage;
