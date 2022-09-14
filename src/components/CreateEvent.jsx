import React from "react";
import { useState } from "react";

const CreateEvent = () => {
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [end, setEnd] = useState();
  const [start, setStart] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const event = { sumamry, description, location, end, start };
    setIsLoggedIn(true);
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <Input
          placeholder="Summary"
          value={summary}
          onChange={(e = setSummary(e.target.value))}
        />
        <Input
          placeholder="description"
          value={description}
          onChange={(e = setDescription(e.target.value))}
        />
        <Input
          placeholder="location"
          value={location}
          onChange={(e = setLocation(e.target.value))}
        />
      </form>
    </>
  );
};

export default CreateEvent;
