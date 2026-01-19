import InnerHero from "@/components/InnerHero";
import { Target, Eye, CheckCircle } from "lucide-react";
import { Lightbulb, Clock, Palette } from "lucide-react";

export const metadata = {
  title: "About RS Digital Solutions | Web Design Company in Kolathur Chennai",
  description:
    "Learn about RS Digital Solutions, a professional web development company in Kolathur, Chennai offering modern websites for small and medium businesses.",
};

export default function About() {
  return (
    <>
      {/* ================= HERO ================= */}
      <InnerHero title="About Us" />

      {/* ================= INTRO SECTION ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-fadeUp">

            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              ABOUT RS DIGITAL SOLUTIONS
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Why RS Digital Solutions is a <br />
              <span className="text-orange-600">
                Leading Web Development Company
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              RS Digital Solutions is your trusted partner for digital growth.
              With over 10+ years of experience, our skilled professionals
              deliver innovative web design and development solutions that
              help businesses connect with their ideal customers.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe every business is unique. That’s why our websites and
              digital strategies are fully customized to align with your
              specific goals, industry needs, and growth vision.
            </p>

            {/* Key Values */}
            <ul className="mt-8 space-y-4">
              {["DESIGN", "DEVELOP", "DELIVER"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={22} />
                  <span className="text-gray-800 font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-700 font-medium">
              We specialize in web development, digital marketing, and SEO,
              helping brands strengthen their online presence and achieve
              long-term business success.
            </p>
          </div>

          {/* RIGHT – IMAGE / CARDS */}
          <div className="space-y-10 animate-scaleIn">

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Target className="text-orange-600" size={30} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                To empower businesses with innovative, scalable, and
                result-driven digital solutions that create measurable value
                and sustainable growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Eye className="text-orange-600" size={30} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Our Vision
                </h3>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                To become a globally recognized digital solutions company
                known for creativity, technical excellence, and a strong
                customer-first mindset.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US (HIGHLIGHT SECTION) ================= */}
      <section
        className="
          relative py-28 px-6 text-center text-white overflow-hidden
          bg-gradient-to-br from-orange-600 via-orange-300 to-white
        "
      >
        {/* Pattern */}
        <div
          className="
            absolute inset-0 opacity-10
            bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
            bg-[size:28px_28px]
          "
        />

        {/* Floating Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float [animation-delay:300ms]"></div>

        <div className="relative z-10 max-w-5xl mx-auto animate-fadeUp">

          <h2 className="text-3xl md:text-4xl font-bold">
            WHAT LOOKS GOOD WILL ALWAYS SELL
          </h2>

          <h3 className="mt-4 text-2xl md:text-3xl font-semibold">
            Why Choose RS Digital Solutions?
          </h3>

          <p className="mt-6 text-lg text-white/90 max-w-4xl mx-auto">
            We deliver innovative, scalable, and result-oriented digital
            solutions that help businesses grow faster, smarter, and stronger
            in the digital world.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-white text-gray-900 px-10 py-4 rounded-full font-bold
                hover:bg-gray-900 hover:text-white
                transition-all duration-300 shadow-xl
              ">
                Get Started Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE TEXT ================= */}
      <section className="bg-white py-16 px-6">
        <p className="max-w-6xl mx-auto text-gray-700 text-center text-lg leading-relaxed">
          With 10+ years of experience solving complex digital challenges,
          RS Digital Solutions has delivered high-quality solutions across
          industries, serving both local and global clients with excellence.
        </p>
      </section>

      {/* ================= VALUE CARDS ================= */}
      

<section className="bg-gradient-to-b from-white to-orange-50 py-28 px-6">
  <div className="max-w-7xl mx-auto">

    {/* SECTION HEADING */}
    <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeUp">
      <span className="
        inline-block mb-4 px-4 py-1 text-sm font-semibold
        text-orange-600 bg-orange-100 rounded-full
      ">
        OUR STRENGTHS
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">

        What Makes <span className="text-orange-600">RS Digital Solutions</span> Different
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        We combine creativity, technology, and strategy to deliver digital
        solutions that create real business impact.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {[
        {
          icon: <Palette />,
          title: "Creative & Unique Designers",
          desc:
            "A talented team of designers and developers crafting visually stunning, user-focused digital experiences.",
        },
        {
          icon: <Clock />,
          title: "Our Past & Future Vision",
          desc:
            "Built on strong values and great work, we continue to grow with a clear vision for long-term success.",
        },
        {
          icon: <Lightbulb />,
          title: "Our Value Proposition",
          desc:
            "We focus on performance, usability, and innovation to deliver measurable ROI and sustainable growth.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
            group bg-white rounded-2xl p-10
            shadow-md hover:shadow-2xl
            transition-all duration-300
            hover:-translate-y-3 animate-fadeUp
          "
          style={{ animationDelay: `${i * 150}ms` }}
        >
          {/* Icon */}
          <div className="
            w-16 h-16 mx-auto mb-6 rounded-full
            bg-gradient-to-br from-orange-500 to-orange-400
            flex items-center justify-center text-white
            group-hover:scale-110 transition
          ">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-center">
            {item.desc}
          </p>

          {/* Accent */}
          <div className="mt-6 w-12 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
