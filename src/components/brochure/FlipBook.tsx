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
  FileStack,
  MessageCircle,
  ShoppingCart,
  Briefcase,
} from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h3 className="text-lg font-semibold text-foreground/90">{title}</h3>
    <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const PageShell = ({ children, withPadding = true }: { children: React.ReactNode; withPadding?: boolean }) => (
  <article className={`h-full w-full bg-card text-card-foreground ${withPadding ? "p-6 md:p-8" : ""}`}>
    {children}
  </article>
);

export default function FlipBook() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!containerRef.current) return;

    const width = isMobile ? 360 : 560;
    const height = isMobile ? 520 : 740;

    const pf = new PageFlip(containerRef.current, {
      width,
      height,
      size: "stretch",
      maxShadowOpacity: 0.35,
      showCover: true,
      mobileScrollSupport: true,
      usePortrait: isMobile,
      disableFlipByClick: false,
    });

    pf.loadFromHTML(containerRef.current.querySelectorAll(".flip-page"));

    return () => {
      pf.destroy?.();
    };
  }, [isMobile]);

  return (
    <main className="min-h-screen py-8 md:py-12 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div ref={containerRef} className="flipbook">
            {/* Page 1 — Cover (showCover true will render this as single) */}
            <div className="flip-page">
              <PageShell withPadding={false}>
                <div className="relative h-full w-full overflow-hidden rounded-md">
                  <img src={heroImage} alt="Students coding with futuristic UI overlays" loading="eager" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-hero opacity-80 mix-blend-multiply" />
                  <div className="relative h-full w-full p-6 md:p-10 flex flex-col justify-between">
                    <header className="flex items-center justify-between text-primary-foreground">
                      <span className="text-xs md:text-sm tracking-widest uppercase opacity-90">upskill.foundarly.com</span>
                      <span className="text-xs md:text-sm opacity-90">1-Year Program</span>
                    </header>
                    <div className="max-w-xl">
                      <h1 className="font-display text-3xl md:text-5xl leading-tight text-primary-foreground animate-fade-in">
                        Become a Full-Stack Web Developer in 1 Year — Learn by Doing
                      </h1>
                      <p className="mt-4 text-sm md:text-base text-primary-foreground/90">
                        3 Classes + 3 Practice Sessions Every Week • Backend with Go • Live Projects • Career Prep
                      </p>
                      <div className="mt-6">
                        <Button size="lg" variant="hero" className="hover-scale">
                          Start Your Journey
                        </Button>
                      </div>
                    </div>
                    <footer className="text-primary-foreground/90 text-xs md:text-sm flex items-center gap-2">
                      <Rocket className="h-4 w-4" />
                      Learn. Build. Launch.
                    </footer>
                  </div>
                </div>
              </PageShell>
            </div>

            {/* Page 2 — About the Course */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">About the Course</h2>
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <Section title="Beginner-friendly, gradual learning">
                    We start from absolute basics and build up to professional projects with a clear, supportive learning path.
                  </Section>
                  <Section title="Interactive sessions">
                    Quizzes, games, and hackathons keep learning lively and collaborative.
                  </Section>
                </div>
                <Section title="Weekly schedule">
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-3 mt-2">
                    <div className="badge-tile"><Calendar className="mr-2 h-4 w-4" />Mon Class</div>
                    <div className="badge-tile"><Calendar className="mr-2 h-4 w-4" />Tue Practice</div>
                    <div className="badge-tile"><Calendar className="mr-2 h-4 w-4" />Wed Class</div>
                    <div className="badge-tile"><Calendar className="mr-2 h-4 w-4" />Thu Practice</div>
                    <div className="badge-tile"><Calendar className="mr-2 h-4 w-4" />Fri Class</div>
                    <div className="badge-tile"><Calendar className="mr-2 h-4 w-4" />Sat Practice</div>
                    <div className="badge-tile muted">Sun Holiday</div>
                  </div>
                </Section>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="icon-card"><Code2 />Hands-on</div>
                  <div className="icon-card"><Users />Community</div>
                  <div className="icon-card"><BookOpen />Mentorship</div>
                  <div className="icon-card"><Rocket />Career-focused</div>
                </div>
              </PageShell>
            </div>

            {/* Page 3 — Phase 1 */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">Phase 1: Foundation (Weeks 1–6)</h2>
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <Section title="HTML Basics">
                    Structure, headings, paragraphs, links, images, lists, tables, forms.
                  </Section>
                  <Section title="HTML Advanced">
                    Semantic tags, meta tags, accessibility, SEO basics, multimedia embeds.
                  </Section>
                  <Section title="CSS Basics">
                    Selectors, colors, typography, spacing, box model.
                  </Section>
                  <Section title="CSS Layouts">
                    Flexbox deep dive, CSS Grid, positioning, responsive design basics.
                  </Section>
                </div>
                <div className="mt-4 p-4 rounded-md bg-muted/50">
                  <span className="font-medium">Mini Project:</span> Static Personal Portfolio Website
                </div>
              </PageShell>
            </div>

            {/* Page 4 — Phase 2 */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">Phase 2: JavaScript Mastery (Weeks 7–14)</h2>
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <Section title="JS Basics">Variables, data types, operators, conditionals.</Section>
                  <Section title="Loops & Functions">for/while/do-while, arrow functions, parameters & returns.</Section>
                  <Section title="Arrays & Objects">map/filter/reduce, object methods.</Section>
                  <Section title="DOM Manipulation">Selecting elements, events, creating/modifying HTML.</Section>
                  <Section title="Advanced JS">ES6+, destructuring, spread/rest, modules.</Section>
                  <Section title="APIs & Fetch">JSON, fetch API, async/await, error handling.</Section>
                  <Section title="Web Storage">LocalStorage, SessionStorage.</Section>
                </div>
                <div className="mt-4 p-4 rounded-md bg-muted/50">
                  <span className="font-medium">Mini Project:</span> Weather App with API Integration
                </div>
              </PageShell>
            </div>

            {/* Page 5 — Phase 3 */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">Phase 3: Frontend Frameworks (Weeks 15–22)</h2>
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <Section title="React Basics">Components, JSX, props, state.</Section>
                  <Section title="Advanced React">Events, conditional rendering, lists & keys.</Section>
                  <Section title="React Hooks">useState, useEffect, custom hooks, Context API.</Section>
                  <Section title="Routing">React Router, dynamic routes, protected routes.</Section>
                  <Section title="State Management">Redux basics, Redux Toolkit.</Section>
                  <Section title="UI Design">Tailwind CSS basics, responsive design.</Section>
                </div>
                <div className="mt-4 p-4 rounded-md bg-muted/50">
                  <span className="font-medium">Mini Project:</span> E-commerce Product Catalog
                </div>
              </PageShell>
            </div>

            {/* Page 6 — Phase 4 */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">Phase 4: Backend with Go (Weeks 23–32)</h2>
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <Section title="Go Basics">Setup, variables, data types, control structures, functions.</Section>
                  <Section title="Advanced Go">Structs, methods, interfaces, pointers, packages.</Section>
                  <Section title="Building REST APIs">net/http, routing, JSON encoding/decoding.</Section>
                  <Section title="Middleware">Logging, authentication, custom middleware.</Section>
                  <Section title="Database Integration">MongoDB/PostgreSQL CRUD, ORM vs native queries.</Section>
                  <Section title="Auth & Security">JWT, password hashing, role-based access.</Section>
                  <Section title="File Handling">Uploads, static files, cloud integration.</Section>
                  <Section title="Deployment">Builds, Docker, cloud deployment.</Section>
                </div>
                <div className="mt-4 p-4 rounded-md bg-muted/50">
                  <span className="font-medium">Mini Project:</span> Blog API with Auth
                </div>
              </PageShell>
            </div>

            {/* Page 7 — Phase 5 */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">Phase 5: Full-Stack Projects (Weeks 33–48)</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="list-item"><Box className="icon" />Task Manager App (React + Go)</li>
                  <li className="list-item"><MessageCircle className="icon" />Real-Time Chat App (React + Go WebSocket)</li>
                  <li className="list-item"><ShoppingCart className="icon" />E-commerce Store (React + Go)</li>
                  <li className="list-item"><Rocket className="icon" />Capstone Project (student’s own idea)</li>
                </ul>
              </PageShell>
            </div>

            {/* Page 8 — Phase 6 */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">Phase 6: Career & Extra Skills (Weeks 49–52)</h2>
                <ul className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <li className="list-item"><Layers className="icon" />Git & GitHub Advanced</li>
                  <li className="list-item"><Briefcase className="icon" />Resume & LinkedIn Building</li>
                  <li className="list-item"><MousePointerClick className="icon" />Freelancing Basics & Portfolio</li>
                  <li className="list-item"><Cpu className="icon" />Mock Interviews & Demo Day</li>
                </ul>
              </PageShell>
            </div>

            {/* Page 9 — Fun & Interaction */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">Fun & Interaction Sessions</h2>
                <ul className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <li className="list-item"><BookOpen className="icon" />Coding Quiz Show</li>
                  <li className="list-item"><ShieldCheck className="icon" />Debugging Battles</li>
                  <li className="list-item"><Code2 className="icon" />Build-a-Feature Race</li>
                  <li className="list-item"><Globe className="icon" />Tech Debates</li>
                  <li className="list-item"><Rocket className="icon" />Hackathon Weekends</li>
                </ul>
              </PageShell>
            </div>

            {/* Page 10 — Career Paths */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">Career Paths</h2>
                <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
                  <div className="career-card"><Code2 />Frontend Developer<p>Build delightful user interfaces.</p></div>
                  <div className="career-card"><Server />Backend Developer<p>Design robust APIs and services.</p></div>
                  <div className="career-card"><Globe />Full-Stack Developer<p>Ship end-to-end features.</p></div>
                  <div className="career-card"><Briefcase />Freelancer<p>Work with clients worldwide.</p></div>
                </div>
              </PageShell>
            </div>

            {/* Page 11 — Student Projects Gallery */}
            <div className="flip-page">
              <PageShell>
                <h2 className="font-display text-2xl md:text-3xl text-gradient">Student Projects Gallery</h2>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[g1, g2, g3, g4, g5, g6].map((src, i) => (
                    <figure key={i} className="group relative overflow-hidden rounded-md border border-border hover-scale">
                      <img src={src} alt={`Student project ${i + 1}`} loading="lazy" className="h-28 md:h-36 w-full object-cover" />
                      <figcaption className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid place-items-end p-2 text-xs text-foreground">Project {i + 1}</figcaption>
                    </figure>
                  ))}
                </div>
              </PageShell>
            </div>

            {/* Page 12 — Call to Action */}
            <div className="flip-page">
              <PageShell>
                <div className="h-full w-full flex flex-col items-center justify-center text-center gap-4">
                  <h2 className="font-display text-2xl md:text-4xl text-gradient">Start Your Developer Journey Today!</h2>
                  <p className="max-w-xl text-muted-foreground">Enroll now to learn by doing: React + Go, real projects, and career prep with mentors.</p>
                  <a href="https://upskill.foundarly.com" aria-label="Enrollment link" className="text-sm text-muted-foreground underline underline-offset-4">upskill.foundarly.com</a>
                  <Button size="lg" variant="hero" className="hover-scale">Join Now</Button>
                </div>
              </PageShell>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Styles for utility components (scoped to this file via Tailwind classes) intentionally rely on design tokens
// to inherit theme changes.
