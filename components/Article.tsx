import { sublog } from "../interfaces/aricle";

type Props = {
  data: {
    data: {
      getSublog: sublog;
    };
  };
};

const Article = ({ data }: Props): JSX.Element => (
  <div>
    <p>{data.data.getSublog.createdAt}</p>
    <h5>{data.data.getSublog.category}</h5>
    <h2>{data.data.getSublog.title}</h2>
    <div>{data.data.getSublog.body}</div>
  </div>
);

export default Article;
