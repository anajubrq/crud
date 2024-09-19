"use client"
import { Button } from "@/components/ui/button";

interface ButtonDeleteProps {
  onClick: () => void;
}

export function ButtonDelete({ onClick }: ButtonDeleteProps) {
  return (
    <Button variant="destructive" onClick={onClick}>
      <div>
        <img src="/images/delete.png" className="w-[25px]" alt="Delete" />
      </div>
    </Button>
  );
}
