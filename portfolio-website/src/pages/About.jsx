import profileImage from "../assets/profile.jpg";

function About() {
  return (
    <main>
      <section className="about">
        <div className="about-image">
          <img src={profileImage} alt="Anette Söderström" />
        </div>

        <div className="about-text">
          <h1>About Me</h1>

          <p>
            I have worked as a Software Tester since 2017, gaining experience
            from different industries, teams and development environments.
          </p>

          <p>
            I enjoy finding problems before users do and working closely with
            developers, business stakeholders and product owners to improve
            software quality.
          </p>

          <p>
            My strengths include analytical thinking, attention to detail and
            maintaining a calm and collaborative approach even under pressure.
          </p>

          <p>
            Currently I am expanding my skills within frontend development
            using React and modern web technologies.
          </p>
        </div>
      </section>

      <section className="strengths">
        <div className="strength-card">Detail-oriented</div>
        <div className="strength-card">Problem Solver</div>
        <div className="strength-card">Communicative</div>
        <div className="strength-card">Calm Under Pressure</div>
      </section>

      <section className="drives">
        <h2>What Drives Me</h2>

        <div className="drive-cards">
          <div className="drive-card">
            <h3>Quality First</h3>
            <p>I believe in delivering software that users can trust.</p>
          </div>

          <div className="drive-card">
            <h3>Collaboration</h3>
            <p>I enjoy working closely with developers and stakeholders.</p>
          </div>

          <div className="drive-card">
            <h3>Continuous Learning</h3>
            <p>I am always learning new tools, techniques and technologies.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;