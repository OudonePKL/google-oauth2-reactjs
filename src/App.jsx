import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode"

function App() {
  return (
    <>
      <h1> Google OAuth2 With Vite + React</h1>
      
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse?.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      
    </>
  );
}

export default App;
