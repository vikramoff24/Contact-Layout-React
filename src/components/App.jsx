import React from "react";
import Cards from "./Cards";
import Contacts from "../contacts";
import Avatar from "./Avatar";
function App() {
  return (
    <div>
      <h1 className="heading" class="heading">
        My Contacts
      </h1>
      <Avatar image="https://avatars2.githubusercontent.com/u/60956383?s=400&u=ae5773fc84ccbadd01771ec5d2e80904cd751ed2&v=4" />
      <Cards
        name={Contacts[0].name}
        image={Contacts[0].imgURL}
        number={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Cards
        name={Contacts[1].name}
        image={Contacts[1].imgURL}
        number={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Cards
        name={Contacts[2].name}
        image={Contacts[2].imgURL}
        number={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;
