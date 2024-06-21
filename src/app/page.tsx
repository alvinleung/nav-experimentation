"use client";

import Nav from "@/components/Nav/Nav";
import Image from "next/image";
import { useMemo } from "react";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const arr = useMemo(() => {
    return Array.from({ length: 10 }, () => 0);
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-white px-12 w-full min-h-screen flex gap-12">
        <Nav />
        <div className="flex gap-4 flex-col mt-4">
          {arr.map((_, index) => (
            <div className="w-[80vw] h-[60vh] bg-gray-200" key={index} />
          ))}
        </div>
      </main>
    </ReactLenis>
  );
}
