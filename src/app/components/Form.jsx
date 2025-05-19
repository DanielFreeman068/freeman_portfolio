'use client'

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
    const [form, setForm] = useState({ email: "", message: "" });
    const [status, setStatus] = useState("");
    const [messageFailed, setMessageFailed] = useState(null);

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
    
        try {
            const result = await emailjs.send(
                "service_ns9twz5", // Your Service ID
                "template_ebjhw1r", // Your Template ID
                {
                from_email: form.email,
                message: form.message,
                title: "Contact Submission from " + form.email,
                time: new Date().toLocaleString(),
                },
                "iHLYtNsV_aRU6Aco3" // Your Public Key
            );
            setStatus("Message sent!");
            setForm({ email: "", message: "" });
            setMessageFailed(false);
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("Error sending message. Please try again.");
            setMessageFailed(true);
        }
    };

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex gap-6 mx-auto items-center text-left w-full">
                <img src="/social_icons/mail.png" alt="Email" width={50} height={50} />
                <div className="flex flex-col gap-2 text-wrap">
                    <h1 className="text-xl">Email</h1>
                    <h1 className="text-sm text-links text-wrap">danielfree756@gmail.com</h1>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="border text-black focus:outline-accent p-2 rounded w-full min-w-[240px]"
                />
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="border text-black focus:outline-accent p-2 rounded min-h-[200px] w-full min-w-[240px] resize-none"
                />
                <button type="submit" className="text-textPrimary py-2 rounded bg-accent hover:bg-accentLight w-full">
                    Send Message
                </button>
                <p className={`${messageFailed ? 'text-danger' : 'text-success'} text-sm p-2 rounded`}>
                    {status}
                </p>
            </form>

        </div>
    );
}
