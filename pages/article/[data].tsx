//import { GetServerSideProps } from "next";
import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import Layout from "../../components/Layout";
import Article from "../../components/Article";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { getSublog } from "../../src/graphql/queries";
import { sublog } from "../../interfaces/aricle";
import { listSublogs } from "../../src/graphql/queries";

type Props = {
  article: {
    data: {
      getSublog: sublog;
    };
  };
};

const Detail = ({ article }: Props): JSX.Element => (
  <Layout>
    <Article data={article}></Article>
  </Layout>
);

//export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//  const article = await detailQuery(
//    query.category,
//    query.data
//  ).catch((err: unknown) => console.error("ERR: ", err));
//  return {
//    props: { article },
//  };
//};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  Amplify.configure(awsconfig);
  const articles: any = await API.graphql(graphqlOperation(listSublogs));

  const paths = articles.data.listSublogs.items.map(
    (getSublog: { createdAt: any }) => ({
      params: { data: getSublog.createdAt },
    })
  );

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const date = params?.data ? params.data : "99999999";
  const article = await detailQuery(
    "testcategory",
    date
  ).catch((err: unknown) => console.error("ERR: ", err));
  return {
    props: { article },
  };
};

export const detailQuery = async (
  category: string | string[],
  createdAt: string | string[]
  //): Promise<GraphQLResult<object> | Observable<object>> => {
) => {
  Amplify.configure(awsconfig);

  return await API.graphql(
    graphqlOperation(getSublog, { category, createdAt })
  );
};

export default Detail;
