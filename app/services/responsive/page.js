import InnerHero from "@/components/InnerHero";

export const metadata = {
  title: "Responsive Web Design in Kolathur, Chennai | RS Digital Solutions",
  description:
    "Professional responsive web design services in Kolathur, Chennai by RS Digital Solutions. We build fast, mobile-friendly, and SEO-optimized websites for all devices.",
};


export default function ResponsiveWebDesign() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="Responsive Web Design" />

      {/* ================= CINEMATIC INTRO ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden">

        {/* Decorative blobs */}
        
       

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

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
              RESPONSIVE DESIGN
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Design Once. <br />
              <span className="text-orange-600">
                Look Perfect Everywhere.
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We create visually stunning, responsive websites that adapt
              beautifully across desktops, tablets, and smartphones — without
              sacrificing performance or brand consistency.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Every layout is crafted with precision, ensuring smooth
              interactions, perfect spacing, and flawless usability on all
              screen sizes.
            </p>
          </div>

          {/* MAIN MOCKUP */}
          <div className="relative animate-scaleIn flex justify-center">
            <img
              src="/services/responsive-main.webp"
              alt="Responsive Website Mockup"
              className="rounded-3xl shadow-2xl"
            />

            {/* Floating preview */}
            <img
              src="/services/responsive-mobile.webp"
              alt="Mobile Preview"
              className="
                hidden md:block
                absolute -bottom-16 -left-16 w-44
                rounded-2xl shadow-xl
                animate-float
              "
            />
          </div>

        </div>
      </section>

      {/* ================= DEVICE EXPERIENCE STRIP ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">

            {/* Badge */}
            <span className="
              inline-block mb-4
              px-4 py-1
              text-sm font-semibold
              text-orange-600
              bg-orange-100
              rounded-full
            ">
              DEVICE EXPERIENCE
            </span>

            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              One Design. Multiple Experiences.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">

            {[
              {
                title: "Desktop Experience",
                image: "/services/device-desktop-wide1.png",
              },
              {
                title: "Tablet Experience",
                image: "/services/device-tablet-wide.png",
              },
              {
                title: "Mobile Experience",
                image: "/services/device-mobile-wide.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  group relative
                  transition-all duration-300
                  hover:-translate-y-3
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl shadow-xl"
                />

                <div className="
                  absolute -bottom-6 left-1/2 -translate-x-1/2
                  bg-white px-6 py-2 rounded-full shadow-md
                  text-gray-900 font-semibold text-sm
                ">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESIGN PRINCIPLES ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">

            {/* Badge */}
            <span className="
              inline-block mb-4
              px-4 py-1
              text-sm font-semibold
              text-orange-600
              bg-orange-100
              rounded-full
            ">
              DESIGN PRINCIPLES
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Built for Every Screen
            </h2>
          </div>

          <div className="space-y-28">

            {[
              {
                title: "Fluid Layouts",
                desc:
                  "Layouts that stretch, shrink, and rearrange seamlessly using modern CSS grid systems.",
                image: "/services/fluid-layout-large.png",
              },
              {
                title: "Mobile-First Performance",
                desc:
                  "Optimized for real-world mobile usage with lightning-fast load times.",
                image: "/services/mobile-performance-large.png",
              },
              {
                title: "Visual Consistency",
                desc:
                  "Your brand identity remains strong and consistent on every screen.",
                image: "/services/visual-consistency-large.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-20 items-center
                  ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}
                `}
              >
                <div className="animate-fadeUp">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="animate-scaleIn flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-24 px-6 bg-white text-center overflow-hidden">

        {/* Accent line */}
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300"></div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Ready for a Website That Feels Premium?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Let RS Digital Solutions craft a responsive website that looks
            stunning, performs flawlessly, and elevates your brand across all
            devices.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-orange-500 text-white px-12 py-5 rounded-full font-bold
                hover:bg-orange-600 transition shadow-xl
              ">
                Start Your Responsive Project
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
