import {
  AspectRatio,
  Card,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Page from "./Page";
import IMAGE_PROVIDER from "../providers/image_provider";
export function AboutHerPage() {
  return (
    <Page>
      <Stack>
        <Flex justify={"flex-start"} align={"flex-start"} p={"sm"}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            w={"50vh"}
            h={"50vh"}
            withBorder
          >
            <Flex>
              <AspectRatio ratio={3 / 4} maw={"25vh"} mah={"35vh"}>
                <Image src={"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221202_163829.jpg?raw=true"} />
              </AspectRatio>
              <Flex direction={"column"} pl={"xs"}>
                <Title>Hagit Solberg</Title>
                <Text c="dimmed">Graphic Designer</Text>
                <Space />
              </Flex>
            </Flex>
          </Card>
          <Card
            ml={"xl"}
            shadow="sm"
            padding="lg"
            radius="md"
            w={"70vh"}
            h={"70vh"}
            withBorder
          >
            <Flex direction={"column"}>
              <Title>Some Of Her Art...</Title>
              <Divider m={"xl"} />
              <Card shadow="lg" withBorder>
                <SimpleGrid cols={4}>
                  {IMAGE_PROVIDER.ART.map((img, index) => {
                    return (
                      <>
                        <AspectRatio
                          ratio={1}
                          mah={"20vh"}
                          maw={"20vh"}
                          key={"art_" + index}
                        >
                          <Image src={img.src} fit="contain" />
                        </AspectRatio>
                      </>
                    );
                  })}
                </SimpleGrid>
              </Card>
            </Flex>
          </Card>
        </Flex>
      </Stack>
    </Page>
  );
}
export default AboutHerPage;
