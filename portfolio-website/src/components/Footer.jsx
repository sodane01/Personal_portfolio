function Footer() {
  return (
    <footer className="footer">
      <p>Thank you for visiting my portfolio.</p>

      <div className="footer-links-footer">
        <a
          href="https://www.linkedin.com/in/anette-söderström-b53b9953"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="https://github.com/sodane01" target="_blank">
          GitHub
        </a>

        <a href="mailto:sodane01@gmail.com">
          Email
        </a>
      </div>

      <p className="footer-bottom">
        © 2026 Anette Söderström · Built with React
      </p>
    </footer>
  );
}

export default Footer;