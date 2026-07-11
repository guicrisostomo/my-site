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
  SiCss3,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { supabase } from "./assets/database/supabase/client";
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
    projects: [],
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

const fallbackProjects = {
  pt: content.pt.projects.map(([title, description, tags, url]) => ({
    title,
    description,
    tags,
    url,
    skills: [],
    image: "",
  })),
  en: content.en.projects.map(([title, description, tags, url]) => ({
    title,
    description,
    tags,
    url,
    skills: [],
    image: "",
  })),
};

const projectFields = {
  title: ["nomePT", "nomeEN", "titlePT", "titleEN", "name", "title"],
  description: ["descricaoPT", "descricaoEN", "descriptionPT", "descriptionEN", "description", "summary"],
  tags: ["tagsPT", "tagsEN", "tags", "stack"],
  url: ["link", "url", "href"],
  image: ["linkImage", "image", "imageUrl", "thumbnail", "cover", "coverUrl", "banner"],
  skills: ["skills", "techs", "technologies"],
};

const projectIconRegistry = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  redux: SiRedux,
  flutter: SiFlutter,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  git: SiGit,
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss3,
  css3: SiCss3,
  code: FiCode,
  security: FiShield,
  shield: FiShield,
  mobile: FiSmartphone,
  database: FiDatabase,
  layers: FiLayers,
  zap: FiZap,
  arrow: FiArrowUpRight,
};

function getLocalizedField(record, fields, lang) {
  const preferredSuffix = lang === "pt" ? "PT" : "EN";
  const fallbackSuffix = lang === "pt" ? "EN" : "PT";
  const recordKeys = Object.keys(record);
  const localizedFields = fields.filter((field) => /(?:PT|EN)$/.test(field));
  const neutralFields = fields.filter((field) => !/(?:PT|EN)$/.test(field));
  const candidates = [
    ...localizedFields.map((field) => field.replace(/(?:PT|EN)$/, preferredSuffix)),
    ...localizedFields.map((field) => field.replace(/(?:PT|EN)$/, fallbackSuffix)),
    ...neutralFields,
  ];

  for (const field of [...new Set(candidates)]) {
    const actualKey = recordKeys.find(
      (key) => key.toLowerCase() === field.toLowerCase()
    );
    const value = actualKey ? record[actualKey] : undefined;
    if (value) {
      return value;
    }
  }

  return "";
}

function normalizeProject(record, lang) {
  return {
    id: record.id,
    title: getLocalizedField(record, projectFields.title, lang),
    description: getLocalizedField(record, projectFields.description, lang),
    tags: getLocalizedField(record, projectFields.tags, lang),
    url: getLocalizedField(record, projectFields.url, lang) || "#",
    image: getLocalizedField(record, projectFields.image, lang),
    skills: parseProjectSkills(record.skills || record.techs || record.technologies),
  };
}

function parseProjectSkills(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();

    if (!trimmed) {
      return [];
    }

    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      // Fall through to delimiter-based parsing.
    }

    return trimmed
      .split(/[,|·;/]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function resolveProjectIcons(record, index) {
  const rawSkills = Array.isArray(record.skills) ? record.skills : [];
  const normalizedIcons = rawSkills
    .map((entry) => String(entry).trim().toLowerCase())
    .map((entry) => projectIconRegistry[entry])
    .filter(Boolean);

  if (normalizedIcons.length > 0) {
    return normalizedIcons;
  }

  return projectIconSets[index] || [FiCode, FiArrowUpRight];
}

function getProjectSkillUrls(record) {
  const rawSkills = Array.isArray(record.skills) ? record.skills : parseProjectSkills(record.skills);

  return rawSkills.filter((entry) => typeof entry === "string" && entry.length > 0);
}

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
  const [projectRecords, setProjectRecords] = useState([]);
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

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [projectRecords]);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      if (!supabase) {
        return;
      }

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("order", { ascending: true });

      if (!isMounted) {
        return;
      }

      if (error) {
        console.error("Erro ao carregar projetos do Supabase:", error.message);
        return;
      }

      setProjectRecords(Array.isArray(data) ? data : []);
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const projectsToRender = projectRecords.length
    ? projectRecords.map((record) => normalizeProject(record, lang))
    : fallbackProjects[lang];

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
        <div className="aurora aurora-one" aria-hidden="true" />
        <div className="aurora aurora-two" aria-hidden="true" />
        <div className="spark spark-one" aria-hidden="true">✦</div>
        <div className="spark spark-two" aria-hidden="true">✦</div>
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
          <div className="work-panel-head">
            <img className="profile-avatar" src={photo} alt="Guilherme Crisostomo" />
            <div><strong>Guilherme Crisostomo</strong><span>{copy.eyebrow}</span></div>
            <div className="hero-badge"><i />{copy.status}</div>
          </div>
          <div className="work-showcase" aria-label="Principais capacidades">
            <div className="showcase-orbit"><SiReact /><SiTypescript /><SiTailwindcss /></div>
            <span>Product thinking</span>
            <strong>Design, código<br />e produto.</strong>
            <p>Interfaces que conectam objetivos de negócio a experiências claras.</p>
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

      <div className="tech-marquee" aria-label="Tecnologias utilizadas">
        <div><span>React</span><i>✦</i><span>TypeScript</span><i>✦</i><span>UI Design</span><i>✦</i><span>APIs</span><i>✦</i><span>Mobile</span><i>✦</i><span>React</span><i>✦</i><span>TypeScript</span><i>✦</i><span>UI Design</span><i>✦</i><span>APIs</span><i>✦</i><span>Mobile</span></div>
      </div>

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
          {projectsToRender.map((project, index) => {
            const { title, description, tags, url, image } = project;
            const projectIcons = resolveProjectIcons(project, index);
            const projectSkillUrls = getProjectSkillUrls(project);

            return (
              <a className="project-card reveal" href={url} target="_blank" rel="noreferrer" key={project.id || url || index}>
                <div className={image ? "project-top project-top--media" : "project-top"}>
                  {image ? <img className="project-cover" src={image} alt={title} loading="lazy" /> : null}
                  <span className="project-index">0{index + 1}</span>
                  <div className="project-icons">
                    {projectIcons.map((Icon, iconIndex) => (
                      <Icon key={`${title}-${iconIndex}`} />
                    ))}
                  </div>
                </div>
                <div className="project-body">
                  <p>{tags}</p>
                  <h3>{title}</h3>
                  <span>{description}</span>
                  {projectSkillUrls.length > 0 ? (
                    <div className="project-skill-row" aria-label={`Tecnologias do projeto ${title}`}>
                      {projectSkillUrls.map((skillUrl, skillIndex) => (
                        <span className="project-skill-badge" key={`${title}-${skillIndex}`}>
                          <img src={skillUrl} alt="" loading="lazy" />
                        </span>
                      ))}
                    </div>
                  ) : null}
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
