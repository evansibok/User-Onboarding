import React, { useState } from "react";
import "./App.css";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <UserForm users={users} setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
