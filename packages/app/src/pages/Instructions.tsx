import {
  Body,
  Box,
  Column,
  Columns,
  GorliumImage,
  Inline,
  PostSection,
  Stack,
  Title,
} from "@gorliumbento/design-system";

import { useTranslation } from "react-i18next";
import instruction1 from "../assets/instruction1.png";
function SingleInstruction({
  imgPath,
  index,
  title,
  content,
  imgAlignRight,
}: {
  imgPath?: string;
  index: number;
  title: string;
  content: string[];
  imgAlignRight: boolean;
}) {
  function contentChild(content: string[]) {
    if (content.length > 1) {
      return content.map((paragraph: string, idx: number) => (
        <p key={idx}>{paragraph}</p>
      ));
    } else {
      return <p key={0}>{content[0]}</p>;
    }
  }
  return (
    <>
      <Title align={"left"} size="small">
        {`${index}. ${title}`}
      </Title>
      <Stack space={0} align={"center"}>
        {imgPath && (
          <Box
            style={{
              minWidth: "30vw",
              width: "30vh",
              maxWidth: "100vw",
              height: "auto",
            }}
            className="responsive-image"
          >
            <GorliumImage path={imgPath} />
          </Box>
        )}
        <Box
          padding={24}
          style={{
            minWidth: "50vw",
            width: "50vh",
            maxWidth: "100vw",
          }}
        >
          <Body size="medium" align="left">
            {contentChild(content)}
          </Body>
        </Box>
      </Stack>
    </>
  );
}

export function Instructions() {
  const { t } = useTranslation();

  return (
    <Columns space={16}>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
      <Column>
        <Stack space={16}>
          <Stack space={16}>
            <SingleInstruction
              imgPath={instruction1}
              index={1}
              title={t("instructions.step1.title")}
              content={t("instructions.step1.content")}
              imgAlignRight={false}
            />
            <SingleInstruction
              index={3}
              title={t("instructions.step2.title")}
              content={t("instructions.step2.content")}
              imgAlignRight={false}
            />
            <SingleInstruction
              index={3}
              title={t("instructions.step3.title")}
              content={t("instructions.step3.content")}
              imgAlignRight={false}
            />
          </Stack>
        </Stack>
      </Column>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
    </Columns>
  );
}
