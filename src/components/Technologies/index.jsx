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
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiHtml5,
  SiStyledcomponents,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiTrello,
  SiNotion,
} from "react-icons/si";

import { GrInspect, GrGroup, GrValidate, GrUserManager } from "react-icons/gr";
import TechIcon from "../TechIcon";

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
            <Tab color={"white"}>
              {activeLanguage.techs && activeLanguage.techs.tab1}
            </Tab>
            <Tab color={"white"}>
              {activeLanguage.techs && activeLanguage.techs.tab2}
            </Tab>
            <Tab color={"white"}>
              {activeLanguage.techs && activeLanguage.techs.tab3}
            </Tab>
            <Tab color={"white"}>
              {activeLanguage.techs && activeLanguage.techs.tab4}
            </Tab>
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
              <Text>
                {activeLanguage.techs && activeLanguage.techs[tech].description}
              </Text>
              <Box display={"flex"} gap={"10px"} flexWrap={"wrap"}>
                <TechIcon Icon={SiReact} name={"React"} />
                <TechIcon Icon={SiJavascript} name={"JavaScript"} />
                <TechIcon Icon={SiTypescript} name={"TypeScript"} />
                <TechIcon Icon={SiRedux} name={"Redux"} />
                <TechIcon Icon={SiHtml5} name={"HTML5"} />
                <TechIcon
                  Icon={SiStyledcomponents}
                  name={"Styled Components"}
                />
              </Box>
            </TabPanel>
            <TabPanel
              textAlign={"justify"}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              color={"white"}
            >
              <Progress colorScheme={"purple"} value={80}></Progress>
              <Text>
                {activeLanguage.techs && activeLanguage.techs[tech].description}
              </Text>
              <Box display={"flex"} gap={"10px"} flexWrap={"wrap"}>
                <TechIcon Icon={SiNodedotjs} name={"NodeJS"} />
                <TechIcon Icon={SiJavascript} name={"JavaScript"} />
                <TechIcon Icon={SiTypescript} name={"TypeScript"} />
                <TechIcon Icon={SiPython} name={"Python"} />
                <TechIcon Icon={SiDjango} name={"Django"} />
                <TechIcon Icon={SiDocker} name={"Docker"} />
                <TechIcon Icon={SiPostgresql} name={"Postgres"} />
                <TechIcon Icon={SiMongodb} name={"Mongo"} />
              </Box>
            </TabPanel>
            <TabPanel
              display={"flex"}
              textAlign={"justify"}
              flexDirection={"column"}
              gap={"20px"}
              color={"white"}
            >
              <Progress colorScheme={"purple"} value={70}></Progress>
              <Text>
                {activeLanguage.techs && activeLanguage.techs[tech].description}
              </Text>
              <Box display={"flex"} gap={"10px"} flexWrap={"wrap"}>
                <TechIcon Icon={SiFigma} name={"Figma"} />
                <TechIcon Icon={SiTrello} name={"Trello"} />
                <TechIcon Icon={SiNotion} name={"Notion"} />
              </Box>
            </TabPanel>
            <TabPanel
              textAlign={"justify"}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              color={"white"}
            >
              <Progress colorScheme={"purple"} isIndeterminate></Progress>
              <Text>
                {activeLanguage.techs && activeLanguage.techs[tech].description}
              </Text>
              <Box display={"flex"} gap={"10px"} flexWrap={"wrap"}>
                <TechIcon Icon={GrInspect} name={"Tech Lead"} />
                <TechIcon Icon={GrGroup} name={"Scrum Master"} />
                <TechIcon Icon={GrValidate} name={"Product Owner"} />
                <TechIcon Icon={GrUserManager} name={"Mentor Tech"} />
              </Box>
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
