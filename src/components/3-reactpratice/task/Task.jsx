import { useState } from "react";
import styles from "./task.module.css";

/**
 * Create a atleast 16 controlled inputs using React.
 * Each input should have its own state and should update the state on change.
 *
 */

const Task = () => {
  // input states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [NIC, setNIC] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [allergies, setAllergies] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
      NIC,
      dateOfBirth,
      doctorName,
      gender,
      bloodGroup,
      allergies,
      emergencyContact,
      medicalHistory,
      insuranceProvider,
      policyNumber,
    
    });
  };

  return (
    <div className={styles.taskContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div >
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nic">NIC</label>
          <input
            type="text"
            id="nic"
            placeholder="Enter NIC number"
            value={NIC}
            onChange={(e) => setNIC(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="doctorName">Doctor's Name</label>
          <input
            type="text"
            id="doctorName"
            placeholder="Enter doctor's name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bloodgroup">Blood Group</label>
          <input
            type="text"
            id="bloodgroup"
            placeholder="Enter blood group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="allergies">Allergies</label>
          <input
            type="text"
            id="allergies"
            placeholder="Enter allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="emergencyContact">Emergency Contact</label>
          <input
            type="text"
            id="emergencyContact"
            placeholder="Enter emergency contact"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="medicalHistory">Medical History</label>
          <input
            type="text"
            id="medicalHistory"
            placeholder="Enter medical history"
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="insuranceProvider">Insurance Provider</label>
          <input
            type="text"
            id="insuranceProvider"
            placeholder="Enter insurance provider"
            value={insuranceProvider}
            onChange={(e) => setInsuranceProvider(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="policyNumber">Policy Number</label>
          <input
            type="text"
            id="policyNumber"
            placeholder="Enter policy number"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
          />
      
        
        </div>
    

        <div className={styles.button}>
          <button type="submit" className={styles.btn}>Submit</button>
        </div>
        </form>
    
    </div>
  );
};
export default Task;
