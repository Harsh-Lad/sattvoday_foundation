import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CrisisSolutionSection = () => {
  const [activeTab, setActiveTab] = useState('crisis');
  const [animatedStats, setAnimatedStats] = useState({
    confused: 0,
    privileged: 0,
    dropout: 0,
    clarity: 0,
    employment: 0,
    satisfaction: 0
  });

  const crisisStats = [
    {
      key: 'confused',
      value: 78,
      label: 'Government school students lack career clarity',
      icon: 'AlertTriangle',
      color: 'text-red-500'
    },
    {
      key: 'privileged',
      value: 95,
      label: 'Private school students receive career guidance',
      icon: 'TrendingUp',
      color: 'text-orange-500'
    },
    {
      key: 'dropout',
      value: 42,
      label: 'Students drop out due to unclear career paths',
      icon: 'TrendingDown',
      color: 'text-red-600'
    }
  ];

  const solutionStats = [
    {
      key: 'clarity',
      value: 92,
      label: 'Students achieve career clarity through our program',
      icon: 'Target',
      color: 'text-green-500'
    },
    {
      key: 'employment',
      value: 85,
      label: 'Pursue education aligned with career goals',
      icon: 'BookOpen',
      color: 'text-blue-500'
    },
    {
      key: 'satisfaction',
      value: 89,
      label: 'Report increased confidence and motivation',
      icon: 'Heart',
      color: 'text-purple-500'
    }
  ];

  useEffect(() => {
    const currentStats = activeTab === 'crisis' ? crisisStats : solutionStats;
    
    currentStats?.forEach((stat, index) => {
      setTimeout(() => {
        let current = 0;
        const increment = stat?.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat?.value) {
            current = stat?.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [stat?.key]: Math.floor(current)
          }));
        }, 20);
      }, index * 200);
    });
  }, [activeTab]);

  const researchData = [
    {
      title: "The Privilege Gap",
      description: "Career guidance is a luxury available primarily to private school students, creating systemic inequality in opportunity access.",
      source: "National Education Policy Analysis 2023",
      icon: "BarChart3"
    },
    {
      title: "Economic Impact",
      description: "Students without career clarity are 3x more likely to remain in poverty cycles, affecting generational mobility.",
      source: "Sattvoday Foundation Research 2023",
      icon: "TrendingDown"
    },
    {
      title: "Intervention Effectiveness",
      description: "Structured career guidance programs show 85% success rate in improving student outcomes and life satisfaction.",
      source: "Educational Impact Study 2023",
      icon: "CheckCircle"
    }
  ];

  const interventionMethods = [
    {
      title: "Career Booklet System",
      description: "Comprehensive, vernacular career guides covering 50+ pathways with realistic requirements and success stories.",
      icon: "Book",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Workshop Methodology",
      description: "Interactive 6-week programs combining self-assessment, skill discovery, and pathway mapping with peer learning.",
      icon: "Users",
      color: "bg-secondary/10 text-secondary"
    },
    {
      title: "Mentor Network",
      description: "Career Saathis from similar backgrounds provide authentic guidance and role modeling for sustainable impact.",
      icon: "UserCheck",
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Digital Support",
      description: "WhatsApp-based career bot provides 24/7 guidance, resources, and community connection for ongoing support.",
      icon: "Smartphone",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="AlertCircle" size={16} />
            <span>The Career Guidance Crisis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Research-Backed <span className="text-primary">Problem</span> & <span className="text-secondary">Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Data-driven insights reveal the stark inequality in career guidance access. 
            Our proven methodology transforms this crisis into opportunity.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('crisis')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'crisis' ?'bg-card text-foreground brand-shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="AlertTriangle" size={16} className="inline mr-2" />
              The Crisis
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'solution' ?'bg-card text-foreground brand-shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="CheckCircle" size={16} className="inline mr-2" />
              Our Solution
            </button>
          </div>
        </div>

        {/* Statistics Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {(activeTab === 'crisis' ? crisisStats : solutionStats)?.map((stat, index) => (
            <div key={stat?.key} className="bg-card border border-border rounded-xl p-6 text-center hover-lift">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                activeTab === 'crisis' ? 'bg-red-50' : 'bg-green-50'
              }`}>
                <Icon name={stat?.icon} size={24} className={stat?.color} />
              </div>
              <div className={`text-4xl font-bold mb-2 ${stat?.color}`}>
                {animatedStats?.[stat?.key]}%
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat?.label}
              </p>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Research Data or Intervention Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
              {activeTab === 'crisis' ? 'Research Foundation' : 'Proven Methodology'}
            </h3>
            
            {activeTab === 'crisis' ? (
              <div className="space-y-4">
                {researchData?.map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={item?.icon} size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{item?.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {item?.description}
                        </p>
                        <div className="text-xs text-primary font-medium">
                          Source: {item?.source}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interventionMethods?.map((method, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 hover-lift">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${method?.color}`}>
                      <Icon name={method?.icon} size={20} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{method?.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {method?.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Visual Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden brand-shadow">
              <Image
                src={activeTab === 'crisis' 
                  ? "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
                alt={activeTab === 'crisis' 
                  ? "Students facing career guidance challenges" :"Students engaged in career guidance workshop"
                }
                className="w-full h-[400px] object-cover dignified-image"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {activeTab === 'crisis' ?'The Reality: Career Guidance Inequality' :'The Solution: Systematic Intervention'
                    }
                  </h4>
                  <p className="text-sm text-gray-600">
                    {activeTab === 'crisis' ?'Government school students face systemic barriers to career clarity, perpetuating poverty cycles.' :'Our research-backed methodology provides structured pathways from confusion to career clarity.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 brand-shadow">
              <div className="text-center">
                <div className={`text-2xl font-bold ${activeTab === 'crisis' ? 'text-red-500' : 'text-green-500'}`}>
                  {activeTab === 'crisis' ? '2.3M' : '12K+'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {activeTab === 'crisis' ? 'Students Affected' : 'Lives Transformed'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisSolutionSection;