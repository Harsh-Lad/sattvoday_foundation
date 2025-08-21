import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StudentSuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 17,
      school: "Government Senior Secondary School, Rajasthan",
      beforeStory: "Confused about career options, considering dropping out after 12th to help family financially.",
      afterStory: "Now pursuing B.Sc. in Agriculture with clear 5-year plan to become an agricultural consultant.",
      careerPath: "Agricultural Consultant",
      beforeClarity: 2,
      afterClarity: 9,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c96c8d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Sattvoday didn\'t just show me career options - they showed me how someone like me could actually achieve them.",
      impact: {
        academicImprovement: "+35%",
        confidenceLevel: "High",
        familySupport: "Increased"
      },
      mentorName: "Dr. Anjali Patel",
      timeInProgram: "6 weeks"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      age: 16,
      school: "Government High School, Bihar",
      beforeStory: "Wanted to become an engineer but had no idea about different engineering fields or requirements.",
      afterStory: "Focused on mechanical engineering with clear understanding of entrance exams and career prospects.",
      careerPath: "Mechanical Engineer",
      beforeClarity: 3,
      afterClarity: 8,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "I learned that engineering isn't just one thing - there are so many paths, and I found the one that fits me.",
      impact: {
        academicImprovement: "+42%",
        confidenceLevel: "Very High",
        familySupport: "Strong"
      },
      mentorName: "Eng. Suresh Yadav",
      timeInProgram: "8 weeks"
    },
    {
      id: 3,
      name: "Meera Devi",
      age: 18,
      school: "Government Girls School, Uttar Pradesh",
      beforeStory: "Family pressure to get married after 12th, no awareness of professional opportunities for women.",
      afterStory: "Convinced family to support her nursing education, now training to become a healthcare professional.",
      careerPath: "Registered Nurse",
      beforeClarity: 1,
      afterClarity: 9,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Sattvoday helped me show my family that I could have a respectable career and still honor our values.",
      impact: {
        academicImprovement: "+28%",
        confidenceLevel: "High",
        familySupport: "Transformed"
      },
      mentorName: "Sister Mary Joseph",
      timeInProgram: "10 weeks"
    }
  ];

  const handleVideoPlay = () => {
    setIsPlaying(true);
    if (videoRef?.current) {
      videoRef?.current?.play();
    }
  };

  const ClarityMeter = ({ before, after, label }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">{after}/10</span>
      </div>
      <div className="relative">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 rounded-full transition-all duration-1000"
            style={{ width: `${(after / 10) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>Before: {before}/10</span>
          <span>After: {after}/10</span>
        </div>
      </div>
    </div>
  );

  const currentStory = successStories?.[activeStory];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Real Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Student <span className="text-primary">Success</span> Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Authentic narratives from students whose lives were transformed through career clarity. 
            These stories represent dignity, hope, and the power of proper guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Video/Visual Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden brand-shadow">
              {!isPlaying ? (
                <>
                  <Image
                    src={currentStory?.videoThumbnail}
                    alt={`${currentStory?.name} success story`}
                    className="w-full h-[400px] object-cover dignified-image"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={handleVideoPlay}
                      className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
                    >
                      <Icon name="Play" size={32} className="text-primary ml-1" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="w-full h-[400px] bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon name="Video" size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-75">Video testimonial would play here</p>
                    <p className="text-xs opacity-50 mt-2">
                      Actual implementation would include embedded video player
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Story Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {successStories?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveStory(index);
                    setIsPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStory === index 
                      ? 'bg-primary scale-125' :'bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`View story ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Story Details */}
          <div className="space-y-6">
            {/* Student Profile */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start space-x-4 mb-6">
                <Image
                  src={currentStory?.avatar}
                  alt={currentStory?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{currentStory?.name}</h3>
                  <p className="text-muted-foreground text-sm">{currentStory?.age} years old</p>
                  <p className="text-muted-foreground text-sm">{currentStory?.school}</p>
                  <div className="mt-2 inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    <Icon name="Target" size={12} className="mr-1" />
                    {currentStory?.careerPath}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mb-6">
                "{currentStory?.quote}"
              </blockquote>

              {/* Career Clarity Progress */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Career Clarity Progress</h4>
                <ClarityMeter 
                  before={currentStory?.beforeClarity} 
                  after={currentStory?.afterClarity}
                  label="Clarity Level"
                />
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{currentStory?.impact?.academicImprovement}</div>
                  <div className="text-xs text-muted-foreground">Academic Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{currentStory?.impact?.confidenceLevel}</div>
                  <div className="text-xs text-muted-foreground">Confidence Level</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">{currentStory?.impact?.familySupport}</div>
                  <div className="text-xs text-muted-foreground">Family Support</div>
                </div>
              </div>

              {/* Program Details */}
              <div className="border-t border-border pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Mentor:</span>
                    <div className="font-medium">{currentStory?.mentorName}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Program Duration:</span>
                    <div className="font-medium">{currentStory?.timeInProgram}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before & After */}
            {/* <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                  <Icon name="AlertCircle" size={16} className="mr-2" />
                  Before Sattvoday
                </h4>
                <p className="text-red-700 text-sm leading-relaxed">
                  {currentStory?.beforeStory}
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  After Sattvoday
                </h4>
                <p className="text-green-700 text-sm leading-relaxed">
                  {currentStory?.afterStory}
                </p>
              </div>
            </div> */}

            {/* CTA */}
            {/* <div className="flex space-x-4">
              <Button variant="default" iconName="Users" iconPosition="left">
                Become a Mentor
              </Button>
              <Button variant="outline" iconName="Heart" iconPosition="left">
                Support Students
              </Button>
            </div> */}
          </div>
        </div>

        {/* Additional Impact Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
              Collective Impact
            </h3>
            <p className="text-muted-foreground">
              These stories represent thousands of transformed lives across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12,847</div>
              <div className="text-sm text-muted-foreground">Students Guided</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">92%</div>
              <div className="text-sm text-muted-foreground">Achieve Clarity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">156</div>
              <div className="text-sm text-muted-foreground">Schools Partnered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">89</div>
              <div className="text-sm text-muted-foreground">Active Mentors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccessStories;