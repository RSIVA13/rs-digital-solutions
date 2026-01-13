"use client";

export default function AboutStats() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white">
      
      {/* Decorative blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Top label */}
        <p className="text-orange-600 font-semibold tracking-wide uppercase animate-fadeUp">
          RS Digital Solutions | We’re Creators
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 animate-fadeUp delay-100">
          Web Development Company in Chennai
        </h2>

        {/* Divider */}
        <div className="mt-5 flex justify-center animate-scaleIn delay-200">
          <span className="w-24 h-1 bg-orange-500 rounded-full"></span>
        </div>

        {/* Intro text */}
        <p className="mt-8 max-w-3xl mx-auto text-gray-600 leading-relaxed animate-fadeUp delay-300">
          We take your business seriously; however, we do not take ourselves too
          seriously. We believe in building long-term partnerships through trust,
          collaboration, and consistent digital success.
        </p>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* Stat card 1 */}
          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeUp delay-400">
            <h3 className="text-5xl font-extrabold text-gray-900 group-hover:text-orange-600 transition">
              1500+
            </h3>
            <p className="mt-3 text-gray-600 font-medium">
              Websites Developed
            </p>
          </div>

          {/* Stat card 2 */}
          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeUp delay-500">
            <h3 className="text-5xl font-extrabold text-gray-900 group-hover:text-orange-600 transition">
              800+
            </h3>
            <p className="mt-3 text-gray-600 font-medium">
              Digital Marketing Projects
            </p>
          </div>

          {/* Experience badge */}
          <div className="flex justify-center animate-fadeUp delay-600">
            <div className="relative w-52 h-72 bg-orange-200 rounded-b-full flex flex-col items-center justify-center shadow-xl animate-float">
              <h3 className="text-5xl font-extrabold text-gray-900">
                10+
              </h3>
              <p className="mt-2 text-sm font-semibold text-gray-800 text-center">
                YEARS OF <br /> EXPERIENCE
              </p>

              <div className="absolute bottom-6 bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl animate-bounceSlow">
                →
              </div>
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="mt-24 max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-6 animate-fadeUp delay-700">
          <p>
            At RS Digital Solutions, we’ve assembled a team of strategists,
            designers, developers, and marketers who collaborate to create
            meaningful and scalable digital experiences.
          </p>

          <p>
            What makes us different is our culture. We are passionate, curious,
            and dedicated professionals who focus on long-term client growth and
            measurable success.
          </p>
        </div>

      </div>
    </section>
  );
}
