import { Container, Box, Heading } from "@chakra-ui/react";
import Card from "../Card";
import techs from "../../sources/techs";

function Projects({ activeLanguage }) {
  return (
    <Container
      maxW={"100vw"}
      bg={"#CEC2FF"}
      position={"relative"}
      zIndex={"1"}
      w={"100vw"}
      padding={"10"}
      display={"flex"}
      gap={"10"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      className={"projects"}
    >
      <Heading fontSize={"3xl"} color={"black"}>
        {activeLanguage === "Portuguese" ? "Projetos" : "Projects"}
      </Heading>

      <Box display={"flex"} gap={"30px"} flexWrap={"wrap"} maxW={"800px"}>
        {techs.map((elem, index) => {
          return <Card elem={elem} key={index}></Card>;
        })}
      </Box>
    </Container>
  );
}

export default Projects;
