import React from "react";
import { useState } from "react";
import { Button as NavButton, Link } from "@navikt/ds-react";
// import Button from "./Button";

const Counter = (props) => {
  const { title } = props;
  const [count, setCount] = useState(0);

  const handleCounterClick = (event) => {
    setCount((oldCount) => oldCount + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <Link></Link>
      <NavButton onClick={handleCounterClick}>Increase count</NavButton>
    </div>
  );
};

export default Counter;
