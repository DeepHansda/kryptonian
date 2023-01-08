import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [linkActive, setLinkActive] = useState(false);
  const navItem = [
    {
      name: "home",
      link: "/home",
    },
    {
      name: "All Coins",
      link: "/allCoins",
    },
    {
      name: "news",
      link: "/news",
    },
  ];
  const aciveStyle = {
    "button": {
      background: "#000",
    },
  };
  console.log(linkActive)
  return (
    <Fragment>
      <Container>
        <AppBar
          component="nav"
          position="static"
          variant="elevation"
          elevation={3}
          sx={{ background: "#fff" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box edge="start">
              <Typography
                variant="h4"
                fontWeight="900"
                textTransform="uppercase"
                sx={{
                  background: "linear-gradient(to right, #c0392b, #8e44ad)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Kryptonite
              </Typography>
            </Box>

            <Stack direction="row" spacing={2}>
              {navItem.map((item, index) => (
                <NavLink
                  to={item.link}
                  style={(isActive) => 
                    isActive ? aciveStyle : undefined
                  }
                >
                  <Button
                    // sx={{
                    //   background: `${
                    //     linkActive
                    //       ? "#8e44ad"
                    //       : "inherit"
                    //   }`,
                    // }}
                  >
                    {item.name}
                  </Button>
                </NavLink>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
      </Container>
    </Fragment>
  );
}

export default Navbar;
