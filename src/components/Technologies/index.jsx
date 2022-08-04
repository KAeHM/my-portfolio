import {
  Container,
  Box,
  Image,
  Stack,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Progress,
} from "@chakra-ui/react";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

function Technologies({ activeLanguage }) {
  const [tech, setTech] = useState(0);

  return (
    <Container
      maxW={"100vw"}
      bg={"black"}
      w={"100vw"}
      minH={"570px"}
      padding={"10"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      className={"techs"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"row"}
        >
          <Heading as={"h2"} color={"white"} fontSize={"3xl"}>
            {activeLanguage.techs && activeLanguage.techs.text1}
          </Heading>
        </Stack>

        <Tabs
          zIndex={"1"}
          borderRadius={"16px"}
          bg={"black"}
          size={[null, "sm", "md", "md", "lg"]}
          minW={"320px"}
          maxW={"600px"}
          variant="soft-rounded"
          onChange={(e) => {
            setTech(e);
          }}
        >
          <TabList>
            <Tab color={"white"}>JavaScript</Tab>
            <Tab color={"white"}>CSS e HTML</Tab>
            <Tab color={"white"}>React JS</Tab>
            <Tab color={"white"}>Node JS</Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              display={"flex"}
              textAlign={"justify"}
              flexDirection={"column"}
              gap={"20px"}
              color={"white"}
            >
              <Progress colorScheme={"purple"} value={80}></Progress>
              {activeLanguage.techs && activeLanguage.techs[tech].description}
            </TabPanel>
            <TabPanel
              textAlign={"justify"}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              color={"white"}
            >
              <Progress colorScheme={"purple"} value={75}></Progress>
              {activeLanguage.techs && activeLanguage.techs[tech].description}
            </TabPanel>
            <TabPanel
              display={"flex"}
              textAlign={"justify"}
              flexDirection={"column"}
              gap={"20px"}
              color={"white"}
            >
              <Progress colorScheme={"purple"} value={65}></Progress>
              {activeLanguage.techs && activeLanguage.techs[tech].description}
            </TabPanel>
            <TabPanel
              textAlign={"justify"}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              color={"white"}
            >
              <Progress colorScheme={"purple"} isIndeterminate></Progress>
              {activeLanguage.techs && activeLanguage.techs[tech].description}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={tech}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.5 }}
        >
          <Box>
            <Image
              position={"relative"}
              zIndex={"1"}
              h={[0, 0, 380, null, 600]}
              w={[0, 0, 240, null, 370]}
              src={activeLanguage.techs && activeLanguage.techs[tech].img}
            />
          </Box>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

export default Technologies;
