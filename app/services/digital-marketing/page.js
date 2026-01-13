import InnerHero from "@/components/InnerHero";
import {
  Search,
  BarChart3,
  Globe,
  Megaphone,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Digital Marketing Services | RS Digital Solutions",
  description:
    "Professional Digital Marketing Services in Chennai to grow brand visibility, leads, and ROI.",
};

export default function DigitalMarketing() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="Digital Marketing Services" />

      {/* ================= INTRO ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* CONTENT */}
          <div className="animate-fadeUp">

            {/* Badge */}
            <span className="
              inline-block mb-4
              px-4 py-1
              text-sm font-semibold
              text-orange-600
              bg-orange-100
              rounded-full
            ">
              DIGITAL MARKETING SERVICES
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Digital Marketing Strategies <br />
              That Drive <span className="text-orange-600">Real Growth</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              RS Digital Solutions delivers performance-driven digital marketing
              services designed to increase brand visibility, generate quality
              leads, and maximize ROI across digital platforms.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With <strong>10+ years of experience</strong>, our digital marketing
              experts create customized strategies using SEO, paid advertising,
              social media, and content marketing to grow your business online.
            </p>

            
          </div>

          {/* IMAGE */}
          <div className="relative animate-scaleIn flex justify-center lg:mt-6">
            <img
              src="/services/digital-marketing.png"
              alt="Digital Marketing Services"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">

          <span className="
            inline-block mb-4
            px-4 py-1
            text-sm font-semibold
            text-orange-600
            bg-orange-100
            rounded-full
          ">
            OUR EXPERTISE
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Digital Marketing Services
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We provide complete digital marketing solutions that help businesses
            attract customers, improve engagement, and generate consistent revenue.
          </p>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

            {[
              {
                icon: <Search />,
                title: "Search Engine Optimization (SEO)",
                desc: "Increase organic traffic and rankings with proven SEO strategies.",
              },
              {
                icon: <TrendingUp />,
                title: "Pay Per Click Advertising (PPC)",
                desc: "Instant visibility and high-quality leads through paid campaigns.",
              },
              {
                icon: <Users />,
                title: "Social Media Marketing",
                desc: "Grow brand awareness and customer engagement across platforms.",
              },
              {
                icon: <Megaphone />,
                title: "Content Marketing",
                desc: "High-quality content that educates, engages, and converts users.",
              },
              {
                icon: <BarChart3 />,
                title: "Analytics & Conversion Tracking",
                desc: "Data-driven insights to continuously improve campaign performance.",
              },
              {
                icon: <Globe />,
                title: "Online Reputation Management",
                desc: "Build and protect your brand’s digital reputation online.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-2xl p-10
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-3
                  animate-fadeUp
                "
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="
                  w-16 h-16 mx-auto mb-6 rounded-full
                  bg-gradient-to-br from-orange-500 to-orange-400
                  flex items-center justify-center text-white
                ">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-6 w-12 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto text-center">

          <span className="
            inline-block mb-4
            px-4 py-1
            text-sm font-semibold
            text-orange-600
            bg-orange-100
            rounded-full
          ">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Choose <span className="text-orange-600">RS Digital Solutions</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We don’t just run campaigns. We build marketing strategies that align
            with your business goals and deliver measurable results.
          </p>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            {[
              { title: "10+", desc: "Years of Experience" },
              { title: "100%", desc: "ROI-Focused Strategy" },
              { title: "1:1", desc: "Dedicated Manager" },
              { title: "Proven", desc: "Marketing Results" },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-2xl p-8
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-3
                "
              >
                <h3 className="text-4xl font-extrabold text-orange-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-semibold">
                  {item.desc}
                </p>
                <div className="mt-4 w-12 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 px-6 bg-white text-center overflow-hidden">

        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300"></div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Ready to Grow Your Brand Online?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Partner with RS Digital Solutions to generate leads, improve visibility,
            and scale your business with expert digital marketing strategies.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-orange-500 text-white px-12 py-5 rounded-full font-bold
                hover:bg-orange-600 transition shadow-xl
              ">
                Get Free Digital Marketing Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
