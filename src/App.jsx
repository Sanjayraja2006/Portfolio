import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";
import CursorTrail from "./components/CursorTrail";
import AnimatedSection, { AnimatedItem } from "./components/AnimatedSection";
import TypewriterText from "./components/TypewriterText";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "Web Application",
    title: "UBlood",
    description:
      "A blood donation and request management platform designed to help users connect with blood donors during emergency situations.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    number: "02",
    category: "Machine Learning",
    title: "Heart Disease Prediction System",
    description:
      "A machine learning application that uses the Random Forest algorithm to predict the possibility of heart disease based on relevant input data.",
    technologies: [
      "Python",
      "Machine Learning",
      "Random Forest",
    ],
  },

  {
    number: "03",
    category: "Mobile Application",
    title: "Password Generator App",
    description:
      "A secure password generator application developed using Flutter to generate secure numeric passwords using device-specific inputs.",
    technologies: [
      "Flutter",
      "Dart",
    ],
  },

  {
    number: "04",
    category: "Machine Learning",
    title: "Student Performance Prediction System",
    description:
      "An end-to-end machine learning web application developed using Flask to predict students' final exam scores based on study hours, attendance, sleep duration, and previous academic performance. Implemented data preprocessing, feature scaling, model training, and evaluation using Linear Regression and Decision Tree Regression, selecting the best model using R², MAE, and MSE metrics.",
    technologies: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "Linear Regression",
      "Decision Tree Regression",
    ],
  },

  {
    number: "05",
    category: "Java Application",
    title: "HR Management System using JDBC",
    description:
      "A Java-based HR Management System designed to streamline and automate human resource operations. The system provides a secure and user-friendly interface for HR personnel to perform CRUD operations for managing employee information.",
    technologies: [
      "Java",
      "JDBC",
      "MySQL",
    ],
  },

  {
    number: "06",
    category: "Deep Learning",
    title: "LSTM-Based Crime Prediction System",
    description:
      "A machine learning project that uses Long Short-Term Memory neural networks to forecast future crime patterns based on historical crime records. The system analyses factors such as crime location, crime type, and time to learn temporal trends and predict future crime patterns.",
    technologies: [
      "Python",
      "LSTM",
      "Deep Learning",
    ],
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
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroPhotoY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <>
      {/* 3D Floating Particle Background */}
      <ParticleBackground />

      {/* Interactive Glowing Cursor Trail */}
      <CursorTrail />

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

          <button
            onClick={() => setIsResumeOpen(true)}
            className="nav-button"
            style={{ cursor: "pointer", border: "none" }}
          >
            View Resume
          </button>
        </header>

        {/* HERO */}
        <main>

          <AnimatedSection id="home" className="hero section" ref={heroRef}>
            <motion.div className="hero-content" style={{ y: heroTextY }}>

              <AnimatedItem className="availability">
                <span></span>
                Available for opportunities
              </AnimatedItem>

              <AnimatedItem className="hero-small">Hello, I'm</AnimatedItem>

              <AnimatedItem>
                <h1>
                  Sanjayraja
                  <span> E</span>
                </h1>
              </AnimatedItem>

              <AnimatedItem>
                <TypewriterText
                  staticPrefix="Computer Science Undergraduate &"
                  words={["Frontend Developer", "UI/UX Designer"]}
                />
              </AnimatedItem>

              <AnimatedItem className="hero-description">
                I build modern, responsive web applications and intuitive
                digital experiences with a strong interest in UI/UX design,
                frontend development, and scalable web technologies.
              </AnimatedItem>

              <AnimatedItem className="hero-buttons">
                <a href="#projects" className="primary-button">
                  View My Work <b>↗</b>
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="outline-button"
                >
                  View Resume 👁
                </button>

                <a
                  href="/resume.pdf"
                  download="Sanjayraja_E_Resume.pdf"
                  className="secondary-button"
                >
                  Download CV ⬇
                </a>

                <a href="#contact" className="secondary-button">
                  Contact Me
                </a>
              </AnimatedItem>

              <AnimatedItem className="social-links">
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
              </AnimatedItem>

            </motion.div>

            {/* PHOTO WITH PARALLAX */}
            <motion.div className="hero-photo-area" style={{ y: heroPhotoY }}>

              <div className="photo-glow"></div>

              <div className="photo-card">
                <img 
                   src="Profile.jpeg" 
                   alt="Sanjayraja E"
                   className="profile-photo"
                />
              </div>

            </motion.div>
          </AnimatedSection>


          {/* ABOUT */}
          <AnimatedSection id="about" className="section about">

            <AnimatedItem className="section-heading">
              <span>01 / ABOUT ME</span>
              <h2>
                Turning ideas into{" "}
                <em>digital experiences.</em>
              </h2>
            </AnimatedItem>

            <div className="about-grid">

              <AnimatedItem className="about-text">
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
              </AnimatedItem>

              <div className="about-cards">

                <AnimatedItem className="about-card">
                  <span>01</span>
                  <div>
                    <h3>UI/UX Design</h3>
                    <p>
                      Creating clean, intuitive, and user-friendly
                      digital experiences.
                    </p>
                  </div>
                </AnimatedItem>

                <AnimatedItem className="about-card">
                  <span>02</span>
                  <div>
                    <h3>Web Development</h3>
                    <p>
                      Building responsive applications using modern
                      frontend and backend technologies.
                    </p>
                  </div>
                </AnimatedItem>

                <AnimatedItem className="about-card">
                  <span>03</span>
                  <div>
                    <h3>Problem Solving</h3>
                    <p>
                      Transforming ideas into functional solutions
                      through logical and structured thinking.
                    </p>
                  </div>
                </AnimatedItem>

              </div>

            </div>
          </AnimatedSection>


          {/* SKILLS */}
          <AnimatedSection id="skills" className="section skills-section">

            <AnimatedItem className="section-heading centered">
              <span>02 / MY TOOLKIT</span>
              <h2>
                Skills & <em>Technologies</em>
              </h2>
              <p>
                Technologies and tools I use to design, develop,
                and deliver modern digital solutions.
              </p>
            </AnimatedItem>

            <div className="skills-grid">

              {skills.map((skill, index) => (
                <AnimatedItem className="skill-card" key={index}>

                  <div className="skill-number">
                    0{index + 1}
                  </div>

                  <h3>{skill.title}</h3>

                  <div className="skill-tags">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                </AnimatedItem>
              ))}

            </div>

          </AnimatedSection>


          {/* PROJECTS */}
          <AnimatedSection id="projects" className="projects-section section">

            <AnimatedItem className="section-heading centered">
              <span>03 / SELECTED WORK</span>

              <h2>
                Projects that <em>showcase my skills.</em>
              </h2>

              <p>
                A collection of projects across web development,
                machine learning, and mobile application development.
              </p>
            </AnimatedItem>

            <div className="projects-grid">

              {projects.map((project) => (

                <AnimatedItem as="article" className="project-card" key={project.number}>

                  {/* Project Number */}
                  <div className="project-top">
                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="project-content">

                    <h3>{project.title}</h3>

                    <p>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="project-tech">
                      {project.technologies.map((tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Project Button */}
                  <a
                    href="https://github.com/Sanjayraja2006"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project
                    <span>↗</span>
                  </a>

                </AnimatedItem>

              ))}

            </div>

          </AnimatedSection>


          {/* EXPERIENCE */}
          <AnimatedSection id="experience" className="section experience-section">

            <AnimatedItem className="section-heading centered">
              <span>04 / EXPERIENCE</span>
              <h2>
                Internship <em>Experience</em>
              </h2>
            </AnimatedItem>

            <AnimatedItem className="experience-card">

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

            </AnimatedItem>

          </AnimatedSection>


          {/* EDUCATION */}
          <AnimatedSection id="education" className="section education-section">

            <AnimatedItem className="section-heading">
              <span>05 / EDUCATION</span>
              <h2>
                Academic <em>Journey</em>
              </h2>
            </AnimatedItem>

            <div className="education-list">

              {education.map((item, index) => (

                <AnimatedItem className="education-card" key={index}>

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

                </AnimatedItem>

              ))}

            </div>

          </AnimatedSection>


          {/* CERTIFICATIONS */}
          <AnimatedSection className="section certification-section">

            <AnimatedItem className="section-heading centered">

              <span>06 / ACHIEVEMENTS</span>

              <h2>
                Certifications
              </h2>

            </AnimatedItem>

            <div className="certification-grid">

              {certifications.map((certificate, index) => (

                <AnimatedItem className="certificate-card" key={index}>

                  <div className="certificate-icon">
                    ✓
                  </div>

                  <h3>{certificate}</h3>

                  <span>Certified</span>

                </AnimatedItem>

              ))}

            </div>

          </AnimatedSection>


          {/* CONTACT */}
          <AnimatedSection id="contact" className="section contact-section">

            <AnimatedItem className="contact-content">

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

            </AnimatedItem>

            <AnimatedItem className="contact-details">

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
                href="https://www.linkedin.com/in/sanjayraja-e-bb9b67308"
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
                href="https://github.com/Sanjayraja2006"
                target="_blank"
                rel="noreferrer"
              >
                <small>GitHub</small>
                <strong>
                  View my projects
                </strong>
                <b>↗</b>
              </a>

            </AnimatedItem>

          </AnimatedSection>

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

      {/* RESUME PREVIEW MODAL */}
      {isResumeOpen && (
        <div className="resume-modal-overlay" onClick={() => setIsResumeOpen(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>Sanjayraja E — Resume</h3>
              <div className="resume-modal-actions">
                <a
                  href="/resume.pdf"
                  download="Sanjayraja_E_Resume.pdf"
                  className="primary-button modal-download-btn"
                >
                  Download PDF ⬇
                </a>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="close-modal-btn"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="resume-modal-body">
              <iframe
                src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                title="Sanjayraja E Resume"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;