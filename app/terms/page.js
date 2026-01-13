import InnerHero from "@/components/InnerHero";

export const metadata = {
  title: "Terms & Conditions | RS Digital Solutions",
  description:
    "Terms and Conditions governing the use of RS Digital Solutions website and services.",
};

export default function TermsAndConditions() {
  return (
    <>
      {/* HERO */}
      <InnerHero title="Terms & Conditions" />

      {/* ================= CONTENT ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-14">

          {/* INTRO */}
          <span className="inline-block mb-6 px-4 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            LEGAL INFORMATION
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Terms & Conditions
          </h1>

          <p className="text-gray-600 leading-relaxed mb-8">
            These Terms and Conditions govern your use of the RS Digital Solutions
            website and services. By accessing or using our website, you agree
            to comply with and be bound by these terms.
          </p>

          {/* SECTION */}
          <div className="space-y-8 text-gray-700">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                1. Services
              </h2>
              <p>
                RS Digital Solutions provides web design, web development,
                digital marketing, branding, and related services. Service
                details, pricing, and timelines are discussed and agreed upon
                before project commencement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                2. Payments & Pricing
              </h2>
              <p>
                All prices are quoted in Indian Rupees (INR) unless stated
                otherwise. Payments must be made as per the agreed milestones.
                Delays in payment may result in project suspension.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                3. Intellectual Property
              </h2>
              <p>
                Upon full payment, the client will own the final approved
                deliverables. RS Digital Solutions reserves the right to display
                completed work in portfolios and promotional materials.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                4. Client Responsibilities
              </h2>
              <p>
                Clients agree to provide accurate information, timely feedback,
                and required materials necessary for project completion. Delays
                caused by the client may affect delivery timelines.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                5. Confidentiality
              </h2>
              <p>
                Both parties agree to maintain confidentiality of sensitive
                business information shared during the course of the project.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                6. Refund Policy
              </h2>
              <p>
                Payments once made are non-refundable unless explicitly stated
                in a written agreement. Refund requests are evaluated on a
                case-by-case basis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                7. Limitation of Liability
              </h2>
              <p>
                RS Digital Solutions shall not be liable for any indirect,
                incidental, or consequential damages arising from the use of
                our services or website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                8. Third-Party Services
              </h2>
              <p>
                We may integrate third-party tools or services. RS Digital
                Solutions is not responsible for issues caused by third-party
                providers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                9. Termination
              </h2>
              <p>
                Either party may terminate services with written notice.
                Outstanding payments must be cleared upon termination.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                10. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of India. Any disputes
                shall be subject to the jurisdiction of Chennai, Tamil Nadu.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                11. Changes to Terms
              </h2>
              <p>
                RS Digital Solutions reserves the right to modify these Terms &
                Conditions at any time. Updates will be posted on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                12. Contact Information
              </h2>
              <p>
                For any questions regarding these Terms & Conditions, please
                contact us at{" "}
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
