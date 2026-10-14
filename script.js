/* =========================================================
   script.js
   ---------------------------------------------------------
   ALL of your personal information lives inside the
   `myInfo` object below. Change the values there and the
   whole page updates automatically. No HTML editing needed.
   ========================================================= */


const myInfo = {
  /* ---------- BASIC IDENTITY ---------- */
  name: "Swapnil Santosh Akhade",
  initials: "SA",
  avatarImage: "profile-pic.jpg", // Add your photo path when ready
  eyebrow: "Hello, I'm",
  role: "Software Developer | AI/ML Enthusiast | Game Developer",
  lead:
    "I'm a B.Tech AI & ML student at MITAOE who enjoys building practical software, intelligent applications, and interactive games. I work with Python, C++, Unity, and web technologies to turn ideas into working projects.",

  /* ---------- QUICK STATS ---------- */
  stats: [
    { value: "6+", label: "Projects & Prototypes" },
    { value: "AI/ML", label: "Academic Focus" },
    { value: "3+", label: "Development Areas" }
  ],

  /* ---------- ABOUT ---------- */
  about: [
    "I'm pursuing a B.Tech in Artificial Intelligence and Machine Learning at MIT Academy of Engineering (MITAOE), Alandi. I enjoy exploring software development, artificial intelligence, and game development while building projects that help me apply concepts beyond the classroom.",
    "My experience includes developing interactive games with Unity and C#, creating mathematical visualization tools, and working on IoT-based solutions with mobile and backend components. I'm continuously improving my programming, problem-solving, and software engineering skills while exploring new technologies."
  ],

  /* ---------- SKILLS ---------- */
  skills: [
    {
      name: "Python",
      desc: "Programming, data processing, AI/ML experiments, and automation.",
      level: 75
    },
    {
      name: "C / C++",
      desc: "Programming fundamentals, problem-solving, and application development.",
      level: 75
    },
    {
      name: "Unity & C#",
      desc: "Gameplay systems, UI integration, game logic, and save systems.",
      level: 75
    },
    {
      name: "Godot & GDScript",
      desc: "Game mechanics, scene systems, and interactive game development.",
      level: 70
    },
    {
      name: "HTML & CSS",
      desc: "Semantic markup, responsive layouts, and portfolio development.",
      level: 70
    },
    {
      name: "Git & GitHub",
      desc: "Version control, branching, commits, pull requests, and collaboration.",
      level: 75
    },
    {
      name: "AI & Machine Learning",
      desc: "Machine learning fundamentals, model experiments, and computer vision.",
      level: 60
    },
    {
      name: "Backend Development",
      desc: "Python APIs, FastAPI, database integration, and application architecture.",
      level: 60
    }
  ],

  /* ---------- PROJECTS ---------- */
  projects: [
    {
      title: "MathToolz",
      desc:
        "A mathematical learning and visualization website featuring interactive tools that help users understand mathematical concepts.",
      tags: ["Python", "Web Development", "Mathematics"],
      demo: "#",
      code: "#"
    },
    {
      title: "AeroLink",
      desc:
        "An IoT-based SOS communication system using ESP32 and LoRa, with a Raspberry Pi base station, Flutter mobile app, maps, and a FastAPI backend.",
      tags: ["ESP32", "LoRa", "Flutter", "FastAPI", "MongoDB"],
      demo: "#",
      code: "#"
    },
    {
      title: "Dungeon Crawler",
      desc:
        "A 3D game featuring procedural level generation, player and enemy systems, collectible keys, exit detection, HUD, and pause functionality.",
      tags: ["Godot", "GDScript", "Game Development"],
      demo: "#",
      code: "#"
    },
    {
      title: "Unity Ludo Game",
      desc:
        "Contributed to game systems including daily challenges, player progression, rewards, persistent save data, and a structured How to Play rules system.",
      tags: ["Unity", "C#", "Game UI", "Save Systems"],
      demo: "#",
      code: "#"
    },
    {
      title: "Housing Society Management",
      desc:
        "A software project focused on housing society management, including backend functionality, database integration, and dashboard development.",
      tags: ["Python", "Database", "Backend Development"],
      demo: "#",
      code: "#"
    }
  ],

  /* ---------- CURRENTLY LEARNING ---------- */
  currentlyLearning: [
    "Advanced AI and Machine Learning",
    "Full-Stack Development",
    "Software Architecture and Clean Code",
    "Game Systems and Interactive UI"
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    lead:
      "I'm interested in collaborating on software, AI/ML, and game development projects. Feel free to reach out to discuss ideas, projects, or opportunities.",
    email: "swapnilakhade824@gmail.com",
    phone: "7055005003",
    location: "Pune, Maharashtra, India"
  },

  /* ---------- SOCIAL LINKS ---------- */
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/SwapnilAkhade824"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/swapnil-akhade-8bb8b132b"
    }
  ],

  /* ---------- FOOTER LINK ---------- */
  footerLink: {
    label: "GitHub",
    url: "https://github.com/SwapnilAkhade824"
  }
};


