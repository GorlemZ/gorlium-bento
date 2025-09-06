import { Box, Tiles } from "@buildo/bento-design-system";
import Button from "./Button";
import LanguageSwitch from "./language-switch/LanguageSwitch";
interface HeaderProps {
  list: [string, string][];
  initialLanguage: "it";
  onToggleLanguage: Parameters<typeof LanguageSwitch>[0]["onChange"];
}

function Header({ list, initialLanguage, onToggleLanguage }: HeaderProps) {
  return (
    <Box padding={0}>
      <Tiles
        space={0}
        columns={{
          mobile: 1,
          tablet: 1,
          desktop: 5,
          wide: 5,
        }}
      >
        {list.slice(0, 5).map(([item, link], index) => (
          <Button link={link} text={item} key={index}></Button>
        ))}
        {/* <LanguageSwitch
          initialLanguage={initialLanguage}
          onChange={onToggleLanguage}
        ></LanguageSwitch> */}
      </Tiles>
    </Box>
  );
}

export default Header;
