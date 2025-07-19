"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Counter", path: "/counter" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h1
        className="text-2xl font-bold mb-8 cursor-pointer"
        onClick={handleGoHome}
      >
        Side Bar
      </h1>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-4 py-2 rounded-md transition-all ${
                pathname === item.path
                  ? "bg-white text-gray-900 font-semibold"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
