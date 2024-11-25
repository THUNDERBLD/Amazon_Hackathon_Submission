import * as React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import TemporaryDrawer from "./Sidebar"; // Import Sidebar component
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon for mobile navbar

const pages = ["Dashboard",  "Agents", "Docs", "Payments", "Tracking", "Analytics", "carbonquest"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setMobileMenuOpen(true);

  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileMenuOpen(false);
  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);

  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const TruckIcon = ({ sx }) => (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      sx={{ width: "2 rem", height: "2rem", color: "#d16e11", ...sx }}
      fill="none"
    >
      <path d="M10 9V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2 16.5355 2 15.357 2 13V9C2 6.64298 2 5.46447 2.73223 4.73223C3.46447 4 4.64298 4 7 4H10.3C11.4168 4 11.9752 4 12.4271 4.14683C13.3404 4.44358 14.0564 5.15964 14.3532 6.07295C14.5 6.52485 14.5 7.08323 14.5 8.2C14.5 8.94451 14.5 9.31677 14.5979 9.61803C14.7957 10.2269 15.2731 10.7043 15.882 10.9021C16.1832 11 16.5555 11 17.3 11H22V13C22 15.357 22 16.5355 21.2678 17.2678C20.7809 17.7546 20.0967 17.9178 19 17.9724M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Box>
  );



  return (
    <AppBar position="static" sx={{ height: "80px", paddingX: 2, width: "full", backgroundColor: "#232f3e" }}>

      <Toolbar disableGutters>
        {/* Sidebar Button */}
        <TemporaryDrawer />

        {/* Logo */}
        <TruckIcon sx={{ display: { xs: "none", md: "flex" }, ml: 1, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".22rem",
            color: "#d16e11",
            textDecoration: "none",
            fontSize: "1.5rem",
            mr: 2,
          }}
        >
          AmazTrade-Suite

        </Typography>
                {/* Mobile Menu Icon */}
                <IconButton
          size="large"
          aria-label="menu"
          sx={{ color: "white", display: { xs: "flex", md: "none" } }}
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>


        {/* Centered Navigation */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              component={Link}
              to={page === "Dashboard" ? "/dashboard" : `/${page.toLowerCase()}`}
              sx={{
                my: 2,
                mx: 2,
                color: "white",
                display: "block",
                fontSize: "0.875rem",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Menu
            anchorEl={anchorElNav}
            open={mobileMenuOpen}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              top: "80px", // Ensuring the menu appears below the navbar
              left: "0",
              right: "0",
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <div className="">
                <Button
                  className="mx-4"
                  component={Link}
                  to={page === "Dashboard" ? "/dashboard" : `/${page.toLowerCase()}`}
                  sx={{ color: "black" }}
                >
                  {page}
                </Button>
                </div>
              </MenuItem>
            ))}
          </Menu>
        )}

        {/* User Avatar */}
        <Box sx={{ flexGrow: 0, ml: 2 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
