import { useContext } from "react";

import styled from "@emotion/styled";
import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { AccountContext } from "../../../context/accountProvider";

const Header = styled(Box)`
  height: 45px;
  background: #ededed;
  padding: 8px 18px;
  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  height: 45,
  width: 45,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0 0 0 0.6);
`;
const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 24px;
    color: #000;
  }
`;
const ChatHeader = ({ person }) => {
  const { activeusers } = useContext(AccountContext);

  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeusers?.find((user) => user.sub === person.sub)
            ? "online"
            : "offline"}{" "}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};
export default ChatHeader;
