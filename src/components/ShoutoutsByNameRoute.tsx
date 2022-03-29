import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import QueryStringParams from "../models/QueryStringParams";
import Shoutout from "../models/Shoutout";
import {
  addShoutout,
  deleteShoutout,
  getShoutouts,
} from "../services/shoutoutService";
import NewShoutoutForm from "./NewShoutoutForm";
import ShoutoutCard from "./ShoutoutCard";
import "./ShoutoutsByNameRoute.css";

const ShoutoutsByNameRoute = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  const name: string | undefined = useParams().name;

  const getAndSetShoutouts = (params: QueryStringParams) => {
    getShoutouts(params).then((response) => {
      return setShoutouts(response);
    });
  };

  const addNewShoutout = (shoutout: Shoutout): void => {
    addShoutout(shoutout).then(() => {
      getAndSetShoutouts({ to: name });
    });
  };

  const deleteOneShoutout = (id: string): void => {
    deleteShoutout(id).then(() => {
      getAndSetShoutouts({ to: name });
    });
  };

  useEffect(() => {
    getAndSetShoutouts({ to: name });
  }, [name]);

  return (
    <div className="ShoutoutsByNameRoute">
      <h2>Shoutouts By {name}</h2>
      <Link to="/">Back to All Shoutouts</Link>
      <ul>
        {shoutouts.map((shoutout) => {
          return (
            <ShoutoutCard
              shoutout={shoutout}
              key={shoutout._id}
              onDeleteShoutout={deleteOneShoutout}
            />
          );
        })}
      </ul>
      <NewShoutoutForm onAddShoutout={addNewShoutout} name={name!} />
    </div>
  );
};

export default ShoutoutsByNameRoute;
