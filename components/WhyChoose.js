import {
  Lightbulb,
  Headphones,
  CalendarCheck,
  Users,
  BarChart3,
  ThumbsUp,
  Settings,
  ShieldCheck,
  Lock,
  GitBranch,
} from "lucide-react";

export default function WhyChoose() {
  const features = [
    { icon: Lightbulb, title: "Creative Designs" },
    { icon: Headphones, title: "24 / 7 Support" },
    { icon: CalendarCheck, title: "On-time Delivery" },
    { icon: Users, title: "Dedicated Team" },
    { icon: BarChart3, title: "Result Oriented" },
    { icon: ThumbsUp, title: "100% Client Satisfaction" },
    { icon: Settings, title: "Maintenance Support" },
    { icon: ShieldCheck, title: "Secure Coding Techniques" },
    { icon: Lock, title: "Advanced Web Protection" },
    { icon: GitBranch, title: "Structured Web Frameworks" },
  ];

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose{" "}
          <span className="text-orange-600">
            RS Digital Solutions
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl p-8
                flex flex-col items-center justify-center
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              <item.icon
                size={42}
                className="text-orange-500 mb-4"
              />

              <p className="font-semibold text-gray-800 text-sm text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
