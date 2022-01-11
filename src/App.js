import React, { useState } from "react";
import ShowUser from "./Components/User/ShowUser";
import UserAdd from "./Components/User/UserAdd";

function App() {
  const DUMYY_ARR = [
    {
      name: "Sasa",
      email: "sasa@yahoo.com",
    },
    {
      name: "Natasa",
      email: "nata@yahoo.com",
    },
  ];

  const [users, setUsers] = useState([]);

  const onFormSubmit = (user, email) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: user, email: email, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserAdd onFormSubmit={onFormSubmit} />
      <ShowUser users={users} />
    </div>
  );
}

export default App;
