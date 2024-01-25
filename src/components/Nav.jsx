import React from "react";
function Nav(props) {
  return (
    <>
      <h1>
        {props.dataList.map((item, index) => {
          <li>
            {index}.{item}.
          </li>;
        })}
      </h1>
    </>
  );
}
export default Nav;
