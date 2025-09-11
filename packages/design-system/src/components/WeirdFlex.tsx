import React from "react";

type WeirdFlexProps = {
  children: React.ReactNode;
  gap?: number | string;
};

export function WeirdFlex({ children, gap = 16 }: WeirdFlexProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: typeof gap === "number" ? `${gap}px` : gap,
      }}
    >
      {children}
      <style>
        {`
          @media (max-width: 600px) {
            .weird-flex {
              flex-direction: row !important;
              align-items: center;
              justify-content: center;
            }
            .weird-flex > * {
              min-width: 0;
              flex: 1 1 0;
            }
          }
        `}
      </style>
    </div>
  );
}
export default WeirdFlex;
