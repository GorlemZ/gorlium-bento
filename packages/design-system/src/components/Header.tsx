import { Box, Column, Tiles } from "@buildo/bento-design-system";
import Button from "./Button";
interface HeaderProps {
  list: [string, string][];
}

function Header({ list }: HeaderProps) {
  return (
    <Box padding={0}>
      <Tiles
        space={0}
        columns={{
          mobile: 1,
          tablet: 1,
          desktop: 4,
          wide: 4,
        }}
      >
        {list.slice(0, 5).map(([item, link], index) => (
          <Button link={link} text={item} key={index}></Button>
        ))}
      </Tiles>
    </Box>
  );
}

export default Header;
