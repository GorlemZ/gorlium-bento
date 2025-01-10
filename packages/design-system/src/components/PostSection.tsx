import { Body, Box, Column, Columns, Title } from "@buildo/bento-design-system";
import GorliumImage from "./GorliumImage";

interface PostSectionProps {
  imgPath?: string;
  title: string;
  text: string[];
}

function PostSection({ imgPath, text, title }: PostSectionProps) {
  return (
    <>
      <Title size="small">{title}</Title>
      <Columns space={16} collapseBelow="desktop">
        {imgPath && (
          <Column width="1/5">
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
