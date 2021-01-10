import { Center, Box, Text } from "@chakra-ui/react";

type Props = {
  bgcolor: string;
};

const Footer = ({ bgcolor }: Props): JSX.Element => (
  <Center bg={bgcolor}>
    <Box fontWeight="semibold" ad="h4" mt="4" mb="4" borderColor="white">
      <Text>
        This site uses Google Analytics, source code is
        <a href="https://github.com/fijixxx/sublog"> &quot;here&quot;.</a>
      </Text>
    </Box>
  </Center>
);

export default Footer;
