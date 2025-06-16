import { useState, useEffect } from "react"
import styles from "./getposts.module.css"


const GetPostsUrl = "https://jsonplaceholder.typicode.com/posts";
const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  // console.log("Posts:", posts);
 const slicedPosts = posts.slice(0, 20); // Slicing the first 20 posts for display
  
// Fetching posts from the API
useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch(GetPostsUrl);
    const data = await response.json();
    setPosts(data);
  };
  fetchPosts();
}
, []);
 if(posts.length === 0) {
  return <div className={styles.loading}>
    Loading...
    </div>
 }




 return (
  <div className={styles.postsContainer}>
     {slicedPosts.map((post) => (
       <div key={post.id} className={styles.post}>
         <h2>{post.title}</h2>
         <p>{post.body}</p>
       </div>
     ))}
   </div>
 );
  
}
export default GetPosts;