import { Body, Box, Column, Columns, Title } from "@buildo/bento-design-system";
import GorliumImage from "./GorliumImage";
import { ComponentProps } from "react";

interface PostSectionProps {
  imgPath?: string;
  title: string;
  text: string[];
  imgSize?: ComponentProps<typeof Column>["width"];
}

function PostSection({ imgPath, text, title, imgSize }: PostSectionProps) {
  return (
    <>
      <Title align={"left"} size="small">
        {title}
      </Title>
      <Columns space={16} collapseBelow="desktop">
        {imgPath && (
          <Column width={imgSize ? imgSize : "1/5"}>
            <Box padding={8}></Box>
            <GorliumImage path={imgPath} />
          </Column>
        )}
        <Column>
          <Body size="medium" align="left">
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Body>
        </Column>
      </Columns>
    </>
  );
}

export default PostSection;
