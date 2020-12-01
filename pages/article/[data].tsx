import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import Article from "../../components/Article";
import { sublog } from "../../interfaces/aricle";
import AWS from "aws-sdk";
import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";

type Props = {
  payload: {
    article: {
      Items: sublog[];
    };
    content: string;
  };
};

const Detail = ({ payload }: Props): JSX.Element => (
  <Article data={payload}></Article>
);

export const getStaticPaths: GetStaticPaths = async () => {
  AWS.config.update({ region: "ap-northeast-1" });
  const DynamoDB = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: "sublog",
    IndexName: "media-createdAt-index",
    KeyConditionExpression: "media = :media",
    ExpressionAttributeValues: {
      ":media": "sublog",
    },
  };

  const articles: any = await DynamoDB.query(params).promise();

  const paths = articles.Items.map((item: sublog) => "/article/" + item.id);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.data;
  AWS.config.update({ region: "ap-northeast-1" });
  const DynamoDB = new AWS.DynamoDB.DocumentClient();

  const dynamo = {
    TableName: "sublog",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id": id,
    },
  };

  const article: sublog | any = await DynamoDB.query(dynamo)
    .promise()
    .catch((e) => console.log("ERR", e));

  const DIR = path.join(process.cwd(), "contents/");
  const filenames = fs.readdirSync(DIR);
  const file = filenames.filter((filename) =>
    filename.includes(article.Items[0].fileName)
  );

  let raw;
  try {
    raw = fs.readFileSync(path.join(DIR, `${file[0]}`), "utf8");
  } catch (err) {
    raw = "ファイルが見つかりませんでした";
  }

  const parsedContent = await remark().use(html).process(raw);
  const content = parsedContent.toString();

  return {
    props: { payload: { article, content } },
  };
};

export default Detail;
