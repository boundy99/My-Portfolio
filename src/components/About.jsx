import React from "react";
import { Container, Typography } from "@mui/material";
export default function About() {
  return (
    <Container sx={{ fontSize: "25px", fontWeight: "10px" }}>
      <Typography variant="inherit" sx={{ pt: "18px" }}>
        I am currently enrolled in a computer science program at The City
        College of New York, where I am working towards my Bachelor's degree. I
        have previously earned an Associate's degree in computer science from
        Borough of Manhattan Community College, where I was awarded Dean's list
        for multiple semesters
      </Typography>

      <Typography variant="inherit" sx={{ pt: "18px", pb: "50px" }}>
        I'm a computer science major presently enrolled at City College of New
        York. I've been working on algorithms and object oriented programming.
        I've worked on several solo and group projects, including a Google
        Cardboard virtual reality project that demonstrates how pointers operate
        in a linked list and full stack web development that use react and node.
        js. In my technical projects, I have worked on a Tinder UI clone for
        dogs using HTML, CSS, and Bootstrap, an ongoing Instagram clone using
        React, Node.js, and other technologies, and a virtual reality project
        using C# and Unity to teach linked list data structures.
      </Typography>
    </Container>
  );
}
