import { Box, GorliumImage } from "@gorliumbento/design-system";
import terrario2 from "../assets/Terrario2.png";
import logo from "../assets/croppedLogoDark.png";

function Homepage() {
  return (
    <Box
      style={{
        overflow: "hidden",
      }}
    >
      <GorliumImage path={terrario2} height="80vh" opacity={0.85}>
        <GorliumImage path={logo} />
      </GorliumImage>
    </Box>
  );
}
export default Homepage;
