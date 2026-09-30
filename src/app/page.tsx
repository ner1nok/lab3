export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="hero-eyebrow">Web Developer Portfolio</p>
        <h1 className="hero-title">Stepan Grigoriev</h1>
        <p className="hero-subtitle">
          I build fast, clean web interfaces — from markup to fully
          interactive components with React and Next.js.
        </p>
        <a href="#contact" className="btn">
          Get In Touch
        </a>
      </section>

      <section className="quote-section">
        <blockquote className="quote-text">
          A good interface shouldn&apos;t be noticeable — it should just
          work the way the user expects.
        </blockquote>
      </section>

      <main>
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I&apos;m a first-year student majoring in Information Systems
            and Technology. I&apos;m learning front-end development: HTML,
            CSS, JavaScript, and React/Next.js. I enjoy turning a design
            into a working, accessible, and polished interface.
          </p>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="project-list">
            <article className="project-card">
              <p className="project-tag">Course Project</p>
              <h3 className="project-title">Warm Cup Café</h3>
              <p className="project-text">
                A coffee shop page built with Next.js: header, hero
                section, a drinks menu of cards, and a contact section.
              </p>
            </article>
            <article className="project-card">
              <p className="project-tag">Course Project</p>
              <h3 className="project-title">Portfolio</h3>
              <p className="project-text">
                A portfolio page built with CSS variables, the box
                model, and responsive typography.
              </p>
            </article>
            <article className="project-card">
              <p className="project-tag">Pet Project</p>
              <h3 className="project-title">Task Tracker</h3>
              <p className="project-text">
                A small to-do list app that saves its state in the
                browser.
              </p>
            </article>
            <article className="project-card">
              <p className="project-tag">Pet Project</p>
              <h3 className="project-title">Weather App</h3>
              <p className="project-text">
                An interface that fetches data from a weather API, with
                a responsive layout for mobile screens.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li className="skill-item">HTML</li>
            <li className="skill-item">CSS</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">React</li>
            <li className="skill-item">Next.js</li>
            <li className="skill-item">Git</li>
            <li className="skill-item skill-item--learning">
              Currently Learning: TypeScript
            </li>
          </ul>
        </section>

        <section id="contact" className="section contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="about-text">
            Open to course and side project collaborations — I&apos;ll
            reply within a day.
          </p>
          <a href="mailto:stepan.grigoriev@example.com" className="btn">
            Send an Email
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Stepan Grigoriev. Learning project.</p>
      </footer>
    </>
  );
}
