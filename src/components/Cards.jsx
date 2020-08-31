import React from "react";
import Avatar from "./Avatar";
function Card(props) {
  return (
    <div className="card" class="card">
      <div className="top" class="top">
        <h2 class="name">{props.name}</h2>
        <Avatar image={props.image} />
      </div>
      <div className="bottom" class="bottom">
        <p class="info">{props.number}</p>
        <p class="info">{props.email}</p>
      </div>
    </div>
  );
}
export default Card;
