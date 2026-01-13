"use client";

import InnerHero from "@/components/InnerHero";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus({ type: "", msg: "" });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          type: "success",
          msg: "Message sent successfully. We’ll contact you shortly!",
        });
        setLoading(false);
        e.target.reset();
      })
      .catch(() => {
        setStatus({
          type: "error",
          msg: "Failed to send message. Please try again later.",
        });
        setLoading(false);
      });
  };

  return (
    <>
      <InnerHero title="Contact Us" />

      {/* INTRO */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            LET’S TALK
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Let’s Build Something <br />
            <span className="text-orange-600">Great Together</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Have a project in mind? Share your details and we’ll get back to you.
          </p>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT INFO */}
          <div>
            <div className="grid gap-6 mb-12">
              {[
                {
                  icon: <Phone />,
                  label: "Phone",
                  value: "+91 98765 43210",
                },
                {
                  icon: <Mail />,
                  label: "Email",
                  value: "info@rsdigitalsolutions.com",
                },
                {
                  icon: <MapPin />,
                  label: "Location",
                  value: "Chennai, Tamil Nadu",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-orange-50 p-5 rounded-2xl shadow-sm"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-semibold text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <iframe
              src="https://www.google.com/maps?q=Chennai&output=embed"
              className="w-full h-[320px] rounded-3xl shadow-xl"
              loading="lazy"
            />
          </div>

          {/* RIGHT FORM */}
          <form
  onSubmit={handleSubmit}
  className="bg-white rounded-3xl shadow-2xl p-10 space-y-6"
>
  {/* FORM HEADING */}
  <div className="text-center mb-4">
    <h3 className="text-2xl font-extrabold text-gray-900">
      Send Us a Message
    </h3>
    <p className="mt-1 text-sm text-gray-600">
      Tell us about your project — we usually respond within 24 hours.
    </p>
  </div>

  {/* NAME */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">
      Your Name
    </label>
    <input
      type="text"
      name="from_name"
      required
      placeholder="Enter your full name"
      className="
        w-full px-4 py-3 border rounded-xl
        focus:ring-2 focus:ring-orange-400 outline-none
      "
    />
  </div>

  {/* EMAIL */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">
      Your Email
    </label>
    <input
      type="email"
      name="reply_to"
      required
      placeholder="Enter your email address"
      className="
        w-full px-4 py-3 border rounded-xl
        focus:ring-2 focus:ring-orange-400 outline-none
      "
    />
    <p className="text-xs text-gray-500 mt-1">
      We’ll only use this email to contact you about your enquiry
    </p>
  </div>

  {/* MOBILE */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">
      Mobile Number
    </label>
    <input
      type="tel"
      name="mobile"
      required
      pattern="[0-9]{10}"
      placeholder="10-digit mobile number"
      className="
        w-full px-4 py-3 border rounded-xl
        focus:ring-2 focus:ring-orange-400 outline-none
      "
    />
    <p className="text-xs text-gray-500 mt-1">
      We’ll only use this number to contact you about your enquiry
    </p>
  </div>

  {/* SERVICE */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">
      Service You’re Interested In
    </label>
    <select
      name="service"
      required
      className="
        w-full px-4 py-3 border rounded-xl bg-white
        focus:ring-2 focus:ring-orange-400 outline-none
      "
    >
      <option value="">Select a service</option>
      <option value="Website Development">Website Development</option>
      <option value="Digital Marketing">Digital Marketing</option>
      <option value="Designing">Designing</option>
    </select>
  </div>

  {/* MESSAGE HEADING */}
  <div className="pt-4 border-t">
    <h4 className="text-lg font-semibold text-gray-900 mb-2">
      Project Details
    </h4>

    <label className="block mb-1 font-medium text-gray-700">
      Message
    </label>

    <textarea
      name="message"
      rows="5"
      required
      placeholder="Briefly describe your project, goals, timeline, and any specific requirements..."
      className="
        w-full px-4 py-3 border rounded-xl
        focus:ring-2 focus:ring-orange-400 outline-none
      "
    />
  </div>

  {/* SUBMIT */}
  <button
    disabled={loading}
    className="
      w-full bg-orange-500 text-white py-4 rounded-full font-bold
      hover:bg-orange-600 transition-all duration-300
      flex items-center justify-center gap-2
      disabled:opacity-70
    "
  >
    {loading && <Loader2 className="animate-spin" size={20} />}
    {loading ? "Sending..." : "Send Message"}
  </button>

  {/* STATUS */}
  {status.msg && (
    <p
      className={`text-center font-medium ${
        status.type === "success"
          ? "text-green-600"
          : "text-red-600"
      }`}
    >
      {status.msg}
    </p>
  )}
</form>


        </div>
      </section>
    </>
  );
}
