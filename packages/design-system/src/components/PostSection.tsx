import { Body, Box, Column, Columns } from "@buildo/bento-design-system";
import GorliumImage from "./GorliumImage";

interface PostSectionProps {
  imgPath?: string;
  text: string;
}

function PostSection({ imgPath, text }: PostSectionProps) {
  return (
    <Columns space={16}>
      {imgPath && (
        <Column width="2/5">
          <GorliumImage path={imgPath} />
        </Column>
      )}
      <Column>
        <Box padding={4}>
          <Body size="large">{text}</Body>
        </Box>
      </Column>
    </Columns>
  );
}

export default PostSection;
