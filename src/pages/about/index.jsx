import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../homepage-educational-impact-foundation/components/Footer';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-16">
      {/* Headline & Subheadline */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Sattvoday (सत्त्वोदय)</h1>
        <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-2">“Rise of Pure Potential” — rooted in the Gītā’s ideal of sattva-guna: clarity, wisdom, and purpose.</blockquote>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">We believe every child deserves a clear, achievable pathway to a dignified life.</p>
      </section>

      {/* Our Purpose & Why We Exist */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
          <Icon name="Info" size={24} className="text-primary" />
          Our Purpose
        </h2>
        <p className="mb-6 text-lg text-muted-foreground">To democratize career guidance for underprivileged students — especially those from government and low-income schools — through contextual, realistic, and spiritually uplifting interventions.</p>
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">Why We Exist</h2>
        <ul className="space-y-2 mb-8">
          <li>93% of Indian students know only 7–10 careers <span className="text-xs text-muted-foreground">(IC3 Institute, 2022)</span></li>
          <li>1 in 3 government school students drop out after Class 10 due to confusion or lack of guidance <span className="text-xs text-muted-foreground">(UNICEF, 2020)</span></li>
          <li>Only 17% of rural students receive structured career counseling <span className="text-xs text-muted-foreground">(ASER, 2022)</span></li>
          <li>India has 1 counselor for every 5,000+ students — far below the global norm of 1:250 <span className="text-xs text-muted-foreground">(BCC, 2021)</span></li>
          <li>75% of students choose streams based on marks or peer pressure <span className="text-xs text-muted-foreground">(Mindler, 2021)</span></li>
          <li>70% of low-income students remain in low-skill jobs due to lack of career exposure <span className="text-xs text-muted-foreground">(Brookings, 2022)</span></li>
        </ul>
      </section>

      {/* Why This Matters */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
          <Icon name="Award" size={24} className="text-primary" />
          Why This Matters: Career Guidance Breaks the Poverty Cycle
        </h2>
        <ul className="space-y-2 mb-8">
          <li>Access to skills-based vocational training increases the chance of stable employment by <span className="font-bold text-green-600">41%</span> <span className="text-xs text-muted-foreground">(ILO)</span></li>
          <li>Youth who complete secondary school and enter skilled professions earn <span className="font-bold text-green-600">2–3x</span> more than unskilled peers <span className="text-xs text-muted-foreground">(UNESCO, 2020)</span></li>
          <li>Informed students make proactive, affordable education and training choices, reducing financial strain and preventing generational poverty.</li>
          <li>With the right guidance, students can transition from informal, insecure work to dignified, secure employment — strengthening community resilience.</li>
          <li>Career counseling programs in underserved areas lead to measurable increases in upward mobility and mental well-being <span className="text-xs text-muted-foreground">(Brookings, 2022)</span></li>
        </ul>
      </section>

      {/* SDGs & NEP Section */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
          <Icon name="Globe" size={24} className="text-primary" />
          Aligned with National & Global Education Goals
        </h2>
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <Image src="/assets/images/sdg4.png" alt="SDG 4" className="h-16 w-auto" />
          <Image src="/assets/images/sdg8.png" alt="SDG 8" className="h-16 w-auto" />
          <Image src="/assets/images/sdg10.png" alt="SDG 10" className="h-16 w-auto" />
        </div>
        <ul className="space-y-2">
          <li><strong>NEP 2020:</strong> Holistic education, experiential learning, and future readiness through career awareness and life skills training.</li>
          <li><strong>SDG 4:</strong> Quality Education: Inclusive and equitable quality education and lifelong learning opportunities for all.</li>
          <li><strong>SDG 8:</strong> Decent Work and Economic Growth: Connecting students to relevant careers, vocational skills, and mentorship.</li>
          <li><strong>SDG 10:</strong> Reduced Inequalities: Closing the opportunity gap between privileged and under-resourced students.</li>
        </ul>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-5xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
        <p className="text-lg text-muted-foreground mb-6">To ensure every student, no matter their background, can rise with clarity, dignity, and purpose — through conscious, values-based career choices.</p>
        <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
        <p className="text-lg text-muted-foreground mb-6">To build India’s most scalable grassroots career guidance ecosystem rooted in realism, accessibility, and empathy.</p>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
          <Icon name="BookOpen" size={24} className="text-primary" />
          What We Do
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3"><Icon name="Book" size={20} className="text-primary mt-1" /><div><strong>Sattvoday Career Booklet:</strong> Bilingual, visually engaging guide with 300+ realistic career options after Class 10 and 12 — from ITI trades to vocational careers, government jobs to digital opportunities.</div></li>
          <li className="flex items-start gap-3"><Icon name="Users" size={20} className="text-secondary mt-1" /><div><strong>In-School Workshops:</strong> Interactive sessions in Grades 9–12 for skills reflection, career exploration, and informed choices. Includes group activities, interest mapping, and storytelling.</div></li>
          <li className="flex items-start gap-3"><Icon name="UserCheck" size={20} className="text-green-500 mt-1" /><div><strong>Mentorship Circles:</strong> Monthly mentorship sessions with relatable role models. Each mentor guides 3–5 students for 6–12 months.</div></li>
          <li className="flex items-start gap-3"><Icon name="Award" size={20} className="text-yellow-500 mt-1" /><div><strong>Scholarship & Form Support:</strong> Help desks for scholarship applications, vocational admissions, and exam form filling. Includes “Form Calendars.”</div></li>
          <li className="flex items-start gap-3"><Icon name="School" size={20} className="text-blue-500 mt-1" /><div><strong>Teacher & Parent Engagement:</strong> Orientation sessions for parents and teacher training modules for long-term career guidance.</div></li>
          <li className="flex items-start gap-3"><Icon name="MessageCircle" size={20} className="text-primary mt-1" /><div><strong>WhatsApp & Digital Support:</strong> Career chatbot, online quizzes, short videos, and application reminders.</div></li>
        </ul>
      </section>

      {/* Our Values */}
      <section className="max-w-5xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">Our Values: The Sattva Spirit</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-muted-foreground">
          <li>Empathy before Expertise</li>
          <li>Realism before Romanticism</li>
          <li>Support before Selection</li>
          <li>Clarity before Competition</li>
          <li>Simplicity before Sophistication</li>
        </ul>
      </section>

      {/* Animated Phase-wise Timeline */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
          <Icon name="Timeline" size={24} className="text-primary" />
          How We Work: Phase-wise Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Icon name="Book" size={28} className="text-primary" />
              <span className="font-semibold">Phase 1: Awareness through Booklets</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="School" size={28} className="text-blue-500" />
              <span className="font-semibold">Phase 2: School Integration</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="GraduationCap" size={28} className="text-secondary" />
              <span className="font-semibold">Phase 3: Workshops & Follow-ups</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Users" size={28} className="text-green-500" />
              <span className="font-semibold">Phase 4: Mentorship & Emotional Support</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Smartphone" size={28} className="text-primary" />
              <span className="font-semibold">Phase 5: Digital Pathways</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Users" size={28} className="text-yellow-500" />
              <span className="font-semibold">Phase 6: Family & Teacher Involvement</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="BarChart" size={28} className="text-primary" />
              <span className="font-semibold">Phase 7: Monitoring Impact</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            {/* Placeholder for animated timeline - can be replaced with a custom animation or library */}
            <div className="h-64 w-full bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-xl text-muted-foreground font-semibold">
              {/* TODO: Add animated timeline here */}
              <span>Animated timeline coming soon!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="max-w-5xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 items-center">
            <Icon name="School" size={32} className="text-primary" />
            <span className="font-semibold">Schools</span>
            <p>Want your students to dream smart, not just big? Bring Sattvoday to your classrooms.</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Icon name="Users" size={32} className="text-secondary" />
            <span className="font-semibold">Volunteers & Mentors</span>
            <p>Become a Career Saathi and walk with a student through their journey.</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Icon name="Lightbulb" size={32} className="text-yellow-500" />
            <span className="font-semibold">CSR & NGO Partners</span>
            <p>Support with printing, implementation, scholarships, or internship pipelines.</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Icon name="Heart" size={32} className="text-primary" />
            <span className="font-semibold">Donors</span>
            <p>₹150 funds a career kit for one child. ₹1,000 supports a full year of mentorship + counselling.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
