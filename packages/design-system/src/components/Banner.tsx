import { Box } from "@buildo/bento-design-system";
import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface BannerProps {
  children: ReactNode;
}

function Banner({ children }: BannerProps) {
  return (
    <Box padding={24} style={{ flexShrink: 0 }}>
      <Marquee loop={0} autoFill={true} pauseOnHover={true}>
        {children}
      </Marquee>
    </Box>
  );
}

export default Banner;
