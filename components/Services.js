"use client";

import {
  Monitor,
  Code,
  ShoppingCart,
  Megaphone,
  Share2,
  Search,
  Server,
  Wrench,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Web Design",
      desc:
        "Modern, responsive and user-friendly website designs that represent your brand perfectly.",
    },
    {
      icon: Code,
      title: "Web Development",
      desc:
        "Custom website & web application development tailored to your business needs.",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Development",
      desc:
        "Secure ecommerce websites with payment gateway, inventory management and SEO.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing 360",
      desc:
        "Complete digital marketing strategies to generate leads and grow your brand.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      desc:
        "Build brand awareness and increase conversions through social media platforms.",
    },
    {
      icon: Search,
      title: "SEO Service",
      desc:
        "Improve Google rankings and drive organic traffic with proven SEO strategies.",
    },
    {
      icon: Server,
      title: "Domain & Hosting, SSL",
      desc:
        "Domain registration, hosting, SSL security and website deployment services.",
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      desc:
        "Regular updates, security monitoring and performance optimization services.",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300">
      
      {/* Decorative blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold animate-fadeUp">
          Website Designers & Web Developers
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-white/90 animate-fadeUp delay-100">
          Website is an unavoidable business tool. Hire our expert website
          designers in Chennai to build new websites or improve existing ones
          to generate more leads and business growth.
        </p>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group bg-white/70 backdrop-blur-lg
                rounded-2xl p-8
                text-gray-800
                shadow-xl
                transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl
                animate-fadeUp
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon
                size={42}
                className="
                  mx-auto text-orange-500
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />

              <h3 className="mt-5 font-bold text-lg">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
