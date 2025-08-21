"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion"
import {
  HelpCircle,
  Search,
  Map,
  Users,
  Route,
  Target,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react"

const ClarityJourneyVisualization = () => {
  const [activePanel, setActivePanel] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  const journeyPanels = [
    {
      id: 1,
      title: "Awareness through Booklets",
      subtitle: "Phase 1",
      description:
        "Distribute Career Booklets to 500–1,000 students per pilot zone. Translate into local languages (Hindi, Marathi, Kannada, etc.).",
      icon: BookOpen,
      stats: [
        { label: "Booklets distributed", value: "1,000+" },
        { label: "Languages covered", value: "5+" },
        { label: "Career options", value: "300+" },
      ],
      keyPoints: [
        "Bilingual, visually engaging career guide",
        "Covers ITI trades, vocational, government, digital careers",
        "Local language translations",
        "Pilot zone outreach",
      ],
      duration: "Initial Outreach",
      outcome: "Career awareness and resource access",
    },
    {
      id: 2,
      title: "School Integration",
      subtitle: "Phase 2",
      description:
        "Sign MoUs with State Missions, DEOs, or principals. Establish ‘Career Hour’ once per month.",
      icon: Users,
      stats: [
        { label: "Schools partnered", value: "50+" },
        { label: "Career Hours held", value: "100+" },
        { label: "MoUs signed", value: "10+" },
      ],
      keyPoints: [
        "Partnerships with schools and education offices",
        "Monthly Career Hour",
        "Formal agreements for program delivery",
        "Integration into school calendar",
      ],
      duration: "Month 1-2",
      outcome: "Institutional support and regular career guidance",
    },
    {
      id: 3,
      title: "Workshops & Follow-ups",
      subtitle: "Phase 3",
      description:
        "Class 9: Self-awareness; Class 10: Career categories; Class 11–12: Application guidance. Use storytelling, games, roadmaps, and infographics.",
      icon: Map,
      stats: [
        { label: "Workshops conducted", value: "200+" },
        { label: "Students reached", value: "5,000+" },
        { label: "Career categories", value: "50+" },
      ],
      keyPoints: [
        "Interactive sessions for grades 9–12",
        "Group activities and interest mapping",
        "Storytelling and infographics",
        "Application and follow-up guidance",
      ],
      duration: "Month 2-4",
      outcome: "Student engagement and informed choices",
    },
    {
      id: 4,
      title: "Mentorship & Emotional Support",
      subtitle: "Phase 4",
      description:
        "Launch ‘Career Saathi’ program. Partner with NSS/CSR volunteers.",
      icon: HelpCircle,
      stats: [
        { label: "Mentors onboarded", value: "100+" },
        { label: "Students mentored", value: "500+" },
        { label: "Support sessions", value: "1,000+" },
      ],
      keyPoints: [
        "Monthly 1-on-1 or group mentorship",
        "Relatable role models",
        "Emotional and career support",
        "Volunteer partnerships",
      ],
      duration: "Month 4-6",
      outcome: "Ongoing guidance and emotional well-being",
    },
    {
      id: 5,
      title: "Digital Pathways",
      subtitle: "Phase 5",
      description:
        "WhatsApp Helpdesk for career doubts, video explainers, form support.",
      icon: Search,
      stats: [
        { label: "WhatsApp queries", value: "2,000+" },
        { label: "Videos created", value: "50+" },
        { label: "Forms supported", value: "500+" },
      ],
      keyPoints: [
        "Low-data career chatbot",
        "Quiz-based pathway suggestions",
        "Short reels/videos",
        "Application reminders and helpdesk",
      ],
      duration: "Ongoing",
      outcome: "Digital access and timely support",
    },
    {
      id: 6,
      title: "Family & Teacher Involvement",
      subtitle: "Phase 6",
      description:
        "Myth-busting sessions (beyond IIT/NEET). Poster campaigns and WhatsApp micro-learning for parents.",
      icon: Route,
      stats: [
        { label: "Parent sessions", value: "30+" },
        { label: "Teachers trained", value: "100+" },
        { label: "Campaigns run", value: "10+" },
      ],
      keyPoints: [
        "Parent orientation and myth-busting",
        "Teacher training modules",
        "Poster campaigns",
        "Micro-learning via WhatsApp",
      ],
      duration: "Ongoing",
      outcome: "Family engagement and teacher empowerment",
    },
    {
      id: 7,
      title: "Monitoring Impact",
      subtitle: "Phase 7",
      description:
        "Track awareness gains, career clarity, scholarship success. Publish quarterly reports with case studies.",
      icon: TrendingUp,
      stats: [
        { label: "Reports published", value: "4+" },
        { label: "Scholarships tracked", value: "200+" },
        { label: "Case studies", value: "20+" },
      ],
      keyPoints: [
        "Impact tracking and reporting",
        "Scholarship and career clarity monitoring",
        "Quarterly case studies",
        "Continuous improvement",
      ],
      duration: "Quarterly",
      outcome: "Measured impact and program refinement",
    },
  ]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const panelIndex = useTransform(scrollYProgress, [0, 1], [0, journeyPanels.length - 1])

  useEffect(() => {
    const unsubscribe = panelIndex.on("change", (latest) => {
      setActivePanel(Math.round(latest))
    })
    return unsubscribe
  }, [panelIndex])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = containerRef?.current
    if (element) observer?.observe(element)
    return () => observer?.disconnect()
  }, [])

  const scrollToPanel = (index) => {
    const element = containerRef?.current
    if (element) {
      const targetScroll = (index / (journeyPanels?.length - 1)) * element?.offsetHeight
      window.scrollTo({
        top: element?.offsetTop + targetScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      ref={containerRef}
      id="clarity-journey"
      className="relative bg-gradient-to-br from-neutral-50 to-stone-100 pt-24"
      style={{ height: `${journeyPanels.length * 80}svh` }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#6B7B3A]/10 to-[#8B4513]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#FF8800]/10 to-[#6B7B3A]/10 rounded-full blur-3xl" />
      </div>

      <div className="sticky top-0 h-[80svh] flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            {journeyPanels.map((panel, idx) => (
              <motion.div
                key={panel.id}
                className={`absolute inset-0 px-6 md:px-12 lg:px-24 pt-[5rem] ${activePanel === idx ? "z-10" : "z-0"}`}
                initial={{ x: idx > activePanel ? "100%" : "-100%", opacity: 0 }}
                animate={{
                  x: activePanel === idx ? "0%" : idx > activePanel ? "100%" : "-100%",
                  opacity: activePanel === idx ? 1 : 0,
                }}
                exit={{
                  x: idx > activePanel ? "100%" : "-100%",
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  x: { type: "spring", stiffness: 100, damping: 20 },
                }}
              >
                <div className="flex flex-col h-full max-w-7xl mx-auto py-12">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="p-4 rounded-xl bg-white border-2 border-[#6B7B3A]/20 shadow-lg">
                        <panel.icon size={32} className="text-[#6B7B3A]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#8B4513] uppercase tracking-wider">
                          {panel.subtitle}
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-bold text-[#6B7B3A]">{panel.title}</h1>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <p className="text-lg lg:text-xl text-stone-700 leading-relaxed font-medium">
                          {panel.description}
                        </p>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-[#6B7B3A] flex items-center gap-2">
                            <CheckCircle size={20} className="text-[#6B7B3A]" />
                            Key Focus Areas
                          </h3>
                          <ul className="space-y-3">
                            {panel.keyPoints.map((point, pointIdx) => (
                              <li key={pointIdx} className="flex items-start gap-3 text-stone-700">
                                <div className="w-2 h-2 rounded-full bg-[#FF8800] mt-2 flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white border-2 border-[#6B7B3A]/20 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock size={16} className="text-[#8B4513]" />
                            <span className="text-sm font-medium text-stone-600">Duration</span>
                          </div>
                          <p className="font-semibold text-[#6B7B3A]">{panel.duration}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white border-2 border-[#6B7B3A]/20 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <Award size={16} className="text-[#8B4513]" />
                            <span className="text-sm font-medium text-stone-600">Outcome</span>
                          </div>
                          <p className="font-semibold text-[#6B7B3A]">{panel.outcome}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="grid grid-cols-1 gap-6">
                        <h3 className="text-lg font-semibold text-[#6B7B3A] flex items-center gap-2">
                          <TrendingUp size={20} className="text-[#FF8800]" />
                          Impact Metrics
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                          {panel.stats.map((stat, statIdx) => (
                            <div
                              key={statIdx}
                              className="text-center p-6 bg-white rounded-xl border-2 border-[#6B7B3A]/20 shadow-lg"
                            >
                              <div className="text-2xl lg:text-3xl font-bold text-[#FF8800] mb-1">{stat.value}</div>
                              <div className="text-sm text-stone-600 font-medium">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative">
                        <div className="relative p-8 rounded-2xl bg-white border-2 border-[#6B7B3A]/20 shadow-xl">
                          <div className="text-center">
                            <div className="inline-flex p-6 rounded-xl bg-[#6B7B3A]/10 border-2 border-[#6B7B3A]/20 mb-4">
                              <panel.icon size={48} className="text-[#6B7B3A]" />
                            </div>
                            <h4 className="text-lg font-semibold text-[#6B7B3A] mb-2">Phase {panel.id}</h4>
                            <p className="text-stone-600 font-medium">
                              {panel.id === 6
                                ? "Journey Complete"
                                : `Next: ${journeyPanels[panel.id]?.title || "Continue"}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8 pb-12">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-[#8B4513] font-semibold">
                        <BookOpen size={16} />
                        <span>
                          Step {panel.id} of {journeyPanels.length}
                        </span>
                      </div>
                      {idx < journeyPanels.length - 1 && (
                        <div className="flex items-center gap-2 text-sm text-stone-500 font-medium">
                          <span>Scroll to continue</span>
                          <ArrowRight size={16} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="absolute hidden bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-md rounded-full shadow-xl border-2 border-[#6B7B3A]/20">
            {journeyPanels.map((panel, idx) => (
              <button
                key={panel.id}
                title={panel.title}
                className={`relative transition-all duration-300 ${
                  activePanel === idx
                    ? "w-12 h-4 bg-[#FF8800] rounded-full shadow-lg"
                    : "w-4 h-4 bg-stone-300 hover:bg-[#6B7B3A]/30 rounded-full"
                }`}
                onClick={() => scrollToPanel(idx)}
              >
                {activePanel === idx && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClarityJourneyVisualization
