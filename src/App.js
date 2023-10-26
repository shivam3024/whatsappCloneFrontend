import { GoogleOAuthProvider } from "@react-oauth/google";
// Component
import Messenger from "./Components/Messenger";
import AccountProvider from "./context/accountProvider";

function App() {
  const clientId =
    "620935079182-12nakjgv83nj74g370csarp8tkeo0bdo.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
