'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'

export default function Sitemap() {
  const { t } = useTranslation()
  
  const siteSections = [
    {
      titleKey: "sitemap-main-pages",
      links: [
        { nameKey: "home", href: "/" },
        { nameKey: "about", href: "/about" },
        { nameKey: "services", href: "/services" },
        { nameKey: "news", href: "/news" },
        { nameKey: "contact", href: "/contact" }
      ]
    },
    {
      titleKey: "sitemap-online-services",
      links: [
        { nameKey: "online-payment", href: "/payment" },
        { nameKey: "receipt-verification", href: "/verification" },
        { nameKey: "complaint", href: "/complaint" }
      ]
    },
    {
      titleKey: "sitemap-user-account",
      links: [
        { nameKey: "login", href: "/login" },
        { nameKey: "register", href: "/register" },
        { nameKey: "forgot-password", href: "/forgot-password" }
      ]
    },
    {
      titleKey: "sitemap-legal-info",
      links: [
        { nameKey: "footer-privacy", href: "/privacy" },
        { nameKey: "footer-terms", href: "/terms" },
        { nameKey: "sitemap-legal-mentions", href: "/legal" }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('sitemap-title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('sitemap-description')}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {siteSections.map((section, index) => (
                <div key={index} className="bg-white rounded-sm shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4 text-primary-blue">{t(section.titleKey)}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.href} 
                          className="text-gray hover:text-primary-blue transition"
                        >
                          {t(link.nameKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}