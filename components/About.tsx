import { Center, Box, Code } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  bgcolor: string;
};

const About = ({ bgcolor }: Props): JSX.Element => (
  <Center bg={bgcolor}>
    <Link href="/">
      <a>
        <Box fontWeight="semibold" ad="h4" mt="4" mb="4" borderColor="white">
          <Code>sublog.yfijixxx</Code>
        </Box>
      </a>
    </Link>
  </Center>
);

export default About;
