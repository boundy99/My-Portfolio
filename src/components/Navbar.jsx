import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#212121", mr: 0, width: "100%" }}
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
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">ABOUT</Typography>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">PROJECTS</Typography>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">CONTACT</Typography>
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
          >
            CONTACT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
