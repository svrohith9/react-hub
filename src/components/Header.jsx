// create react componet for Header
import React from "react";

function Header(props) {
  const fruit = { name: "banana", color: "yellow", price: "3.99" };
  console.log(fruit);

  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}
export default Header;
