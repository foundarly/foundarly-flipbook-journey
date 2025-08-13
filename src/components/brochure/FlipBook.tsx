
import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import heroImage from "@/assets/hero-students-coding.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import {
  Code2,
  Users,
  Rocket,
  Calendar,
  BookOpen,
  Layers,
  Box,
  Cpu,
  MousePointerClick,
  Globe,
  Server,
  Database,
  ShieldCheck,
  Cloud,
  Files,
  MessageCircle,
  ShoppingCart,
  Briefcase,
  Star,
  Zap,
  Trophy,
  Target,
  Heart,
  TrendingUp,
  Clock,
  CheckCircle,
  Play,
  Award,
} from "lucide-react";

const Section = ({ title, children, icon: Icon }: { 
  title: string; 
  children: React.ReactNode;
  icon?: any;
}) => (
  <section className="space-y-2 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
    <div className="flex items-center gap-2">
      {Icon && <Icon className="h-5 w-5 text-primary" />}
      <h3 className="text-base md:text-lg font-semibold text-foreground/90">{title}</h3>
    </div>
    <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const PageShell = ({ children, withPadding = true }: { children: React.ReactNode; withPadding?: boolean }) => (
  <article className={`h-full w-full bg-card text-card-foreground ${withPadding ? "p-3 md:p-6" : ""} overflow-y-auto`}>
    {children}
  </article>
);

const InteractiveCard = ({ icon: Icon, title, description, color = "primary" }: {
  icon: any;
  title: string;
  description: string;
  color?: string;
}) => {
  const colorMap: Record<string, string> = {
    primary: "text-primary",
    blue: "text-blue-500",
    green: "text-green-500",
    yellow: "text-yellow-500",
    purple: "text-purple-500",
    teal: "text-teal-500",
  };
  const colorClass = colorMap[color] ?? "text-primary";
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border/50 bg-gradient-to-br from-card to-card/80 p-3 hover-scale cursor-pointer transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
      <div className="relative">
        <Icon className={`h-6 w-6 ${colorClass} mb-2 group-hover:scale-110 transition-transform duration-300`} />
        <h4 className="font-medium text-sm mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground leading-tight">{description}</p>
      </div>
    </div>
  );
};

