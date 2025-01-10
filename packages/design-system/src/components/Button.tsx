import { Box, Link, Title } from "@buildo/bento-design-system";
interface HeaderProps {
  link: string;
  text: string;
}

function Button({ link, text }: HeaderProps) {
  return (
    <Box
      height={"full"}
      padding={16}
      onClick={() => (window.location.href = link)}
      style={{
        minHeight: "8vh",
        height: "100%",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor =
          "var(--bento-brandColor-brandPrimary)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      <Link href={link} style={{ textDecoration: "none", color: "inherit" }}>
        <Title size="large" align="center">
          {text}
        </Title>
      </Link>
    </Box>
  );
}

export default Button;
