import React from "react";

function App() {
  return (
    <div>
      <h1 className="heading" class="heading">
        My Contacts
      </h1>
      <div className="card" class="card">
        <div className="top" class="top">
          <h2 class="name">Beyonce</h2>
          <img
            class="circle-img"
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom" class="bottom">
          <p class="info">+123 456 789</p>
          <p class="info">b@beyonce.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
