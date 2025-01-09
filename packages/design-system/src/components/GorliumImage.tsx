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
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={path}
        style={{
          width: "100%",
          opacity: opacity,
          height: height,
          objectFit: "contain",
          flex: height === "auto" ? 1 : 0,
        }}
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

{
  /* <div
style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}}
>
<img
  src={path}
  style={{
    width: "100%",
    opacity: opacity,
    height: height,
    objectFit: "contain",
    flex: height === "auto" ? 1 : 0,
  }}
/>
</div> */
}
