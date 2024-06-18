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
                    'url("https://files.oaiusercontent.com/file-20UqHgucsC0KUOuG4ayOykIV?se=2024-06-18T16%3A20%3A05Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd04f6978-874d-4d57-a76f-db745e855a78.webp&sig=LmAl%2BjqvOpMFfZVeR2wf0CfHoPbJ/3l%2B5axfB4Iqo%2BQ%3D")',
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
                              backgroundBlendMode:"overlay",
                              backgroundImage:
                                'url("https://images.squarespace-cdn.com/content/v1/5e8cef24d3d5ba030116ba72/1677800350215-OYWTWR4HJRZGGG6QQU1Z/paintedvine_sagepatternswatch+copy.jpg?format=1000w")',
                            }}
                            backgroundOpacity={0.1}
                            mah={"20vh"}
                            maw={"20vh"}
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
