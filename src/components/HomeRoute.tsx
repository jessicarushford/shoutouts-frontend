import { useEffect, useState } from "react";
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
      <NewShoutoutForm onAddShoutout={addNewShoutout} name="" />
    </div>
  );
};

export default HomeRoute;
