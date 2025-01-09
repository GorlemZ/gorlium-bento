import {
  Body,
  Box,
  Column,
  Columns,
  DecorativeDivider,
  Stack,
} from "@buildo/bento-design-system";
import GorliumImage from "./GorliumImage";

interface PostSectionProps {
  imgPath: string;
  text: string;
}

function PostSection({ imgPath, text }: PostSectionProps) {
  return (
    <Stack space={0}>
      <Columns space={0}>
        <Column width="1/5">
          <GorliumImage path={imgPath}></GorliumImage>
        </Column>
        <Column width="4/5">
          <Box padding={4}>
            <Body size="large">{text}</Body>
          </Box>
        </Column>
      </Columns>
      <DecorativeDivider />
    </Stack>
  );
}

export default PostSection;
