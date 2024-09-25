"use client"
import { Button } from "@/components/ui/button";

interface ButtonDeleteProps {
  onClick: () => void;
}

export function ButtonDelete({ onClick }: ButtonDeleteProps) {
  return (
    <Button variant="destructive" onClick={onClick}>
      <div>
       
      </div>
    </Button>
  );
}
