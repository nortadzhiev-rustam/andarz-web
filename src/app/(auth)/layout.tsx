"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  const s = t.siteName;
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex flex-col items-center gap-2">
          <Image
            src="/IMG_7394.png"
            alt={s}
            width={56}
            height={56}
            className="object-contain"
          />
          <span className="text-3xl font-extrabold text-blue-700">{s}</span>
        </Link>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm rounded-xl sm:px-10 ring-1 ring-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
}
