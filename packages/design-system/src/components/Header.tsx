import { Box, Button, Tiles } from "@buildo/bento-design-system";
import { useMediaQuery } from "react-responsive";
interface HeaderProps {
  list: [string, string][];
}

function Header({ list }: HeaderProps) {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const navLen = Math.min(list.length, 5);

  return (
    <Box>
      <Tiles space={0} columns={isMobile ? 2 : (navLen as 1 | 2 | 3 | 4 | 5)}>
        {list.slice(0, 5).map(([item, link], index) => (
          <Button
            size={isMobile ? "large" : "medium"}
            key={index}
            kind="outline"
            hierarchy="primary"
            label={item}
            onPress={() => (window.location.href = link)}
          />
        ))}
      </Tiles>
    </Box>
  );
}

export default Header;
