import { PostSection } from "@gorliumbento/design-system";
import terrario2 from "../assets/Terrario2.png";

function Lore() {
  return (
    <PostSection
      imgPath={terrario2}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget dolor leo. Aliquam erat volutpat. Aliquam pretium orci quis turpis tempus scelerisque. Pellentesque placerat sapien et nisi aliquam, et facilisis dui auctor. Duis vitae sagittis purus, in interdum nisl. Mauris ut bibendum nulla. Quisque malesuada elit orci, at pretium nisi eleifend vitae. In posuere ex ante, in egestas nulla lobortis eget. Ut quis gravida nibh."
      }
    ></PostSection>
  );
}

export default Lore;
