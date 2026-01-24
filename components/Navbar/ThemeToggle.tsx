"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

   const modeSrc =
    currentTheme === "dark" ? "/sun2.png" : "/moon.png";

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="dark:bg-white bg-[#1E2128]  hover:dark:border-white hover:border-gray-400 hover:border-2 h-16 w-16 flex items-center justify-center  rounded-2xl"
    >
       <Image
                src={modeSrc}
                alt="Logo"
                width={30}
                height={30}
                priority
              />
    </button>
  );
}
