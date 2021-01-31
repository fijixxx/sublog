import { Sublog } from "../src/generated/graphql";
import { Box, Badge, Container, Text, Heading } from "@chakra-ui/react";
import ProfileSection from "../components/ProfSection";
import Link from "next/link";

type Props = {
  articleData: Sublog;
};

const Article = ({ articleData }: Props): JSX.Element => {
  return (
    <>
      <Container maxW="4xl" mt={["0", null, "16"]}>
        <Heading fontSize={["md", null, "3xl"]}>{articleData.title}</Heading>
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
          <Link
            href={{ pathname: "/category/[category]" }}
            as={`/category/${articleData.category}`}
          >
            <a>
              <Badge
                borderRadius="md"
                px="2"
                fontSize="sm"
                fontWeight="regular"
              >
                {articleData.category}
              </Badge>
            </a>
          </Link>
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
