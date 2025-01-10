import { Box, GorliumImage, Stack } from "@gorliumbento/design-system";
import terrario2 from "../assets/Terrario2.png";
import logo from "../assets/croppedLogoDark.png";

function Homepage() {
  return (
    <Box height="full">
      <Stack space={8} align={"center"}>
        <Box>
          <GorliumImage height={"80vh"} path={terrario2} opacity={0.85}>
            <GorliumImage height={"25vh"} path={logo} />
          </GorliumImage>
        </Box>
      </Stack>
    </Box>
  );
}
export default Homepage;
