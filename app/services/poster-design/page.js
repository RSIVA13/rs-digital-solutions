import InnerHero from "@/components/InnerHero";

export const metadata = {
  title: "Poster Designing Services | RS Digital Solutions",
  description:
    "Professional poster designing services to promote your brand, events, and campaigns with eye-catching visuals.",
};

export default function PosterDesigning() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="Poster Designing Services" />

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
              POSTER DESIGNING
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Posters That Grab Attention <br />
              <span className="text-orange-600">And Drive Action</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Posters are powerful visual tools to communicate your message
              instantly. We design posters that are bold, creative, and aligned
              with your brand identity.
            </p>
          </div>

          {/* IMAGE */}
          <div className="animate-scaleIn flex justify-center lg:mt-6">
            <img
              src="/services/poster-design-main.png"
              alt="Poster Designing"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= POSTER SHOWCASE ================= */}
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
              POSTER STYLES
            </span>

            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Creative. Bold. Impactful.
            </h3>

            <p className="mt-6 text-lg text-gray-600">
              A glimpse of posters designed for marketing, events, and branding.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              "/services/poster-sample-1.png",
              "/services/poster-sample-2.png",
              "/services/poster-sample-3.png",
              "/services/poster-sample-4.png",
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
                  alt="Poster Sample"
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= REAL-WORLD USE ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* IMAGE */}
          <div className="animate-scaleIn flex justify-center">
            <img
              src="/services/poster-brand-mockup.png"
              alt="Poster Brand Mockup"
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
              REAL-WORLD APPLICATION
            </span>

            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Posters That Perform Everywhere
            </h3>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our posters are designed to look stunning across print,
              storefronts, social media, websites, and outdoor advertising.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This ensures your campaigns stay visually strong and consistent
              wherever they are displayed.
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
              Our Poster Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {[
              { title: "Concept", img: "/services/poster-process-1.png" },
              { title: "Layout Design", img: "/services/poster-process-2.png" },
              { title: "Visual Refinement", img: "/services/poster-process-3.png" },
              { title: "Final Delivery", img: "/services/poster-process-4.png" },
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
            Need a Poster That Stands Out?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Let RS Digital Solutions design posters that capture attention and
            deliver your message effectively.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-orange-500 text-white px-12 py-5 rounded-full font-bold
                hover:bg-orange-600 transition shadow-xl
              ">
                Start Poster Designing
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
