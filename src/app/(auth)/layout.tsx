import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center">
          <span className="text-3xl font-extrabold text-blue-700">{SITE_NAME}</span>
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
