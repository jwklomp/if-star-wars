import { Else, If, Then } from "react-if";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginButton from "./features/authentication/LoginButton";
import UserProfile from "./features/authentication/UserProfile";
import { useRecoilState } from "recoil";
import { userAtom } from "./features/authentication/userAtom.ts";
import PeopleContainer from "./features/people/PeopleContainer.tsx";

interface User {
  access_token: string;
}

function App() {
  const [user, setUser] = useRecoilState(userAtom);

  const handleLoginSuccess = (codeResponse: User) => {
    setUser(codeResponse);
  };

  const handleLoginError = (error: unknown) => {
    console.log("Login Failed:", error);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Idiomatic Star Wars</h1>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <If condition={user !== null && typeof user !== "undefined"}>
        <Then>
          {() => (
            <>
              <UserProfile
                accessToken={user!.access_token}
                onLogout={handleLogout}
              />
              <div className="card">
                <PeopleContainer />
              </div>
            </>
          )}
        </Then>
        <Else>
          <p>Login to access Star Wars Characters</p>
          <LoginButton
            onLoginSuccess={handleLoginSuccess}
            onLoginError={handleLoginError}
          />
        </Else>
      </If>
    </div>
  );
}

export default App;
