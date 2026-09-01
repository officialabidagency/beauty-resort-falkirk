import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookingForm from '../components/BookingForm';
import './Home.css';

const highlights = [
  {
    title: 'Hair Services',
    description: 'Precision cuts, luxury colour, balayage, and Brazilian blow dry.',
    link: '/services#hair',
    image: '/images/hair.jpg',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfD-YlMEjbYuG9xBMYcvDozgaZl9L-Frc2g6X8_hgPK7dIIXQ/viewform?usp=publish-editor',
  },
  {
    title: 'Japanese Head Spa',
    description: 'Traditional scalp therapy for deep relaxation and scalp health.',
    link: '/services#head-spa',
    image: '/images/headspa.jpg',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScqGFpIA0xtBSOEhi8hTG-f0aJQmh5A3bR-76UmbRZ4_Y3cCQ/viewform?usp=publish-editor',
  },
  {
    title: 'Skin Treatments',
    description: 'Advanced facials, hydrafacial, microneedling, and dermaplaning.',
    link: '/services#facials',
    image: '/images/skin.jpg',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe3XvjNUYZ0XACJSvJf9XoYG2r74cIwCZoDV1OEZYVrpwin_A/viewform?usp=publish-editor',
  },
  {
    title: 'Brows & Lashes',
    description: 'Perfectly shaped brows, lamination, lash lifts, and tinting.',
    link: '/services#brows-lashes',
    image: '/images/lashes.jpg',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeZd7axWB30jKKuE4uQt1Ojq7zt6g6KdO9k7O0ZVk9vu1a5Lg/viewform?usp=publish-editor',
  },
  {
    title: 'Makeup',
    description: 'Glamorous party makeup, bridal looks, and bespoke hairstyling.',
    link: '/services#makeup',
    image: '/images/makeup.jpg',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdCpDfibkTvCYM96e8G6O0caQA2gUIehVO3s-cyCnoRMXBZUA/viewform?usp=publish-editor',
  },
];

const aboutFeatures = [
  'Private one-to-one appointments',
  'Home salon with garden access',
  'Luxury products & techniques',
  'Appointment-only for your comfort',
];

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=50"
            alt=""
            className="hero-bg-img"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content container">
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
            Beauty Resort
            <span className="hero-title-accent">Falkirk</span>
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
            Luxury Hair &bull; Beauty &bull; Advanced Skin Treatments &bull; Japanese Head Spa
          </p>
          <p className="hero-tagline" data-aos="fade-up" data-aos-delay="400">
            Private one-to-one appointments in the heart of Falkirk
          </p>
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="500">
            <Link to="/services" className="btn btn-outline-gold">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Services</h2>
          <hr className="gold-line" />
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Discover our full range of luxury beauty treatments
          </p>
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="highlight-card"
                data-aos="fade-up"
                data-aos-delay={150 * (index + 1)}
              >
                <Link to={item.link} className="highlight-card-link">
                  <div className="highlight-img-wrap">
                    <img src={item.image} alt={item.title} className="highlight-img" loading="lazy" />
                    <div className="highlight-img-overlay" />
                  </div>
                  <div className="highlight-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="highlight-arrow">
                      View Services
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </Link>
                <a
                  href={item.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-form-link"
                >
                  Fill Consultation Form
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-col" data-aos="fade-right">
              <div className="about-image-main">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=50"
                  alt="Beauty Resort salon"
                  loading="lazy"
                />
                <div className="about-image-overlay" />
              </div>
            </div>
            <div className="about-content" data-aos="fade-left">
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Your Private<br />Beauty Sanctuary
              </h2>
              <hr className="gold-line" style={{ margin: '20px 0 30px 0' }} />
              <p>
                Nestled in the heart of Falkirk, Beauty Resort offers an exclusive,
                private beauty experience like no other. Every appointment is one-to-one,
                ensuring you receive undivided attention in a calm, luxurious setting.
              </p>
              <p>
                From our home salon with beautiful garden access, we deliver premium
                hair services, advanced skin treatments, and our signature Japanese Head Spa
                — all tailored to your individual needs.
              </p>
              <ul className="about-features">
                {aboutFeatures.map((feature) => (
                  <li key={feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/#booking" className="btn btn-primary">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-strip">
        <div className="gallery-track">
          <img src="/images/hair.jpg" alt="Hair Services" loading="lazy" />
          <img src="/images/headspa.jpg" alt="Japanese Head Spa" loading="lazy" />
          <img src="/images/skin.jpg" alt="Skin Treatments" loading="lazy" />
          <img src="/images/lashes.jpg" alt="Brows & Lashes" loading="lazy" />
          <img src="/images/makeup.jpg" alt="Makeup" loading="lazy" />
          <img src="/images/hair.jpg" alt="Hair Services" loading="lazy" />
          <img src="/images/headspa.jpg" alt="Japanese Head Spa" loading="lazy" />
          <img src="/images/skin.jpg" alt="Skin Treatments" loading="lazy" />
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg">
          <img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=50"
            alt=""
            className="cta-bg-img"
          />
          <div className="cta-overlay" />
        </div>
        <div className="container" data-aos="zoom-in">
          <h2>Ready to Treat Yourself?</h2>
          <p>Book your private appointment today and experience luxury beauty in Falkirk.</p>
          <div className="cta-actions">
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
}
