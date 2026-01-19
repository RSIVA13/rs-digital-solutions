import InnerHero from "@/components/InnerHero";
import {
  Users,
  TrendingUp,
  Megaphone,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Social Media Optimization Services in Kolathur, Chennai | RS Digital Solutions",
  description:
    "Professional Social Media Optimization services in Kolathur, Chennai by RS Digital Solutions. Grow your brand awareness, engagement, and followers across social platforms.",
};


export default function SocialMediaOptimization() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="Social Media Optimization" />

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
              SOCIAL MEDIA OPTIMIZATION
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Build a Strong Brand <br />
              <span className="text-orange-600">Presence on Social Media</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              RS Digital Solutions helps businesses grow organically on social
              media platforms through strategic Social Media Optimization (SMO).
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We focus on profile optimization, content strategy, engagement
              growth, and brand visibility to turn followers into loyal customers.
            </p>
          </div>

          {/* IMAGE */}
          <div className="animate-scaleIn flex justify-center lg:mt-6">
            <img
              src="/services/social-media-optimization.png"
              alt="Social Media Optimization"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= SMO SERVICES ================= */}
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
            OUR SMO SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            What We Do in Social Media Optimization
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We optimize your social media presence to attract the right audience
            and keep them engaged.
          </p>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

            {[
              {
                icon: <Users />,
                title: "Profile Optimization",
                desc: "Optimizing bios, descriptions, highlights, and branding elements.",
              },
              {
                icon: <Megaphone />,
                title: "Content Strategy",
                desc: "Engaging posts, reels, and creatives tailored to each platform.",
              },
              {
                icon: <TrendingUp />,
                title: "Follower Growth",
                desc: "Organic growth strategies to increase followers and reach.",
              },
              {
                icon: <BarChart3 />,
                title: "Performance Tracking",
                desc: "Monthly analytics to track engagement and audience growth.",
              },
              {
                icon: <Users />,
                title: "Community Management",
                desc: "Responding to comments, messages, and building trust.",
              },
              {
                icon: <Megaphone />,
                title: "Brand Consistency",
                desc: "Unified brand voice across all social media platforms.",
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
            Why Choose <span className="text-orange-600">RS Digital Solutions</span> for SMO?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We focus on long-term growth, not fake followers. Our SMO strategies
            are ethical, consistent, and brand-focused.
          </p>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            {[
              { title: "Organic", desc: "Growth Strategy" },
              { title: "Creative", desc: "Content Planning" },
              { title: "Monthly", desc: "Performance Reports" },
              { title: "Trusted", desc: "SMO Experts" },
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
            Ready to Grow on Social Media?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Let RS Digital Solutions optimize your social media presence and
            build a strong, engaging brand online.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-orange-500 text-white px-12 py-5 rounded-full font-bold
                hover:bg-orange-600 transition shadow-xl
              ">
                Get Free SMO Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
