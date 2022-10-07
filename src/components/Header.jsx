import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import SingIn from "../auth/SingIn";
import "../css/style.css";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
  console.log(user);

  const singOut = () => {
    singOut(auth);
  };

  return (
    <header className="header">
      <h1 className="header__h1">spaseX DRAGON</h1>
      {user && user.displayName !== null ? (
        <section>
          <Dropdown>
            <Dropdown.Toggle variant="dark">
              {user.displayName}
              <img className="header__avatar" src={user.photoURL} alt="avatar" />
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={() => auth.signOut()}>
                Sing Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </section>
      ) : user && user.displayName === null ? (
        <section>
          <Dropdown>
            <Dropdown.Toggle variant="dark">{user.email}</Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={() => auth.signOut()}>
                Sing Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </section>
      ) : (
        <Link to="/login">
          <Button onClick={SingIn}>Sign In</Button>
        </Link>
      )}
    </header>
  );
}
export default Header;
