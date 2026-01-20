import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

const projects = [
  {
    title: "Photo System Admin",
    desc: "Admin/Photographer workflow for booking + management.",
    tech: ["Angular.js", "Bootstrap", "Laravel/API"],
    link: "https://github.com/yourname/project1",
  },
  {
    title: "Photo System Client",
    desc: "Client workflow for booking + Ordering",
    tech: ["Javascript/Jquery", "Bootstrap", "Laravel/API"],
    link: "https://github.com/yourname/project1",
  },
  {
    title: "Photographer System",
    desc: "Photograper workflow for booking",
    tech: ["Next.js", "Bootstrap", "Laravel/API"],
    link: "https://github.com/yourname/project1",
  },
  {
    title: "PRO-PY Admin System",
    desc: "Photograper workflow for booking",
    tech: ["Nuxt.js", "Bootstrap", "Laravel/API"],
    link: "https://github.com/yourname/project1",
  },
  {
    title: "PRO-PY Client System",
    desc: "Photograper workflow for booking",
    tech: ["Nuxt.js", "Bootstrap", "Laravel/API"],
    link: "https://github.com/yourname/project1",
  },
  {
    title: "FloorPlan Website",
    desc: "Floor plan builder and admin system for managing layouts.",
    tech: ["Nuxt.js", "Bootstrap","Laravel/API"],
    link: "https://github.com/yourname/project2",
  },
];

const skills = ["Next.js", "React","Nuxt.js", "Angular", "Tailwind/Bootstrap", "Javascript", "REST API/Laravel", "MySQL"];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      
      <Navbar />

      {/* Hero */}
      <section className="py-16">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm text-white/60">Front-End Developer</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
              Hi, I’m Pon Yam I build clean, fast web apps.
            </h1>
            <p className="mt-4 max-w-2xl text-white/70">
              I create modern websites and dashboards using Next.js, Tailwind, and APIs.
              I focus on performance, clean UI, and scalable code.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="py-12">
        <Container>
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            I’m a front-end developer who enjoys turning ideas into real products.
            I’ve worked on client/admin systems , floor plan tools, and data crawling projects.
          </p>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <a className="text-sm text-white/60 hover:text-white" href="https://github.com/yourname">
              GitHub →
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12">
        <Container>
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-white/70">
              Email me and I’ll reply as soon as possible.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:youremail@example.com"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                ponyam2020@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/yourname"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/5"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Pon. Built with Next.js + Tailwind.
          </p>
        </Container>
      </section>
    </main>
  );
}
