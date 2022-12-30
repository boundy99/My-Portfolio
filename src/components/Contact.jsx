import React, { useState } from "react";
import { Button, Container, Grid, Link } from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Contact() {
  const [isGitHubHovered, setGitHubHovered] = useState(false);
  const [isLinkedInHovered, setLinkedInHovered] = useState(false);

  function handleGitHubChangeOn() {
    setGitHubHovered(true);
  }

  function handleGitHubChangeOut() {
    setGitHubHovered(false);
  }

  function handleLinkedInChangeOn() {
    setLinkedInHovered(true);
  }

  function handleLinkedInChangeOut() {
    setLinkedInHovered(false);
  }

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        fontSize: "30px",
        fontWeight: "10px",
        mt: "30px",
      }}
    >
      <Link
        underline="none"
        color="inherit"
        href="https://github.com/boundy99"
        target="_blank"
      >
        <GitHubIcon
          fontSize="inherit"
          onMouseOver={handleGitHubChangeOn}
          onMouseOut={handleGitHubChangeOut}
          color={isGitHubHovered ? "secondary" : "null"}
        />{" "}
      </Link>

      <Link
        underline="none"
        color="inherit"
        href="https://www.linkedin.com/in/abdoulaye-boundy-djikine-0391b1220/"
        target="_blank"
      >
        <LinkedInIcon
          fontSize="inherit"
          onMouseOver={handleLinkedInChangeOn}
          onMouseOut={handleLinkedInChangeOut}
          color={isLinkedInHovered ? "primary" : "null"}
        />{" "}
      </Link>

      <Button sx={{ color: "inherit" }} variant="outlined">
        CONTACT ME
      </Button>
    </Container>
  );
}
