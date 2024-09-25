import React from "react";
import { Post } from "../[id]/edit";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ViewPostProps {
  post: Post;
  setOpenView: React.Dispatch<React.SetStateAction<boolean>>;
}
// testets 
export default function ViewPost({ post, setOpenView }: ViewPostProps) {
  return (
    <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 ">
      <div className="rounded-[10px] border-none outline-none bg-white">
        <Card className="w-[350px] outline-none border-none">
          <CardHeader>
            <CardTitle>View Post</CardTitle>
            <CardDescription>Details of the post.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <p className="text-[18px] font-bold">Title:</p>
                <p className="text-[16px]">{post.title}</p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <p className="text-[18px] font-bold">Description:</p>
                <p className="text-[16px]">{post.body}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setOpenView(false)} className="bg-red-500 text-white rounded-[8px]">
              Close
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
