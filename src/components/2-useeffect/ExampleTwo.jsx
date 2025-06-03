import { useEffect, useState } from "react";
import styles from "../../styles.module.css";

// endpoint for fetching data
const userUrl = "https://fakestoreapi.com/users";

const ExampleTwo = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const res = await fetch(userUrl);
        // console.log('res', res)
        const data = await res.json();
        //console.logo('data', data)
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUser();
  }, []);

  return (
    <div className={styles.userContainer}>
      <h2>Example Two</h2>
      {user.map((item) => {
        const { id, email, username, address } = item;
        return (
          <div
            key={id}
            style={{ marginBottom: "20px" }}
            className={styles.user}
          >
            <h2>User ID: {id}</h2>
            <h3>{email}</h3>
            <p>Username: {username}</p>
            <p>
              Address: {address.city}, {address.street}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default ExampleTwo;
