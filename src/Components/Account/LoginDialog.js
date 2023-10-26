import { useContext } from "react";
import { Box, Dialog, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../Constants/data";
import { AccountContext } from "../../context/accountProvider";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { addUser } from "../../service/api";
const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled("img")({
  height: 210,
  width: 210,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 20px;
`;

const StyleList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHieght: "100%",
  boxShadow: "none",
  overFlow: "hidden",
};
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);
  const onLoginSuccess = async (res) => {
    const decode = jwt_decode(res.credential);

    setAccount(decode);
    await addUser(decode);
  };
  const onLoginError = (res) => {
    console.log("Login failed", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer: </Title>
          <StyleList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tab Menu Setting and select WhatsApp web </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyleList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt="qr code" />
          <Box
            style={{
              position: "absolute",
              top: "45%",
              width: "70%",
              height: "50%",
              transform: "translatex(25%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};
export default LoginDialog;
