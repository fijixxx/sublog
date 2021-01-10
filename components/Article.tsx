import { Sublog } from "../src/generated/graphql";
import { Center, Box, Badge, Container, Text, Image } from "@chakra-ui/react";

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
            borderRadius="lg"
          >
            {articleData.title}
          </Text>
        </Box>
      </Center>
      <Container maxW="4xl">
        <Box d="flex" mt="4">
          <Image
            borderRadius="full"
            src="200585584.png"
            alt="Segun Adebayo"
            maxW="12"
            maxH="12"
            m="0"
            mt="4"
          />
          <Box d="flex" flexDirection="column" pl="2" w="100%">
            <Text color="gray.500" fontSize="xs" p="0" pt="2">
              {articleData.createdAt?.slice(0, 10)}
            </Text>
            <Text p="0">yfijixxx</Text>
            <Text p="0" color="gray.500" fontSize="sm">
              クラウドチョットデキルエンジニア
            </Text>
            <Image
              align="right bottom"
              borderRadius="full"
              src="github-icon.svg"
              alt="yfijixxx"
              maxW="6"
              maxH="6"
              m="0"
              mr="2"
              mt="-6"
              ml="auto"
              p="0"
            />
          </Box>
        </Box>
        <Box d="flex" alignItems="baseline" mt="0">
          <Badge borderRadius="md" px="2" fontSize="sm">
            {articleData.category}
          </Badge>
          <Text mr="2" />
          {articleData.tag?.map((tag, idx: number) => (
            <Text key={idx} color="gray.500" mr="2">
              {tag}
              {idx + 1 == articleData.tag?.length ? "" : ","}
            </Text>
          ))}
        </Box>
      </Container>
      <Container
        maxW="4xl"
        mt="4"
        dangerouslySetInnerHTML={{
          __html: articleData.body || "お探しの記事は見つかりませんでした。",
        }}
      />
    </>
  );
};

export default Article;
