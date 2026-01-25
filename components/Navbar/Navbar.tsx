"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
  { label: "News", href: "#news" },
];

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
  
      <div
        className={`
          h-32 sticky top-0 z-50 w-full flex items-center justify-center transition-all duration-300
          ${
            scrolled
              ? "bg-[#242632]/90 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex w-5/6 justify-between items-center gap-5">
   
          <Link href="#home">
            <Image
              src="/white_logo.png"
              alt="Logo"
              width={170}
              height={80}
              priority
            />
          </Link>

         
          <div className="hidden md:flex w-2/3 lg:text-2xl md:text-lg  h-16 bg-[#353749] rounded-2xl items-center justify-evenly text-white font-normal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-blue-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

         
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-16 h-16 rounded-xl bg-[#353749] flex items-center justify-center"
          >
            <Image src="/menu.png" alt="Menu" width={30} height={30} priority />
          </button>
        </div>
      </div>

    
      <div
        className={`
          fixed top-32 left-0 z-40 w-full bg-[#1E2128]
          overflow-hidden transition-all duration-300 md:hidden
          ${menuOpen ? "max-h-96" : "max-h-0"}
        `}
      >
        <div className="flex flex-col gap-6 px-6 py-8 text-lg font-medium text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
