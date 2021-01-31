import { extendTheme } from "@chakra-ui/react";

export const styles = extendTheme({
  styles: {
    global: {
      h1: { fontSize: "3xl", fontWeight: "600", mt: "24px", mb: "16px" },
      h2: { fontSize: "xl", fontWeight: "600", mt: "24px", mb: "16px" },
      h3: { fontSize: "md", fontWeight: "600", mt: "24px", mb: "16px" },
      h4: { fontSize: "sm", fontWeight: "600", mt: "24px", mb: "16px" },
      h5: { fontSize: "xs", fontWeight: "600", mt: "24px", mb: "16px" },
      li: {
        mt: "8px",
        ml: "24px",
      },
      pre: {
        fontSize: "80%",
        padding: "16px",
        overflow: "auto",
        borderRadius: "12px",
      },
      img: {
        margin: "0 auto",
      },
      p: {
        padding: "8px 0",
        code: {
          fontFamily: "Consolas",
          bg: "#f6f8fa",
          p: "0 2.8px",
        },
      },
      blockquote: {
        p: {
          color: "#6a737d",
          padding: "0 8px",
          borderLeft: "4px solid #dfe2e5",
        },
      },
      a: {
        color: "#6a737d",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});
