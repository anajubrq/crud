"use client";

import axios from "axios";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@radix-ui/react-context-menu";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";


export interface Post {
  id: number;
  title: string;
  body: string;
}

interface DataCreationProps {
  setAllPosts: React.Dispatch<React.SetStateAction<Post[]>>;

  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
 
  post: Post
}
<<<<<<< HEAD

=======
// { params }: { params: { slug: string } }
>>>>>>> c1f88ea73a0d18c654b0ccadaea637480a6cf3c9
export function Edit({ setAllPosts, setOpenModalEdit, post}: DataCreationProps) {
  const [data, setData] = useState({
  
    title: post.title,
    body: post.body,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
<<<<<<< HEAD
   
=======
    console.log("estou preenchendo o meu formulario ", handleInputChange)
>>>>>>> c1f88ea73a0d18c654b0ccadaea637480a6cf3c9
  };
 
  async function WhenToSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
<<<<<<< HEAD
    
=======
    console.log( 'Enviando meus dados ',WhenToSend)
>>>>>>> c1f88ea73a0d18c654b0ccadaea637480a6cf3c9
    try {
      const response = await axios.put("https://jsonplaceholder.typicode.com//posts/1", {
    
        title: data.title,
        body: data.body,
    });
       
     
      setAllPosts((prevPosts)=>{
        return prevPosts.map((postItem)=>{
          if(
            post.id === postItem.id
          ){
            return {id: postItem.id, title : data.title, body:data.body}
          } return postItem
        })

      } );
      setData({
       title: "",
        body: "",
       })


<<<<<<< HEAD
      console.log("Post created:", response.data);
      setOpenModalEdit(false); //pra fechar dps q enviar 
    } catch (error) {
      console.error("Error creating post", error);
=======
      console.log("Post criado:", response.data);
      setOpenModalEdit(false); //pra fechar dps q enviar 
    } catch (error) {
      console.error("Erro ao criar post", error);
>>>>>>> c1f88ea73a0d18c654b0ccadaea637480a6cf3c9
    }
  }
  


 
 
 


  return (
    <section className="  fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 " >
    <div className="rounded-[10px] border-none outline-none bg-white">
      <Card className="w-[350px] outline-none border-none">
        <form onSubmit={WhenToSend}>
          <CardHeader> 
<<<<<<< HEAD
            <CardTitle>Edit Post</CardTitle>
            <CardDescription>Edit this Post.</CardDescription>
=======
            <CardTitle>Editar Post</CardTitle>
            <CardDescription>Edite este Post.</CardDescription>
>>>>>>> c1f88ea73a0d18c654b0ccadaea637480a6cf3c9
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
<<<<<<< HEAD
                <Label id="title" className="text-[18px]">Title</Label>
                <Input
                  name="title"
                  id="title"
                  placeholder="Title of your post"
=======
                <Label id="title" className="text-[18px]">Título</Label>
                <Input
                  name="title"
                  id="title"
                  placeholder="Nome do seu post"
>>>>>>> c1f88ea73a0d18c654b0ccadaea637480a6cf3c9
                  value={data.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
<<<<<<< HEAD
                <Label id="body" className="text-[18px]">Description</Label>
                <Textarea
                  id="body"
                  name="body"
                  placeholder="Describe your post"
=======
                <Label id="body" className="text-[18px]">Descrição</Label>
                <Textarea
                  id="body"
                  name="body"
                  placeholder="Descrição do seu post"
>>>>>>> c1f88ea73a0d18c654b0ccadaea637480a6cf3c9
                  value={data.body}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => setOpenModalEdit(false)} className="bg-red-500 text-white rounded-[8px]">
<<<<<<< HEAD
            Cancel
            </Button>
            <Button 
            type="submit" variant="outline" className=" bg-blue-700 rounded-[8px] text-white h-[38px] w-[90px]">
              Send
=======
              Cancelar
            </Button>
            <Button 
            type="submit" variant="outline" className=" bg-blue-700 rounded-[8px] text-white h-[38px] w-[90px]">
              Enviar
>>>>>>> c1f88ea73a0d18c654b0ccadaea637480a6cf3c9
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
    </section>

  );
}

export default Edit;