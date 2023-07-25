import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { useNavigate } from "react-router-dom";
import { TextField, InputBase } from "@mui/material";
import { Button, Input } from "@mui/material";
import {
  AppBar,
  useTheme,
  Toolbar,
  Menu,
  MenuItem,
  Box,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  ExitToAppOutlined,
  AccountCircleOutlined,
  HelpOutlineOutlined,
  CloudUploadOutlined,
} from "@mui/icons-material";

import { FlexBetween } from ".";
import profileImage from "assets/profile1.jpeg";

// Navbar
const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  if (user.name === undefined) {
    user.name = localStorage.getItem("name");
    user.role = localStorage.getItem("role");
  }
  // redux dispatch items
  const dispatch = useDispatch();
  // theme
  const theme = useTheme();

  // nav state
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  // dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const handleCloseDialog = () => setOpenDialog(false);

  // handle
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettingClick = (title) => {
    setDialogTitle(title);
    setOpenDialog(true);
    handleClose();
  };

  const logout = () => {
    setAnchorEl(null);
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <FlexBetween>
          {/* Sidebar Menu */}
          <IconButton
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            title="Toggle Sidebar"
          >
            <MenuIcon />
          </IconButton>

          {/* Search */}
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
            title="Search"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap="1.5rem">
          {/* Dark/Light Mode */}
          <IconButton onClick={() => dispatch(setMode())} title="Dark Mode">
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>

          {/* User */}
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
              title={user.name}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.role}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px",
                }}
              />
            </Button>

            {/* DropDown */}
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              getContentAnchorEl={null}
            >
              {/* Account Settings */}
              <MenuItem
                onClick={() => handleSettingClick("Account Settings")}
                title="Account Settings"
              >
                <ListItemIcon>
                  <AccountCircleOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Account Settings" />
              </MenuItem>

              {/* Camera Settings */}
              <MenuItem
                onClick={() => handleSettingClick("Camera Settings")}
                title="Camera Settings"
              >
                <ListItemIcon>
                  <SettingsOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Camera Settings" />
              </MenuItem>

              {/* Help & Support */}
              <MenuItem
                onClick={() => handleSettingClick("Help & Support")}
                title="Help & Support"
              >
                <ListItemIcon>
                  <HelpOutlineOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Help & Support" />
              </MenuItem>

              {/* Log Out */}
              <MenuItem onClick={logout} title="Log Out">
                <ListItemIcon>
                  <ExitToAppOutlined fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </MenuItem>
            </Menu>

            {/* Dialog */}
            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              fullWidth
              maxWidth="lg"
            >
              <DialogTitle>{dialogTitle}</DialogTitle>
              <DialogContent dividers>
                <Grid container>
                  {/* Left Side - Account Settings Options */}
                  <Grid item xs={6}>
                    <AccountSettingsSidebar
                      dialogTitle={dialogTitle}
                      handleSettingClick={handleSettingClick}
                    />
                  </Grid>
                  {/* Right Side - Account Settings Content */}
                  <Grid item xs={6}>
                    <AccountSettingsContent
                      dialogTitle={dialogTitle}
                      user={user}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Close</Button>
              </DialogActions>
            </Dialog>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

// Component for Left Side - Account Settings Options
const AccountSettingsSidebar = ({ dialogTitle, handleSettingClick }) => {
  return (
    <>
      <Typography variant="h6">Account Settings Options</Typography>
      {/* Add your account settings options here */}
      <MenuItem
        onClick={() => handleSettingClick("Edit Profile")}
        title="Edit Profile"
      >
        <ListItemIcon>
          <SettingsOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </MenuItem>

      <MenuItem
        onClick={() => handleSettingClick("Change Password")}
        title="Change Password"
      >
        <ListItemIcon>
          <SettingsOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </MenuItem>

      <MenuItem
        onClick={() => handleSettingClick("Manage Email Notifications")}
        title="Manage Email Notifications"
      >
        <ListItemIcon>
          <SettingsOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Manage Email Notifications" />
      </MenuItem>

      {/* Add more account settings options as needed */}
    </>
  );
};

// Component for Right Side - Account Settings Content
const AccountSettingsContent = ({ dialogTitle, user }) => {
  // Sample current name and profile picture to be displayed (Replace this with actual data from user)
  const [profilePicture, setProfilePicture] = useState(profileImage);
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    const selectedFile = event.target.files[0];
    setNewProfilePicture(selectedFile);

    // Display the preview of the new profile picture
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  // Function to handle profile picture update (you'll need to implement the actual API call)
  const updateProfilePicture = () => {
    if (newProfilePicture) {
      // Implement API call to update the profile picture in your backend
      // After a successful update, you can update the profilePicture state accordingly
      // For example:
      // setProfilePicture(newProfilePicture);
      // setNewProfilePicture(null);
    }
  };

  return (
    <>
      <Typography variant="h6">{dialogTitle}</Typography>
      {/* Add your content for each setting option */}
      {dialogTitle === "Edit Profile" && (
        <>
          {/* Display the current name */}
          <Typography variant="body1">Current Name: John Doe</Typography>
          {/* Add the form or input field for changing the name */}
          <TextField
            id="change-name"
            label="Change Name"
            variant="outlined"
            fullWidth
            // Add necessary onChange and value handlers
          />
          {/* Add the form or input field for uploading profile picture */}
          <Box
            component="img"
            alt="profile"
            src={profileImage}
            height="60px"
            width="60px"
            borderRadius="50%"
            sx={{ objectFit: "cover", marginTop: "2rem", margineLeft: "1rem"}}
          />
          <Button
            variant="contained"
            component="label"
            startIcon={<CloudUploadOutlined />}
            sx={{ marginTop: "4rem", marginLeft: "-4rem" }}
          >
            Upload Image
            <input type="file" style={{ display: "none" }} />
          </Button>
          {/* Display the profile image */}
          
          {/* Add the form or input field for updating profile picture */}
          <Button variant="contained" color="primary" sx={{ marginTop: "4rem", marginLeft: "2rem" }}>
            Update Profile
          </Button>
        </>
      )}

      {dialogTitle === "Change Password" && (
        <Typography variant="body1">
          Here you can change your account password for security purposes.
        </Typography>
        // Add the form or input fields for changing the password
      )}

      {dialogTitle === "Manage Email Notifications" && (
        <Typography variant="body1">
          Here you can customize your email notification preferences.
        </Typography>
        // Add the settings for managing email notifications
      )}

      {/* Add more content for other account settings options as needed */}
    </>
  );
};

export default Navbar;
