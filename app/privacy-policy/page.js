import InnerHero from "@/components/InnerHero";

export const metadata = {
  title: "Privacy Policy | RS Digital Solutions",
  description:
    "Privacy Policy explaining how RS Digital Solutions collects, uses, and protects user information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="Privacy Policy" />

      {/* ================= CONTENT ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-14">

          {/* INTRO */}
          <span className="inline-block mb-6 px-4 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            YOUR PRIVACY MATTERS
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-600 leading-relaxed mb-8">
            RS Digital Solutions is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
          </p>

          {/* SECTIONS */}
          <div className="space-y-8 text-gray-700">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                1. Information We Collect
              </h2>
              <p>
                We may collect personal information such as your name, email
                address, phone number, and business details when you submit
                forms, contact us, or engage with our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                The information we collect may be used to respond to inquiries,
                provide services, improve our website, communicate updates, and
                deliver marketing or promotional content where permitted.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                3. Cookies & Tracking Technologies
              </h2>
              <p>
                We may use cookies and similar tracking technologies to enhance
                user experience, analyze website traffic, and improve our
                services. You can control cookie settings through your browser.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                4. Information Sharing
              </h2>
              <p>
                We do not sell or rent your personal information. We may share
                information with trusted third-party service providers who
                assist us in operating our website or conducting our business,
                under strict confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                5. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical
                security measures to protect your personal information from
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                6. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of such
                external sites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                7. User Rights
              </h2>
              <p>
                You have the right to access, update, or request deletion of
                your personal information. You may also opt out of marketing
                communications at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                8. Children’s Information
              </h2>
              <p>
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                9. Changes to This Policy
              </h2>
              <p>
                RS Digital Solutions may update this Privacy Policy from time to
                time. Any changes will be posted on this page with an updated
                effective date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                10. Contact Us
              </h2>
              <p>
                If you have questions or concerns regarding this Privacy Policy,
                please contact us at{" "}
                <span className="font-semibold text-orange-600">
                  rsdigital0413@gmail.com
                </span>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
