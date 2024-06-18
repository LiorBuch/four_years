import {
  Card,
  Center,
  Image,
  LoadingOverlay,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { ImgDes } from "../providers/types";
import Page from "./Page";
import { useState, useEffect } from "react";

export function GalleryPage({ imageMap }: { imageMap: ImgDes[] }) {
  const [visible, _setVisable] = useState(false);
  useEffect(() => {
    const loadImage = (_url: string) =>
      new Promise<void>((resolve, _reject) => {
        resolve();
      });

    Promise.all(imageMap.map((item) => loadImage(item.src)))
      .then((_prev) => {})
      .catch((error) => console.error("Error loading images:", error));
  }, [imageMap]);
  return (
    <Page>
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
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
