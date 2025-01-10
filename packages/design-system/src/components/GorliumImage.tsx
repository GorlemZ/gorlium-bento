import { Box } from "@buildo/bento-design-system";
import { FC } from "react";

interface GorliumImageProps {
  path: string;
  opacity?: number;
  height?: string;
  children?: React.ReactNode;
}

const GorliumImage: FC<GorliumImageProps> = ({
  path,
  opacity = 1,
  children,
  height = "100%",
}) => {
  return (
    <Box
      style={{
        position: "relative",
        height: height,
        objectFit: "contain",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <img
        src={path}
        style={{
          width: "100%",
          opacity: opacity,
          objectFit: "contain",
        }}
      />
      {children && (
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default GorliumImage;
