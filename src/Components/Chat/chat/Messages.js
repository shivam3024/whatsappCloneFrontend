import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Message from "./message";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../context/accountProvider";
import { getMessages, newMessage } from "../../../service/api";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;
const Component = styled(Box)`
  height: 70vh;
  overflow-y: scroll;
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const [incomingMessages, setIncomingMessages] = useState(null);

  const { account, socket, newMessageFlag, setNewMessageFlage } =
    useContext(AccountContext);
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessages({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  useEffect(() => {
    incomingMessages &&
      conversation?.members.includes(incomingMessages.senderId) &&
      setMessages((prev) => [...prev, incomingMessages]);
  }, [incomingMessages, conversation]);
  const sendText = async (e) => {
    const code = e.KeyCode || e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message);
      await newMessage(message);

      setValue("");
      setFile("");
      setImage("");
      setNewMessageFlage((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container>
              <Message message={message} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};
export default Messages;
