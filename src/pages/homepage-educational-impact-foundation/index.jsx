import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ClarityJourneyVisualization from './components/ClarityJourneyVisualization';
import CrisisSolutionSection from './components/CrisisSolutionSection';
import StudentSuccessStories from './components/StudentSuccessStories';
import ProgramsPreview from './components/ProgramsPreview';
import LanguageToggle from './components/LanguageToggle';
import Footer from './components/Footer';

const HomepageEducationalImpactFoundation = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Language change listener
    const handleLanguageChange = (event) => {
      const { language } = event?.detail;
      console.log('Language changed to:', language);
      
      // Show notification
      const notification = document.getElementById('language-notification');
      if (notification) {
        notification?.classList?.remove('translate-x-full', 'opacity-0');
        notification?.classList?.add('translate-x-0', 'opacity-100');
        
        setTimeout(() => {
          notification?.classList?.add('translate-x-full', 'opacity-0');
          notification?.classList?.remove('translate-x-0', 'opacity-100');
        }, 3000);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange);

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements?.forEach(el => observer?.observe(el));

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Sattvoday Foundation - Transforming Career Guidance for Underprivileged Students</title>
        <meta 
          name="description" 
          content="Democratizing career guidance for India's underserved students. Every child deserves clarity as a fundamental right, not a privilege. Join our mission to break poverty cycles through career clarity." 
        />
        <meta 
          name="keywords" 
          content="career guidance, education, underprivileged students, India, NGO, mentorship, government schools, career clarity, social impact" 
        />
        <meta name="author" content="Sattvoday Foundation" />
        <meta property="og:title" content="Sattvoday Foundation - Career Clarity for All" />
        <meta 
          property="og:description" 
          content="Transforming career guidance accessibility for underprivileged students across India through research-backed interventions and community-driven mentorship." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sattvoday.org/homepage-educational-impact-foundation" />
        <meta property="og:image" content="https://sattvoday.org/assets/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sattvoday Foundation - Career Clarity for All" />
        <meta 
          name="twitter:description" 
          content="Every child deserves career clarity. Join our mission to democratize career guidance for India's underserved students." 
        />
        <link rel="canonical" href="https://sattvoday.org/homepage-educational-impact-foundation" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sattvoday Foundation",
            "description": "Educational impact foundation transforming career guidance for underprivileged students",
            "url": "https://sattvoday.org",
            "logo": "https://sattvoday.org/assets/images/logo.png",
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressLocality": "Mumbai"
            },
            "sameAs": [
              "https://linkedin.com/company/sattvoday-foundation",
              "https://twitter.com/sattvoday",
              "https://instagram.com/sattvoday_foundation"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Language Toggle */}
        {/* <LanguageToggle /> */}

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <div className="scroll-reveal">
            <HeroSection />
          </div>

          {/* Clarity Journey Visualization */}
          <div className="scroll-reveal">
            <ClarityJourneyVisualization />
          </div>

          {/* Crisis & Solution Section */}
          <div className="scroll-reveal">
            <CrisisSolutionSection />
          </div>

          {/* Student Success Stories */}
          <div className="scroll-reveal">
            <StudentSuccessStories />
          </div>

          {/* Programs Preview */}
          <div className="scroll-reveal">
            <ProgramsPreview />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomepageEducationalImpactFoundation;