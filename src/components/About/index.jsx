import { Container, Box, Image, Stack, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import char from "../../utils/char2.png";
import me from "../../utils/me.jpg";

function About({ activeLanguage }) {
  return (
    <Container
      maxW={"100vw"}
      bg={"#CEC2FF"}
      position={"relative"}
      zIndex={"1"}
      w={"100vw"}
      padding={"10"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      className={"about"}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Box>
          <Image
            h={[0, 0, 380, null, 600]}
            w={[0, 0, 240, null, 370]}
            src={char}
          />
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Stack alignItems={"center"} direction={"row"}>
            <Image borderRadius={"full"} boxSize={"80px"} src={me} />
            <Heading as={"h2"} fontSize={"2xl"}>
              {activeLanguage && activeLanguage.about.text1}
            </Heading>
          </Stack>

          <Text fontSize={"xl"} maxW={"550px"}>
            {activeLanguage && activeLanguage.about.text2}
          </Text>
        </Box>
      </motion.div>
    </Container>
  );
}

export default About;
