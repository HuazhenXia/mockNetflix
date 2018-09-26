import React from "react";

const Item = props => {
  return (
    <div className="item" onMouseLeave={props.hideButtonHandler}>
      <img
        height="220"
        src={props.src}
        onMouseEnter={props.showButtonHandler}
        alt="poster"
      />
      <br />
      <span>{props.title}</span>
      {props.showButton ? <Button removeHandler={props.removeHandler} /> : null}
    </div>
  );
};

const Button = props => (
  <div>
    <button onClick={props.removeHandler}>Remove</button>
  </div>
);

export default Item;
