import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import Article from "../../components/Article";
import { Sublog } from "../../src/generated/graphql";
import { Divider } from "@chakra-ui/react";
import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import MetaHeader from "../../components/MetaHeader";
import Footer from "../../components/Footer";
import About from "../../components/About";

type Props = {
  payload: {
    articleData: Sublog;
    content: string;
  };
};

const Detail = ({ payload }: Props): JSX.Element => {
  const currPath = "/article/" + payload.articleData.id + ".html";

  return (
    <>
      <MetaHeader
        metaData={{ path: currPath, title: payload.articleData.title || "" }}
      />
      <About bgcolor={payload.articleData.eyeCatchURL || ""} />
      <Divider mb="4" />
      <Article payload={payload}></Article>
      <Divider mt="4" />
      <Footer bgcolor={payload.articleData.eyeCatchURL || ""} />
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
        }
      }
    `,
    variables: { id },
  });
  const articleData = response.data.getById;

  const DIR = path.join(process.cwd(), "content/text/");
  const filenames = fs.readdirSync(DIR);
  const file = filenames.filter((filename) =>
    filename.includes(articleData.fileName)
  );

  const raw = { data: "" };
  try {
    raw.data = fs.readFileSync(path.join(DIR, `${file[0]}`), "utf8");
  } catch (err) {
    raw.data = "お探しの記事は見つかりませんでした。";
  }

  const parsedContent = await remark().use(html).process(raw.data);
  const content = parsedContent.toString();

  return {
    props: { payload: { articleData, content } },
  };
};

export default Detail;
