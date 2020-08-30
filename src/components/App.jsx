import React from "react";
import Cards from "./Cards";
import Contacts from "../contacts";
function App() {
  return (
    <div>
      <h1 className="heading" class="heading">
        My Contacts
      </h1>
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
