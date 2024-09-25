"use client"
import React, { useState } from "react";

import Header from "./header/header";
import DataTable from "./table/dataTable";
import { Post } from "@/components/BlogFormModal";



export default function Home() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const deletePost = (id: number) => {
    console.log("Post Deletado:", id);
    setAllPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <section>
      <Header setAllPosts={setAllPosts} />
      <DataTable
        posts={allPosts}
        deletePost={deletePost}
        setAllPosts={setAllPosts}

      />

    </section>
  );
}