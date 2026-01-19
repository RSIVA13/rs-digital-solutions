import InnerHero from "@/components/InnerHero";

export const metadata = {
  title: "Web Development Consultation in Kolathur, Chennai | RS Digital Solutions",
  description:
    "Expert web development consultation in Kolathur, Chennai by RS Digital Solutions. Get professional guidance to plan, optimize, and scale your business website.",
};


export default function WebDevelopmentConsultation() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="Web Development Consultation" />

      {/* ================= INTRO ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <div className="animate-fadeUp">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              STRATEGY • PLANNING • EXECUTION
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Build the Right Website <br />
              <span className="text-orange-600">Before You Build the Code</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our Web Development Consultation service helps businesses avoid
              costly mistakes by defining the right architecture, technology,
              and roadmap before development begins.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you’re launching a new product, rebuilding an existing
              website, or scaling your platform, we guide you with clarity and
              confidence.
            </p>

            <div className="mt-10">
              <a href="/contact">
                <button className="
                  bg-orange-500 text-white px-8 py-4 rounded-full font-bold
                  hover:bg-orange-600 transition shadow-lg
                ">
                  Book Free Consultation
                </button>
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="animate-scaleIn">
            <img
              src="/services/web-consultation-main.png"
              alt="Web Development Consultation"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= WHAT WE HELP WITH ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              CONSULTATION AREAS
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              What We Help You Decide
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              We focus on clarity, scalability, and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {[
              {
                title: "Technology Stack",
                desc: "Choosing the right frontend, backend, database, and hosting based on your business needs.",
              },
              {
                title: "Architecture Planning",
                desc: "Scalable system design that supports future growth and integrations.",
              },
              {
                title: "UI / UX Strategy",
                desc: "User journeys, wireframes, and experience planning before design starts.",
              },
              {
                title: "Performance & SEO",
                desc: "Speed, Core Web Vitals, and SEO-ready technical foundations.",
              },
              {
                title: "Security & Compliance",
                desc: "Secure authentication, data protection, and best practices.",
              },
              {
                title: "Cost & Timeline Estimation",
                desc: "Realistic budgeting, milestones, and delivery planning.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-2xl p-10
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-3
                "
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-6 w-12 h-1 bg-orange-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONSULTATION PROCESS ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              OUR PROCESS
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              How Our Consultation Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {[
              "Understand Business Goals",
              "Analyze Requirements",
              "Define Technical Strategy",
              "Create Actionable Roadmap",
            ].map((step, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-2xl p-8 text-center
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                "
              >
                <div className="text-4xl font-extrabold text-orange-500 mb-4">
                  {i + 1}
                </div>
                <p className="font-semibold text-gray-800">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Let’s Plan It Right — From Day One
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Get expert guidance before development begins and save time, money,
            and rework.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-orange-500 text-white px-12 py-5 rounded-full font-bold
                hover:bg-orange-600 transition shadow-xl
              ">
                Schedule Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
