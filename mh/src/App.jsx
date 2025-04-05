import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeLink, setActiveLink] = useState("home");

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100; // Adding offset for header

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Call once on mount to set initial active link
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scrolling when clicking navigation links
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveLink(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const sectionPosition = section.offsetTop - headerHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">MindfulCare</div>
        <nav className="nav">
          <ul>
            <li>
              <a
                href="#home"
                className={activeLink === "home" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className={activeLink === "resources" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "resources")}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#support"
                className={activeLink === "support" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "support")}
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeLink === "about" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === "contact" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Your Mental Health Matters</h1>
            <p>
              We're here to support you on your journey to wellness and peace of
              mind.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Get Support Now</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>
        </section>

        <section id="resources" className="features">
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Personal Support</h3>
            <p>
              Connect with trained professionals who care about your wellbeing.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Resources</h3>
            <p>
              Access a library of tools and information to help manage your
              mental health.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Community</h3>
            <p>
              Join a supportive community of people who understand your
              experiences.
            </p>
          </div>
        </section>

        <section id="support" className="cta">
          <h2>Ready to take the first step?</h2>
          <p>Your journey to better mental health begins with a single step.</p>
          <button className="primary-btn">Start Your Journey</button>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Us</h2>
            <p>
              At MindfulCare, we believe mental health is just as important as
              physical health. Our team of dedicated professionals is committed
              to providing accessible mental health resources and support to
              everyone who needs it.
            </p>
            <p>
              Founded in 2023, we've helped thousands of people find the support
              they need on their journey to better mental wellbeing.
            </p>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Have questions or need assistance? Reach out to our team.</p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <p>support@mindfulcare.com</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <p>1-800-MINDFUL</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">MindfulCare</div>
          <p>
            Providing support and resources for mental health and wellbeing.
          </p>
          <div className="footer-links">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
            <a
              href="#resources"
              onClick={(e) => handleNavClick(e, "resources")}
            >
              Resources
            </a>
            <a href="#support" onClick={(e) => handleNavClick(e, "support")}>
              Support
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </a>
          </div>
          <p className="copyright">© 2023 MindfulCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
