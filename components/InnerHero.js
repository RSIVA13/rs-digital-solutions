import Link from "next/link";

export default function InnerHero({ title }) {
  return (
    <section
      className="relative h-[300px] md:h-[360px] flex items-center"
      style={{
        backgroundImage: "url('/banner/inner-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav className="mt-3 text-sm font-medium text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-orange-400 font-semibold">
            {title}
          </span>
        </nav>

      </div>
    </section>
  );
}
