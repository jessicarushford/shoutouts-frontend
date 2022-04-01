import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Shoutout from "../models/Shoutout";
import { deleteShoutout, getShoutouts } from "../services/shoutoutService";
import "./MeRoute.css";
import ShoutoutCard from "./ShoutoutCard";

const MeRoute = () => {
  const { user } = useContext(AuthContext);
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const navigate = useNavigate();

  const deleteOneShoutout = (id: string): void => {
    deleteShoutout(id).then(() => {
      getShoutouts({ me: user?.displayName! }).then((response) => {
        setShoutouts(response);
      });
    });
  };

  useEffect(() => {
    if (user) {
      getShoutouts({ me: user.displayName! }).then((response) => {
        setShoutouts(response);
      });
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="MeRoute">
      <ul>
        {shoutouts.map((shoutout) => (
          <ShoutoutCard
            key={shoutout._id}
            shoutout={shoutout}
            onDeleteShoutout={deleteOneShoutout}
          />
        ))}
      </ul>
    </div>
  );
};

export default MeRoute;
