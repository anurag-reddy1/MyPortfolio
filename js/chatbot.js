// Response patterns: each entry has keywords to match and a reply
const RESPONSES = [
  {
    keywords: ["hello", "hi", "hey", "howdy", "sup"],
    reply:
      "Hey there! 👋 I'm Anurag — a Software Developer turned CS grad student. Ask me about my skills, experience, projects, or hobbies!",
  },
  {
    keywords: ["who", "about", "yourself", "introduce", "bio"],
    reply:
      "I'm Anurag Reddy Pottigari — a professional with 7+ years of experience across companies like Dayforce, Chubb, ADP, TCS, and IBM. Currently pursuing my MS in Computer Science at Northeastern University in Boston.",
  },
  {
    keywords: ["skill", "tech", "stack", "language", "framework"],
    reply:
      "My core stack:\n\n🔹 Frontend: React, TypeScript, JavaScript, HTML5, CSS3\n🔹 Backend: Node.js, Python, MS SQL\n🔹 DevOps: Git, CI/CD, Docker, AWS/Azure\n🔹 Testing: Cypress, Playwright\n\nI'm strongest in React and TypeScript — I built an entire design system with them!",
  },
  {
    keywords: ["experience", "work", "job", "career", "company", "companies"],
    reply:
      "Here's my journey:\n\n💼 Software Developer II — Dayforce, Toronto (2022–2025)\nBuilt React Design System components used by feature teams.\n\n💼 System Analyst — Chubb Fire & Security, Toronto (2020–2021)\nLed enhancement projects, reduced 90% manual effort with macros.\n\n💼 Senior SAP HCM Consultant — ADP, India (2016–2019)\nSAP HCM support & upgrade projects for HP, Delphi, UTC.\n\n💼 Associate Software Engineer — TCS (2015–2016)\n💼 Software Developer Intern — IBM (2014)",
  },
  {
    keywords: ["dayforce", "ceridian", "design system"],
    reply:
      "At Dayforce in Toronto (2022–2025), I built and architected components for a new Design System (React Component Library) used by feature teams. I wrote accessible code (WCAG AA), contributed to architectural design for scalability, and developed internal tools to accelerate development time. 🚀",
  },
  {
    keywords: ["ibm"],
    reply:
      "I had two stints at IBM!\n\n💼 Software Developer Intern — IBM Pune (June–Dec 2014)\nAutomated marketing app installations on Cloud Platform using Python.\n\n💼 Academic Initiative Team — IBM Hyderabad (Jan–May 2014)\nTrained students on mobile app development using IBM Worklight.",
  },
  {
    keywords: ["adp"],
    reply:
      "At ADP in Hyderabad (2016–2019), I worked as a Senior SAP HCM Functional Consultant. I handled support and upgrade projects involving business process analysis, configuration, customization, and production support. I was the technical point of contact for US and Canada spin-off projects of HP, Delphi Technologies, and UTC.",
  },
  {
    keywords: ["chubb"],
    reply:
      "At Chubb Fire and Security in Toronto (2020–2021), I worked as a System Analyst. I led enhancement projects, reduced 90% of manual efforts for master data maintenance by implementing macros, and wrote SQL scripts to pull data from the timesheet application.",
  },
  {
    keywords: ["tcs", "tata"],
    reply:
      "At TCS (Tata Consultancy Services) in Chennai (2015–2016), I trained in Agile Methodologies, Manual Testing, Automation Testing, and Performance Testing tools as an Associate Software Engineer.",
  },
  {
    keywords: [
      "education",
      "university",
      "degree",
      "northeastern",
      "school",
      "study",
    ],
    reply:
      "🎓 I'm currently pursuing my MS in Computer Science at Northeastern University, Boston (2026–Present).\n\nCourses: Program Design Paradigms, DBMS, Web Development.\n\nBefore that:\n📜 Postgraduate Diploma in Cloud Computing for Big Data — Lambton College, Toronto, Canada (2020–2021).\n🎓 B.Tech in Information Technology — Jawaharlal Nehru Technological University, Hyderabad, India (2011–2015).",
  },
  {
    keywords: ["project", "portfolio", "built", "build"],
    reply:
      "Some projects I'm proud of:\n\n1️⃣ Enterprise React Design System (Dayforce)\n2️⃣ Master Data Automation (Chubb)\n3️⃣ SAP HCM Spin-Off Projects (ADP)\n4️⃣ Cloud Automation with Python (IBM)\n5️⃣ Heart Disease Prediction — ML (Lambton College)\n6️⃣ Customer Purchase Strategy — K-Means (Lambton College)\n7️⃣ Airbnb Listings Explorer (Northeastern)\n8️⃣ This portfolio website!\n\nVisit my Projects page to see all of them!",
  },
  {
    keywords: [
      "hobby",
      "hobbies",
      "fun",
      "free time",
      "game",
      "gaming",
      "play",
    ],
    reply:
      "When I'm not coding, you'll find me:\n\n🎮 Gaming: Valorant, Counter-Strike, Apex Legends\n🏏 Playing cricket\n🏓 Pickleball\n🖥️ Building PC rigs\n\nI'm a big FPS gamer — let's queue sometime! 😄",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "connect", "linkedin"],
    reply:
      "You can reach me at:\n\n📧 pottigari.a@northeastern.edu\n🔗 linkedin.com/in/anurag-reddy-7140a85a\n🐙 github.com/anurag-reddy1\n\nI'm currently looking for a co-op/internship — let's connect!",
  },
  {
    keywords: ["react", "typescript"],
    reply:
      "React + TypeScript is my bread and butter! I've used them for 5+ years — from building individual components to architecting a full design system with 50+ components, design tokens, and automated testing.",
  },
  {
    keywords: ["python"],
    reply:
      "I use Python for scripting, data processing, and quick automation tasks. It's a great complement to my primary JS/TS stack.",
  },
  {
    keywords: ["testing", "cypress", "playwright", "qa"],
    reply:
      "I'm a big advocate for automated testing! At ADP I introduced Cypress for E2E testing, and at Dayforce I added Playwright and visual regression testing to the CI/CD pipeline. Tests catch bugs before users do! 🐛",
  },
  {
    keywords: ["co-op", "internship", "looking", "available", "opportunity"],
    reply:
      "Yes! I'm actively seeking a co-op or internship opportunity for 2025. I bring 7+ years of industry experience and I'm eager to contribute to a team while continuing my studies at Northeastern. Let's chat! 💼",
  },
  {
    keywords: ["valorant", "cs", "counter-strike", "apex"],
    reply:
      "A fellow gamer! 🎮 I play Valorant, CS, and Apex Legends regularly. I love the tactical gameplay in Valorant and the fast-paced action in Apex. Maybe we can squad up sometime!",
  },
  {
    keywords: ["thanks", "thank", "cool", "awesome", "great", "nice"],
    reply:
      "Thank you! 😊 Feel free to explore more — ask about my skills, projects, hobbies, or anything else. I'm happy to chat!",
  },
];

