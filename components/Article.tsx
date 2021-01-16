import { Sublog } from "../src/generated/graphql";
import { Box, Badge, Container, Text, Heading } from "@chakra-ui/react";
import ProfileSection from "../components/ProfSection";

type Props = {
  articleData: Sublog;
};

const Article = ({ articleData }: Props): JSX.Element => {
  return (
    <>
      <Container maxW="4xl" mt="16">
        <Heading>{articleData.title}</Heading>
        <ProfileSection timestamp={articleData.createdAt || ""} />

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
          <Badge borderRadius="md" px="2" fontSize="sm" fontWeight="regular">
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
