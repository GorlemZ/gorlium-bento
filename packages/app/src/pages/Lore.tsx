import {
  Box,
  Column,
  Columns,
  PostSection,
  Stack,
} from "@gorliumbento/design-system";
import terrario2 from "../assets/Terrario2.png";
import data from "../sayingshit.json";
function Lore() {
  return (
    <Columns space={0}>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
      <Stack space={24} dividers={true}>
        <PostSection
          title={data.lore.lore1.title}
          text={data.lore.lore1.content}
        ></PostSection>
        <PostSection
          title={data.lore.lore2.title}
          imgPath={terrario2}
          text={data.lore.lore2.content}
        ></PostSection>
      </Stack>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
    </Columns>
  );
}

export default Lore;
