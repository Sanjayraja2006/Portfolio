import "./App.css";

const projects = [
  {
    number: "01",
    title: "UBlood",
    category: "Web Application",
    description:
      "A blood donation and request management platform designed to help users connect with blood donors during emergency situations.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    number: "02",
    title: "Heart Disease Prediction System",
    category: "Machine Learning",
    description:
      "A machine learning application that uses the Random Forest algorithm to predict the possibility of heart disease based on relevant input data.",
    technologies: ["Python", "Machine Learning", "Random Forest"],
  },
  {
    number: "03",
    title: "Password Generator App",
    category: "Mobile Application",
    description:
      "A Flutter application designed to generate secure numeric passwords using device-specific inputs such as Device ID and Instance ID.",
    technologies: ["Flutter", "Dart", "Mobile Development"],
  },
];

const skills = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "C"],
  },
  {
    title: "Frontend Development",
    items: ["React.js", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    items: ["MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "Postman", "MongoDB Compass"],
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Problem Solving", "Adaptability"],
  },
];

const education = [
  {
    year: "2023 - Present",
    title: "Bachelor of Engineering in Computer Science and Engineering",
    place: "Dr Mahalingam College of Engineering and Technology, Pollachi",
    score: "CGPA 7.7",
  },
  {
    year: "2023",
    title: "Higher Secondary Certificate",
    place: "Sowdambikaa Matriculation Higher Secondary School T.Pet",
    score: "83%",
  },
  {
    year: "2021",
    title: "Secondary School Leaving Certificate",
    place: "T.K.V Matriculation School",
    score: "100%",
  },
];

const certifications = [
  "MongoDB Atlas Certification",
  "NPTEL - Environmental Impact Assessment",
  "Python Bootcamp - Infosys Springboard",
];

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          Sanjay<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </header>

      {/* HERO */}
      <main>

        <section id="home" className="hero section">
          <div className="hero-content">

            <div className="availability">
              <span></span>
              Available for opportunities
            </div>

            <p className="hero-small">Hello, I'm</p>

            <h1>
              Sanjayraja
              <span> E</span>
            </h1>

            <h2>
              Computer Science Undergraduate &
              <br />
              Frontend Developer
            </h2>

            <p className="hero-description">
              I build modern, responsive web applications and intuitive
              digital experiences with a strong interest in UI/UX design,
              frontend development, and scalable web technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work <b>↗</b>
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Sanjayraja2006"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sanjayraja-e-bb9b67308"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

          </div>

          {/* PHOTO */}
          <div className="hero-photo-area">

            <div className="photo-glow"></div>

           <div className="photo-card">
              <img 
                 src="Profile.jpg" 
                 alt="Sanjayraja E"
                 className="profile-photo"
              />
            </div>

          </div>
        </section>


        {/* ABOUT */}
        <section id="about" className="section about">

          <div className="section-heading">
            <span>01 / ABOUT ME</span>
            <h2>
              Turning ideas into{" "}
              <em>digital experiences.</em>
            </h2>
          </div>

          <div className="about-grid">

            <div className="about-text">
              <p>
                I am a Computer Science and Engineering undergraduate
                passionate about UI/UX design and frontend development.
                I enjoy designing interfaces that are visually appealing,
                responsive, and easy to use.
              </p>

              <p>
                My development journey includes working with React,
                HTML, CSS, Node.js, Express.js, MongoDB, Java, Python,
                and C. I am interested in building scalable applications
                and continuously improving my technical skills.
              </p>
            </div>

            <div className="about-cards">

              <div className="about-card">
                <span>01</span>
                <div>
                  <h3>UI/UX Design</h3>
                  <p>
                    Creating clean, intuitive, and user-friendly
                    digital experiences.
                  </p>
                </div>
              </div>

              <div className="about-card">
                <span>02</span>
                <div>
                  <h3>Web Development</h3>
                  <p>
                    Building responsive applications using modern
                    frontend and backend technologies.
                  </p>
                </div>
              </div>

              <div className="about-card">
                <span>03</span>
                <div>
                  <h3>Problem Solving</h3>
                  <p>
                    Transforming ideas into functional solutions
                    through logical and structured thinking.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* SKILLS */}
        <section id="skills" className="section skills-section">

          <div className="section-heading centered">
            <span>02 / MY TOOLKIT</span>
            <h2>
              Skills & <em>Technologies</em>
            </h2>
            <p>
              Technologies and tools I use to design, develop,
              and deliver modern digital solutions.
            </p>
          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>

                <div className="skill-number">
                  0{index + 1}
                </div>

                <h3>{skill.title}</h3>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </section>


        {/* PROJECTS */}
        <section id="projects" className="section projects-section">

          <div className="section-heading">
            <span>03 / SELECTED WORK</span>

            <h2>
              Featured <em>Projects</em>
            </h2>

            <p>
              A selection of projects that represent my experience
              across web development, machine learning, and mobile
              application development.
            </p>
          </div>

          <div className="projects-list">

            {projects.map((project) => (

              <article className="project-card" key={project.number}>

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">

                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}

                  </div>

                </div>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project ↗
                </a>

              </article>

            ))}

          </div>

        </section>


        {/* EXPERIENCE */}
        <section id="experience" className="section experience-section">

          <div className="section-heading centered">
            <span>04 / EXPERIENCE</span>
            <h2>
              Internship <em>Experience</em>
            </h2>
          </div>

          <div className="experience-card">

            <div className="experience-date">
              JUN
              <strong>2025</strong>
            </div>

            <div className="experience-content">

              <span>Mentor Circuits</span>

              <h3>Flutter Developer Intern</h3>

              <p>
                Developed a Flutter application focused on generating
                secure numeric passwords using device-specific inputs.
              </p>

              <div className="experience-tags">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Mobile Development</span>
              </div>

            </div>

          </div>

        </section>


        {/* EDUCATION */}
        <section id="education" className="section education-section">

          <div className="section-heading">
            <span>05 / EDUCATION</span>
            <h2>
              Academic <em>Journey</em>
            </h2>
          </div>

          <div className="education-list">

            {education.map((item, index) => (

              <div className="education-card" key={index}>

                <div className="education-year">
                  {item.year}
                </div>

                <div className="education-content">

                  <h3>{item.title}</h3>

                  <p>{item.place}</p>

                </div>

                <div className="education-score">
                  {item.score}
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* CERTIFICATIONS */}
        <section className="section certification-section">

          <div className="section-heading centered">

            <span>06 / ACHIEVEMENTS</span>

            <h2>
              Certifications
            </h2>

          </div>

          <div className="certification-grid">

            {certifications.map((certificate, index) => (

              <div className="certificate-card" key={index}>

                <div className="certificate-icon">
                  ✓
                </div>

                <h3>{certificate}</h3>

                <span>Certified</span>

              </div>

            ))}

          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="section contact-section">

          <div className="contact-content">

            <span>07 / GET IN TOUCH</span>

            <h2>
              Let's build something
              <em> meaningful.</em>
            </h2>

            <p>
              I'm interested in opportunities where I can contribute
              my development skills, learn new technologies, and work
              on meaningful products.
            </p>

          </div>

          <div className="contact-details">

            <a href="mailto:sanjayraja2356@gmail.com">
              <small>Email</small>
              <strong>
                sanjayraja2356@gmail.com
              </strong>
              <b>↗</b>
            </a>

            <a href="tel:+916380005679">
              <small>Phone</small>
              <strong>
                +91 6380005679
              </strong>
              <b>↗</b>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <small>LinkedIn</small>
              <strong>
                Connect with me
              </strong>
              <b>↗</b>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <small>GitHub</small>
              <strong>
                View my projects
              </strong>
              <b>↗</b>
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          Sanjay<span>.</span>
        </div>

        <p>
          Designed & developed by Sanjayraja E
        </p>

        <p>
          © 2026 All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;