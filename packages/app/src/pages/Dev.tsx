import {
  Box,
  Column,
  Columns,
  Inline,
  Link,
  PostSection,
  Stack,
  Title,
} from "@gorliumbento/design-system";
import githublogo from "../assets/github-mark-white.png";
import { useTranslation } from "react-i18next";

function Dev() {
  const { t } = useTranslation();
  return (
    <Columns space={0}>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
      <Stack space={24} dividers={true}>
        <PostSection title={t("dev.dev1.title")} text={t("dev.dev1.content")}>
          <Inline space={8} alignY={"center"}>
            👉
            <Link href="https://github.com/GorlemZ/gorlium-bento">
              <Inline space={8} alignY={"center"}>
                <Box padding={8} height={40}>
                  <img
                    src={githublogo}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: 0,
                    }}
                  />
                </Box>
                <Title size="small" align="center">
                  {t("dev.dev1.linkText")}
                </Title>
              </Inline>
            </Link>
          </Inline>
        </PostSection>
      </Stack>
      <Column width="content">
        <Box width={40}></Box>
      </Column>
    </Columns>
  );
}

export default Dev;
