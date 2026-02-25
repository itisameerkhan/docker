import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState(null);

  const getData = async () => {
    try {
      const usersData = await axios.get(
        `${import.meta.env.VITE_NODE_URL}/users/get`,
      );

      if (usersData.data.success) {
        setUsers({ data: usersData.data.data, success: true });
      } else {
        setUsers({ success: false, message: usersData.data.message });
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(users);


  useEffect(() => {
    getData();
  }, []);

  if (!users) return <h1>loading...</h1>;

  return (
    <div className="app">
      <h1>app</h1>
      {users.success &&
        users.data.map((user) => (
          <div className="user" id={user._id}>
            <h2>name: {user.name}</h2>
            <h2>name: {user.age}</h2>
            <h2>name: {user.phone}</h2>
            <h2>name: {user.email}</h2>
          </div>
        ))}
      {
        !users.success && (
          <div>
            <h1>{users.message}</h1>
          </div>
        )
      }
    </div>
  );
};

export default App;
