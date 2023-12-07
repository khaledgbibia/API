import axios from 'axios'
import React, { useEffect, useState } from 'react'


function UseListe() {
const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setTodos(result.data);
    });
  });

  return (
    <div>
      {todos?.map((el) => (
        <p> {el.name}</p>
      ))}
    </div>
  );
      }

export default UseListe;