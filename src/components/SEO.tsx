import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = "/og-image.jpg", 
  type = 'website' 
}) => {
  // Default Brand Values
  const siteTitle = 'RespecTech';
  const siteName = 'RespecTech';
  
  // IMPROVEMENT: Use window.location.origin for dynamic domain support
  // When you deploy, this will automatically be your website name (e.g., respectech.com)
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://respectech.com';
  
  const defaultDescription = "Empowering African youth with tech skills, training, and startup incubation to solve local problems and connect with global opportunities.";
  
  // Ensure image URL is absolute (starts with http/https)
  const seoImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const seoTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const seoDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;