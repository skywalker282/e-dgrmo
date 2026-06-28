"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/contexts/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();

  const aboutLinks = [
    { nameKey: "footer-about-dgrmo", href: "/about" },
    { nameKey: "footer-mission-vision", href: "/mission" },
    { nameKey: "footer-organization", href: "/organization" },
    { nameKey: "footer-news", href: "/news" },
  ];

  const serviceLinks = [
    { nameKey: "online-payment", href: "/payment" },
    { nameKey: "receipt-verification", href: "/verification" },
    { nameKey: "tax-categories", href: "/tax-categories" },
    { nameKey: "complaint", href: "/complaint" },
  ];

  const quickLinks = [
    { nameKey: "home", href: "/" },
    { nameKey: "services", href: "/services" },
    { nameKey: "faq", href: "/faq" },
    { nameKey: "contact", href: "/contact" },
  ];

  const contactInfo = [
    { labelKey: "footer-address-label", value: t("footer-address") },
    { labelKey: "footer-phone-label", value: t("footer-phone") },
    { labelKey: "footer-email-label", value: t("footer-email") },
  ];

  return (
    <footer className="corporate-footer">
      <div className="container-corporate px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="E-DGRMO Logo"
                width={160}
                height={160}
                className="w-24 sm:w-28 md:w-40 h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              {t("footer-description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <span className="text-xl">f</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">Twitter</span>
                <span className="text-xl">t</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("footer-about")}
            </h3>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("footer-services")}
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("footer-quick-links")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("footer-contact")}
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">
                    {t(info.labelKey)}:
                  </span>
                  <p className="text-white text-sm">{info.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {t("footer-copyright")} •{" "}
              {t("footer-maintained-by")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                {t("footer-privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                {t("footer-terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
