import profileImage from "../assets/profile.jpg";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="intro">Hi, I'm</p>

          <h1>Anette Söderström</h1>
          <h2>Software Tester & QA Specialist</h2>
          <p className="description">Ensuring quality through testing, collaboration and continuous improvement.</p>

          <div className="hero-buttons">
            <button>View my work</button>
            <button>Contact me</button>
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