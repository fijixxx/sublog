import { sublog } from "../interfaces/aricle";
import Link from "next/link";
import { Center, Box, Badge, Divider, Container } from "@chakra-ui/react";
import About from "../components/About";

type Props = {
  data: {
    article: {
      Items: sublog[];
    };
    content: string;
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
      <Box bg={data.article.Items[0].eyeCatchURL} w="md" h="200px" />
    </Center>
    <Center>
      <Box d="flex" alignItems="baseline" mt="4">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {data.article.Items[0].category}
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          ml="2"
        >
          {data.article.Items[0].createdAt.slice(0, 4)}年
          {data.article.Items[0].createdAt.slice(5, 7)}月
          {data.article.Items[0].createdAt.slice(8, 10)}日
        </Box>
      </Box>
    </Center>
    <Center>
      <Box mt="4" d="flex" alignItems="baseline">
        {data.article.Items[0].tag?.map((tag, idx: number) => (
          <Badge
            variant="outline"
            borderRadius="full"
            px="2"
            fontSize="xs"
            mr="2"
            key={idx}
          >
            {tag}
          </Badge>
        ))}
      </Box>
    </Center>
    <Center>
      <Box mt="4" fontWeight="semibold" as="h2" lineHeight="tight" isTruncated>
        {data.article.Items[0].title}
      </Box>
    </Center>
    <Center>
      <Container maxW="md">
        <Box m="4" dangerouslySetInnerHTML={{ __html: data.content }} />
      </Container>
    </Center>
  </>
);

export default Article;
