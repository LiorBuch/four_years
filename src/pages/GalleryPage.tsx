import { Card, Center, Image, SimpleGrid, Text } from "@mantine/core";
import { ImgDes } from "../providers/types";
import Page from "./Page";

export function GalleryPage({ imageMap }: { imageMap: ImgDes[] }) {
  return (
    <Page>
      <Center>
        <Card shadow="sm" padding="lg" radius="md" w={"100vh"} withBorder>
          <SimpleGrid cols={4}>
            {imageMap.map((item, index) => {
              return (
                <Card
                  shadow="sm"
                  padding="sm"
                  radius="md"
                  withBorder
                  key={"img_card_" + index}
                >
                  <Card.Section>
                    <Image fit="contain" src={item.src} />
                  </Card.Section>
                  <Text fw={500} size="lg" mt="md">
                    {item.des}
                  </Text>
                </Card>
              );
            })}
          </SimpleGrid>
        </Card>
      </Center>
    </Page>
  );
}
export default GalleryPage;
