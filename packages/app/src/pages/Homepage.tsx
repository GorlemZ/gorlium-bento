import { Box, GorliumImage, Stack } from "@gorliumbento/design-system";
import terrario2 from "../assets/Terrario2.png";
import logo from "../assets/croppedLogoDark.png";

function Homepage() {
  return (
    <Stack space={8} align={"center"}>
      <Box>
        <GorliumImage height={"80vh"} path={terrario2} opacity={0.85}>
          <GorliumImage height={"22vh"} path={logo} />
        </GorliumImage>
      </Box>
    </Stack>
  );
}
export default Homepage;
