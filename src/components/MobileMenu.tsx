"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {/* Bar atas */}
        <div
          className={`w-6 h-1 bg-blue-600 rounded-sm transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        {/* Bar tengah */}
        <div
          className={`w-6 h-1 bg-blue-600 rounded-sm transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        {/* Bar bawah */}
        <div
          className={`w-6 h-1 bg-blue-600 rounded-sm transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>

      {/* Menu dropdown */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
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
