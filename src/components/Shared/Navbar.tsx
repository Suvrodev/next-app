"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Correct for App Router

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Product", path: "/products" },
  { name: "Counter", path: "/counter" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log("Path: ", pathname);

  const navigate = useRouter();
  const handleGoHome = () => {
    navigate.push("/");
  };
  return (
    <div className="bg-gray-900 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleGoHome()}
        >
          Next App
        </h1>
        <div className="flex justify-end gap-4">
          {navItems?.map((item) => (
            <span key={item?.path}>
              {" "}
              <Link
                href={item?.path}
                className={`${pathname === item?.path ? "text-blue-600" : ""}`}
              >
                {item?.name}{" "}
              </Link>{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
