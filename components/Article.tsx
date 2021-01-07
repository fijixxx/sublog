import { Sublog } from "../src/generated/graphql";
import { Center, Box, Badge, Container, Text, Code } from "@chakra-ui/react";

type Props = {
  articleData: Sublog;
};

const Article = ({ articleData }: Props): JSX.Element => {
  return (
    <>
      <Center>
        <Box
          bg={articleData.eyeCatchURL || ""}
          w="lg"
          h="200px"
          m="4"
          mt="0"
          mb="0"
          borderRadius="lg"
          d="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            m="4"
            bg="#f6f8fa"
            fontWeight="semibold"
            as="h2"
            textAlign="center"
          >
            {articleData.title}
          </Text>
        </Box>
      </Center>
      <Center>
        <Box d="flex" alignItems="baseline" m="4" mb="0">
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
        <Box m="4" mb="0" d="flex" alignItems="baseline">
          <Text ml="2" />
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
      <Center margin="0 auto">
        <Container
          maxW="4xl"
          dangerouslySetInnerHTML={{
            __html: articleData.body || "お探しの記事は見つかりませんでした。",
          }}
        />
      </Center>
    </>
  );
};

export default Article;
