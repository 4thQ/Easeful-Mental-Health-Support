import { useState, useEffect } from "react";
import "./App.css";

// Import local organization logos
import nhsLogo from "./assets/nhs.jpeg";
import mindLogo from "./assets/mind.png";
import reactLogo from "./assets/react.svg";
import leafLogo from "./assets/leaf.jpg";
import treeLogo from "./assets/tree.avif";
import tangleLogo from "./assets/tangle.jpg";
import pathLogo from "./assets/path.png";
import devLogo from "./assets/dev.png";

// Import testimonial person images
import person1 from "./assets/person1.avif";
import person2 from "./assets/person2.avif";
import person3 from "./assets/person3.avif";

function App() {
  const [activeLink, setActiveLink] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFormSubmitted(false);
    }, 3000);
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

        <section id="partners" className="partners">
          <div className="container">
            <h2>Our Partners</h2>
            <p>
              Proud to work with these organizations to support mental health
            </p>

            <div className="slider-container">
              <div className="logo-slider">
                <div className="logo-slide">
                  <div className="partner-logo">
                    <img src={nhsLogo} alt="NHS" />
                  </div>
                  <div className="partner-logo">
                    <img src={mindLogo} alt="Mind" />
                  </div>
                  <div className="partner-logo">
                    <img src={reactLogo} alt="React Mental Health" />
                  </div>
                  <div className="partner-logo">
                    <img src={leafLogo} alt="Leaf Therapy" />
                  </div>
                  <div className="partner-logo">
                    <img src={treeLogo} alt="Tree of Life" />
                  </div>
                  <div className="partner-logo">
                    <img src={tangleLogo} alt="Untangle Minds" />
                  </div>
                  <div className="partner-logo">
                    <img src={pathLogo} alt="Path Forward" />
                  </div>
                  <div className="partner-logo">
                    <img src={devLogo} alt="Mental Dev Foundation" />
                  </div>
                </div>

                {/* Clone for seamless infinite scrolling */}
                <div className="logo-slide">
                  <div className="partner-logo">
                    <img src={nhsLogo} alt="NHS" />
                  </div>
                  <div className="partner-logo">
                    <img src={mindLogo} alt="Mind" />
                  </div>
                  <div className="partner-logo">
                    <img src={reactLogo} alt="React Mental Health" />
                  </div>
                  <div className="partner-logo">
                    <img src={leafLogo} alt="Leaf Therapy" />
                  </div>
                  <div className="partner-logo">
                    <img src={treeLogo} alt="Tree of Life" />
                  </div>
                  <div className="partner-logo">
                    <img src={tangleLogo} alt="Untangle Minds" />
                  </div>
                  <div className="partner-logo">
                    <img src={pathLogo} alt="Path Forward" />
                  </div>
                  <div className="partner-logo">
                    <img src={devLogo} alt="Mental Dev Foundation" />
                  </div>
                </div>
              </div>
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

        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2>What People Say</h2>
            <p>Read about the experiences of those we've helped</p>

            <div className="testimonial-container">
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  "MindfulCare helped me find the courage to speak about my
                  anxiety. The resources and support have been invaluable on my
                  journey to recovery."
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={person1} alt="Jessica S." />
                  </div>
                  <div className="author-info">
                    <h4>Jessica S.</h4>
                    <p>Recovered from anxiety</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-quote">
                  "I was hesitant to seek help at first, but the compassionate
                  team here made all the difference. I've learned so many coping
                  strategies that have improved my daily life."
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={person2} alt="Michael B." />
                  </div>
                  <div className="author-info">
                    <h4>Michael B.</h4>
                    <p>Managing depression</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-quote">
                  "Finding this supportive community has been life-changing. I
                  no longer feel alone in my struggles, and I've made meaningful
                  connections with others on similar paths."
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={person3} alt="Amira T." />
                  </div>
                  <div className="author-info">
                    <h4>Amira T.</h4>
                    <p>Support group member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

            <div className="contact-wrapper">
              <h3>Send Us a Message</h3>
              <div className="contact-form-container">
                {formSubmitted ? (
                  <div className="success-message">
                    <p>
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="primary-btn">
                      Send Message
                    </button>
                  </form>
                )}
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
