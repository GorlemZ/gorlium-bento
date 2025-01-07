import { Box, GorliumImage, Header, Stack } from "@gorliumbento/design-system";
import terrario2 from "../assets/Terrario2.png";
import logo from "../assets/croppedLogo.png";

function Homepage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        title={["Gorlium", "t"]}
        list={[
          ["item 1", "t"],
          ["item 1", "t"],
        ]}
      ></Header>
      <Stack space={16} align={"center"}>
        <Box>
          <GorliumImage height={"80vh"} path={terrario2} opacity={0.85}>
            <GorliumImage height={"22vh"} path={logo} />
          </GorliumImage>
        </Box>
      </Stack>
    </div>
  );
}
export default Homepage;
