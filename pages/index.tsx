import { GetStaticProps } from "next";
import ListCard from "../components/ListCard";
import { Sublog } from "../src/generated/graphql";
import { Center, Box, Badge, Divider, SimpleGrid } from "@chakra-ui/react";
import About from "../components/About";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import MetaHeader from "../components/MetaHeader";
import Footer from "../components/Footer";

type Props = {
  indexData: {
    getAll: Sublog[];
  };
};

const IndexPage = ({ indexData }: Props): JSX.Element => {
  return (
    <>
      <MetaHeader metaData={{ path: "", title: "" }} />
      <About bgcolor="" />
      <Divider mb="4" />
      <Center>
        <Box>
          {[...new Set(indexData.getAll.map((item) => item.category))].map(
            (extracted, idx: number) => (
              <Badge borderRadius="full" px="2" mr="2" key={idx} fontSize="md">
                {extracted}
              </Badge>
            )
          )}
        </Box>
      </Center>
      <Center mt="4">
        <SimpleGrid columns={[1, null, 3]} spacing="4">
          {indexData.getAll.map((item: Sublog, idx: number) => (
            <ListCard cardData={item} key={idx}></ListCard>
          ))}
        </SimpleGrid>
      </Center>
      <Divider mt="4" />
      <Footer bgcolor="" />
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
