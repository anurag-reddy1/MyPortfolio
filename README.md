# Anurag Reddy Pottigari — Professional Portfolio Website

A premium, highly interactive, and responsive developer portfolio featuring modern typography, elegant light-theme designs, project category filtering, and an automated conversational AI chatbot assistant.

---

## Project Objective

The objective of this project is to provide a clean, highly professional, and responsive central hub that highlights Anurag's career trajectory, academic journey, key technical competencies, and development philosophy. It serves as:
- An interactive resume for recruiters and hiring managers.
- A technical demonstration of vanilla web engineering excellence.
- An experimental playground hosting "Ask Anurag", a customized client-side chatbot designed to answer career-related questions instantly.

---

## Screenshot

![My Portfolio](./images/application.gif)

---

## Tech Requirements

The project uses clean, robust, and industry-standard web technologies to ensure fast delivery and cross-device compatibility:
- **Core Structure**: HTML5 (Semantic tags, accessible structure, W3C compliance).
- **Styling**: CSS3 (Vanilla design token variables, custom layout components, hover effects, CSS animations).
- **Layout Framework**: Bootstrap 5.3 (Grid system, responsiveness utilities, spacing helper classes).
- **Icons**: Bootstrap Icons (Modern vectorized font icons).
- **Fonts**: Google Fonts (`Inter` for primary body copy, `Fira Code` for terminal representations).
- **Scripting & Logic**: ES6+ JavaScript Modules (Dynamic list filtering, custom chatbot interface, scrolled transitions).

---

## Project Structure

The codebase is organized cleanly as a modular vanilla frontend application:
```text
MyPortfolio/
├── css/
│   └── main.css         # Main stylesheet including variables, layouts, and animations
├── js/
│   ├── main.js          # Shared initialization, scrolls, typed animation & theme locking
│   ├── chatbot.js       # Client-side automated logic and conversation responses
│   └── projects.js      # List of portfolio projects and grid rendering logic
├── images/              # Icons, favicon, profile picture, and mockups
├── index.html           # Main profile page (About, Skills, Experience, Education)
├── projects.html        # Projects showcase page with responsive category filters
├── playground.html      # "Ask Anurag" chatbot container page
├── package.json         # Project metadata and development dependencies
├── DESIGN.md            # System design doc containing wireframes and user stories
└── README.md            # Project overview and deployment guide
```

---

## How to Install and Use

Since the portfolio is engineered as a standard frontend application with no heavy compilation step required, setting it up is extremely simple.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anurag-reddy1/MyPortfolio.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd MyPortfolio
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

### Running Locally

#### Option A: Quick Launch with Python
If you have Python installed, run this command in your project root:
```bash
python -m http.server 8000
```
Then, open your web browser and navigate to:
`http://localhost:8000`

#### Option B: Developer Server (NodeJS)
If NodeJS is installed, you can use standard server packages like `http-server` or `serve`:
```bash
# Install server globally
npm install -g http-server

# Run server in the portfolio directory
http-server ./
```

---

## GenAI Usage

- **Tool & Version**: Gemini 3.5 Flash
- **Usage Highlights**:
  - *Chatbot Page Creation*: Utilized generative AI assistance to design and program the conversational AI chatbot ("Ask Anurag"), crafting responsive custom chat flows and micro-animation feedback loops.
  - *Prompt Used*: Generate a new page that works as a chatbot i.e. answers details when asked something about me. Keep the existing stylings.
 
  - *Also used AI for Brainstorming, debugging and for the documentation*
  - *Promt Used*: Brainstorm a professinal portfolio website.
                  Help me debug the layout issue.
                  Create README.md file based on my project structure.

---

## Author

**Anurag Reddy Pottigari**  
- **Homepage**: [Anurag Reddy Pottigari Portfolio](https://anurag-reddy1.github.io/MyPortfolio) *(or open `./index.html` locally)*  
- **Education**: MSCS Student at Northeastern University, Boston.  
- **LinkedIn**: [linkedin.com/in/anurag-reddy-pottigari](https://www.linkedin.com/in/anurag-reddy-7140a85a)  
- **GitHub**: [github.com/anurag-reddy1](https://github.com/anurag-reddy1)  
- **Email**: [pottigari.a@northeastern.edu](mailto:pottigari.a@northeastern.edu)

---

## Class Link

**CS 5610 - Web Development**  
Northeastern University - Khoury College of Computer Sciences  
🔗 [Course Link](https://johnguerra.co/classes/webDevelopment_online_summer_2026/)

--- 

## Video Demonstration

🎥 [Watch the demo video](https://www.youtube.com/watch?v=kIBxwOpz2dI)

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---