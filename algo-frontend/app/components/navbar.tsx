"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";

import { sendSubmission } from "../util/game";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../theme/dark";

// logged in:
// home, play, notifications, profile, logout

// logged out:
// login, signup

// gameplay:
// submit button

interface NavBarProps {
  isGame?: boolean;
  gameData?: {
    question_id: number;
    lang: string;
    typed_code: string;
  };
}

export default function NavBar({ isGame = false, gameData }: NavBarProps) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleSubmit() {
    if (gameData) {
      sendSubmission(gameData);
    }
  }

  const defaultTheme = createTheme(darkTheme());

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            {!isGame && auth && (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href="#game" color="#111">
                  Play
                </Link>
              </Typography>
            )}
            {isGame && (
              <>
                <Typography
                  onClick={handleSubmit}
                  variant="h6"
                  sx={{ flexGrow: 1 }}
                >
                  29:30
                </Typography>
                <Typography
                  onClick={handleSubmit}
                  variant="h6"
                  sx={{ flexGrow: 1 }}
                >
                  317
                </Typography>
                <Typography
                  onClick={handleSubmit}
                  variant="h6"
                  sx={{ flexGrow: 1 }}
                >
                  Submit
                </Typography>
                <Typography
                  onClick={handleSubmit}
                  variant="h6"
                  sx={{ flexGrow: 1 }}
                >
                  420
                </Typography>
              </>
            )}

            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Log out</MenuItem>
                </Menu>
              </div>
            )}
            {!auth && (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Sign Up
              </Typography>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
