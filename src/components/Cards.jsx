import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
function Card(props) {
  return (
    <div className="card" class="card">
      <div className="top" class="top">
        <h2 class="name">{props.name}</h2>
        <Avatar image={props.image} />
      </div>
      <div className="bottom" class="bottom">
        <Details detailInfo={props.email} />
        <Details detailInfo={props.number} />
      </div>
    </div>
  );
}
export default Card;
