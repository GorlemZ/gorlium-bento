import { Box, Columns, Link, Tiles, Title } from "@buildo/bento-design-system";

interface HeaderProps {
  title: [string, string];
  list: [string, string][];
}

function Header({ title, list }: HeaderProps) {
  const navLen = Math.min(list.length, 7);
  return (
    <Columns space={16}>
      <Link href={title[1]}>
        <Box padding={16}>
          <Title size={"large"}>{title[0]}</Title>
        </Box>
      </Link>
      <Tiles space={16} columns={navLen as 1 | 2 | 3 | 4 | 5 | 6 | 7}>
        {list.map(([item, link], index) => (
          <Link href={link}>
            <Box padding={16}>
              <Title key={index} size={"large"}>
                {item}
              </Title>
            </Box>
          </Link>
        ))}
      </Tiles>
    </Columns>
  );
}

export default Header;