const ProgressBadge = ({ week, phase, color }: { week: string; phase: string; color: string }) => {
  const palette: Record<string, { bg: string; border: string; dot: string }> = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", dot: "bg-blue-500" },
    yellow: { bg: "bg-yellow-50", border: "border-yellow-200", dot: "bg-yellow-500" },
    green: { bg: "bg-green-50", border: "border-green-200", dot: "bg-green-500" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", dot: "bg-purple-500" },
    primary: { bg: "bg-primary/10", border: "border-primary/20", dot: "bg-primary" },
  };
  const c = palette[color] ?? palette.primary;
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${c.bg} border ${c.border} text-xs font-medium`}>
      <div className={`w-2 h-2 rounded-full ${c.dot}`} />
      <span className="text-foreground">{week}</span>
      <span className="text-muted-foreground">•</span>
      <span className="text-muted-foreground">{phase}</span>
    </div>
  );
};

export default function FlipBook() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const flipRef = useRef<PageFlip | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;
    if (flipRef.current) return;

    const pages = containerEl.querySelectorAll(".flip-page");
    
    // Mobile-first responsive sizes
    const width = window.innerWidth < 480 ? Math.min(320, window.innerWidth - 32) : 
                  window.innerWidth < 768 ? 360 : 
                  window.innerWidth < 1024 ? 480 : 560;
    const height = window.innerWidth < 480 ? 480 : 
                   window.innerWidth < 768 ? 520 : 
                   window.innerWidth < 1024 ? 680 : 740;

    const pf = new PageFlip(containerEl, {
      width,
      height,
      size: "stretch",
      maxShadowOpacity: 0.35,
      showCover: true,
      mobileScrollSupport: true,
      usePortrait: window.innerWidth < 768,
      disableFlipByClick: false,
      useMouseEvents: true,
      swipeDistance: 30,
      clickEventForward: true,
    });

    flipRef.current = pf;

    const doLoad = (nodeList: NodeListOf<Element>) => {
      try {
        pf.loadFromHTML(nodeList);
      } catch (e) {
        console.warn("PageFlip load error:", e);
      }
    };

    if (pages.length > 0) doLoad(pages as unknown as NodeListOf<Element>);
    else requestAnimationFrame(() => {
      const retry = containerEl.querySelectorAll(".flip-page");
      if (retry.length > 0) doLoad(retry as unknown as NodeListOf<Element>);
    });

    return () => {
      const inst: any = flipRef.current as any;
      try {
        if (inst && typeof inst.destroy === "function" && inst.ui) inst.destroy();
      } catch (_) {
        // cleanup errors ignored
      } finally {
        flipRef.current = null;
      }
    };
  }, []);

  // SEO: title, meta description, canonical
  useEffect(() => {
    document.title = "Full-Stack Web Developer Course | Upskill Foundarly";
    const desc = document.querySelector('meta[name="description"]');
    const content = "Become a full-stack developer in 1 year with hands-on projects, mentorship, and job support.";
    if (desc) {
      (desc as HTMLMetaElement).setAttribute('content', content);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = window.location.href;
    else {
      const l = document.createElement('link');
      l.rel = 'canonical';
      l.href = window.location.href;
      document.head.appendChild(l);
    }
  }, []);

  return (
    <main className="min-h-screen py-4 md:py-8 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div ref={containerRef} className="flipbook">
            
            {/* Page 1 — Cover */}
            <div className="flip-page">
              <PageShell withPadding={false}>
                <div className="relative h-full w-full overflow-hidden rounded-md">
                  <img src={heroImage} alt="Students coding" loading="eager" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-hero opacity-80 mix-blend-multiply" />
                  <div className="relative h-full w-full p-4 md:p-8 flex flex-col justify-between">
                    <header className="flex items-center justify-between text-primary-foreground">
                      <div className="flex items-center gap-2">
                        <Rocket className="h-4 w-4" />
                        <span className="text-xs tracking-widest uppercase opacity-90">upskill.foundarly.com</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs opacity-90">1-Year Program</span>
                      </div>
                    </header>
                    
                    <div className="max-w-xl">
                      <div className="mb-3 flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="text-xs text-primary-foreground/80 ml-1">Rated #1 Course</span>
                      </div>
                      
                      <h1 className="font-display text-xl sm:text-2xl md:text-4xl leading-tight text-primary-foreground animate-fade-in mb-4">
                        Become a Full-Stack Web Developer in 1 Year — Learn by Doing
                      </h1>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-primary-foreground/90">
                          <CheckCircle className="h-4 w-4" />
                          <span>3 Classes + 3 Practice Sessions Every Week</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-primary-foreground/90">
                          <CheckCircle className="h-4 w-4" />
                          <span>Backend with Go • Live Projects • Career Prep</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-primary-foreground/90">
                          <CheckCircle className="h-4 w-4" />
                          <span>100% Job Placement Support</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">React</div>
                        <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Go</div>
                        <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">MongoDB</div>
                        <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">DevOps</div>
                      </div>
                      
                      <Button size="lg" variant="hero" className="hover-scale group w-full md:w-auto">
                        <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Start Your Journey
                      </Button>
                    </div>
                    
                    <footer className="text-primary-foreground/90 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4" />
                        Learn. Build. Launch.
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>5000+ Students</span>
                      </div>
                    </footer>
                  </div>
                </div>
              </PageShell>
            </div>

            {/* Page 2 — About the Course */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h2 className="font-display text-xl md:text-2xl text-gradient">About the Course</h2>
                </div>
                
                <div className="grid gap-3 mb-4">
                  <Section title="Beginner-friendly Learning Path" icon={Target}>
                    Start from absolute basics and build up to professional projects with clear milestones and supportive mentorship.
                  </Section>
                  <Section title="Interactive & Engaging" icon={Zap}>
                    Quizzes, coding challenges, hackathons and peer collaboration keep learning exciting and practical.
                  </Section>
                </div>
                
                <Section title="Weekly Schedule" icon={Calendar}>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mt-3">
                    <div className="interactive-badge interactive-badge-active">
                      <Calendar className="mr-1 h-3 w-3" />Mon Class
                    </div>
                    <div className="interactive-badge interactive-badge-practice">
                      <Code2 className="mr-1 h-3 w-3" />Tue Practice
                    </div>
                    <div className="interactive-badge interactive-badge-active">
                      <Calendar className="mr-1 h-3 w-3" />Wed Class
                    </div>
                    <div className="interactive-badge interactive-badge-practice">
                      <Code2 className="mr-1 h-3 w-3" />Thu Practice
                    </div>
                    <div className="interactive-badge interactive-badge-active">
                      <Calendar className="mr-1 h-3 w-3" />Fri Class
                    </div>
                    <div className="interactive-badge interactive-badge-practice">
                      <Code2 className="mr-1 h-3 w-3" />Sat Practice
                    </div>
                    <div className="interactive-badge muted">
                      <Heart className="mr-1 h-3 w-3" />Sun Rest
                    </div>
                  </div>
                </Section>
                
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <InteractiveCard 
                    icon={Code2} 
                    title="Hands-on Projects" 
                    description="Build 12+ real applications from day one"
                  />
                  <InteractiveCard 
                    icon={Users} 
                    title="Live Community" 
                    description="Learn with peers, get instant help"
                  />
                  <InteractiveCard 
                    icon={BookOpen} 
                    title="Expert Mentorship" 
                    description="1-on-1 guidance from industry pros"
                  />
                  <InteractiveCard 
                    icon={Rocket} 
                    title="Career Ready" 
                    description="Portfolio, resume & interview prep"
                  />
                </div>
              </PageShell>
            </div>

            {/* Page 3 — Phase 1 */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Layers className="h-6 w-6 text-primary" />
                    <h2 className="font-display text-lg md:text-2xl text-gradient">Phase 1: Foundation</h2>
                  </div>
                  <ProgressBadge week="Weeks 1–6" phase="HTML & CSS" color="blue" />
                </div>
                
                <div className="grid gap-3">
                  <Section title="HTML Mastery" icon={Globe}>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>Structure, headings, paragraphs, links & images</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>Forms, tables, lists & multimedia embeds</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>Semantic tags, accessibility & SEO basics</span>
                      </div>
                    </div>
                  </Section>
                  
                  <Section title="CSS Styling" icon={Layers}>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>Selectors, colors, typography & spacing</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>Box model, positioning & responsive design</span>
                      </div>
                    </div>
                  </Section>
                  
                  <Section title="Advanced Layouts" icon={Box}>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>Flexbox mastery for 1D layouts</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>CSS Grid for complex 2D layouts</span>
                      </div>
                    </div>
                  </Section>
                </div>
                
                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800">Phase Project</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Build a stunning personal portfolio website with responsive design, smooth animations, and perfect mobile experience.
                  </p>
                </div>
              </PageShell>
            </div>

            {/* Page 4 — Phase 2 */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-6 w-6 text-primary" />
                    <h2 className="font-display text-lg md:text-2xl text-gradient">Phase 2: JavaScript</h2>
                  </div>
                  <ProgressBadge week="Weeks 7–14" phase="Programming" color="yellow" />
                </div>
                
                <div className="grid gap-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Section title="JS Fundamentals" icon={Cpu}>
                      Variables, data types, operators, conditionals & functions.
                    </Section>
                    <Section title="Control Flow" icon={TrendingUp}>
                      Loops, error handling & advanced function concepts.
                    </Section>
                  </div>
                  
                  <Section title="Data Structures & DOM" icon={Database}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-yellow-500" />
                          <span>Arrays & Objects</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-yellow-500" />
                          <span>Map, Filter, Reduce</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-yellow-500" />
                          <span>DOM Manipulation</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-yellow-500" />
                          <span>Event Handling</span>
                        </div>
                      </div>
                    </div>
                  </Section>
                  
                  <Section title="Modern JavaScript" icon={Zap}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-yellow-500" />
                          <span>ES6+ Features</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-yellow-500" />
                          <span>Async/Await</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-yellow-500" />
                          <span>Fetch API</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-yellow-500" />
                          <span>Web Storage</span>
                        </div>
                      </div>
                    </div>
                  </Section>
                </div>
                
                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium text-yellow-800">Phase Project</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Create an interactive weather app with real-time data, geolocation, and beautiful UI animations.
                  </p>
                </div>
              </PageShell>
            </div>

            {/* Page 5 — Phase 3 */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Box className="h-6 w-6 text-primary" />
                    <h2 className="font-display text-lg md:text-2xl text-gradient">Phase 3: React</h2>
                  </div>
                  <ProgressBadge week="Weeks 15–22" phase="Frontend" color="purple" />
                </div>
                
                <div className="grid gap-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Section title="React Basics" icon={Box}>
                      Components, JSX, props, state & lifecycle methods.
                    </Section>
                    <Section title="Advanced React" icon={Zap}>
                      Hooks, Context, routing & performance optimization.
                    </Section>
                  </div>
                  
                  <Section title="React Ecosystem" icon={Layers}>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="p-2 rounded border bg-purple-50 border-purple-200">
                        <div className="flex items-center gap-1 mb-1">
                          <Box className="h-3 w-3 text-purple-600" />
                          <span className="text-xs font-medium">useState</span>
                        </div>
                        <p className="text-xs text-purple-700">State management</p>
                      </div>
                      <div className="p-2 rounded border bg-purple-50 border-purple-200">
                        <div className="flex items-center gap-1 mb-1">
                          <Zap className="h-3 w-3 text-purple-600" />
                          <span className="text-xs font-medium">useEffect</span>
                        </div>
                        <p className="text-xs text-purple-700">Side effects</p>
                      </div>
                      <div className="p-2 rounded border bg-purple-50 border-purple-200">
                        <div className="flex items-center gap-1 mb-1">
                          <Globe className="h-3 w-3 text-purple-600" />
                          <span className="text-xs font-medium">React Router</span>
                        </div>
                        <p className="text-xs text-purple-700">Navigation</p>
                      </div>
                      <div className="p-2 rounded border bg-purple-50 border-purple-200">
                        <div className="flex items-center gap-1 mb-1">
                          <Layers className="h-3 w-3 text-purple-600" />
                          <span className="text-xs font-medium">Redux</span>
                        </div>
                        <p className="text-xs text-purple-700">Global state</p>
                      </div>
                    </div>
                  </Section>
                  
                  <Section title="UI Design & Styling" icon={Layers}>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-purple-500" />
                        <span>Tailwind CSS mastery for rapid styling</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-purple-500" />
                        <span>Component libraries & design systems</span>
                      </div>
                    </div>
                  </Section>
                </div>
                
                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-purple-800">Phase Project</span>
                  </div>
                  <p className="text-sm text-purple-700">
                    Build a full-featured e-commerce product catalog with cart, filters, and checkout flow.
                  </p>
                </div>
              </PageShell>
            </div>

            {/* Page 6 — Phase 4 */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Server className="h-6 w-6 text-primary" />
                    <h2 className="font-display text-lg md:text-2xl text-gradient">Phase 4: Go Backend</h2>
                  </div>
                  <ProgressBadge week="Weeks 23–32" phase="Backend" color="green" />
                </div>
                
                <div className="grid gap-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Section title="Go Fundamentals" icon={Cpu}>
                      Syntax, types, structs, interfaces & concurrency.
                    </Section>
                    <Section title="Web APIs" icon={Globe}>
                      HTTP servers, routing, middleware & JSON handling.
                    </Section>
                  </div>
                  
                  <Section title="Database & Auth" icon={Database}>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="p-2 rounded border bg-green-50 border-green-200">
                        <div className="flex items-center gap-1 mb-1">
                          <Database className="h-3 w-3 text-green-600" />
                          <span className="text-xs font-medium">MongoDB</span>
                        </div>
                        <p className="text-xs text-green-700">NoSQL database</p>
                      </div>
                      <div className="p-2 rounded border bg-green-50 border-green-200">
                        <div className="flex items-center gap-1 mb-1">
                          <ShieldCheck className="h-3 w-3 text-green-600" />
                          <span className="text-xs font-medium">JWT Auth</span>
                        </div>
                        <p className="text-xs text-green-700">Secure tokens</p>
                      </div>
                    </div>
                  </Section>
                  
                  <Section title="Production Ready" icon={Cloud}>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>Docker containerization & cloud deployment</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>File uploads, logging & error handling</span>
                      </div>
                    </div>
                  </Section>
                </div>
                
                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-green-50 to-teal-50 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800">Phase Project</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Create a secure blog API with user authentication, CRUD operations, and admin panel.
                  </p>
                </div>
              </PageShell>
            </div>

            {/* Page 7 — Phase 5 */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Rocket className="h-6 w-6 text-primary" />
                    <h2 className="font-display text-lg md:text-2xl text-gradient">Phase 5: Full-Stack</h2>
                  </div>
                  <ProgressBadge week="Weeks 33–48" phase="Projects" color="red" />
                </div>
                
                <div className="grid gap-3">
                  <InteractiveCard 
                    icon={CheckCircle} 
                    title="Task Manager Pro" 
                    description="React + Go • Real-time updates • Team collaboration • File attachments"
                  />
                  <InteractiveCard 
                    icon={MessageCircle} 
                    title="ChatApp Live" 
                    description="WebSocket chat • Private/group messaging • File sharing • Online status"
                  />
                  <InteractiveCard 
                    icon={ShoppingCart} 
                    title="E-commerce Platform" 
                    description="Full store • Payment integration • Admin dashboard • Analytics"
                  />
                  <InteractiveCard 
                    icon={Star} 
                    title="Your Capstone" 
                    description="Your unique idea • Mentor guidance • Portfolio showcase • Demo day presentation"
                  />
                </div>
                
                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-red-600" />
                    <span className="font-medium text-red-800">Phase Outcome</span>
                  </div>
                  <p className="text-sm text-red-700">
                    Graduate with 4 production-ready applications in your portfolio, ready for job interviews.
                  </p>
                </div>
              </PageShell>
            </div>

            {/* Page 8 — Phase 6 */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h2 className="font-display text-lg md:text-2xl text-gradient">Phase 6: Career Ready</h2>
                  </div>
                  <ProgressBadge week="Weeks 49–52" phase="Launch" color="indigo" />
                </div>
                
                <div className="grid gap-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InteractiveCard 
                      icon={Layers} 
                      title="Git Mastery" 
                      description="Advanced workflows, branching strategies, open source contribution"
                    />
                    <InteractiveCard 
                      icon={Files} 
                      title="Professional Resume" 
                      description="ATS-optimized CV, compelling LinkedIn profile, GitHub showcase"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InteractiveCard 
                      icon={MousePointerClick} 
                      title="Freelance Ready" 
                      description="Client communication, project pricing, portfolio presentation"
                    />
                    <InteractiveCard 
                      icon={Award} 
                      title="Interview Success" 
                      description="Mock interviews, coding challenges, salary negotiation"
                    />
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-indigo-600" />
                    <span className="font-medium text-indigo-800">Career Guarantee</span>
                  </div>
                  <p className="text-sm text-indigo-700">
                    100% job placement support until you land your first developer role or start freelancing successfully.
                  </p>
                </div>
              </PageShell>
            </div>

            {/* Page 9 — Fun Sessions */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <h2 className="font-display text-xl md:text-2xl text-gradient">Fun & Interactive</h2>
                </div>
                
                <div className="grid gap-3">
                  <InteractiveCard 
                    icon={BookOpen} 
                    title="Code Quiz Championship" 
                    description="Weekly tournaments • Leaderboards • Prizes for winners"
                  />
                  <InteractiveCard 
                    icon={ShieldCheck} 
                    title="Debug Battle Royale" 
                    description="Team challenges • Time pressure • Real-world scenarios"
                  />
                  <InteractiveCard 
                    icon={Rocket} 
                    title="48-Hour Hackathons" 
                    description="Build apps in teams • Demo presentations • Industry judges"
                  />
                  <InteractiveCard 
                    icon={MessageCircle} 
                    title="Tech Debates" 
                    description="Framework wars • Best practices • Industry trends discussion"
                  />
                </div>
                
                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-5 w-5 text-orange-600" />
                    <span className="font-medium text-orange-800">Community Spirit</span>
                  </div>
                  <p className="text-sm text-orange-700">
                    Join a vibrant community of learners. Make lifelong connections, find coding partners, and celebrate achievements together.
                  </p>
                </div>
              </PageShell>
            </div>

            {/* Page 10 — Career Paths */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="font-display text-xl md:text-2xl text-gradient">Your Future Awaits</h2>
                </div>
                
                <div className="grid gap-4">
                  <div className="career-card-enhanced">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Code2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Frontend Developer</h3>
                        <p className="text-xs text-muted-foreground">$60k - $120k/year</p>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed">Create beautiful, interactive user interfaces. Work with React, Vue, or Angular to bring designs to life.</p>
                  </div>
                  
                  <div className="career-card-enhanced">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-green-100">
                        <Server className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Backend Developer</h3>
                        <p className="text-xs text-muted-foreground">$70k - $140k/year</p>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed">Build robust APIs and server infrastructure. Handle databases, security, and system architecture.</p>
                  </div>
                  
                  <div className="career-card-enhanced">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-purple-100">
                        <Globe className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Full-Stack Developer</h3>
                        <p className="text-xs text-muted-foreground">$80k - $160k/year</p>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed">Master both frontend and backend. Lead projects from concept to deployment across the entire stack.</p>
                  </div>
                  
                  <div className="career-card-enhanced">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-orange-100">
                        <Briefcase className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Freelance Developer</h3>
                        <p className="text-xs text-muted-foreground">$50 - $200/hour</p>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed">Work with global clients on diverse projects. Set your own schedule and rates while building your business.</p>
                  </div>
                </div>
              </PageShell>
            </div>

            {/* Page 11 — Student Gallery */}
            <div className="flip-page">
              <PageShell>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-6 w-6 text-primary" />
                  <h2 className="font-display text-xl md:text-2xl text-gradient">Student Success</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {[g1, g2, g3, g4, g5, g6].map((src, i) => (
                    <figure key={i} className="group relative overflow-hidden rounded-lg border border-border hover-scale cursor-pointer">
                      <img src={src} alt={`Project ${i + 1}`} loading="lazy" className="h-20 md:h-28 w-full object-cover" />
                      <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                        <div className="text-white">
                          <div className="text-xs font-medium">Project {i + 1}</div>
                          <div className="text-xs opacity-80">Student Portfolio</div>
                        </div>
                      </figcaption>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        </div>
                      </div>
                    </figure>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">95% Success Rate</span>
                    </div>
                    <p className="text-xs text-green-700">Students complete the program and find employment within 6 months</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">$75k Average</span>
                    </div>
                    <p className="text-xs text-blue-700">Starting salary for our graduates in their first developer role</p>
                  </div>
                </div>
              </PageShell>
            </div>

            {/* Page 12 — Call to Action */}
            <div className="flip-page">
              <PageShell>
                <div className="h-full w-full flex flex-col items-center justify-center text-center gap-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Rocket className="h-8 w-8 text-primary animate-pulse" />
                      <Star className="h-6 w-6 text-yellow-500 fill-current" />
                    </div>
                    
                    <h2 className="font-display text-xl md:text-3xl text-gradient">
                      Start Your Developer Journey Today!
                    </h2>
                    
                    <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                      Join 5000+ students who transformed their careers. Learn React + Go, build real projects, and get career support with expert mentors.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2 my-4">
                      <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        ✓ 1-Year Program
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        ✓ Job Guarantee
                      </div>
                      <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                        ✓ Live Projects
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button size="lg" variant="hero" className="hover-scale group">
                        <Rocket className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Enroll Now - Start Learning
                      </Button>
                      
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="flex items-center justify-center gap-1">
                          <Globe className="h-3 w-3" />
                          <a href="https://upskill.foundarly.com" className="story-link">upskill.foundarly.com</a>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>Join our growing community</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 pt-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>Money-back guarantee</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3 text-red-500" />
                        <span>Lifetime support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </PageShell>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
