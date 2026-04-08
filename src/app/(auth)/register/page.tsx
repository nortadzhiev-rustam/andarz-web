"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function RegisterPage() {
  const { t } = useLanguage();
  const a = t.auth.register;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <span className="text-4xl">🎉</span>
        <h2 className="mt-4 text-xl font-bold text-gray-900">{a.success.title}</h2>
        <p className="mt-2 text-sm text-gray-500">{a.success.message}</p>
        <Link
          href="/login"
          className="mt-6 inline-block rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
        >
          {a.signIn}
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">{a.title}</h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="reg-first-name" className="block text-sm font-medium text-gray-700">
              {a.firstNameLabel}
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
              {a.lastNameLabel}
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
            {a.emailLabel}
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
            {a.passwordLabel}
          </label>
          <input
            id="reg-password"
            type="password"
            required
            minLength={8}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={a.passwordPlaceholder}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
        >
          {a.submit}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        {a.hasAccount}{" "}
        <Link href="/login" className="font-semibold text-blue-700 hover:text-blue-600">
          {a.signIn}
        </Link>
      </p>
    </>
  );
}
