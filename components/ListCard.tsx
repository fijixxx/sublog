import Link from "next/link";
import { sublog } from "../interfaces/aricle";
import { Box, Image, Badge, GridItem } from "@chakra-ui/react";

type Props = {
  data: sublog;
};

const ListCard = ({ data }: Props): JSX.Element => (
  <Link href={{ pathname: "/article/[data]" }} as={`/article/${data.id}`}>
    <a>
      <GridItem colSpan={1}>
        <Box
          maxW="xs"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mt="4"
        >
          <Image src={data.eyeCatchURL} />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {data.category}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                ml="2"
              >
                {data.createdAt.slice(0, 4)}年{data.createdAt.slice(4, 6)}月
                {data.createdAt.slice(6, 8)}日
              </Box>
            </Box>

            <Box mt="1" d="flex" alignItems="baseline">
              {[data.tag1, data.tag2, data.tag3].map((tag, idx: number) => (
                <Badge
                  variant="outline"
                  borderRadius="full"
                  px="2"
                  fontSize="0.2rem"
                  mr="2"
                  key={idx}
                >
                  {tag}
                </Badge>
              ))}
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.title}
            </Box>

            <Box fontSize="sm" color="gray.500">
              {data.body?.slice(0, 70)}
            </Box>
          </Box>
        </Box>
      </GridItem>
    </a>
  </Link>
);

export default ListCard;
