function Projects() {
return ( <main> <h1 className="projects-title">Projects</h1>

  <section className="projects-grid">

    <div className="project-card">
      <h2>Personal Portfolio Website</h2>

      <p>
        Responsive portfolio website built with React to showcase
        experience, skills and projects through a modern and
        professional user interface.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>CSS</span>
        <span>React Router</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/sodane01/Personal_portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          View on GitHub
        </a>
      </div>
    </div>

    <div className="project-card">
      <h2>The Cakery Website</h2>

      <p>
        Responsive bakery website featuring product showcases,
        custom layouts and modern frontend design focused on
        usability and visual presentation.
      </p>

      <div className="project-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>Responsive Design</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/sodane01/Anettes-Cakery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          View on GitHub
        </a>
      </div>
    </div>

    <div className="project-card">
      <h2>React To-Do Application</h2>

      <p>
        Task management application featuring dynamic state,
        reusable components, task completion tracking and
        interactive user functionality.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>JavaScript</span>
        <span>CSS</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/sodane01/Todo-list-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          View on GitHub
        </a>
      </div>
    </div>

    

    <div className="project-card">
      <h2>Todo List Console Application</h2>

      <p>
        Task management console application built in C# using
        object-oriented programming principles and UML-driven design.
        Features task management, search, sorting and CSV persistence.
      </p>

      <div className="project-tags">
        <span>C#</span>
        <span>OOP</span>
        <span>CSV</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/sodane01/Project_ToDoList_Anette"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          View on GitHub
        </a>
      </div>
    </div>

  </section>
</main>

);
}

export default Projects;
