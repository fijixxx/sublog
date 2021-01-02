import { Center, Box } from "@chakra-ui/react";

type Props = {
  bgcolor: string;
};

const Footer = ({ bgcolor }: Props): JSX.Element => (
  <Center bg={bgcolor}>
    <a>
      <Box fontWeight="semibold" ad="h4" mt="4" mb="4" borderColor="white">
        This site uses Google Analytics, source code is
        <a href="https://github.com/fijixxx/sublog"> "here"</a>.
      </Box>
    </a>
  </Center>
);

export default Footer;
