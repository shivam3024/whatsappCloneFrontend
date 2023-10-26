import { useContext } from "react";

import LoginDialog from "./Account/LoginDialog";
import { AccountContext } from "../context/accountProvider";
import ChatDialog from "./Chat/chatDialog";
import { AppBar, Box, Toolbar, styled } from "@mui/material";

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #25d366;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #25d366;
  box-shadow: none;
`;
const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>

          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};
export default Messenger;
