/**
 * Fetch github users
 * https://api.github.com/users
 * create a function which performs fetch
 * functionality using the url provided above
 * iterate over the list and display image, user name
 * and link
 * which will only run on initial render
 */

import { useEffect, useState } from "react";
import styles from "./classpractice.module.css";

// Data endpoint
const githubUserUrl = "https://api.github.com/users";
const ClassPractice = () => {
  const [githubUser, setGithubUser] = useState([]);

  useEffect(() => {
    const getAllGithubUser = async () => {
      try {
        const answer = await fetch(githubUserUrl);
        const data = await answer.json();
        setGithubUser(data);
      } catch (error) {
        console.error("SHOW ERROR", error);
      }
    };
    getAllGithubUser();
  }, []);

  return (
    <div >
      <h2>GitHub Users</h2>
      {githubUser.map((item) => (
        <div>
          <img src={item.avatar_url} alt="user avatar" />
          <h2>{item.login}</h2>
          <a href={item.url}>{item.login}</a>
        </div>
      ))}
    </div>
  );
};
export default ClassPractice;
