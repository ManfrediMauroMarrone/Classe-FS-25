import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import './FetchComponent.css'

function FetchComponent() {
  const [posts, setPosts] = useState();

  async function getPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>FetchComponent</h2>
      <div className="cards-container">
        {posts && posts.map((element) => {
          return (
            <Card key={element.id} data={element}/>
          );
        })}
      </div>
    </div>
  );
}

export default FetchComponent;
