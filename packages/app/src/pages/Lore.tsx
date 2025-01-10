import {
  Box,
  Column,
  Columns,
  PostSection,
  Stack,
} from "@gorliumbento/design-system";
import terrario2 from "../assets/Terrario2.png";

function Lore() {
  return (
    <Columns space={0}>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
      <Stack space={24} dividers={true}>
        <PostSection
          title="Lore"
          text={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget dolor leo.",
            "Aliquam erat volutpat. Aliquam pretium orci quis turpis tempus scelerisque. Pellentesque placerat sapien et nisi aliquam, et facilisis dui auctor. Duis vitae sagittis purus, in interdum nisl. Mauris ut bibendum nulla. Quisque malesuada elit orci, at pretium nisi eleifend vitae. In posuere ex ante, in egestas nulla lobortis eget. Ut quis gravida nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget dolor leo. Aliquam erat volutpat. Aliquam pretium orci quis turpis tempus scelerisque. Pellentesque placerat sapien et nisi aliquam, et facilisis dui auctor. Duis vitae sagittis purus, in interdum nisl. Mauris ut bibendum nulla. Quisque malesuada elit orci, at pretium nisi eleifend vitae. In posuere ex ante, in egestas nulla lobortis eget. Ut quis gravida nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget dolor leo. Aliquam erat volutpat. Aliquam pretium orci quis turpis tempus scelerisque. Pellentesque placerat sapien et nisi aliquam, et facilisis dui auctor. Duis vitae sagittis purus, in interdum nisl. Mauris ut bibendum nulla. Quisque malesuada elit orci, at pretium nisi eleifend vitae. In posuere ex ante, in egestas nulla lobortis eget. Ut quis gravida nibh.",
          ]}
        ></PostSection>
        <PostSection
          title="Lore"
          imgPath={terrario2}
          text={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget dolor leo.",
            "Aliquam erat volutpat. Aliquam pretium orci quis turpis tempus scelerisque. Pellentesque placerat sapien et nisi aliquam, et facilisis dui auctor. Duis vitae sagittis purus, in interdum nisl. Mauris ut bibendum nulla. Quisque malesuada elit orci, at pretium nisi eleifend vitae. In posuere ex ante, in egestas nulla lobortis eget. Ut quis gravida nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget dolor leo. Aliquam erat volutpat. Aliquam pretium orci quis turpis tempus scelerisque. Pellentesque placerat sapien et nisi aliquam, et facilisis dui auctor. Duis vitae sagittis purus, in interdum nisl. Mauris ut bibendum nulla. Quisque malesuada elit orci, at pretium nisi eleifend vitae. In posuere ex ante, in egestas nulla lobortis eget. Ut quis gravida nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget dolor leo. Aliquam erat volutpat. Aliquam pretium orci quis turpis tempus scelerisque. Pellentesque placerat sapien et nisi aliquam, et facilisis dui auctor. Duis vitae sagittis purus, in interdum nisl. Mauris ut bibendum nulla. Quisque malesuada elit orci, at pretium nisi eleifend vitae. In posuere ex ante, in egestas nulla lobortis eget. Ut quis gravida nibh.",
          ]}
        ></PostSection>
      </Stack>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
    </Columns>
  );
}

export default Lore;
