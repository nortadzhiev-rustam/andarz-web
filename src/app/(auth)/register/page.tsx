"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <span className="text-4xl">🎉</span>
        <h2 className="mt-4 text-xl font-bold text-gray-900">Account Created!</h2>
        <p className="mt-2 text-sm text-gray-500">
          Welcome to Andarz. You can now sign in and start learning.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="reg-first-name" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              id="reg-first-name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="reg-last-name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              id="reg-last-name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="reg-email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="reg-password"
            type="password"
            required
            minLength={8}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Min. 8 characters"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-blue-700 hover:text-blue-600">
          Sign in
        </Link>
      </p>
    </>
  );
}
