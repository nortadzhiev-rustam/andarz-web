"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <MainLayout>
      <div className="bg-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">{c.pageTitle}</h1>
          <p className="mt-2 text-gray-600">{c.pageSubtitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{c.getInTouch}</h2>
              <p className="mt-2 text-gray-600">{c.getInTouchDesc}</p>
            </div>
            {[
              { icon: "📧", label: c.emailLabel, value: "support@andarz.com" },
              { icon: "📍", label: c.addressLabel, value: "Dushanbe, Tajikistan" },
              { icon: "🕐", label: c.hoursLabel, value: "Mon–Fri, 9am–6pm (TJT)" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="text-gray-600 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="text-4xl">✅</span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {c.success.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{c.success.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                    {c.form.fullName}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={c.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                    {c.form.emailAddress}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={c.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700">
                    {c.form.subject}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={c.form.subjectPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
                    {c.form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder={c.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
                >
                  {c.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
