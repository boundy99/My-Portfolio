import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Menu,
  Button,
  MenuItem,
  Link,
} from "@mui/material";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar disableGutters sx={{ height: "18px", pl: "10px", pr: "10px" }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 400,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          MYPORTFOLIO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <Link
                onClick={handleCloseNavMenu}
                href="#about"
                underline="none"
                color="inherit"
                textAlign="center"
              >
                <Typography>ABOUT</Typography>
              </Link>
            </MenuItem>

            <MenuItem sx={{ justifyContent: "center" }}>
              <Link
                onClick={handleCloseNavMenu}
                href="#projects"
                underline="none"
                color="inherit"
              >
                <Typography textAlign="center">PROJECTS</Typography>
              </Link>
            </MenuItem>

            <MenuItem sx={{ justifyContent: "center" }}>
              <Link
                onClick={handleCloseNavMenu}
                href="#contact"
                underline="none"
                color="inherit"
              >
                <Typography textAlign="center">CONTACT</Typography>
              </Link>
            </MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "Raleway",
            fontWeight: 400,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          MYPORTFOLIO
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "flex-end",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
            href="#about"
          >
            ABOUT
          </Button>

          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
            href="#projects"
          >
            PROJECTS
          </Button>

          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
            href="#contact"
          >
            CONTACT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
