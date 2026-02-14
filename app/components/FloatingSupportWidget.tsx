"use client";

import { useEffect, useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email?: string;
  service: string;
};

export default function FloatingSupportWidget() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const WHATSAPP_NUMBER = "919319782709";
  const CALL_NUMBER = "+919319782709";

  // Auto open after 6s (feels less aggressive)
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    const message = `Hello Fenebris India 👋
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <>
      {/* ================= CALL BUTTON ================= */}
      <div className="fixed bottom-[104px] right-6 z-[9999] group">
        <a
          href={`tel:${CALL_NUMBER}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-xl transition-all duration-300 hover:w-44 hover:justify-start hover:px-4"
        >
          <svg
            className="h-6 w-6 text-white shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.55.57 1 1 0 011 1v3.44a1 1 0 01-1 1C9.39 21 3 14.61 3 6a1 1 0 011-1h3.44a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.24 1.01l-2.15 2.23z" />
          </svg>
          <span className="ml-3 hidden whitespace-nowrap text-sm font-semibold text-white group-hover:block">
            Call Us Instantly
          </span>
        </a>
      </div>

      {/* ================= WHATSAPP TOGGLE ================= */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => setOpen(!open)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#1DA851] shadow-2xl transition hover:scale-110 active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-white"
            fill="currentColor"
          >
            <path d="M12.04 0C5.4 0 .06 5.33.06 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.36-1.67a11.9 11.9 0 005.67 1.44h.01c6.63 0 12-5.33 12-11.88C24.04 5.33 18.67 0 12.04 0z" />
          </svg>
        </button>

        {/* ================= CHAT BOX ================= */}
        {open && (
          <div className="absolute bottom-24 right-0 w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/90 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#075E54] to-[#128C7E] px-5 py-4 text-white">
              <div>
                <p className="text-sm font-semibold">
                  Fenebris India Pvt. Ltd.
                </p>
                <span className="text-[11px] opacity-90 tracking-wide">
                  Online • Replies in minutes
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-lg opacity-80 hover:opacity-100 transition"
              >
                ✕
              </button>
            </div>

            {/* Message */}
            <div className="p-5 bg-zinc-50 dark:bg-zinc-800/60">
              <div className="inline-block max-w-[85%] rounded-2xl rounded-tl-none bg-white dark:bg-zinc-700 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-100 shadow-sm">
                👋 Hi there!  
                <br />
                We help startups scale with tech, automation & growth.
              </div>
            </div>

            {/* Form */}
            <div className="space-y-3 p-5 bg-white dark:bg-zinc-900">
              <select
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#128C7E]"
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
              >
                <option value="">Select Service</option>
                <option>Web Application Development</option>
                <option>Mobile App Development</option>
                <option>AI Development Services</option>
                <option>Digital Marketing</option>
                <option>Cloud App Development</option>
              </select>

              <input
                placeholder="Your Name"
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#128C7E]"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Phone Number"
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#128C7E]"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <button
                onClick={handleSubmit}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#075E54] to-[#1DA851] py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                Start WhatsApp Chat
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
