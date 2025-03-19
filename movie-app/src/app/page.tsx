import { Navigation } from "@/components/ui/Navigation";
import { Scroll } from "@/components/ui/Scroll";
import { Upcoming } from "@/components/ui/Upcoming";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-[1200px] flex flex-col min-h-screen gap-[32px]">
      <Navigation />
      <Scroll />
      <Upcoming />
    </div>
  );
}
