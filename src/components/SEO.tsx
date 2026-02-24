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
  image = "/og-image.jpg", // Ensure you have this image in your public folder
  type = 'website' 
}) => {
  // Default Brand Values
  const siteTitle = 'RespecTech';
  const siteName = 'RespecTech';
  const siteUrl = typeof window !== 'undefined' ? window.location.href : 'https://respectech.com';
  const defaultDescription = "Empowering African youth with tech skills, training, and startup incubation to solve local problems and connect with global opportunities.";

  const seoTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const seoDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="image" content={`${siteUrl}${image}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;