function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message is ready to send.");
  };

  return (
    <section className="page-section contact-section">

      <p className="section-label">05 — CONTACT</p>

      <h1 className="section-title">
        Let's build something <span>meaningful.</span>
      </h1>

      <p className="section-description">
        I'm open to internships, collaborative projects,
        learning opportunities and interesting ideas.
      </p>

      <div className="contact-grid">

        <div className="contact-info">

          <h2>Get in touch</h2>

          <p>
            Have a project idea or want to connect?
            Feel free to reach out.
          </p>

          <a href="mailto:yourmail@gmail.com">
            📧 yourmail@gmail.com
          </a>

          <a href="https://github.com/" target="_blank">
            💻 GitHub
          </a>

          <a href="https://linkedin.com/" target="_blank">
            🔗 LinkedIn
          </a>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;