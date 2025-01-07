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
    <Box padding={16} style={{ position: "relative" }}>
      <img
        src={path}
        style={{ height: height || "auto", width: "auto", opacity: opacity }}
      />
      {children && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {children}
        </div>
      )}
    </Box>
  );
}

export default GorliumImage;
