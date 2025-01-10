import { Box, Columns, Link, Tiles, Title } from "@buildo/bento-design-system";

interface GorliumImageProps {
  path: string;
  height?: string;
  opacity?: number;
  children?: React.ReactNode;
}

function GorliumImage({ path, height, opacity, children }: GorliumImageProps) {
  if (!height) height = "auto";
  return (
    <Box
      padding={0}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={path}
        style={{
          height: height,
          opacity: opacity,
          objectFit: "contain",
          flex: height === "auto" ? 1 : 0,
        }}
      />
      {children && (
        <div
          style={{
            position: "absolute",
            height: "content",
          }}
        >
          {children}
        </div>
      )}
    </Box>
  );
}

export default GorliumImage;
