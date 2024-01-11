
import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId = '666630148146-pmndvu6rr435cfonmnlr0uk67fm24org.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
