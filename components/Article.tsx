import { Sublog } from "../src/generated/graphql";
import { Center, Box, Badge, Container } from "@chakra-ui/react";

type Props = {
  articleData: Sublog;
};

const Article = ({ articleData }: Props): JSX.Element => {
  return (
    <>
      <Center>
        <Box
          bg={articleData.eyeCatchURL || ""}
          w="md"
          h="200px"
          mt="4"
          borderRadius="lg"
        />
      </Center>
      <Center>
        <Box d="flex" alignItems="baseline" mt="4">
          <Badge borderRadius="full" px="2">
            {articleData.category}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {articleData.createdAt?.slice(0, 4)}年
            {articleData.createdAt?.slice(5, 7)}月
            {articleData.createdAt?.slice(8, 10)}日
          </Box>
        </Box>
      </Center>
      <Center>
        <Box mt="4" d="flex" alignItems="baseline">
          {articleData.tag?.map((tag, idx: number) => (
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
          {articleData.title}
        </Box>
      </Center>
      <Center margin="0 auto">
        <Container
          maxW="3xl"
          m="4"
          dangerouslySetInnerHTML={{
            __html: articleData.body || "お探しの記事は見つかりませんでした。",
          }}
        />
      </Center>
    </>
  );
};

export default Article;
