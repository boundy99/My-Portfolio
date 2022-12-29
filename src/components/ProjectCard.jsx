import React, { useState } from "react";
import Logo from "./Logo";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  Grid,
  Link,
} from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
// import AddIcon from '@mui/icons-material/Add';

export default function ProjectCard(props) {
  const [isHovered, setHovered] = useState(false);

  function handleChangeOn() {
    setHovered(true);
  }

  function handleChangeOut() {
    setHovered(false);
  }
  return (
    <Container maxWidth={false} disableGutters sx={{ maxWidth: "650px" }}>
      <Card sx={{ borderRadius: "20px", mb: "30px" }}>
        <Box sx={{}}>
          <Typography
            variant="h4"
            sx={{
              pt: "25px",
              color: "white",
              backgroundColor: "#f50057",
              textAlign: "center",
            }}
          >
            {" "}
            {props.name}{" "}
            <Link
              underline="none"
              color="inherit"
              href={props.link}
              target="_blank"
            >
              <GitHubIcon
                fontSize="inherit"
                onMouseOver={handleChangeOn}
                onMouseOut={handleChangeOut}
                color={isHovered ? "action" : "null"}
              />{" "}
            </Link>
          </Typography>
        </Box>

        <CardContent>
          <Typography
            variant="h5"
            sx={{
              pb: "15px",
              textAlign: "center",
              color: "#01579b",
            }}
          >
            DESCRIPTION{" "}
          </Typography>
          <Typography variant="h6" sx={{ pb: "15px", textAlign: "center" }}>
            {props.description}
          </Typography>
          <Typography
            variant="h5"
            sx={{ pb: "15px", textAlign: "center", color: "#01579b" }}
          >
            TOOLS USED{" "}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid container sx={{ justifyContent: "center" }}>
              <Logo logo={props.logoHTML} />
              <Logo logo={props.logoCSS} />
              <Logo logo={props.logoJs} />
              <Logo logo={props.logoEJs} />
              <Logo logo={props.logoReact} />
              <Logo logo={props.logoNodeJs} />
              <Logo logo={props.logoMongoDB} />
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
