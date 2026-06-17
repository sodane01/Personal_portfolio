import profileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="intro">Hi, I'm</p>

          <h1>Anette Söderström</h1>
          <h2>Software Tester & QA Specialist</h2>

          <p className="description">
            Ensuring quality through testing, collaboration and continuous
            improvement.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="hero-button">
              View my work
            </Link>

            <Link to="/contact" className="hero-button secondary">
              Contact me
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt="Anette Söderström" />
        </div>
      </section>
    </main>
  );
}

export default Home;