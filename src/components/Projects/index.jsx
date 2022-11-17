import { Container, Box, Heading } from "@chakra-ui/react";
import Card from "../Card";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { excludeProjects } from "../../sources/techs.js";

function Projects({ activeLanguage }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/KAeHM/repos")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container
      maxW={"100vw"}
      minH={"658px"}
      bg={"#CEC2FF"}
      position={"relative"}
      zIndex={"1"}
      w={"100vw"}
      padding={"10"}
      display={"flex"}
      gap={"10"}
      flexDirection={"column"}
      justifyContent={"center"}
      className={"projects"}
    >
      <Heading fontSize={"3xl"} color={"black"} textAlign={"center"}>
        {activeLanguage && activeLanguage.language === "Portuguese"
          ? "Projetos Relevantes"
          : "Relevant Projects"}
      </Heading>

      <Box
        overflowX={"scroll"}
        css={{
          "&::-webkit-scrollbar": {
            width: "2px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "black",
            borderRadius: "10px",
          },
        }}
        display={"inline-flex"}
        gap={"30px"}
        flexWrap={"nowrap"}
      >
        {data &&
          data.map((elem, index) => {
            if (!excludeProjects.includes(elem.name)) {
              return <Card elem={elem} key={index}></Card>;
            }
          })}
      </Box>
    </Container>
  );
}

export default Projects;
