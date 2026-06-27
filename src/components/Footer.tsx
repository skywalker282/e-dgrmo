'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/contexts/TranslationContext'

const Footer = () => {
  const { t } = useTranslation()

  const aboutLinks = [
    { name: 'À propos de DGRMO', href: '/about' },
    { name: 'Mission et vision', href: '/mission' },
    { name: 'Organisation', href: '/organization' },
    { name: 'Actualités', href: '/news' },
  ]

  const serviceLinks = [
    { name: 'Paiement en ligne', href: '/payment' },
    { name: 'Vérification de reçu', href: '/verification' },
    { name: 'Catégories de taxes', href: '/tax-categories' },
    { name: 'Dépôt de plainte', href: '/complaint' },
  ]

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  const contactInfo = [
    { label: 'Adresse', value: t('footer-address') },
    { label: 'Téléphone', value: t('footer-phone') },
    { label: 'Email', value: t('footer-email') },
  ]

  return (
    <footer className="corporate-footer">
      <div className="container-corporate px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-0">
                <Image 
                  src="/logo.png" 
                  alt="E-DGRMO Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Portail officiel de la Direction Générale des Recettes de la Mongala pour les services fiscaux numériques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <span className="text-xl">t</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer-about')}</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer-services')}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer-quick-links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer-contact')}</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{info.label}:</span>
                  <p className="text-white text-sm">{info.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {t('footer-copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                {t('footer-privacy')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                {t('footer-terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer