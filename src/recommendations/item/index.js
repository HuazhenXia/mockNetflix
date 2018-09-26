import React from "react";

const Item = props => {
  return (
    <div className="item" onMouseLeave={props.hideButtonHandler}>
      <img
        onMouseOver={props.showButtonHandler}
        height="220"
        src={props.src}
        alt="poster"
      />
      <br />
      <span>{props.title}</span>
      {props.showButton ? <Button addHandler={props.addHandler} /> : null}
    </div>
  );
};

const Button = props => (
  <div>
    <button onClick={props.addHandler}>Add</button>
  </div>
);

export default Item;
