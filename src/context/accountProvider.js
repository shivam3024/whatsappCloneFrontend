import { createContext, useState, useRef, useEffect } from "react";

import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeusers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlage] = useState(false);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);
  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeusers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlage,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
export default AccountProvider;
