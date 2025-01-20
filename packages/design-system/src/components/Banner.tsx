import { Box } from "@buildo/bento-design-system";
import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface BannerProps {
  children: ReactNode;
}

const title = "|     WELCOME TO THE GORLIUM    |";

function Banner({ children }: BannerProps) {
  return (
    <Marquee
      loop={0}
      autoFill={true}
      pauseOnHover={true}
      style={{ alignSelf: "right", height: "5vh", color: "white" }}
    >
      {children}
    </Marquee>
  );
}

export default Banner;
