import InnerHero from "@/components/InnerHero";
import {
  Search,
  BarChart3,
  Globe,
  Settings,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "SEO Services | RS Digital Solutions",
  description:
    "Professional SEO Services in Chennai to improve Google rankings, organic traffic, and conversions.",
};

export default function SEOService() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="SEO Services" />

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
              SEO SERVICES IN CHENNAI
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Professional SEO Services <br />
              That Deliver <span className="text-orange-600">Real Results</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              RS Digital Solutions offers result-driven SEO services designed to
              increase your website’s visibility on Google and other search
              engines.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With over <strong>10+ years of experience</strong>, our SEO experts
              use ethical white-hat techniques to ensure long-term success and
              higher ROI.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "100% White Hat SEO Techniques",
                "Google Algorithm Compliant",
                "Transparent Monthly Reporting",
                "Dedicated SEO Experts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={22} />
                  <span className="text-gray-800 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE */}
          <div className="relative animate-scaleIn flex justify-center lg:mt-6">
            <img
              src="/services/seo-service.png"
              alt="SEO Services"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= SEO SERVICES LIST ================= */}
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
            Our SEO Services
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We deliver complete, data-driven SEO solutions that help your
            business rank higher, attract quality traffic, and generate
            consistent leads.
          </p>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

            {[
              {
                icon: <Search />,
                title: "Keyword Research",
                desc: "High-intent keyword analysis to target customers ready to convert.",
              },
              {
                icon: <Settings />,
                title: "On-Page SEO",
                desc: "Optimizing content, meta tags, URLs, and internal linking structure.",
              },
              {
                icon: <Globe />,
                title: "Technical SEO",
                desc: "Improving crawlability, indexing, speed, and mobile experience.",
              },
              {
                icon: <BarChart3 />,
                title: "Content Optimization",
                desc: "SEO-friendly content that ranks and converts visitors into leads.",
              },
              {
                icon: <TrendingUp />,
                title: "Link Building",
                desc: "Authority-building backlinks to improve trust and rankings.",
              },
              {
                icon: <Search />,
                title: "Local SEO",
                desc: "Google Maps & local SEO strategies to dominate local search results.",
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
            Why Choose <span className="text-orange-600">RS Digital Solutions</span> for SEO?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We don’t just chase rankings. We build SEO strategies that align with
            your business goals and deliver measurable, long-term growth.
          </p>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            {[
              { title: "10+", desc: "Years of Experience" },
              { title: "100%", desc: "Data-Driven Strategy" },
              { title: "1:1", desc: "Dedicated Manager" },
              { title: "Proven", desc: "Track Record" },
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
            Ready to Improve Your Google Rankings?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Partner with RS Digital Solutions to increase visibility, traffic,
            and conversions with proven SEO strategies.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-orange-500 text-white px-12 py-5 rounded-full font-bold
                hover:bg-orange-600 transition shadow-xl
              ">
                Get Free SEO Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
