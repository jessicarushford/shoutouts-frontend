import { Link } from "react-router-dom";
import Shoutout from "../models/Shoutout";
import "./ShoutoutCard.css";

interface Props {
  shoutout: Shoutout;
  onDeleteShoutout: (id: string) => void;
}

const ShoutoutCard = ({ shoutout, onDeleteShoutout }: Props) => {
  return (
    <li className="ShoutoutCard">
      <Link to={`/user/${shoutout.to}`}>
        <p>Shoutout to {shoutout.to}</p>
      </Link>

      <p>- from {shoutout.from}</p>
      <p>{shoutout.text}</p>
      <button onClick={() => onDeleteShoutout(shoutout._id!)}>X</button>
    </li>
  );
};

export default ShoutoutCard;
