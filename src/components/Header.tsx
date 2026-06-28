"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import DarkModeToggle from "@/components/DarkModeToggle";
import { useTranslation } from "@/contexts/TranslationContext";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = {
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth < 1024) {
        return;
      }

      if (
        openDropdown &&
        dropdownRefs[openDropdown as keyof typeof dropdownRefs]?.current &&
        !dropdownRefs[
          openDropdown as keyof typeof dropdownRefs
        ]?.current?.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle dropdown toggle for desktop
  const handleDesktopDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="corporate-header sticky top-0 z-50">
      <div className="container-corporate px-4">
        <div className="flex justify-between items-center min-h-[48px] h-auto lg:h-20 py-2 lg:py-0">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 mr-0">
                <Image
                  src="/logo.png"
                  alt="E-DGRMO Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 text-sm lg:text-base font-medium tracking-wide">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-blue transition px-4 py-3 rounded-md hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
            >
              {t("home")}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative group"
              ref={dropdownRefs.about}
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="text-gray-700 hover:text-primary-blue transition px-4 py-3 rounded-md hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal flex items-center gap-1"
                onClick={() => handleDesktopDropdownToggle("about")}
              >
                {t("about")}
                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                  ▼
                </span>
              </button>

              <div
                className={`absolute left-0 mt-2 min-w-[220px] bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200 dark:bg-dark-navy dark:border-gray-700 transition-all duration-200 ${openDropdown === "about" ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <Link
                  href="/about"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("about")}
                </Link>
                <Link
                  href="/mission"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("mission")}
                </Link>
                <Link
                  href="/organization"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("organization")}
                </Link>
                <Link
                  href="/news"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("news")}
                </Link>
                <Link
                  href="/faq"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("faq")}
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative group"
              ref={dropdownRefs.services}
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="text-gray-700 hover:text-primary-blue transition px-4 py-3 rounded-md hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal flex items-center gap-1"
                onClick={() => handleDesktopDropdownToggle("services")}
              >
                {t("services")}
                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                  ▼
                </span>
              </button>

              <div
                className={`absolute left-0 mt-2 min-w-[240px] bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200 dark:bg-dark-navy dark:border-gray-700 transition-all duration-200 ${openDropdown === "services" ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <Link
                  href="/services"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("services")}
                </Link>
                <Link
                  href="/tax-categories"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("tax-calculator-menu")}
                </Link>
                <Link
                  href="/payment"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("online-payment")}
                </Link>
                <Link
                  href="/verification"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("receipt-verification")}
                </Link>
                <Link
                  href="/complaint"
                  className="block px-6 py-2 text-gray-700 hover:text-primary-blue hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                  onClick={() => setOpenDropdown(null)}
                >
                  {t("complaint")}
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-blue transition px-4 py-3 rounded-md hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Auth Buttons, Language Switcher, and Dark Mode Toggle */}
          <div className="hidden lg:flex items-center space-x-3 text-sm lg:text-base">
            <DarkModeToggle />
            <LanguageSwitcher />
            <Link
              href="/login"
              className="text-gray-700 hover:text-primary-blue font-semibold px-4 py-2 rounded-md transition dark:text-gray-300 dark:hover:text-white"
            >
              {t("login")}
            </Link>
            <Link href="/register" className="btn-primary">
              {t("register")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 hover:text-primary-blue p-2 rounded-md dark:text-gray-300 dark:hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-blue font-medium py-2 px-4 rounded-md hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </Link>

              {/* About Mobile Dropdown */}
              <div className="py-2 px-4">
                <button
                  type="button"
                  className="text-gray-700 hover:text-primary-blue font-medium w-full text-left flex justify-between items-center mobile-nav-toggle"
                  onClick={() =>
                    setOpenDropdown(openDropdown === "about" ? null : "about")
                  }
                >
                  {t("about")}
                  <span>{openDropdown === "about" ? "▲" : "▼"}</span>
                </button>
                {openDropdown === "about" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/about"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("about")}
                    </Link>
                    <Link
                      href="/mission"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("mission")}
                    </Link>
                    <Link
                      href="/organization"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("organization")}
                    </Link>
                    <Link
                      href="/news"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("news")}
                    </Link>
                    <Link
                      href="/faq"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("faq")}
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Mobile Dropdown */}
              <div className="py-2 px-4">
                <button
                  type="button"
                  className="text-gray-700 hover:text-primary-blue font-medium w-full text-left flex justify-between items-center mobile-nav-toggle"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "services" ? null : "services",
                    )
                  }
                >
                  {t("services")}
                  <span>{openDropdown === "services" ? "▲" : "▼"}</span>
                </button>
                {openDropdown === "services" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/services"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("services")}
                    </Link>
                    <Link
                      href="/tax-categories"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("tax-calculator-menu")}
                    </Link>
                    <Link
                      href="/payment"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("online-payment")}
                    </Link>
                    <Link
                      href="/verification"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("receipt-verification")}
                    </Link>
                    <Link
                      href="/complaint"
                      className="block text-gray-700 hover:text-primary-blue py-2 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {t("complaint")}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary-blue font-medium py-2 px-4 rounded-md hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </Link>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                <div className="flex items-center space-x-3 mb-3 px-4">
                  <DarkModeToggle />
                  <LanguageSwitcher />
                </div>
                <div className="flex flex-col space-y-2 px-4">
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-primary-blue font-medium py-2 px-4 rounded-md hover:bg-light-blue dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-charcoal"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("login")}
                  </Link>
                  <Link
                    href="/register"
                    className="btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("register")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
