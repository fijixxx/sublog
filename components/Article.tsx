import { Sublog } from "../src/generated/graphql";
import { Box, Badge, Container, Text, Image, Heading } from "@chakra-ui/react";

type Props = {
  articleData: Sublog;
};

const Article = ({ articleData }: Props): JSX.Element => {
  return (
    <>
      <Container maxW="4xl" mt="16">
        <Heading>{articleData.title}</Heading>

        <Box d="flex" mt="4">
          <Image
            borderRadius="full"
            src="https://sublog-assets.s3-ap-northeast-1.amazonaws.com/public/20085584.png"
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
            <a href="https://github.com/fijixxx">
              <Text p="0" color="black">
                yfijixxx
              </Text>
            </a>
            <Text p="0" color="gray.500" fontSize="sm">
              クラウドチョットデキルエンジニア
            </Text>
            <a href="https://github.com/fijixxx">
              <Image
                align="right bottom"
                borderRadius="full"
                src="https://sublog-assets.s3-ap-northeast-1.amazonaws.com/public/github-icon.svg"
                alt="yfijixxx"
                maxW="6"
                maxH="6"
                m="0"
                mr="2"
                mt="-6"
                ml="auto"
                p="0"
              />
            </a>
          </Box>
        </Box>
        <Box
          bg={articleData.eyeCatchURL || ""}
          w="100%"
          h="4px"
          maxW="4xl"
          mt="8"
        />
      </Container>

      <Container
        maxW="4xl"
        mt="8"
        dangerouslySetInnerHTML={{
          __html: articleData.body || "お探しの記事は見つかりませんでした。",
        }}
      />

      <Container maxW="4xl">
        <Box d="flex" alignItems="baseline" mt="8" mb="8">
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
    </>
  );
};

export default Article;
