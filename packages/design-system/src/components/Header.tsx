import { Button, Tiles } from "@buildo/bento-design-system";

interface HeaderProps {
  list: [string, string][];
}

function Header({ list }: HeaderProps) {
  const navLen = Math.min(list.length, 7);
  return (
    <Tiles space={0} columns={navLen as 1 | 2 | 3 | 4 | 5 | 6 | 7}>
      {list.map(([item, link], index) => (
        <Button
          key={index}
          kind="outline"
          hierarchy="primary"
          label={item}
          onPress={() => (window.location.href = link)}
        />
      ))}
    </Tiles>
  );
}

export default Header;
