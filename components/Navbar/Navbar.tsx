"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

    useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null; 

  const currentTheme = theme === "system" ? systemTheme : theme;

  const logoSrc =
    currentTheme === "dark" ? "/white_logo.png" : "/black_logo.png";

 return (
  <>
    
    <div
      className={`
        h-32 sticky top-0 left-0 z-50 w-full flex items-center justify-center transition-all duration-300
        ${
          scrolled
            ? currentTheme === "dark"
              ? "bg-[#242632]/90 backdrop-blur-md shadow-lg"
              : "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex w-5/6 justify-between items-center gap-5">
        
        
        <Image
          src={logoSrc}
          alt="Logo"
          width={170}
          height={80}
          priority
        />

    
        <div className="bg-[#E6E6E6] dark:bg-[#353749] hidden md:flex w-2/3 rounded-2xl h-16"></div>

      
        <div className="flex items-center gap-4">

         
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-16 h-16 rounded-xl  bg-blue-400 flex items-center justify-center"
          >
            <Image 
           src={"/menu.png"}
                alt="Logo"
                width={30}
                height={30}
                priority
            />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </div>

 
    <div
      className={`
        fixed top-0 right-0 z-50 h-screen w-72 bg-white dark:bg-[#1E2128]
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
 
      <div className="flex justify-end p-6">
        <button
          onClick={() => setMenuOpen(false)}
          className="w-10 h-10 rounded-full bg-[#6AA6FF] text-white"
        >
          ✕
        </button>
      </div>

 
      <div className="flex flex-col gap-6 px-6 text-lg font-medium">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">Services</span>
        <span className="cursor-pointer">Contact</span>
        <span className="cursor-pointer">Blog</span>
        <span className="cursor-pointer">News</span>
      </div>
    </div>

   
    {menuOpen && (
      <div
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
      />
    )}
  </>
);

};

export default Navbar;
