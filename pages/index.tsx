import { GetStaticProps } from "next";
import ListCard from "../components/ListCard";
import { Sublog } from "../src/generated/graphql";
import { Box, Badge, SimpleGrid, Container, Text } from "@chakra-ui/react";
import About from "../components/About";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import MetaHeader from "../components/MetaHeader";
import Footer from "../components/Footer";
import Link from "next/link";

type Props = {
  indexData: {
    getAll: Sublog[];
  };
};

const IndexPage = ({ indexData }: Props): JSX.Element => {
  return (
    <>
      <MetaHeader metaData={{ path: "", title: "" }} />
      <About />
      <Container mt="4" mb="4" maxW="4xl" d="flex">
        <SimpleGrid columns={[1, null, 1]} spacing="4" maxW="4xl">
          {indexData.getAll.map((item: Sublog, idx: number) => (
            <ListCard cardData={item} key={idx} />
          ))}
        </SimpleGrid>
        <Box mt="4" d={["none", null, "initial"]}>
          <Box>
            <Text as="h2">Categories</Text>
          </Box>
          {[...new Set(indexData.getAll.map((item) => item.category))].map(
            (extracted, idx: number) => (
              <Link href="[category]" as={extracted || ""} key={idx}>
                <a>
                  <Badge
                    borderRadius="full"
                    px="2"
                    mt="2"
                    mr="2"
                    key={idx}
                    fontSize="sm"
                    fontWeight="regular"
                    textTransform="none"
                  >
                    {extracted}
                  </Badge>
                </a>
              </Link>
            )
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

/**
 * 記事の一覧データを取得
 */
export const getStaticProps: GetStaticProps = async () => {
  const api_endpoint = process.env.API_ENDPOINT || "";
  const client = new ApolloClient({
    uri: api_endpoint,
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: gql`
      {
        getAll {
          id
          createdAt
          fileName
          category
          media
          title
          eyeCatchURL
          tag
          updatedAt
          body
        }
      }
    `,
  });
  const indexData: Props = response.data;

  return {
    props: { indexData },
  };
};

export default IndexPage;
