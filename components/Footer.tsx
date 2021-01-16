import { Container, Heading, Divider } from "@chakra-ui/react";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <>
      <Divider />
      <Container maxW="4xl">
        <Link href="/">
          <a>
            <Heading
              size="md"
              color="black"
              fontWeight="bold"
              m="0"
              p="0"
              pt="2"
              pb="2"
            >
              sublog.yfijixxx
            </Heading>
          </a>
        </Link>
      </Container>
    </>
  );
};

export default Footer;
