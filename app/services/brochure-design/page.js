import InnerHero from "@/components/InnerHero";

export const metadata = {
  title: "Brochure Design Services | RS Digital Solutions",
  description:
    "Professional brochure design services that communicate your brand story with visually stunning layouts.",
};

export default function BrochureDesign() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="Brochure Design" />

      {/* ================= INTRO ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* TEXT */}
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
              BROCHURE DESIGN SERVICES
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Designs That Speak <br />
              <span className="text-orange-600">Before You Do</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              A brochure is more than printed paper — it’s a powerful marketing
              tool that communicates your brand message, services, and value in
              seconds.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              At RS Digital Solutions, we design brochures that are visually
              compelling, content-focused, and aligned with your brand identity.
            </p>
          </div>

          {/* IMAGE */}
          <div className="animate-scaleIn flex justify-center lg:mt-6">
            <img
              src="/services/brochure-design-main.png"
              alt="Brochure Design"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= TYPES OF BROCHURES ================= */}
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
              BROCHURE TYPES
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Brochure Types We Design
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Tailored brochure designs for every business and marketing need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {[
              {
                title: "Corporate Brochures",
                image: "/services/brochure-sample-1.png",
              },
              {
                title: "Product Catalogs",
                image: "/services/brochure-sample-2.png",
              },
              {
                title: "Event & Promotional",
                image: "/services/brochure-sample-3.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-2xl
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-3
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-t-2xl"
                />

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 px-6 bg-white">
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
            Why Choose RS Digital Solutions?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We combine creativity, strategy, and branding expertise to create
            brochures that convert readers into customers.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">

            {[
              "Creative Layouts",
              "Brand Consistency",
              "Print & Digital Ready",
              "Fast Turnaround",
            ].map((item) => (
              <div
                key={item}
                className="
                  bg-orange-50 py-8 px-4
                  rounded-xl font-semibold text-gray-900
                  shadow-sm
                "
              >
                {item}
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
            Need a Brochure That Stands Out?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Let RS Digital Solutions design brochures that leave a lasting
            impression on your audience.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-orange-500 text-white px-12 py-5 rounded-full font-bold
                hover:bg-orange-600 transition shadow-xl
              ">
                Get Brochure Design Quote
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
