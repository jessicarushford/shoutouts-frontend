import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import Shoutout from "../models/Shoutout";
import {
  addShoutout,
  deleteShoutout,
  getShoutouts,
} from "../services/shoutoutService";
import "./HomeRoute.css";
import NewShoutoutForm from "./NewShoutoutForm";
import ShoutoutCard from "./ShoutoutCard";

const HomeRoute = () => {
  const { user } = useContext(AuthContext);

  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  const getAndSetShoutouts = () => {
    getShoutouts({}).then((response) => {
      return setShoutouts(response);
    });
  };

  const addNewShoutout = (shoutout: Shoutout): void => {
    addShoutout(shoutout).then(() => {
      getAndSetShoutouts();
    });
  };

  const deleteOneShoutout = (id: string): void => {
    deleteShoutout(id).then(() => {
      getAndSetShoutouts();
    });
  };

  useEffect(() => {
    getAndSetShoutouts();
  }, []);

  return (
    <div className="HomeRoute">
      <h2>All Shoutouts</h2>
      <ul>
        {shoutouts.map((shoutout) => (
          <ShoutoutCard
            key={shoutout._id}
            shoutout={shoutout}
            onDeleteShoutout={deleteOneShoutout}
          />
        ))}
      </ul>
      {user ? (
        <NewShoutoutForm onAddShoutout={addNewShoutout} name="" />
      ) : (
        <div>
          <p>Sign In To Leave A Shoutout</p>
          <button className="sign-in-btn" onClick={signInWithGoogle}>
            Sign In With Google
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeRoute;
