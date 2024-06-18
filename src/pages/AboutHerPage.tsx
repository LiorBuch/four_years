import {
  AspectRatio,
  Card,
  Divider,
  Flex,
  Image,
  Overlay,
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
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage:
                'url("https://files.123freevectors.com/wp-content/original/163911-abstract-pink-blue-and-white-graphic-background-design.jpg")',
            }}
            shadow="sm"
            padding="lg"
            radius="md"
            w={"50vh"}
            h={"50vh"}
            withBorder
          >
            <Flex>
              <AspectRatio ratio={3 / 4} maw={"25vh"} mah={"35vh"}>
                <Image
                  src={
                    "https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221202_163829.jpg?raw=true"
                  }
                />
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
            style={{
              backgroundSize: "contain",
              backgroundImage:
                'url("https://images.squarespace-cdn.com/content/v1/5e8cef24d3d5ba030116ba72/1677800350215-OYWTWR4HJRZGGG6QQU1Z/paintedvine_sagepatternswatch+copy.jpg?format=1000w")',
            }}
          >
            <Flex direction={"column"}>
              <Title>Some Of Her Art...</Title>
              <Divider m={"xl"} />
              <Card
                shadow="lg"
                withBorder
                style={{
                  backgroundSize: "contain",
                  backgroundImage:
                    'url("https://github.com/LiorBuch/four_years/blob/main/public/assets/misc/art_background.webp.png?raw=true")',
                }}
              >
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
                          <Overlay
                            style={{
                              backgroundBlendMode: "overlay",
                              backgroundSize: "contain",
                              position: "absolute",
                              left: (10 + 25*(index%4))+"%",
                              top: ( 31*(Math.floor(index/4)))+"%",
                              backgroundImage:
                                'url("https://github.com/LiorBuch/four_years/blob/main/public/assets/misc/pin.png?raw=true")',
                            }}
                            backgroundOpacity={0}
                            mah={"4vh"}
                            maw={"4vh"}
                          />
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
