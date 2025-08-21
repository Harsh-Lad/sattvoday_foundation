import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../homepage-educational-impact-foundation/components/Footer';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';

const Impact = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-16">
      {/* Headline & Subheadline */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Rise of Pure Potential for Every Child</h1>
        <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-2">“Clarity is not a privilege. It is a right.” <span className="font-semibold">- Sarvi Gupta (Founder)</span></blockquote>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">Sattvoday (सत्त्वोदय) empowers students from government schools through value-driven, realistic career guidance, life skills training, and mentorship — helping them unlock their future with clarity and confidence.</p>
      </section>

      {/* Impact Stats & Why We Exist */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
          <Icon name="TrendingUp" size={24} className="text-primary" />
          Why We Exist
        </h2>
        <ul className="space-y-2 mb-8">
          <li>93% of Indian students know only 7–10 careers <span className="text-xs text-muted-foreground">(IC3 Institute, 2022)</span></li>
          <li>1 in 3 government school students drop out after Class 10 due to confusion or lack of guidance <span className="text-xs text-muted-foreground">(UNICEF, 2020)</span></li>
          <li>Only 17% of rural students receive structured career counseling <span className="text-xs text-muted-foreground">(ASER, 2022)</span></li>
          <li>India has 1 counselor for every 5,000+ students — far below the global norm of 1:250 <span className="text-xs text-muted-foreground">(BCC, 2021)</span></li>
          <li>75% of students choose streams based on marks or peer pressure <span className="text-xs text-muted-foreground">(Mindler, 2021)</span></li>
          <li>70% of low-income students remain in low-skill jobs due to lack of career exposure <span className="text-xs text-muted-foreground">(Brookings, 2022)</span></li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-card rounded-lg shadow p-6 text-center flex flex-col items-center">
            <Icon name="Users" size={32} className="text-primary mb-2" />
            <h2 className="text-2xl font-bold text-primary">12,847+</h2>
            <p className="text-muted-foreground">Students Reached</p>
          </div>
          <div className="bg-card rounded-lg shadow p-6 text-center flex flex-col items-center">
            <Icon name="School" size={32} className="text-primary mb-2" />
            <h2 className="text-2xl font-bold text-primary">156+</h2>
            <p className="text-muted-foreground">Schools Partnered</p>
          </div>
          <div className="bg-card rounded-lg shadow p-6 text-center flex flex-col items-center">
            <Icon name="UserCheck" size={32} className="text-primary mb-2" />
            <h2 className="text-2xl font-bold text-primary">89+</h2>
            <p className="text-muted-foreground">Mentors Active</p>
          </div>
        </div>
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
    </main>
    <Footer />
  </div>
);

export default Impact;
