import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Our Mission",
      links: [
        { name: "About Sattvoday", path: "/about" },
        { name: "Our Story", path: "/about#story" },
        { name: "Impact Reports", path: "/impact" },
        { name: "Research Foundation", path: "/research" }
      ]
    },
    {
      title: "Programs",
      links: [
        { name: "Career Booklets", path: "/programs#booklets" },
        { name: "Workshop Series", path: "/programs#workshops" },
        { name: "Mentor Network", path: "/programs#mentors" },
        { name: "WhatsApp Bot", path: "/programs#whatsapp-bot" }
      ]
    },
    {
      title: "Get Involved",
      links: [
        { name: "Become a Mentor", path: "/get-involved#mentor" },
        { name: "School Partnerships", path: "/get-involved#schools" },
        { name: "Corporate CSR", path: "/get-involved#csr" },
        { name: "Volunteer Opportunities", path: "/get-involved#volunteer" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Career Guidance Tools", path: "/resources#tools" },
        { name: "Research Papers", path: "/resources#research" },
        { name: "Media Kit", path: "/resources#media" },
        { name: "Policy Advocacy", path: "/resources#policy" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/sattvoday-foundation" },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/sattvoday" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com/sattvoday_foundation" },
    { name: "YouTube", icon: "Youtube", url: "https://youtube.com/@sattvoday" },
    { name: "Facebook", icon: "Facebook", url: "https://facebook.com/sattvoday.foundation" }
  ];

  const quickStats = [
    { label: "Students Reached", value: "12,847+", icon: "Users" },
    { label: "Schools Partnered", value: "156", icon: "School" },
    { label: "Active Mentors", value: "89", icon: "UserCheck" },
    { label: "Career Clarity Rate", value: "92%", icon: "Target" }
  ];

  const certifications = [
    { name: "12A Registration", description: "Income Tax Exemption" },
    { name: "80G Certification", description: "Tax Deductible Donations" },
    { name: "FCRA Approved", description: "Foreign Contribution Regulation" },
    { name: "Niti Aayog Registered", description: "Government Recognition" }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <Link to="/homepage-educational-impact-foundation" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-7 h-7 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  <path d="M12 16L13.09 22.26L22 23L13.09 23.74L12 30L10.91 23.74L2 23L10.91 22.26L12 16Z" opacity="0.6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-playfair font-semibold text-foreground">
                  Sattvoday
                </span>
                <span className="text-sm text-muted-foreground -mt-1">
                  Foundation
                </span>
              </div>
            </Link>

            {/* Mission Statement */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming career guidance accessibility for underprivileged students. 
              Every child deserves clarity as a fundamental right, not a privilege.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {quickStats?.map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-3 text-center">
                  <Icon name={stat?.icon} size={16} className="text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{stat?.value}</div>
                  <div className="text-xs text-muted-foreground">{stat?.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
                  aria-label={`Follow us on ${social?.name}`}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections?.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-foreground">{section?.title}</h3>
                <ul className="space-y-2">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link?.path}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Trust Signals */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-semibold text-foreground mb-4 text-center">Trust & Transparency</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon name="Shield" size={16} className="text-green-600" />
                </div>
                <div className="font-medium text-foreground text-sm">{cert?.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{cert?.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-6 mb-8">
          <div className="text-center mb-4">
            <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
              Stay Connected with Our Impact
            </h3>
            <p className="text-muted-foreground">
              Get monthly updates on student transformations and program expansions
            </p>
          </div>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Icon name="Mail" size={16} />
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center lg:text-left">
              <p>
                © {currentYear} Sattvoday Foundation. All rights reserved. | 
                <Link to="/privacy" className="hover:text-primary ml-1">Privacy Policy</Link> | 
                <Link to="/terms" className="hover:text-primary ml-1">Terms of Service</Link>
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={14} />
                <span>contact@sattvoday.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={14} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={14} />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Sanskrit Quote */}
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="font-sanskrit text-primary text-lg mb-2">
              सत्त्वोदयः सर्वस्य कल्याणाय
            </p>
            <p className="text-sm text-muted-foreground italic">
              "The rise of pure potential for the welfare of all"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;