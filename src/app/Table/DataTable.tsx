import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ButtonDelete } from "../Buttons/ButtonDelete";
//ort { Button } from "@/components/ui/button";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface DataTableProps {
  posts: Post[];
  deletePost: (id: number) => void;
}

export function DataTable({ posts, deletePost }: DataTableProps) {
 
  return (
    
    <section className="mt-8 z-0">
      <Table className="border-2 border-gray-400 rounded-lg w-full">
        <TableCaption className="text-[18px]">Posts recentes</TableCaption>
        <TableHeader className="bg-slate-300 ">
          <TableRow>
            <TableHead className="text-[16px] px-4 py-2 h-9 uppercase flex flex-row justify-between">
              <p>Título</p>
              <p>Ações</p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-screen">
          {posts.map((post) => (
            <TableRow key={post.id} className="border-b border-gray-300 flex justify-between w-[1000px] ">
              <TableCell className="px-4 py-2">
                <div className="flex flex-col">
                  <span className="text-[18px] font-bold">{post.title}</span>
                  <span className="text-[16px] text-gray-600">{post.body}</span>
                </div>
              </TableCell>
              <TableCell className="px-4 py-2 text-right">
                <ButtonDelete onClick={() => deletePost(post.id)} />
              </TableCell>
             
             
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default DataTable;
