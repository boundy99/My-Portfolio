import React, { useState } from "react";
import { Typography, Container, Grid, Link } from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Contact() {
  const [isHovered, setHovered] = useState(false);

  function handleChangeOn() {
    setHovered(true);
  }

  function handleChangeOut() {
    setHovered(false);
  }

  return (
    <Container sx={{ fontSize: "20px", fontWeight: "10px" }}>
      <Typography variant="inherit">
        Email: abdoulayeboundydjikine@gmail.com
      </Typography>
      <Grid sx={{ fontSize: "30px", fontWeight: "10px", mt: "30px" }}>
        <Link
          sx={{ p: "10px" }}
          underline="none"
          color="inherit"
          href="https://github.com/boundy99"
          target="_blank"
        >
          <GitHubIcon
            fontSize="inherit"
            onMouseOver={handleChangeOn}
            onMouseOut={handleChangeOut}
            color={isHovered ? "action" : "null"}
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
            onMouseOver={handleChangeOn}
            onMouseOut={handleChangeOut}
            color={isHovered ? "action" : "null"}
          />{" "}
        </Link>
      </Grid>
    </Container>
  );
}
