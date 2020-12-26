import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import Article from "../../components/Article";
import { sublog } from "../../interfaces/aricle";
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

/**
 * 生成したい記事ページのパスの一覧を出力する
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/articles");
  const res_serialized = await response.json();
  const articles = res_serialized.articles;

  const paths = articles.Items.map((item: sublog) => "/article/" + item.id);
  return { paths, fallback: false };
};

/**
 * 記事の詳細データを出力する
 * @param params.data 出力したい記事の id
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.data;
  const response = await fetch(`http://localhost:3000/api/article?id=${id}`);
  const res_serialized = await response.json();
  const article = res_serialized.article;

  const DIR = path.join(process.cwd(), "content/text/");
  const filenames = fs.readdirSync(DIR);
  const file = filenames.filter((filename) =>
    filename.includes(article.Items[0].fileName)
  );

  let raw;
  try {
    raw = fs.readFileSync(path.join(DIR, `${file[0]}`), "utf8");
  } catch (err) {
    raw = "お探しの記事は見つかりませんでした。";
  }

  const parsedContent = await remark().use(html).process(raw);
  const content = parsedContent.toString();

  return {
    props: { payload: { article, content } },
  };
};

export default Detail;
