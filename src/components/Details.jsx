import React from "react";
function Details(props) {
  return (
    <div>
      <p class="info">{props.number}</p>
      <p class="info">{props.email}</p>
    </div>
  );
}

export default Details;
