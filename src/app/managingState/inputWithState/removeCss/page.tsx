"use client";
import Image from "next/image";
import { useState } from "react";

export default function Picture() {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div className={`background ${isActive && "background--active"} `}>
      <Image
        className={`picture ${!isActive && "background--active"}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={() => setIsActive((isActive) => !isActive)}
        width={200}
        height={200}
      />
    </div>
  );
}
