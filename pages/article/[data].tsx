import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import Article from "../../components/Article";
import { Sublog } from "../../src/generated/graphql";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import MetaHeader from "../../components/MetaHeader";
import Footer from "../../components/Footer";
import About from "../../components/About";

type Props = {
  articleData: Sublog;
};

const Detail = ({ articleData }: Props): JSX.Element => {
  const currPath = "/article/" + articleData.id + ".html";

  return (
    <>
      <MetaHeader
        metaData={{ path: currPath, title: articleData.title || "" }}
      />
      <About bgcolor={articleData.eyeCatchURL || ""} />
      <Article articleData={articleData}></Article>
      <Footer bgcolor={articleData.eyeCatchURL || ""} />
    </>
  );
};

/**
 * 生成したい記事ページのパスの一覧を出力する
 */
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
          id
        }
      }
    `,
  });
  const indexData = response.data;

  const paths = indexData.getAll.map((item: Sublog) => "/article/" + item.id);
  return { paths, fallback: false };
};

/**
 * 記事の詳細データを出力する
 * @param params.data 出力したい記事の id
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.data || "";
  const api_endpoint = process.env.API_ENDPOINT || "";
  const client = new ApolloClient({
    uri: api_endpoint,
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: gql`
      query Query($id: String) {
        getById(id: $id) {
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
    variables: { id },
  });
  const articleData = response.data.getById;

  return {
    props: { articleData },
  };
};

export default Detail;
