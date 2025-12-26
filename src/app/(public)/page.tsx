import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 flex flex-col gap-5 w-max">
      <h1>
        homepage
      </h1>

    <Button>Shade cdn</Button>
    <Input placeholder="shadecn"/>
      
    </div>
  );
}
