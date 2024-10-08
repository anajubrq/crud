"use client";
import React, { useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@radix-ui/react-context-menu";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface DataCreationProps {
  setAllPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deletePost?:(id: number) => void
}

export function Modal({ setAllPosts, isOpen, setModalOpen }: DataCreationProps) {
  const [data, setData] = useState({
  
    title: "",
    body: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  
  };
 
  async function WhenToSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    
        title: data.title,
        body: data.body,
    });
      
      setAllPosts((prevPosts) => [...prevPosts, response.data]);
      setData({
       title: "",
        body: "",
       })


      console.log("Post created:", response.data);
      setModalOpen(false); //pra fechar dps q enviar 
    } catch (error) {
      console.error("Error creating post", error);
    }
  }


  if (!isOpen) return null; 
  
  
 


  return (
    <section className=" outline outline-red-700  fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 " >
    <div className="rounded-[10px] border-none outline-none bg-white">
      <Card className="w-[350px] outline-none border-none">
        <form onSubmit={WhenToSend}>
          <CardHeader> 
            <CardTitle>Create Post</CardTitle>
            <CardDescription>Add a new Post.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label id="title" className="text-[18px]">Title</Label>
                <Input
                  name="title"
                  id="title"
                  placeholder="Title of your post"
                  value={data.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label id="body" className="text-[18px]">Description</Label>
                <Textarea
                  id="body"
                  name="body"
                  placeholder="Description of your post"
                  value={data.body}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => setModalOpen(false)} className="bg-red-500 text-white rounded-[8px]">
            Cancel
            </Button>
            <Button type="submit" variant="outline" className=" bg-blue-700 rounded-[8px] text-white h-[38px] w-[90px]">
              Send
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
    </section>

  );
}

export default Modal;