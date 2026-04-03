"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <MainLayout>
      <div className="bg-indigo-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-gray-600">
            We&apos;d love to hear from you. Send us a message!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Get in Touch</h2>
              <p className="mt-2 text-gray-600">
                Have questions about our courses? Need help with your account?
                Our team is here to help.
              </p>
            </div>
            {[
              { icon: "📧", label: "Email", value: "support@andarz.com" },
              { icon: "📍", label: "Address", value: "123 Learning Lane, Ed City, EC 10001" },
              { icon: "🕐", label: "Support Hours", value: "Mon–Fri, 9am–6pm UTC" },
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
                  Message Sent!
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
