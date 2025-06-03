import { useState } from "react";
import { staffData } from "../../lib/data";
import styles from "../../styles.module.css";

const ArrayExample = () => {
  const [staff, setStaff] = useState(staffData);

  // delete staff

  const handleDelete = (id) => {
    // alert("Staff successfully deleted")
    // console.log(id)
    const newStaff = staff.filter((guest) => guest.id !== id);
    // console.log(newStaff)
    setStaff(newStaff);
    setTimeout(() => {
      alert(`Staff id: ${id} successfully deleted`);
    }, 1000);
  };

  // Clear staff

  const handleClear = () => {
    setStaff([]);
    setTimeout(() => {
      alert("Staffs successfully cleared");
    }, 1000);
  };

  return (
    <div>
      <h2>ArrayExample</h2>
      <div className={styles.container}>
        {staff.map(({ firstname, lastname, country, profession, id }) => (
          <div key={id} className={styles.itemContainer}>
            <p>Invite Card</p>
            <h3>
              Name: {firstname} {lastname}
            </h3>
            <p>Country: {country}</p>
            <p>Profession: {profession}</p>
            <button
              onClick={() => handleDelete(id)}
              className={styles.inviteBtn}
            >
              Delete guest
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleClear}
        className={`${styles.clearBtn} ${styles.inviteBtn}`}
      >
        Clear Staff
      </button>
    </div>
  );
};
export default ArrayExample;
