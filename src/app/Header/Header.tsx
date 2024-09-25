
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Post } from "../[id]/edit";
import Modal from "../creationScreen/modal";



function Header({ setAllPosts }: { setAllPosts: React.Dispatch<React.SetStateAction<Post[]>> }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className=" h-[40px]">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[22px] text-[weight] ml-4 p-2">Posts</h1>
        <Button className="text-[18px] text-[weight] m-5 p-3 bg-blue-700 text-white" onClick={() => setOpenModal(true)}>
          +Add Post
        </Button>
      </div>
      <Modal isOpen={openModal} 
      setModalOpen={setOpenModal} 
      setAllPosts={setAllPosts}
      
       />
    </section>
  );
}

export default Header;
