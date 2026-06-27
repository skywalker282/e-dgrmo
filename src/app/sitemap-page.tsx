import React from 'react'
import Link from 'next/link'

export default function Sitemap() {
  const siteSections = [
    {
      title: "Pages principales",
      links: [
        { name: "Accueil", href: "/" },
        { name: "À propos", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Actualités", href: "/news" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Services en ligne",
      links: [
        { name: "Paiement en ligne", href: "/payment" },
        { name: "Vérification de reçu", href: "/verification" },
        { name: "Dépôt de plainte", href: "/complaint" }
      ]
    },
    {
      title: "Compte utilisateur",
      links: [
        { name: "Connexion", href: "/login" },
        { name: "Inscription", href: "/register" },
        { name: "Mot de passe oublié", href: "/forgot-password" }
      ]
    },
    {
      title: "Informations légales",
      links: [
        { name: "Politique de confidentialité", href: "/privacy" },
        { name: "Conditions d'utilisation", href: "/terms" },
        { name: "Mentions légales", href: "/legal" }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plan du site
            </h1>
            <p className="text-xl text-gray-300">
              Trouvez facilement toutes les pages de notre site
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
                  <h2 className="text-xl font-bold mb-4 text-primary-blue">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.href} 
                          className="text-gray hover:text-primary-blue transition"
                        >
                          {link.name}
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