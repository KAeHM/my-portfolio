import { Box, Badge, Stack } from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function IsNew(date) {
  const createDate = new Date(date);
  const dateNow = new Date(Date.now());
  const sameMonth = createDate.getMonth() === dateNow.getMonth();
  const sameYear = createDate.getFullYear() === dateNow.getFullYear();

  return sameMonth && sameYear;
}

function Card({ elem }) {
  let { name, language, created_at, description, html_url, homepage } = elem;

  return (
    <Box
      minW={["240px", "240px", "370px"]}
      maxW="385px"
      bg={"black"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"} p="6">
        <Box display="flex" gap={"10px"} alignItems="baseline">
          <Box
            color="white"
            fontWeight="semibold"
            fontSize="xl"
            textTransform="uppercase"
            noOfLines={1}
          >
            {name}
          </Box>
          <Badge borderRadius="full" px="2" colorScheme="purple">
            {IsNew(created_at) ? "New" : ""}
          </Badge>
        </Box>

        <Box color={"gray.300"} lineHeight={"tight"}>
          Linguagem Base:
          <Badge ml={"2.5"} borderRadius={"full"} px="2" colorScheme={"teal"}>
            {language}
          </Badge>
        </Box>

        <Box color={"gray.300"} noOfLines={2}>
          {description}
        </Box>

        <Stack justifyContent={"space-around"} direction={"row"}>
          <a rel="noreferrer" target="_blank" href={html_url}>
            <Box
              cursor={"pointer"}
              alignItems={"center"}
              gap={"10px"}
              color={"gray.300"}
              display={"flex"}
            >
              <FiGithub />
              Github code
            </Box>
          </a>
          {homepage && (
            <a rel="noreferrer" target="_blank" href={homepage}>
              <Box
                cursor={"pointer"}
                alignItems={"center"}
                gap={"10px"}
                color={"gray.300"}
                display={"flex"}
              >
                <FiExternalLink />
                Demo
              </Box>
            </a>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
