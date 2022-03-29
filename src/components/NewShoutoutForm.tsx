import { FormEvent, useState } from "react";
import Shoutout from "../models/Shoutout";
import "./NewShoutoutForm.css";
import ShoutoutCard from "./ShoutoutCard";

interface Props {
  onAddShoutout: (shoutout: Shoutout) => void;
  name: string;
}

const NewShoutoutForm = ({ onAddShoutout, name }: Props) => {
  const [to, setTo] = useState(name);
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    onAddShoutout({ to, from, text });
    setTo("");
    setFrom("");
    setText("");
  };

  return (
    <form className="NewShoutoutForm" onSubmit={submitHandler}>
      <label htmlFor="to">To</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <label htmlFor="text">Shoutout</label>
      <textarea
        name="text"
        id="text"
        cols={30}
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      {/* allows you to write a longer message instead of using just an input:text */}
      <button>Submit Shoutout!</button>
    </form>
  );
};

export default NewShoutoutForm;
