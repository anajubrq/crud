"use client"
import { Button } from "@/components/ui/button";

interface ButtonEditProps {
  onClick: () => void;
}

export function ButtonEdit({ onClick }: ButtonEditProps) {
  return (
    <Button variant="destructive" onClick={onClick}>
      <div>
        <img src="/images/edit.png" className="w-[25px]" alt="Editar" />
      </div>
    </Button>
  );
}
