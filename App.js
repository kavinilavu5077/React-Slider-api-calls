import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

export default function App() {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState([{ id: "", name: "", email: "", username: "" }]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setUser(res));
  }, []);

  const { id, name, username, email } = user[index];

  const lessThan = () => {
    if (index <= 0) {
      setIndex(user.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const greaterThan = () => {
    if (index >= user.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className = "boader">
      <p> USER DETAILS</p>
      <Card>
        <div>
          Name : {name}
        </div>
        <div>
          id : {id}
        </div>
        <div>
          Username : {username}
        </div>
        <div>
          email : {email}
        </div>
      </Card>
      <div className="buttons">
        <button onClick={lessThan}>
          <FaLessThan />
        </button>
        <button onClick={greaterThan}>
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
}
