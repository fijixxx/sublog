import { sublog } from "../interfaces/aricle";
import Link from "next/link";
import { Center, Box, Badge, Divider, Container } from "@chakra-ui/react";
import About from "../components/About";

type Props = {
  data: {
    data: {
      getSublog: sublog;
    };
  };
};

const Article = ({ data }: Props): JSX.Element => (
  <>
    <About></About>
    <Divider />
    <Center>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        mt="4"
      >
        <Link href="/">
          <a>back HOME</a>
        </Link>
      </Box>
    </Center>
    <Center>
      <Box d="flex" alignItems="baseline" mt="4">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {data.data.getSublog.category}
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          ml="2"
        >
          {data.data.getSublog.createdAt.slice(0, 4)}年
          {data.data.getSublog.createdAt.slice(4, 6)}月
          {data.data.getSublog.createdAt.slice(6, 8)}日
        </Box>
      </Box>
    </Center>
    <Center>
      <Box mt="4" d="flex" alignItems="baseline">
        {[
          data.data.getSublog.tag1,
          data.data.getSublog.tag2,
          data.data.getSublog.tag3,
        ].map((tag) => (
          <Badge
            variant="outline"
            borderRadius="full"
            px="2"
            fontSize="0.2rem"
            mr="2"
          >
            {tag}
          </Badge>
        ))}
      </Box>
    </Center>
    <Center>
      <Box mt="4" fontWeight="semibold" as="h2" lineHeight="tight" isTruncated>
        {data.data.getSublog.title}
      </Box>
    </Center>
    <Center>
      <Container maxW="md">
        <Box mt="4">
          <div>{data.data.getSublog.body}</div>
        </Box>
      </Container>
    </Center>
  </>
);

export default Article;
