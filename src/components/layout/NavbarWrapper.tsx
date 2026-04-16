"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

const AUTH_PATHS = ["/login", "/register"];

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (AUTH_PATHS.some((p) => pathname.startsWith(p))) {
    return null;
  }

  return <Navbar />;
}
