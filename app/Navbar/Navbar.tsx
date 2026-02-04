"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products & Services", href: "/services" },
  { label: "Case Studies", href: "/caseStudies" },
  { label: "Blog", href: "/blog" },
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
      {/* NAVBAR */}
      <div
        className={`h-28 sticky top-0 z-50 w-full flex items-center justify-center transition-all duration-300
        ${
          scrolled
            ? "bg-[#242632]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex w-[90%] lg:w-5/6 justify-between items-center gap-4">
          {/* LOGO - Added responsive width */}
          <Link href="/" className="shrink-0">
            <div className="relative w-[120px] h-[50px] md:w-[170px] md:h-[80px]">
              <Image
                src="/white_logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV GROUP */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-3 lg:gap-6">
            
            {/* GRAY NAVBAR - Added responsive padding and dynamic font size */}
            <div className="flex items-center justify-between bg-[#353749] rounded-2xl h-14 
                            px-4 lg:px-10 gap-4 lg:gap-8 text-gray-200
                            text-sm lg:text-[20px] xl:text-[22px]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition whitespace-nowrap"
                >
                  <div className="hover:text-blue-400">
                  {item.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* CONTACT BUTTON - Added responsive padding and dynamic font size */}
            <Link
              href="/contact"
              className="flex items-center justify-center bg-blue-400 text-gray-200 rounded-2xl h-14
                         px-4 lg:px-8 hover:bg-blue-600 transition whitespace-nowrap
                         text-sm lg:text-[20px] xl:text-[22px]"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-12 h-12 rounded-xl bg-[#353749] flex items-center justify-center shrink-0"
          >
            <Image src="/menu.png" alt="Menu" width={24} height={24} priority />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-28 left-0 z-40 w-full bg-[#1E2128]
        overflow-hidden transition-all duration-300 md:hidden
        ${menuOpen ? "max-h-96 border-b border-gray-700 shadow-xl" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-6 px-8 py-8 text-lg font-medium text-white">
          {[...navItems, { label: "Contact", href: "/contact" }].map((item) => (
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

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;