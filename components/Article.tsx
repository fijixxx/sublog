import { Sublog } from "../src/generated/graphql";
import { Center, Box, Badge, Container } from "@chakra-ui/react";

type Props = {
  payload: {
    articleData: Sublog;
    content: string;
  };
};

const Article = ({ payload }: Props): JSX.Element => {
  return (
    <>
      <Center>
        <Box
          bg={payload.articleData.eyeCatchURL || ""}
          w="md"
          h="200px"
          mt="4"
          borderRadius="lg"
        />
      </Center>
      <Center>
        <Box d="flex" alignItems="baseline" mt="4">
          <Badge borderRadius="full" px="2">
            {payload.articleData.category}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {payload.articleData.createdAt?.slice(0, 4)}年
            {payload.articleData.createdAt?.slice(5, 7)}月
            {payload.articleData.createdAt?.slice(8, 10)}日
          </Box>
        </Box>
      </Center>
      <Center>
        <Box mt="4" d="flex" alignItems="baseline">
          {payload.articleData.tag?.map((tag, idx: number) => (
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
        <Box
          mt="4"
          fontWeight="semibold"
          as="h2"
          lineHeight="tight"
          isTruncated
        >
          {payload.articleData.title}
        </Box>
      </Center>
      <Center margin="0 auto">
        <Container
          maxW="3xl"
          m="4"
          dangerouslySetInnerHTML={{ __html: payload.content }}
        />
      </Center>
    </>
  );
};

export default Article;
