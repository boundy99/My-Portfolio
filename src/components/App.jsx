import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import About from "./About";
import ProjectCard from "./ProjectCard";
import Contact from "./Contact";
import data from "../data";
import Carousel from "react-material-ui-carousel";
import { Container, Box } from "@mui/material";

function createProjectCard(data) {
  return (
    <ProjectCard
      key={data.id}
      name={data.name}
      link={data.link}
      description={data.description}
      logoHTML={data.logoHTML}
      logoCSS={data.logoCSS}
      logoJs={data.logoJs}
      logoEJs={data.logoEJs}
      logoReact={data.logoReact}
      logoNodeJs={data.logoNodeJs}
      logoMongoDB={data.logoMongoDB}
    />
  );
}
export default function App() {
  return (
    <Container disableGutters maxWidth={false}>
      {/* ---------------Navbar--------------- */}

      <Navbar />

      {/* ---------------About--------------- */}
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "black", p: "10px", mr: "0px" }}
        id="about"
      >
        <Box sx={{ width: "25%", margin: "auto" }}>
          <Section text="ABOUT" />
        </Box>

        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            justifyContent: "center",
            maxWidth: "677px",
          }}
        >
          <About />
        </Box>
      </Container>

      {/* ---------------Projects--------------- */}

      <Container
        maxWidth={false}
        sx={{ backgroundColor: "#212121", p: "10px" }}
        id="projects"
      >
        <Box sx={{ width: "25%", margin: "auto" }}>
          <Section text="PROJECTS" />
        </Box>

        <Carousel
          navButtonsAlwaysVisible={true}
          interval={null}
          sx={{ margin: "auto", minWidth: "390px" }}
        >
          {data.map(createProjectCard)}
        </Carousel>
      </Container>

      {/* ---------------Contact--------------- */}

      <Container
        maxWidth={false}
        sx={{ backgroundColor: "#616161", p: "10px" }}
        id="contact"
      >
        <Box sx={{ width: "25%", margin: "auto" }}>
          <Section text="CONTACT" />
        </Box>

        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            justifyContent: "center",
            maxWidth: "677px",
          }}
        >
          <Contact />
        </Box>
      </Container>
    </Container>
  );
}