/* =========================================================
   RENDERING LOGIC — you normally don't need to edit below
   ========================================================= */

const $ = (id) => document.getElementById(id);

/* ---- Page title & logo ---- */
document.title = `${myInfo.name}`;

const nameParts = myInfo.name.split(" ");
$("logo").innerHTML = `${nameParts[0]} <span>${nameParts.slice(1).join(" ") || "."}</span>`;

/* ---- Hero ---- */
$("eyebrow").textContent  = myInfo.eyebrow;
$("heroName").textContent = myInfo.name;
$("heroRole").textContent = myInfo.role;
$("heroLead").textContent = myInfo.lead;

/* ---- Avatar (image if provided, otherwise initials) ---- */
const avatarEl = $("avatar");
if (myInfo.avatarImage) {
  avatarEl.textContent = "";
  avatarEl.style.backgroundImage = `url("${myInfo.avatarImage}")`;
} else {
  avatarEl.textContent = myInfo.initials;
}

/* ---- Stats ---- */
$("statsList").innerHTML = myInfo.stats
  .map(s => `<li><strong>${s.value}</strong><span>${s.label}</span></li>`)
  .join("");

/* ---- About ---- */
$("aboutText").innerHTML = myInfo.about
  .map(p => `<p>${p}</p>`)
  .join("");

/* ---- Skills ---- */
$("skillsGrid").innerHTML = myInfo.skills
  .map(s => `
    <article class="skill-card">
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="bar"><span style="width:${s.level}%"></span></div>
      <small>${s.level}%</small>
    </article>
  `)
  .join("");

/* ---- Projects ---- */
$("projectsGrid").innerHTML = myInfo.projects
  .map((p, i) => `
    <article class="project-card">
      <div class="project-thumb">Project ${String(i + 1).padStart(2, "0")}</div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <ul class="tags">
          ${p.tags.map(t => `<li class="tag">${t}</li>`).join("")}
        </ul>
      </div>
    </article>
  `)
  .join("");

/* ---- Contact info ---- */
$("contactLead").textContent = myInfo.contact.lead;

$("contactList").innerHTML = `
  <li><strong>Email:</strong> <a href="mailto:${myInfo.contact.email}">${myInfo.contact.email}</a></li>
  <li><strong>Phone:</strong> <a href="tel:${myInfo.contact.phone.replace(/\s/g, "")}">${myInfo.contact.phone}</a></li>
  <li><strong>Location:</strong> ${myInfo.contact.location}</li>
`;

$("socials").innerHTML = myInfo.socials
  .map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
  .join("");

/* ---- Footer ---- */
$("footerCopy").textContent = `© ${new Date().getFullYear()} ${myInfo.name}. All rights reserved.`;

const footerLink = $("footerLink");
footerLink.textContent = myInfo.footerLink.label;
footerLink.href = myInfo.footerLink.url;

/* ---- Contact form (demo behaviour) ---- */
$("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name    = $("name").value.trim();
  const email   = $("email").value.trim();
  const message = $("message").value.trim();
  const msgEl   = $("formMsg");

  if (!name || !email || !message) {
    msgEl.style.color = "#dc2626";
    msgEl.textContent = "Please fill in all the fields.";
    return;
  }

  msgEl.style.color = "#059669";
  msgEl.textContent = `Thanks, ${name}! Your message has been received.`;
  this.reset();
});