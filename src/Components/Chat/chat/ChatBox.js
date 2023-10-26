import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/accountProvider";
import { getConversation } from "../../../service/api";

const Component = styled(Box)`
  height: 50;
  max-height: 100%;
`;
const ChatBox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub, account.sub]);
  return (
    <Component>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Component>
  );
};
export default ChatBox;
