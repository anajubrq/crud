
"use client";
import React, {  useState } from "react";
import DataTable, { Post } from "./Table/DataTable";
import Header from "./Header/Header";

export default function Home() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const deletePost = (id: number) => {
    console.log("Post deletado:", id);
    setAllPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
 

  };
  
  return (
    <section>
      <div>
        <Header setAllPosts={setAllPosts} />
      </div>
      <div>
        <DataTable
         posts={allPosts}
         deletePost={deletePost}
         
          />
      </div>
    </section>
  );
}