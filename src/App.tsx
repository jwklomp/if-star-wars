import { useRecoilState } from "recoil";
import { Switch, Case, Default } from "react-if";
import { isNil, isNotNil } from "ramda";
//
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import LoginButton from "./features/authentication/LoginButton";
import LogoutButton from "./features/authentication/LogoutButton.tsx";
import UserProfileContainer from "./features/authentication/UserProfileContainer.tsx";
import { userAtom } from "./features/authentication/userAtom.ts";
import PeopleContainer from "./features/people/PeopleContainer.tsx";
import { errorAtom } from "./features/authentication/errorAtom.ts";
//
import "./App.css";
import StarshipsContainer from "./features/starships/StarshipsContainer.tsx";

interface User {
  access_token: string;
}

function App() {
  const [user, setUser] = useRecoilState(userAtom);
  const [error, setError] = useRecoilState(errorAtom);

  const handleLoginSuccess = (codeResponse: User) => {
    setUser(codeResponse);
  };

  const handleLoginError = (error: unknown) => {
    setError(`Login Failed: ${error as string}`);
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
      <Switch>
        <Case condition={isNotNil(user) && isNil(error)}>
          {() => (
            <>
              <div className="card">
                <UserProfileContainer accessToken={user!.access_token} />
                <div className="ms-auto">
                  <LogoutButton onLogout={handleLogout} />
                </div>
              </div>
              <div className="card">
                <PeopleContainer />
              </div>
              <div className="card">
                <StarshipsContainer />
              </div>
            </>
          )}
        </Case>
        <Case condition={isNil(user) && isNil(error)}>
          <p>Login to access Star Wars Characters</p>
          <LoginButton
            onLoginSuccess={handleLoginSuccess}
            onLoginError={handleLoginError}
          />
        </Case>
        <Default>
          <p>{error}</p>
        </Default>
      </Switch>
    </div>
  );
}

export default App;
