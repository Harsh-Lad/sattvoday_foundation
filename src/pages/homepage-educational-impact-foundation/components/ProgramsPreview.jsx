import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProgramsPreview = () => {
  const [activeProgram, setActiveProgram] = useState('booklet');
  const [demoStep, setDemoStep] = useState(0);

  const programs = {
    booklet: {
      title: "Career Booklet Experience",
      description: "Comprehensive vernacular career guides covering 50+ pathways with realistic requirements and local success stories.",
      icon: "Book",
      color: "primary",
      features: [
        "Available in 8 regional languages",
        "50+ detailed career pathways",
        "Real salary expectations and requirements",
        "Local role model success stories",
        "Step-by-step educational roadmaps"
      ],
      stats: {
        languages: 8,
        careers: 50,
        students: "12K+",
        satisfaction: "94%"
      },
      demoContent: {
        title: "Sample: Software Developer Path",
        content: `**क्या है सॉफ्टवेयर डेवलपर?**\n\nसॉफ्टवेयर डेवलपर कंप्यूटर प्रोग्राम और एप्लिकेशन बनाते हैं। वे कोडिंग भाषाओं का उपयोग करके समस्याओं का समाधान करते हैं।\n\n**शिक्षा आवश्यकताएं:**\n• 12वीं (गणित/विज्ञान) - 60% अंक\n• B.Tech/BCA/B.Sc Computer Science\n• प्रोग्रामिंग भाषाएं सीखें\n\n**वेतन अपेक्षा:**\n• शुरुआती: ₹3-5 लाख प्रति वर्ष\n• अनुभवी: ₹8-15 लाख प्रति वर्ष\n\n**सफलता की कहानी:**\n"राहुल कुमार, बिहार के एक सरकारी स्कूल से, अब बैंगलोर में सॉफ्टवेयर इंजीनियर हैं।"`
      }
    },
    workshop: {
      title: "Workshop Methodology",
      description: "Interactive 6-week programs combining self-assessment, skill discovery, and pathway mapping with peer learning.",
      icon: "Users",
      color: "secondary",
      features: [
        "6-week structured curriculum",
        "Interactive self-assessment tools",
        "Peer learning and group activities",
        "Skills discovery workshops",
        "Career pathway mapping sessions"
      ],
      stats: {
        duration: "6 weeks",
        activities: 25,
        completion: "89%",
        clarity: "92%"
      },
      demoContent: {
        title: "Week 3: Skills Discovery Session",
        content: `**Session Objective:** Identify natural talents and developed skills\n\n**Activities:**\n1. **Skill Assessment Quiz** (20 mins)\n   - Analytical thinking\n   - Communication skills\n   - Creative problem solving\n   - Leadership potential\n\n2. **Peer Feedback Exercise** (30 mins)\n   - Students identify each other's strengths\n   - Group discussion on observations\n\n3. **Skills Mapping** (25 mins)\n   - Match skills to career options\n   - Identify skill gaps\n   - Create development plan\n\n**Outcome:** Clear understanding of personal strengths and areas for development`
      }
    }
  };

  const workshopSteps = [
    { title: "Self Assessment", icon: "User", description: "Discover your interests and strengths" },
    { title: "Skill Discovery", icon: "Search", description: "Identify natural talents and abilities" },
    { title: "Career Exploration", icon: "Compass", description: "Explore aligned career pathways" },
    { title: "Pathway Mapping", icon: "Map", description: "Create actionable career roadmap" },
    { title: "Mentor Connection", icon: "Users", description: "Connect with industry professionals" },
    { title: "Action Planning", icon: "Target", description: "Set goals and next steps" }
  ];

  const currentProgram = programs?.[activeProgram];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Layers" size={16} />
            <span>Our Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Proven <span className="text-primary">Intervention</span> Methods
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience our research-backed programs designed to transform career confusion into clear, 
            actionable pathways. Each method is tailored for maximum impact and accessibility.
          </p>
        </div>

        {/* Program Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 inline-flex flex-wrap">
            {Object.entries(programs)?.map(([key, program]) => (
              <button
                key={key}
                onClick={() => setActiveProgram(key)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeProgram === key
                    ? 'bg-card text-foreground brand-shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={program?.icon} size={16} />
                <span className="hidden sm:inline">{program?.title}</span>
                <span className="sm:hidden">{program?.title?.split(' ')?.[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Program Details */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  currentProgram?.color === 'primary' ? 'bg-primary/10 text-primary' :
                  currentProgram?.color === 'secondary'? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'
                }`}>
                  <Icon name={currentProgram?.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                    {currentProgram?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProgram?.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                {currentProgram?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border">
                {Object.entries(currentProgram?.stats)?.map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={`text-xl font-bold ${
                      currentProgram?.color === 'primary' ? 'text-primary' :
                      currentProgram?.color === 'secondary'? 'text-secondary' : 'text-accent'
                    }`}>
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workshop Steps (only for workshop) */}
            {activeProgram === 'workshop' && (
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4">6-Week Journey:</h4>
                <div className="space-y-3">
                  {workshopSteps?.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                        demoStep === index ? 'bg-secondary/10 border border-secondary/20' : 'hover:bg-muted'
                      }`}
                      onClick={() => setDemoStep(index)}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        demoStep === index ? 'bg-secondary text-white' : 'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{step?.title}</div>
                        <div className="text-sm text-muted-foreground">{step?.description}</div>
                      </div>
                      <Icon name={step?.icon} size={16} className="text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            {/* <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button variant="default" iconName="Play" iconPosition="left">
                Try Interactive Demo
              </Button>
              <Button variant="outline" iconName="Download" iconPosition="left">
                Download Sample
              </Button>
            </div> */}
          </div>

          {/* Right: Interactive Demo */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden brand-shadow">
              <div className="bg-muted px-6 py-4 border-b border-border">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Icon name="Monitor" size={16} className="mr-2" />
                  {currentProgram?.demoContent?.title}
                </h4>
              </div>
              
              <div className="p-6">
                {activeProgram === 'whatsapp' ? (
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">मुझे engineering में interest है लेकिन कौन सा branch choose करूं?</p>
                      <div className="text-xs text-gray-500 mt-1">Student • 2:30 PM</div>
                    </div>
                    
                    <div className="bg-green-100 rounded-lg p-3 max-w-xs ml-auto">
                      <p className="text-sm">🤖 Great question! Engineering में कई branches हैं। आपको कौन से subjects में ज्यादा interest है?</p>
                      <div className="text-xs text-gray-500 mt-1">SattvoBot • 2:31 PM</div>
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Maths और Physics</p>
                      <div className="text-xs text-gray-500 mt-1">Student • 2:32 PM</div>
                    </div>
                    
                    <div className="bg-green-100 rounded-lg p-3 max-w-xs ml-auto">
                      <p className="text-sm">Perfect! यहाँ कुछ options हैं:\n• Mechanical Engineering 🔧\n• Civil Engineering 🏗️\n• Electrical Engineering ⚡\n• Computer Science Engineering 💻\n\nकौन सा जानना चाहेंगे?</p>
                      <div className="text-xs text-gray-500 mt-1">SattvoBot • 2:32 PM</div>
                    </div>
                  </div>
                ) : (
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-line text-sm text-foreground leading-relaxed">
                      {currentProgram?.demoContent?.content}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Program Image */}
            <div className="relative rounded-xl overflow-hidden brand-shadow">
              <Image
                src={
                  activeProgram === 'booklet' 
                    ? "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    : activeProgram === 'workshop'
                    ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    : "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
                alt={`${currentProgram?.title} in action`}
                className="w-full h-64 object-cover dignified-image"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        {activeProgram === 'booklet' ? 'Career Booklet Distribution' :
                         activeProgram === 'workshop'? 'Interactive Workshop Session' : 'Digital Career Support'}
                      </h5>
                      <p className="text-sm text-gray-600">
                        {activeProgram === 'booklet' ? 'Students receiving vernacular career guides' :
                         activeProgram === 'workshop'? 'Students engaged in skill discovery' : ' 24/7 career guidance via WhatsApp'}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      currentProgram?.color === 'primary' ? 'bg-primary text-white' :
                      currentProgram?.color === 'secondary'? 'bg-secondary text-white' : 'bg-accent text-white'
                    }`}>
                      <Icon name={currentProgram?.icon} size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;