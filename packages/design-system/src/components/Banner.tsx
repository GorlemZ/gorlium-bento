import { Box } from "@buildo/bento-design-system";
import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface BannerProps {
  children: ReactNode;
}

function Banner({ children }: BannerProps) {
  return (
    <>
      <Box padding={4}></Box>
      <Marquee loop={0} autoFill={true} pauseOnHover={true}>
        {children}
      </Marquee>
    </>
  );
}

export default Banner;
