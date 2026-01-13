"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);          // ✅ Mobile submenu
  const [servicesDesktopOpen, setServicesDesktopOpen] = useState(false); // ✅ Desktop submenu

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Close all menus helper
  const closeAllMenus = () => {
    setServicesOpen(false);
    setMenuOpen(false);
    setServicesDesktopOpen(false);
  };

  const textColor =
    isHome && !scrolled ? "text-gray-900" : "text-white";

  const linkHover =
    isHome && !scrolled
      ? "hover:text-orange-600"
      : "hover:text-orange-400";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* Logo */}
        <div className={`text-2xl font-bold ${textColor}`}>
          RS <span className="text-orange-500">DIGITAL</span>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <ul className={`hidden md:flex gap-8 font-semibold ${textColor}`}>

          <li><Link href="/" className={linkHover}>HOME</Link></li>
          <li><Link href="/about" className={linkHover}>ABOUT US</Link></li>

          {/* ===== SERVICES (DESKTOP – FULL & FIXED) ===== */}
<li
  className="relative"
  onMouseEnter={() => setServicesDesktopOpen(true)}
  onMouseLeave={() => setServicesDesktopOpen(false)}
>
  <span className={`cursor-pointer ${linkHover}`}>
    SERVICES
  </span>

  <div
    className={`
      absolute left-1/2 -translate-x-1/2 top-full mt-6
      w-[900px] bg-white text-gray-900 rounded-lg shadow-xl
      transition-all duration-300
      ${servicesDesktopOpen ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
  >
    <div className="grid grid-cols-3 gap-10 p-8">

      {/* DIGITAL MARKETING */}
      <div>
        <h4 className="font-bold text-lg mb-4">
          DIGITAL MARKETING
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/services/digital-marketing" className={linkHover} onClick={() => setServicesDesktopOpen(false)}>
              Digital Marketing Services
            </Link>
          </li>
          <li>
            <Link href="/services/seo" className={linkHover} onClick={() => setServicesDesktopOpen(false)}>
              SEO Services
            </Link>
          </li>
          <li>
            <Link href="/services/smo" className={linkHover} onClick={() => setServicesDesktopOpen(false)}>
              Social Media Optimization
            </Link>
          </li>
        </ul>
      </div>

      {/* WEB DEVELOPMENT */}
      <div>
        <h4 className="font-bold text-lg mb-4">
          WEB DEVELOPMENT
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/services/responsive" className={linkHover} onClick={() => setServicesDesktopOpen(false)}>
              Responsive Web Design
            </Link>
          </li>
          <li>
            <Link href="/services/ecommerce" className={linkHover} onClick={() => setServicesDesktopOpen(false)}>
              eCommerce Web Design
            </Link>
          </li>
          <li>
            <Link href="/services/consultation" className={linkHover} onClick={() => setServicesDesktopOpen(false)}>
              Web Development Consultation
            </Link>
          </li>
        </ul>
      </div>

      {/* GRAPHIC DESIGN */}
      <div>
        <h4 className="font-bold text-lg mb-4">
          GRAPHIC DESIGN
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/services/logo-design" className={linkHover} onClick={() => setServicesDesktopOpen(false)}>
              Logo Designing
            </Link>
          </li>
          <li>
            <Link href="/services/brochure-design" className={linkHover} onClick={() => setServicesDesktopOpen(false)}>
              Brochure Designing
            </Link>
          </li>
          <li>
            <Link href="/services/poster-design" className={linkHover} onClick={() => setServicesDesktopOpen(false)}>
              Poster Designing
            </Link>
          </li>
        </ul>
      </div>

    </div>
  </div>
</li>


          {/* <li><Link href="/pricing" className={linkHover}>PRICING</Link></li>
          <li><Link href="/career" className={linkHover}>CAREER</Link></li> */}
          <li><Link href="/contact" className={linkHover}>CONTACT US</Link></li>
        </ul>

        {/* Phone */}
        <div className={`hidden md:flex items-center gap-2 font-bold ${textColor}`}>
  <Phone size={18} className="text-orange-500" />
  <a
    href="tel:+917845919183"
    className="hover:text-orange-600 transition"
  >
    +91 78459 19183
  </a>
</div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {/* ================= MOBILE MENU ================= */}
{menuOpen && (
  <div className="md:hidden bg-black/95 text-white px-6 py-6">
    <ul className="flex flex-col gap-4 font-semibold">

      <li>
        <Link href="/" className={linkHover} onClick={closeAllMenus}>
          HOME
        </Link>
      </li>

      <li>
        <Link href="/about" className={linkHover} onClick={closeAllMenus}>
          ABOUT US
        </Link>
      </li>

      {/* ========== SERVICES WITH FULL SUBMENU ========== */}
      <li>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex justify-between items-center"
        >
          SERVICES
          <span className="text-orange-400 text-xl">
            {servicesOpen ? "−" : "+"}
          </span>
        </button>

        {servicesOpen && (
          <div className="mt-4 ml-3 space-y-6 text-sm text-gray-300">

            {/* DIGITAL MARKETING */}
            <div>
              <p className="font-bold text-orange-400 mb-2">
                DIGITAL MARKETING
              </p>
              <ul className="space-y-2">
                <li><Link href="/services/digital-marketing" className={linkHover} onClick={closeAllMenus}>Digital Marketing Services</Link></li>
                <li><Link href="/services/seo" className={linkHover} onClick={closeAllMenus}>SEO Services</Link></li>
                <li><Link href="/services/smo" className={linkHover} onClick={closeAllMenus}>Social Media Optimization</Link></li>
              </ul>
            </div>

            {/* WEB DEVELOPMENT */}
            <div>
              <p className="font-bold text-orange-400 mb-2">
                WEB DEVELOPMENT
              </p>
              <ul className="space-y-2">
                <li><Link href="/services/responsive" className={linkHover} onClick={closeAllMenus}>Responsive Web Design</Link></li>
                <li><Link href="/services/ecommerce" className={linkHover} onClick={closeAllMenus}>eCommerce Web Design</Link></li>
                <li><Link href="/services/consultation" className={linkHover} onClick={closeAllMenus}>Web Development Consultation</Link></li>
              </ul>
            </div>

            {/* GRAPHIC DESIGN */}
            <div>
              <p className="font-bold text-orange-400 mb-2">
                GRAPHIC DESIGN
              </p>
              <ul className="space-y-2">
                <li><Link href="/services/logo-design" className={linkHover} onClick={closeAllMenus}>Logo Designing</Link></li>
                <li><Link href="/services/brochure-design" className={linkHover} onClick={closeAllMenus}>Brochure Designing</Link></li>
                <li><Link href="/services/poster-design" className={linkHover} onClick={closeAllMenus}>Poster Designing</Link></li>
              </ul>
            </div>

          </div>
        )}
      </li>

      {/* <li>
        <Link href="/pricing" className={linkHover} onClick={closeAllMenus}>
          PRICING
        </Link>
      </li>

      <li>
        <Link href="/career" className={linkHover} onClick={closeAllMenus}>
          CAREER
        </Link>
      </li> */}

      <li>
        <Link href="/contact" className={linkHover} onClick={closeAllMenus}>
          CONTACT US
        </Link>
      </li>

    </ul>
  </div>
)}

    </header>
  );
}
