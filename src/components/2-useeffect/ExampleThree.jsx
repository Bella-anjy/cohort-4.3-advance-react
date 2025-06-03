import { useEffect, useState } from "react";
import styles from "../../styles.module.css";

// endpoint for fetching users data
const userApi = "https://jsonplaceholder.typicode.com/users";

const ExampleThree = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const respone = await fetch(userApi);
        // console.log('respone', respone);
        const data = await respone.json();
        // console.log('data', data);
        setEmployee(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEmployees();
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Example Three</h2>
      <table className={styles.table}>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
        </thead>
        {employee.map((item) => (
          <tbody key={item.id}>
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{item.company.name}</td>
          </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default ExampleThree;
