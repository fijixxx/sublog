import { Box, Image, Text } from "@chakra-ui/react";

type Props = {
  timestamp?: string;
};

const ProfileSection = ({ timestamp }: Props): JSX.Element => {
  const cloudinaryBaseURL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;

  return (
    <Box d="flex" mt="4">
      <Image
        borderRadius="full"
        src={cloudinaryBaseURL + "20085584.png"}
        alt="yfijixxx"
        maxW="12"
        maxH="12"
        m="0"
        mt="4"
      />
      <Box d="flex" flexDirection="column" pl="2" w="100%">
        <Text color="gray.500" fontSize="xs" p="0" pt="2">
          {timestamp?.slice(0, 10)}
        </Text>
        <a href="https://github.com/fijixxx">
          <Text p="0" color="black">
            yfijixxx
          </Text>
        </a>
        <Text p="0" color="gray.500" fontSize="sm">
          クラウドチョットデキルエンジニア
        </Text>
        <a href="https://github.com/fijixxx">
          <Image
            align="right bottom"
            borderRadius="full"
            src={cloudinaryBaseURL + "github-icon.svg"}
            alt="yfijixxx"
            maxW="6"
            maxH="6"
            m="0"
            mr="2"
            mt="-6"
            ml="auto"
            p="0"
          />
        </a>
      </Box>
    </Box>
  );
};

export default ProfileSection;
