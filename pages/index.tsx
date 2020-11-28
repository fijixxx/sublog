import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports";
import { listSublogs } from "../src/graphql/queries";
import Detail from "../components/Detail";
import { sublog } from "../interfaces/aricle";

type Props = {
  articles: {
    data: {
      listSublogs: {
        items: sublog[];
      };
    };
  };
};

const top = ({ articles }: Props): JSX.Element => (
  <Layout>
    <ul>
      {articles.data.listSublogs.items.map((item: sublog, idx: number) => (
        <li key={idx}>
          <Detail data={item}></Detail>
        </li>
      ))}
    </ul>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const articles = await topQuery().catch((err: unknown) =>
    console.error("ERR: ", err)
  );
  return {
    props: { articles },
  };
};

//export const topQuery = async (): Promise<any> => {
export const topQuery = async () =>
  //: Promise<GraphQLResult<object> | Observable<object>>
  {
    Amplify.configure(awsconfig);

    return await API.graphql(graphqlOperation(listSublogs));
  };

export default top;
