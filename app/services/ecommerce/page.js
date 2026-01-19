import InnerHero from "@/components/InnerHero";

export const metadata = {
  title: "E-Commerce Web Design in Kolathur, Chennai | RS Digital Solutions",
  description:
    "High-converting eCommerce website design and development services in Kolathur, Chennai by RS Digital Solutions. Sell more online with speed, security, and scalability.",
};


export default function EcommerceWebDesign() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="E-Commerce Web Design" />

      {/* ================= INTRO ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden">
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
        SELL ONLINE WITH CONFIDENCE
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Powerful E-Commerce Websites <br />
        <span className="text-orange-600">
          Built to Convert Visitors into Customers
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        RS Digital Solutions designs and develops secure, scalable, and
        conversion-focused eCommerce websites that help brands sell more
        products online.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        From product discovery to checkout, every step is optimized for
        speed, usability, and trust.
      </p>
    </div>

    {/* IMAGE */}
    <div className="animate-scaleIn flex justify-center lg:mt-6">
      <img
        src="/services/ecommerce-main.png"
        alt="E-Commerce Website Design"
        className="rounded-3xl shadow-2xl"
      />
    </div>

  </div>
</section>


      {/* ================= FEATURES ================= */}
      <section className="py-5 px-6 bg-white">
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
              ECOMMERCE FEATURES
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Everything Your Online Store Needs
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              We build complete eCommerce ecosystems — not just websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {[
              {
                title: "Product Management",
                desc:
                  "Easily manage products, categories, inventory, pricing, and offers.",
                image: "/services/ecommerce-products.png",
              },
              {
                title: "Secure Checkout",
                desc:
                  "Fast and secure checkout with trusted payment gateways.",
                image: "/services/ecommerce-checkout.png",
              },
              {
                title: "Order & Inventory",
                desc:
                  "Real-time order tracking, inventory control, and reporting.",
                image: "/services/ecommerce-orders.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-2xl p-10
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-3
                  animate-fadeUp
                "
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl mb-6 shadow-md"
                />

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

      {/* ================= PLATFORMS ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="animate-scaleIn flex justify-center">
            <img
              src="/services/ecommerce-platforms.png"
              alt="Ecommerce Platforms"
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
              PLATFORMS
            </span>

            <h2 className="text-4xl font-extrabold text-gray-900">
              Platforms We Work With
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We build powerful online stores using industry-leading eCommerce
              platforms tailored to your business needs.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700 font-medium">
              <li>• Shopify & Shopify Plus</li>
              <li>• WooCommerce (WordPress)</li>
              <li>• Custom MERN / Headless Commerce</li>
              <li>• Payment & Shipping Integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-24 px-6 bg-white text-center overflow-hidden">

        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300"></div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Ready to Launch Your Online Store?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Let RS Digital Solutions design a high-performance eCommerce website
            that attracts customers and drives sales.
          </p>

          <div className="mt-10">
            <a href="/contact">
              <button className="
                bg-orange-500 text-white px-12 py-5 rounded-full font-bold
                hover:bg-orange-600 transition shadow-xl
              ">
                Start Your E-Commerce Project
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
