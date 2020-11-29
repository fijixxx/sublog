import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
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
  <Article data={article}></Article>
);

export const getStaticPaths: GetStaticPaths = async () => {
  Amplify.configure(awsconfig);
  const articles: any = await API.graphql(graphqlOperation(listSublogs));

  const paths = articles.data.listSublogs.items.map(
    (getSublog: { createdAt: any }) => ({
      params: { data: getSublog.createdAt },
    })
  );

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
) => {
  Amplify.configure(awsconfig);

  return await API.graphql(
    graphqlOperation(getSublog, { category, createdAt })
  );
};

export default Detail;
