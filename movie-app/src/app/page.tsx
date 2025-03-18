import { Navigation } from "@/components/ui/Navigation";
import { Scroll } from "@/components/ui/Scroll";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-[1200px] flex flex-col min-h-screen">
      <Navigation />
      <Scroll />
    </div>
  );
}
