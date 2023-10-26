import { useContext } from "react";

import { Box, Typography } from "@mui/material";
import { AccountContext } from "../../context/accountProvider";
import styled from "@emotion/styled";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Image = styled("img")({
  width: 100,
  height: 100,
  borderRadius: "50%",
  padding: "25px 0",
});
const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0 0 0 0.08);
  & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;
const DiscriptionConatainer = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;
const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="Profile" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DiscriptionConatainer>
        <Typography>
          This is not Your username or pin.This name will be visible to your
          whatsapp contacts.
        </Typography>
      </DiscriptionConatainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat! Sleep! Code! Repeat!</Typography>
      </BoxWrapper>
    </>
  );
};
export default Profile;
