"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-3 space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <input
          required
          placeholder="Your name"
          className="border rounded-xl p-3 w-full"
          value={form.name}
          onChange={(e)=>setForm({...form, name:e.target.value})}
        />
        <input
          required
          type="email"
          placeholder="Your email"
          className="border rounded-xl p-3 w-full"
          value={form.email}
          onChange={(e)=>setForm({...form, email:e.target.value})}
        />
      </div>
      <textarea
        required
        placeholder="Your message"
        className="border rounded-xl p-3 w-full h-32"
        value={form.message}
        onChange={(e)=>setForm({...form, message:e.target.value})}
      />
      <button
        type="submit"
        disabled={status==="sending"}
        className="bg-accent text-white rounded-xl px-4 py-2 disabled:opacity-60"
      >
        {status==="sending" ? "Sending..." : "Send message"}
      </button>
      {status==="sent" && <span className="text-green-600 ml-2">Sent. I’ll get back to you soon.</span>}
      {status==="error" && <span className="text-red-600 ml-2">Failed to send. Please try again.</span>}
    </form>
  );
}
