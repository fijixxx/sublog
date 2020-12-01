import Link from "next/link";
import { sublog } from "../interfaces/aricle";

type Props = {
  data: sublog;
};

const Detail = ({ data }: Props): JSX.Element => (
  <Link
    href={{ pathname: "/article/[data]" }}
    as={`/article/${data.createdAt}`}
  >
    <a>
      {data.createdAt} | {data.title}
    </a>
  </Link>
);

export default Detail;
