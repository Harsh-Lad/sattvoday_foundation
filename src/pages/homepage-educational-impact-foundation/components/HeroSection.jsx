import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const HeroSection = () => {
  const [currentImpact, setCurrentImpact] = useState({
    studentsReached: 12847,
    schoolsPartnered: 156,
    mentorsActive: 89
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImpact(prev => ({
        studentsReached: prev?.studentsReached + Math.floor(Math.random() * 3),
        schoolsPartnered: prev?.schoolsPartnered + (Math.random() > 0.95 ? 1 : 0),
        mentorsActive: prev?.mentorsActive + (Math.random() > 0.9 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stakeholderActions = [
    {
      title: "Partner with Schools",
      description: "Bring career clarity to your students",
      icon: "School",
      variant: "default",
      path: "/programs"
    },
    {
      title: "Become a Mentor",
      description: "Guide the next generation",
      icon: "Users",
      variant: "outline",
      path: "/get-involved"
    },
    {
      title: "Support Our Mission",
      description: "Fund career guidance programs",
      icon: "Heart",
      variant: "secondary",
      path: "/donate"
    },
    {
      title: "Access Resources",
      description: "Download career guidance tools",
      icon: "FileText",
      variant: "ghost",
      path: "/resources"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Headline */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Icon name="Sparkles" size={16} />
                  <span>Transforming Career Guidance in India</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
                  <span className="text-primary">Clarity</span> is not a{' '}
                  <span className="text-secondary">privilege.</span>
                  <br />
                  It is a <span className="text-accent">right.</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Every child deserves a clear, achievable pathway to dignity. We're democratizing career guidance for India's most underserved student populations through research-backed interventions and community-driven mentorship.
                </p>
              </div>

              {/* Real-time Impact Counter */}
              <div className="bg-card border border-border rounded-2xl p-6 brand-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="TrendingUp" size={20} className="text-primary mr-2" />
                  Live Impact Dashboard
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      {currentImpact?.studentsReached?.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Students Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-secondary">
                      {currentImpact?.schoolsPartnered}
                    </div>
                    <div className="text-sm text-muted-foreground">Schools Partnered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-accent">
                      {currentImpact?.mentorsActive}
                    </div>
                    <div className="text-sm text-muted-foreground">Mentors Active</div>
                  </div>
                </div>
              </div>

              {/* Stakeholder CTAs */}
              {/* <div className="grid sm:grid-cols-2 gap-4">
                {stakeholderActions?.map((action, index) => (
                  <Link key={index} to={action?.path} className="group">
                    <div className="bg-card border border-border rounded-xl p-4 hover-lift hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon name={action?.icon} size={20} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {action?.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {action?.description}
                          </p>
                        </div>
                        <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div> */}
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden brand-shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Government school students engaged in career guidance activities"
                  className="w-full h-[500px] object-cover dignified-image"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="BookOpen" size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Career Clarity Workshop</h4>
                        <p className="text-sm text-gray-600">Empowering students with clear pathways</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;