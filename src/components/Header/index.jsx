import {
  Box,
  Container,
  Heading,
  Highlight,
  Text,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Select,
  Stack,
  Image,
} from "@chakra-ui/react";
import ParticlesComponents from "../Particles";

import char from "../../utils/char.gif";
import { Link } from "react-scroll";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { GiCharacter, GiSchoolBag } from "react-icons/gi";
import { FaFireAlt } from "react-icons/fa";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Header({ setLanguage, activeLanguage }) {
  return (
    <>
      <Container
        padding={"0"}
        width={"100vw"}
        maxW={"100vw"}
        height={"100vh"}
        bg={"black"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Stack zIndex={"1"} margin={"5"} direction={"row"}>
          <Image
            borderRadius={"10px"}
            h="40px"
            w="60px"
            src={activeLanguage.icon ? activeLanguage.icon : ""}
          />
          <Select
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            fontWeight={"700"}
            focusBorderColor="#a38eff"
            variant={"filled"}
            bg="#A38EFF"
            w={"138px"}
          >
            <option value="Portuguese">Portuguese</option>
            <option value="English">English</option>
          </Select>
        </Stack>

        <Box
          width={"100vw"}
          height={"100%"}
          display={"flex"}
          alignSelf={"center"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={"20px"}
          textAlign={"center"}
        >
          <Box
            position={"absolute"}
            transform={"translate(-50%)"}
            left={"50%"}
            display={"flex"}
            maxW={"600px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"30px"}
            textAlign={"center"}
          >
            <Heading
              zIndex={"1"}
              maxW={"600px"}
              as={"h1"}
              size={"xl"}
              color="#FFFFFF"
            >
              <Highlight
                query={["developer", "desenvolvedor", "portfólio", "portfolio"]}
                styles={{ color: "#A38EFF" }}
              >
                {activeLanguage.header.text1 ? activeLanguage.header.text1 : ""}
              </Highlight>
            </Heading>

            <Text as={"div"} h={"65px"} color={"#e9ecef"} maxW={"400px"}>
              <Typewriter
                options={{
                  loop: true,
                  delay: 50,
                  strings: [
                    activeLanguage.header.text2
                      ? activeLanguage.header.text2
                      : "",
                  ],
                  autoStart: true,
                }}
              />
            </Text>

            <Box display={"flex"} gap={"20px"}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/KAeHM"
              >
                <IconButton
                  borderRadius={"full"}
                  border={"none"}
                  variant={"outline"}
                  size={"lg"}
                  icon={<FiGithub size={"30px"} color={"#A38EFF"} />}
                />
              </a>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/samuel-lima-236661202/"
              >
                <IconButton
                  borderRadius={"full"}
                  border={"none"}
                  variant={"outline"}
                  size={"lg"}
                  icon={<FiLinkedin size={"30px"} color={"#A38EFF"} />}
                />
              </a>
            </Box>
          </Box>

          <motion.div
            style={{
              zIndex: "1",
              marginRight: "3%",
            }}
            animate={{ y: 80 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
            }}
          >
            <Image
              h={[0, 0, 350, null, 500]}
              w={[0, 0, 230, null, 340]}
              src={char}
            />
          </motion.div>
        </Box>

        <Box
          alignSelf={"center"}
          margin={"10"}
          zIndex={"1"}
          display={"flex"}
          w={"100vw"}
          maxW={"600px"}
          justifyContent={"space-evenly"}
        >
          <Popover trigger="hover">
            <Link to="about" smooth={true} duration={900}>
              <PopoverTrigger>
                <IconButton
                  bg={"#A38eFF"}
                  color={"black"}
                  icon={<GiCharacter size={"25px"} />}
                />
              </PopoverTrigger>
            </Link>

            <PopoverContent w={"104px"}>
              <PopoverArrow />
              <PopoverBody>
                {activeLanguage.header.button1
                  ? activeLanguage.header.button1
                  : ""}
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover">
            <Link to="techs" smooth={true} duration={900}>
              <PopoverTrigger>
                <IconButton
                  bg={"#A38eFF"}
                  color={"black"}
                  icon={<FaFireAlt size={"25px"} />}
                />
              </PopoverTrigger>
            </Link>

            <PopoverContent w={"110px"}>
              <PopoverArrow />
              <PopoverBody>
                {activeLanguage.header.button2
                  ? activeLanguage.header.button2
                  : ""}
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover">
            <Link to="projects" smooth={true} duration={900}>
              <PopoverTrigger>
                <IconButton
                  bg={"#A38eFF"}
                  color={"black"}
                  icon={<GiSchoolBag size={"25px"} />}
                />
              </PopoverTrigger>
            </Link>

            <PopoverContent w={"85px"}>
              <PopoverArrow />
              <PopoverBody>
                {activeLanguage.header.button3
                  ? activeLanguage.header.button3
                  : ""}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Container>
      <ParticlesComponents />
    </>
  );
}

export default Header;
