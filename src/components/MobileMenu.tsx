"use client";
import Link from "next/link";
import { useState } from "react";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div
        className="flex flex-col gap-[4.5] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="w-6 h-1 bg-blue-600 rounded-sm" />
        <div className="w-6 h-1 bg-blue-600 rounded-sm" />
        <div className="w-6 h-1 bg-blue-600 rounded-sm" />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4">
          <Link href="/">Home</Link>
          <Link href="/">Friend</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
