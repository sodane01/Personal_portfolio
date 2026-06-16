function Projects() {
  return (
    <main>
      <h1 className="projects-title">Projects</h1>

      <section className="projects-grid">

        <div className="project-card">
          <h2>Personal Portfolio Website</h2>

          <p>
            Responsive portfolio website built with React to
            showcase experience, skills and projects.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>CSS</span>
            <span>React Router</span>
          </div>
        </div>

        <div className="project-card">
          <h2>React To-Do Application</h2>

          <p>
            Task management application featuring dynamic state,
            reusable components and task tracking.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="project-card">
          <h2>Product Management System</h2>

          <p>
            Console application for managing products using
            object-oriented programming principles.
          </p>

          <div className="project-tags">
            <span>C#</span>
            <span>OOP</span>
            <span>File Handling</span>
          </div>
        </div>

        <div className="project-card">
          <h2>Device Management System</h2>

          <p>
            Application demonstrating inheritance,
            polymorphism and data persistence.
          </p>

          <div className="project-tags">
            <span>C#</span>
            <span>Inheritance</span>
            <span>Polymorphism</span>
          </div>
        </div>

      </section>
    </main>
  );
}

export default Projects;