import React from "react";
import { Container, Typography } from "@mui/material";
export default function Header() {
  return (
    <Container sx={{ fontSize: "25px", fontWeight: "10px" }}>
      <Typography variant="h1">Hi, I am Abdoulaye</Typography>

      <Typography variant="" sx={{ pt: "18px", pb: "50px" }}>
        A FULL STACK WEB DEVELOPER
      </Typography>
    </Container>
  );
}
