import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#18362E] p-7">
      <Hero />
    </main>
  );
}
