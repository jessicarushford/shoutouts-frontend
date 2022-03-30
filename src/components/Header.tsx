import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <h1>Shoutouts</h1>
      <Link to="/me" className="me-link">
        Me
      </Link>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={signOut}>Sign Out</button>{" "}
        </div>
      ) : (
        <button className="sign-in-btn" onClick={signInWithGoogle}>
          Sign In With Google
        </button>
      )}
    </header>
  );
};

export default Header;
