import InnerHero from "@/components/InnerHero";

export const metadata = {
  title: "Logo Design Services | RS Digital Solutions",
  description:
    "Professional logo design services that build strong brand identity and create lasting impressions.",
};

export default function LogoDesign() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="Logo Design Services" />

      {/* ================= INTRO ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
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
              BRAND IDENTITY
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Logos That Speak <br />
              <span className="text-orange-600">Your Brand Story</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              A logo is the foundation of your brand. We design logos that are
              timeless, memorable, and crafted to represent your business
              values clearly.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "100% Custom Logo Concepts",
                "Brand-Focused Design Approach",
                "Digital & Print Ready",
                "Full Ownership Rights",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-800 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE */}
          <div className="animate-scaleIn flex justify-center lg:mt-6">
            <img
              src="/services/logo-design-main.png"
              alt="Logo Design"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= LOGO SHOWCASE ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="
              inline-block mb-4
              px-4 py-1
              text-sm font-semibold
              text-orange-600
              bg-orange-100
              rounded-full
            ">
              LOGO STYLES
            </span>

            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Modern. Minimal. Memorable.
            </h3>

            <p className="mt-6 text-lg text-gray-600">
              A glimpse of logo styles crafted for different industries and brand personalities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              "/services/logo-sample-1.png",
              "/services/logo-sample-2.png",
              "/services/logo-sample-3.png",
              "/services/logo-sample-4.png",
            ].map((img, i) => (
              <div
                key={i}
                className="
                  bg-white p-6 rounded-2xl
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-2
                "
              >
                <img
                  src={img}
                  alt="Logo Sample"
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= BRAND MOCKUPS ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* IMAGE */}
          <div className="animate-scaleIn flex justify-center">
            <img
              src="/services/logo-brand-mockup.png"
              alt="Logo Brand Mockup"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* CONTENT */}
          <div className="animate-fadeUp">

            <span className="
              inline-block mb-4
              px-4 py-1
              text-sm font-semibold
              text-orange-600
              bg-orange-100
              rounded-full
            ">
              REAL-WORLD USAGE
            </span>

            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              See Your Logo in Real-World Use
            </h3>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We don’t just design logos — we visualize how your logo performs
              across business cards, websites, social media, packaging, and apps.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This ensures your brand looks consistent, professional, and premium
              everywhere it appears.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DESIGN PROCESS ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="
              inline-block mb-4
              px-4 py-1
              text-sm font-semibold
              text-orange-600
              bg-orange-100
              rounded-full
            ">
              DESIGN PROCESS
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Logo Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {[
              {
                title: "Research",
                img: "/services/logo-process-1.png",
              },
              {
                title: "Concepts",
                img: "/services/logo-process-2.png",
              },
              {
                title: "Refinement",
                img: "/services/logo-process-3.png",
              },
              {
                title: "Final Delivery",
                img: "/services/logo-process-4.png",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="rounded-2xl shadow-xl mb-6"
                />
                <h4 className="font-bold text-gray-900">
                  {step.title}
                </h4>
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
            Ready to Create a Powerful Brand Identity?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Let RS Digital Solutions craft a logo that makes your brand instantly
            recognizable and unforgettable.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-orange-500 text-white px-12 py-5 rounded-full font-bold
                hover:bg-orange-600 transition shadow-xl
              ">
                Start Your Logo Design
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
