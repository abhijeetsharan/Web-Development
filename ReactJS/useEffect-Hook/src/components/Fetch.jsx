import { useEffect } from "react";
import { useState } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, []); // Runs once when the component mounts
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

export default UsersList;
  