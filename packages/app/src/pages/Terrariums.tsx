import { useEffect } from "react";
import {
  Box,
  Column,
  Columns,
  PostSection,
  Stack,
} from "@gorliumbento/design-system";
import terrario2 from "../assets/Terrario1.png";
import fila1 from "../assets/Fila1Cropped.png";
import patrick from "../assets/Patrizio.png";
import data from "../sayingshit.json";

function preloadImage(url: string) {
  const img = new Image();
  img.src = url;
}

function Terrariums() {
  useEffect(() => {
    preloadImage(terrario2);
    preloadImage(fila1);
    preloadImage(patrick);
  }, []);

  return (
    <Columns space={0}>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
      <Stack space={24} dividers={true}>
        <PostSection
          imgPath={terrario2}
          imgSize={"1/2"}
          title={data.terrariums.terrarium1.title}
          text={data.terrariums.terrarium1.content}
        ></PostSection>
        <PostSection
          imgAlignRight={true}
          imgPath={fila1}
          imgSize={"1/2"}
          title={data.terrariums.terrarium2.title}
          text={data.terrariums.terrarium2.content}
        ></PostSection>
        <PostSection
          imgAlignRight={false}
          imgPath={patrick}
          imgSize={"1/2"}
          title={data.terrariums.terrarium3.title}
          text={data.terrariums.terrarium3.content}
        ></PostSection>
      </Stack>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
    </Columns>
  );
}

export default Terrariums;