// Fallback response
const FALLBACK =
  "Hmm, I'm not sure about that one! Try asking about my skills, experience, projects, education, hobbies, or contact info. 😊";

// Suggestion chips
const SUGGESTIONS = [
  "Who are you?",
  "What are your skills?",
  "Tell me about your experience",
  "What are your hobbies?",
  "How can I contact you?",
];

// DOM
const messagesEl = document.getElementById("chat-messages");
const inputEl = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const typingEl = document.getElementById("chat-typing");
const suggestionsEl = document.getElementById("chat-suggestions");

// Escape HTML
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Add a message bubble
const addMessage = (text, sender) => {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble chat-${sender}`;
  // Convert newlines to <br>
  bubble.innerHTML = esc(text).replace(/\n/g, "<br>");
  messagesEl.appendChild(bubble);
  messagesEl.scrollTop = messagesEl.scrollHeight;
};

// Find a matching response
const getReply = (input) => {
  const lower = input.toLowerCase();
  for (const r of RESPONSES) {
    if (r.keywords.some((kw) => lower.includes(kw))) {
      return r.reply;
    }
  }
  return FALLBACK;
};

// Show typing indicator, then reply
const botReply = (userText) => {
  typingEl.classList.add("visible");
  typingEl.setAttribute("aria-hidden", "false");

  const delay = 600 + Math.random() * 800;
  setTimeout(() => {
    typingEl.classList.remove("visible");
    typingEl.setAttribute("aria-hidden", "true");
    addMessage(getReply(userText), "bot");
  }, delay);
};

// Send user message
const sendMessage = () => {
  const text = inputEl.value.trim();
  if (!text) return;

  addMessage(text, "user");
  inputEl.value = "";

  // Hide suggestions after first message
  suggestionsEl.style.display = "none";

  botReply(text);
};

// Event listeners
sendBtn.addEventListener("click", sendMessage);
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

// Suggestion chips
const renderSuggestions = () => {
  suggestionsEl.innerHTML = SUGGESTIONS.map(
    (s) => `<button class="chat-suggestion-chip">${esc(s)}</button>`
  ).join("");
};

suggestionsEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chat-suggestion-chip");
  if (!chip) return;
  inputEl.value = chip.textContent;
  sendMessage();
});

// Boot: greeting message
setTimeout(() => {
  addMessage(
    "Hey! 👋 I'm Anurag. Welcome to my portfolio!\n\nAsk me anything — or tap a suggestion below to get started.",
    "bot"
  );
  renderSuggestions();
}, 400);
