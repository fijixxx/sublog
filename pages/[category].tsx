import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import ListCard from "../components/ListCard";
import { Sublog } from "../src/generated/graphql";
import { SimpleGrid, Container, Heading } from "@chakra-ui/react";
import About from "../components/About";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import MetaHeader from "../components/MetaHeader";
import Footer from "../components/Footer";

type Props = {
  categoryData: {
    getByCategory: Sublog[];
  };
};

const Category = ({ categoryData }: Props): JSX.Element => {
  return (
    <>
      <MetaHeader metaData={{ path: "", title: "" }} />
      <About />
      <Container mt="4" mb="4" maxW="4xl">
        <Heading>{categoryData.getByCategory[0].category}</Heading>
        <SimpleGrid columns={[1, null, 1]} spacing="4" maxW="4xl">
          {categoryData.getByCategory.map((item: Sublog, idx: number) => (
            <ListCard cardData={item} key={idx} />
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const api_endpoint = process.env.API_ENDPOINT || "";
  const client = new ApolloClient({
    uri: api_endpoint,
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: gql`
      {
        getAll {
          category
        }
      }
    `,
  });
  const indexData = response.data;

  const paths = indexData.getAll.map((item: Sublog) => "/" + item.category);
  return { paths, fallback: false };
};

/**
 * カテゴリ一覧データを取得
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category || "";
  const api_endpoint = process.env.API_ENDPOINT || "";
  const client = new ApolloClient({
    uri: api_endpoint,
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: gql`
      query Query($category: String) {
        getByCategory(category: $category) {
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
    variables: { category },
  });
  const categoryData: Props = response.data;

  return {
    props: { categoryData },
  };
};

export default Category;
