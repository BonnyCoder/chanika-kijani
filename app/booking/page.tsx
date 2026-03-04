"use client";
import { useState } from "react";

export default function BookingPage(){
      const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    visitors: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking submitted! / Booking imewasilishwa!");
    // TODO: Send data to backend or API
  };

  return (
    <section className="booking py-8 px-4 sm:px-10 md:px-20 bg-green-50 rounded-lg my-8">
      <h2 className="text-3xl font-bold mb-4">BOOK ONLINE / WEKA ODA MTANDAONI</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name / Jina" className="p-2 border rounded"/>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email / Barua pepe" className="p-2 border rounded"/>
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone / Simu" className="p-2 border rounded"/>
        <input name="date" type="date" value={form.date} onChange={handleChange} className="p-2 border rounded"/>
        <input name="visitors" type="number" value={form.visitors} onChange={handleChange} placeholder="Number of visitors / Idadi ya wageni" className="p-2 border rounded"/>
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Submit / Tuma</button>
      </form>
    </section>
  );
}