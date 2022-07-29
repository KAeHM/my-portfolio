import { Box, Badge, Stack } from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Card({ elem }) {
  let { title, shouldNew, languages, description } = elem;

  return (
    <Box
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
          >
            {title}
          </Box>
          <Badge borderRadius="full" px="2" colorScheme="purple">
            {shouldNew ? "New" : ""}
          </Badge>
        </Box>

        <Box color={"gray.300"} lineHeight={"tight"}>
          Linguagens:
          {languages.map((elem, index) => {
            return (
              <Badge
                key={index}
                ml={"2.5"}
                borderRadius={"full"}
                px="2"
                colorScheme={"teal"}
              >
                {elem}
              </Badge>
            );
          })}
        </Box>

        <Box color={"gray.300"} noOfLines={2}>
          {description}
        </Box>

        <Stack justifyContent={"space-around"} direction={"row"}>
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
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
