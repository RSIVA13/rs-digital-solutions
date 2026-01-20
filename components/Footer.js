import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">

      {/* Main Footer */}
      <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1 – Tech + Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Technologies We Use
            </h3>

            <div className="flex flex-wrap gap-3 text-sm opacity-90">
              <span>React js</span>
              <span>Node js</span>
              <span>Next js</span>
              <span>Mongo DB</span>
              <span>Vercel</span>
              <span>Mysql</span>
              <span>SEO</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Digital Marketing */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Digital Marketing
            </h3>

            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/services/digital-marketing" className="hover:underline">
                  Digital Marketing Services
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:underline">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 – Web Development */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Web Development
            </h3>

            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/services/ecommerce" className="hover:underline">
                  eCommerce Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/responsive" className="hover:underline">
                  Responsive Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/poster-design" className="hover:underline">
                  Poster Designing
                </Link>
              </li>
              <li>
                <Link href="/services/consultation" className="hover:underline">
                  Web Development Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex gap-3">
                <MapPin size={38} />
                <span>
                  No.75, 100ft Road, Senthil Nagar, Kolathur,
                  Chennai - 600099, Tamilnadu, India
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Phone size={18} />
                <a href="tel:+917845919183" className="hover:underline">
                  +91 78459 19183
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} />
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rsdigital0413@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
  rsdigital0413@gmail.com
</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1f1f1f] text-gray-300 text-sm py-4 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-3 text-center md:text-left">
    <span>
      © {new Date().getFullYear()} RS Digital Solutions. All Rights Reserved
    </span>

    <span>
      Designed & Developed by{" "}
      <span className="text-orange-500 font-semibold">
        RS Digital Solutions
      </span>
    </span>
  </div>
</div>


    </footer>
  );
}
