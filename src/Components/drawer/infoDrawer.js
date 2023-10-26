import { ArrowBack } from "@mui/icons-material";
import { Box, Drawer, Typography, styled } from "@mui/material";
import Profile from "./Profile";
const Header = styled(Box)`
  background: #008069;
  height: 95px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const Text = styled(Typography)`
  font-size: 18px;
`;

const drawerStyle = {
  left: 30,
  top: 30,
  height: "90%",
  width: "33%",
  boxShadow: "none",
};

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)} />
        <Text>Profile</Text>
      </Header>

      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};
export default InfoDrawer;
