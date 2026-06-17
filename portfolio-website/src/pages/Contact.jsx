import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <main>
      <section className="contact">
        <div className="contact-text">
          <h1>Let's Connect</h1>

            <p>
                Feel free to reach out regarding software testing,
                quality assurance, frontend development or future
                opportunities.
            </p>

          <div className="contact-links">
            <a href="mailto:sodane01@gmail.com" className="contact-card">
              <i className="fa-solid fa-envelope"></i>
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/anette-söderström-b53b9953"
              target="_blank"
              className="contact-card"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/sodane01"
              target="_blank"
              className="contact-card"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>

          <a
            href="/Anette-Soderstrom-CV.pdf"
            download
            className="cv-button"
          >
            Download CV
          </a>
        </div>

      </section>
    </main>
  );
}

export default Contact;