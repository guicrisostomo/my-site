import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiShield,
  FiSmartphone,
  FiSun,
  FiTarget,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";
import {
  SiFlutter,
  SiGit,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import photo from "./assets/img/photoPresentation.png";
import "./portfolio.css";

const content = {
  pt: {
    nav: ["Início", "Diferenciais", "Projetos", "Skills", "Contato"],
    eyebrow: "Desenvolvedor front-end e mobile",
    headline: "Interfaces modernas que comunicam valor e entregam resultado.",
    intro:
      "Sou Guilherme Crisostomo, e construo produtos digitais com foco em clareza, performance e acabamento visual. Do protótipo à implementação, transformo contexto em experiência.",
    ctaPrimary: "Ver projetos",
    ctaSecondary: "Falar comigo",
    status: "Disponível para novos desafios",
    stats: [
      ["4+", "Projetos em destaque"],
      ["2", "Anos atuando com front-end"],
      ["8", "Tecnologias principais"],
    ],
    differentiatorsTitle: "Diferenciais que aparecem no produto final.",
    differentiatorsText:
      "Meu trabalho combina visão de produto, cuidado de UI e execução consistente para evitar soluções frágeis ou genéricas.",
    differentiators: [
      [
        "Produto antes da tela",
        "Penso em fluxo, objetivo e impacto. A interface precisa facilitar a vida de quem usa, não só parecer boa.",
      ],
      [
        "Implementação confiável",
        "Componentização, integração com APIs e atenção a performance, sem sacrificar legibilidade e manutenção.",
      ],
      [
        "Entrega com contexto",
        "Comunicação clara com design e back-end para reduzir retrabalho e acelerar a evolução do produto.",
      ],
    ],
    projectsTitle: "Projetos selecionados",
    projectsText:
      "Uma seleção de trabalhos que mostram interface, lógica e foco em resultado.",
    projects: [
      [
        "Criptografia RSA",
        "Aplicação para explorar criptografia RSA com uma experiência direta e didática.",
        "TypeScript · Segurança · Front-end",
        "https://github.com/guicrisostomo/application-RSAcryptography",
      ],
      [
        "Portfólio pessoal",
        "Evolução deste portfólio, com navegação por âncoras, layout responsivo e foco total no conteúdo.",
        "React · UI · Responsive",
        "https://github.com/guicrisostomo/my-site",
      ],
      [
        "Projetos DIO",
        "Coleção de desafios e aplicações desenvolvidas durante formações práticas em tecnologia.",
        "JavaScript · HTML · CSS",
        "https://github.com/guicrisostomo/Projetos-DIO",
      ],
      [
        "Exercícios acadêmicos",
        "Soluções construídas durante a graduação, com foco em fundamentos, dados e arquitetura.",
        "SQL · Lógica · Software",
        "https://github.com/guicrisostomo/College-exercises",
      ],
    ],
    viewProject: "Abrir projeto",
    skillsTitle: "Skills e stack",
    skillsText:
      "Ferramentas e tecnologias que uso para entregar interfaces, integrações e experiências consistentes.",
    skills: [
      [SiReact, "React"],
      [SiTypescript, "TypeScript"],
      [SiJavascript, "JavaScript"],
      [SiTailwindcss, "Tailwind CSS"],
      [SiRedux, "Redux"],
      [SiFlutter, "Flutter"],
      [SiPostgresql, "PostgreSQL"],
      [SiGit, "Git"],
    ],
    aboutTitle: "Formação e foco",
    aboutText:
      "Tecnólogo em Análise e Desenvolvimento de Sistemas pela FATEC e MBA em Engenharia de Software pela USP/Esalq.",
    contactTitle: "Vamos construir algo sólido.",
    contactText:
      "Se você precisa de uma interface mais clara, rápida e bem estruturada, posso ajudar a sair do conceito para a entrega.",
    email: "Enviar e-mail",
    rights: "Feito com cuidado por Guilherme Crisostomo.",
  },
  en: {
    nav: ["Home", "Differentials", "Projects", "Skills", "Contact"],
    eyebrow: "Front-end and mobile developer",
    headline: "Modern interfaces that communicate value and deliver results.",
    intro:
      "I'm Guilherme Crisostomo, building digital products with a strong focus on clarity, performance and visual polish. From prototype to implementation, I turn context into experience.",
    ctaPrimary: "View projects",
    ctaSecondary: "Get in touch",
    status: "Available for new opportunities",
    stats: [
      ["4+", "Featured projects"],
      ["2", "Years in front-end"],
      ["8", "Core technologies"],
    ],
    differentiatorsTitle: "Differentials that show up in the final product.",
    differentiatorsText:
      "My work blends product thinking, UI care and consistent execution to avoid fragile or generic solutions.",
    differentiators: [
      [
        "Product before screens",
        "I think in terms of flow, objective and impact. The interface must make life easier, not just look nice.",
      ],
      [
        "Reliable implementation",
        "Componentization, API integration and performance awareness without sacrificing readability or maintainability.",
      ],
      [
        "Context-driven delivery",
        "Clear communication with design and back-end teams to reduce rework and speed up product evolution.",
      ],
    ],
    projectsTitle: "Selected projects",
    projectsText:
      "A selection of work that shows interface, logic and focus on outcomes.",
    projects: [
      [
        "RSA Cryptography",
        "An app that explores RSA cryptography through a direct and educational experience.",
        "TypeScript · Security · Front-end",
        "https://github.com/guicrisostomo/application-RSAcryptography",
      ],
      [
        "Personal portfolio",
        "The evolution of this portfolio, with anchor navigation, responsive layout and a content-first approach.",
        "React · UI · Responsive",
        "https://github.com/guicrisostomo/my-site",
      ],
      [
        "DIO projects",
        "A collection of challenges and applications developed during hands-on tech programs.",
        "JavaScript · HTML · CSS",
        "https://github.com/guicrisostomo/Projetos-DIO",
      ],
      [
        "Academic exercises",
        "Solutions built during college, focused on fundamentals, data and architecture.",
        "SQL · Logic · Software",
        "https://github.com/guicrisostomo/College-exercises",
      ],
    ],
    viewProject: "Open project",
    skillsTitle: "Skills and stack",
    skillsText:
      "Tools and technologies I use to deliver interfaces, integrations and consistent experiences.",
    skills: [
      [SiReact, "React"],
      [SiTypescript, "TypeScript"],
      [SiJavascript, "JavaScript"],
      [SiTailwindcss, "Tailwind CSS"],
      [SiRedux, "Redux"],
      [SiFlutter, "Flutter"],
      [SiPostgresql, "PostgreSQL"],
      [SiGit, "Git"],
    ],
    aboutTitle: "Education and focus",
    aboutText:
      "Degree in Systems Analysis and Development from FATEC and an MBA in Software Engineering from USP/Esalq.",
    contactTitle: "Let's build something solid.",
    contactText:
      "If you need a clearer, faster and better structured interface, I can help take it from concept to delivery.",
    email: "Send email",
    rights: "Made with care by Guilherme Crisostomo.",
  },
};

const skillsGroups = [
  {
    title: "Interface",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Entrega",
    items: ["Redux", "Flutter", "Git", "PostgreSQL"],
  },
  {
    title: "Tecnologias",
    items: ["TypeScript", "PostgreSQL"],
  },
];

const statsMeta = [FiTarget, FiUsers, FiLayers];

const differentiatorIcons = [FiTarget, FiCode, FiUsers];

const projectIconSets = [
  [SiTypescript, FiShield],
  [SiReact, FiArrowUpRight],
  [SiJavascript, SiGit],
  [SiPostgresql, FiCode],
];

const navIcons = [FiTarget, FiLayers, FiCode, FiZap, FiMail];
const groupIcons = [FiCode, FiSmartphone, FiDatabase];

export default function Portfolio() {
  const [lang, setLang] = useState("pt");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const copy = content[lang];
  const sectionIds = ["inicio", "diferenciais", "projetos", "skills", "contato"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", theme === "dark" ? "#05070b" : "#eef3fb");
    }
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="portfolio-shell">
      <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          GC<span>.</span>
        </a>

        <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Navegação principal">
          {copy.nav.map((item, index) => {
            const NavIcon = navIcons[index];
            return (
              <a key={item} href={`#${sectionIds[index]}`} onClick={() => setMenuOpen(false)}>
                <NavIcon className="nav-icon" />
                <span>{item}</span>
              </a>
            );
          })}
          <a
            className="nav-contact"
            href="mailto:guilherme.silva9872@gmail.com"
            onClick={() => setMenuOpen(false)}
          >
            {copy.ctaSecondary}
            <FiArrowUpRight />
          </a>
        </nav>

        <div className="top-actions">
          <button
            className="theme"
            type="button"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            aria-label="Alternar tema claro e escuro"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
            <span>{theme === "dark" ? "Claro" : "Escuro"}</span>
          </button>
          <button
            className="lang"
            type="button"
            onClick={() => setLang((current) => (current === "pt" ? "en" : "pt"))}
            aria-label="Alternar idioma"
          >
            <span>{lang === "pt" ? "EN" : "PT"}</span>
          </button>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <section className="hero section" id="inicio">
        <div className="hero-copy-block reveal">
          <p className="eyebrow">
            <span />
            {copy.eyebrow}
          </p>
          <h1>{copy.headline}</h1>
          <p className="hero-copy">{copy.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              {copy.ctaPrimary}
              <FiArrowUpRight />
            </a>
            <a className="button ghost" href="mailto:guilherme.silva9872@gmail.com">
              {copy.ctaSecondary}
            </a>
          </div>
          <div className="hero-stats" aria-label="Resumo de atuação">
            {copy.stats.map(([value, label], index) => {
              const StatIcon = statsMeta[index];

              return (
                <article className="stat-card" key={label}>
                  <div className="stat-icon">
                    <StatIcon />
                  </div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="hero-panel reveal">
          <div className="photo-card">
            <img src={photo} alt="Guilherme Crisostomo" />
          </div>
          <div className="hero-badge">
            <i />
            {copy.status}
          </div>
          <div className="hero-mini-cards">
            <div>
              <span className="mini-icon"><FiLayers /></span>
              <p>Interfaces limpas e consistentes</p>
            </div>
            <div>
              <span className="mini-icon"><FiCode /></span>
              <p>Componentização e manutenção simples</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="section section-light" id="diferenciais">
        <div className="section-heading reveal">
          <p>
            <FiLayers /> Diferenciais
          </p>
          <h2>{copy.differentiatorsTitle}</h2>
          <span>{copy.differentiatorsText}</span>
        </div>

        <div className="feature-grid">
          {copy.differentiators.map(([title, text], index) => {
            const FeatureIcon = differentiatorIcons[index];

            return (
              <article className="feature-card reveal" key={title}>
                <div className="feature-head">
                  <div className="feature-icon">
                    <FeatureIcon />
                  </div>
                  <span>0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-dark" id="projetos">
        <div className="section-heading section-heading-inline reveal">
          <div>
            <p>
              <FiCode /> Projetos
            </p>
            <h2>{copy.projectsTitle}</h2>
            <span>{copy.projectsText}</span>
          </div>
          <a className="inline-link" href="https://github.com/guicrisostomo" target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>
        </div>

        <div className="project-grid">
          {copy.projects.map(([title, description, tags, url], index) => {
            const [PrimaryIcon, SecondaryIcon] = projectIconSets[index];

            return (
              <a className="project-card reveal" href={url} target="_blank" rel="noreferrer" key={title}>
                <div className="project-top">
                  <span className="project-index">0{index + 1}</span>
                  <div className="project-icons">
                    <PrimaryIcon />
                    <SecondaryIcon />
                  </div>
                </div>
                <div className="project-body">
                  <p>{tags}</p>
                  <h3>{title}</h3>
                  <span>{description}</span>
                  <b>
                    {copy.viewProject}
                    <FiArrowUpRight />
                  </b>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="section section-muted" id="skills">
        <div className="section-heading reveal">
          <p>
            <FiZap /> Skills
          </p>
          <h2>{copy.skillsTitle}</h2>
          <span>{copy.skillsText}</span>
        </div>

        <div className="skill-layout">
          <div className="skill-groups">
            {skillsGroups.map((group, index) => {
              const GroupIcon = groupIcons[index];
              return (
              <article className="skill-group reveal" key={group.title}>
                <div className="skill-group-title"><span><GroupIcon /></span><h3>{group.title}</h3></div>
                <div className="skill-pills">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
              );
            })}
          </div>

          <div className="skill-icons reveal" aria-label="Tecnologias principais">
            {copy.skills.map(([Icon, label]) => (
              <div className="skill-chip" key={label}>
                <span className="skill-chip-icon">
                  <Icon />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="education-card reveal">
            <span>{copy.aboutTitle}</span>
            <p>{copy.aboutText}</p>
          </div>
        </div>
      </section>

      <footer className="footer section" id="contato">
        <div className="footer-cta reveal">
          <p>
            <FiMail /> Contato
          </p>
          <h2>{copy.contactTitle}</h2>
          <span>{copy.contactText}</span>
          <a className="button primary" href="mailto:guilherme.silva9872@gmail.com">
            {copy.email}
            <FiArrowUpRight />
          </a>
        </div>

        <div className="footer-bottom">
          <span>{copy.rights}</span>
          <nav>
            <a href="https://github.com/guicrisostomo" target="_blank" rel="noreferrer">
              <FiGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/guilherme-crisostomo-da-silva" target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="mailto:guilherme.silva9872@gmail.com">
              <FiMail /> Email
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
