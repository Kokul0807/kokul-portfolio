/* ============================================================
   All hero copy lives here — A. Kokul prasanth Portfolio
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#method" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Let’s Talk", href: "#contact" },

  headline: "A. Kokul prasanth",
  role: ["Full Stack", "Developer"],
  meta: ["C++", "Python", "Java", "HTML/CSS"],

  notification: {
    name: "A. Kokul prasanth",
    time: "now",
    lead: "Full Stack",
    message: "developer — building clean, efficient, and scalable web solutions.",
  },

  section2: {
    sideLeft: ["Passion", "Growth."],
    sideRight: ["Efficiency.", "Creativity."],
  },

  /* My Works — add projects here (image + metadata per card) */
  works: {
    brand: "A. Kokul prasanth",
    projects: [
      {
        key: "ecommerce",
        name: "E-Commerce",
        img: "assets/e-commerce.jpg",
        w: 498,
        h: 405,
        cat: "Python · HTML · CSS",
        year: "2026",
        accent: "#ff4d4d",
        title: "Full stack scalable shopping application with responsive cart and checkout flow",
      },
      {
        key: "task-engine",
        name: "High-Perf Task Engine",
        img: "assets/employee_record-manager.jpg",
        w: 383,
        h: 363,
        cat: "C++ · Python · Systems",
        year: "2026",
        accent: "#4da3ff",
        title: "Multithreaded task scheduler and asynchronous worker queue processing high-throughput data",
      },
      {
        key: "login-signup",
        name: "Enterprise Auth Gateway",
        img: "assets/login-signup.jpg",
        w: 186,
        h: 362,
        cat: "Java · Security · Microservices",
        year: "2026",
        accent: "#f28b3c",
        title: "Token-based secure authentication system with role-based access control and rate-limiting",
      },
      {
        key: "algorithm-visualizer",
        name: "Algorithm & DSA Studio",
        img: "assets/aircraft.jpg",
        w: 383,
        h: 363,
        cat: "C++ · Java · Web Canvas",
        year: "2026",
        accent: "#a8e063",
        title: "Interactive algorithm visualizer showing sorting, graph traversals, and computational geometry",
      },
    ],
  },

  /* ---- BIG ROBOT section (Spline 3D interactive robot) ---- */
  bigRobot: {
    labels: { left: "Full Stack Developer", right: "C++ · Python · Java · Web" },
    eyebrow: "( 05 · The Engineer )",
    titleLines: ["I learn by building.", "I grow by creating."],
    description: "I'm learning by building projects, solving problems, and understanding how code works.",
    hint: "Scroll to move through the engineering concepts.",

    techIdeas: [
      {
        no: "01",
        title: "Systems & Algorithms (C++)",
        description: "Mastering pointers, memory safety, STL, and concurrent data structures for low-latency computation.",
        tags: ["C++", "Data Structures", "Algorithms", "Multithreading", "Memory"],
      },
      {
        no: "02",
        title: "Backend & Microservices (Python & Java)",
        description: "Designing robust server-side APIs, database architectures, and distributed services.",
        tags: ["Python", "Java", "REST APIs", "OOP", "Microservices", "Security"],
      },
      {
        no: "03",
        title: "Web Engineering (HTML & CSS)",
        description: "Crafting seamless user experiences with semantic HTML5, modern CSS3, and fluid responsiveness.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      },
    ],
  },

  /* ---- EDITORIAL / SKILLS section ---- */
  editorial: {
    eyebrow: "( 06 · The Skills )",
    statement: ["Learning through code.", "Building through curiosity."],
    note: "I am a passionate developer dedicated to building efficient and scalable web solutions.",
    skills: {
      title: "I Work With",
      groups: [
        { name: "Core Languages", items: ["C++", "Python", "Java"] },
        { name: "Web & Frontend", items: ["HTML5", "CSS3", "JavaScript", "Responsive UI"] },
        { name: "Backend & Systems", items: ["REST APIs", "OOP", "Data Structures", "Multithreading"] },
        { name: "Tools & Workflow", items: ["Git", "GitHub", "Linux", "VS Code", "Vite"] },
      ],
    },
    mindset: {
      title: "Learn → Build → Practice → Improve",
      lines: [
        "I learn by building.",
        "I build by creating scalable projects.",
        "I improve by understanding system performance.",
        "And I keep evolving with every architecture.",
      ],
    },
    exploring: {
      title: "Currently Specializing In",
      items: [
        "Crafting seamless user experiences",
        "Robust server-side application architecture",
        "High-performance C++ computing",
        "Scalable Python & Java microservices",
        "Modern semantic HTML5 & responsive CSS3",
      ],
    },
    ending: {
      lines: ["Still learning.", "Still building.", "Still curious."],
      note: "Code is poetry that breathes life into digital architecture.",
    },
  },

  /* ---- SMALL ROBOT section ---- */
  smallRobot: {
    eyebrow: "( 06 · Keep Learning )",
    titleLines: ["Always learning", "what comes next."],
    description: "I keep exploring, building projects — improving my skills.",
    note: "Move your cursor · it follows",
  },

  /* ---- FOOTER ---- */
  footer: {
    eyebrow: "( 07 · Contact )",
    headline: ["Let's build", "something good."],
    line: "Open to internships, full-time opportunities, and interesting projects.",
    email: "kokulanand7@gmail.com",
    emailLabel: "Say hello",
    columns: [
      {
        title: "Sections",
        items: [
          { label: "Hero", href: "#top" },
          { label: "Creative", href: "#work" },
          { label: "About", href: "#section-03" },
          { label: "Selected Works", href: "#projects" },
          { label: "The Mind", href: "#think" },
        ],
      },
      {
        title: "Method",
        items: [
          { label: "How I think", href: "#method" },
          { label: "What I work with", href: "#method" },
          { label: "Currently exploring", href: "#method" },
          { label: "Still curious", href: "#curious" },
        ],
      },
    ],
    social: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
    legal: "© 2026 A. Kokul prasanth",
    note: "Code is poetry that breathes life into digital architecture.",
    backToTop: "Back to top",
  },

  /* About Me chapter */
  about: {
    boxes: {
      who: { title: "Who I Am", sub: "A. Kokul prasanth — Full Stack Developer" },
      what: { title: "What I Do", sub: "C++ · Python · Java · HTML · CSS" },
      think: { title: "How I Think", sub: "Code is poetry that breathes life into digital architecture." },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "A. Kokul prasanth",
        text: "I am a passionate developer dedicated to building efficient and scalable web solutions. Strong foundation in C++, Python, Java, and modern web interfaces.",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "Code Into Solutions.",
        text: "I specialize in crafting seamless user experiences and robust server-side applications. Built with passion, driven by creativity.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Idea to Impact",
        text: "Code is poetry that breathes life into digital architecture. Learn · Build · Experiment · Improve.",
      },
    },
  },
};
