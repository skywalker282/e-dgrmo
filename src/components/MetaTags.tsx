import React from 'react'
import Head from 'next/head'

type MetaTagsProps = {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
}

const MetaTags = ({ 
  title = 'E-DGRMO | Direction Générale des Recettes de la Mongala',
  description = 'Portail officiel pour les informations fiscales, paiements en ligne, reçus électroniques et services publics numériques',
  keywords = 'DGRMO, Mongala, impôts, taxes, paiement en ligne, reçus électroniques, services fiscaux',
  ogImage = '/images/og-image.jpg',
  ogUrl = 'https://dgrmo.cd'
}: MetaTagsProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
    </Head>
  )
}

export default MetaTags