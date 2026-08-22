import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { WHATSAPP_LINK } from '../data/services';
import BookingForm from '../components/BookingForm';
import './Home.css';

const highlights = [
  {
    title: 'Hair Services',
    description: 'Precision cuts, luxury colour, balayage, and Brazilian blow dry.',
    link: '/services#hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=50',
  },
  {
    title: 'Japanese Head Spa',
    description: 'Traditional scalp therapy for deep relaxation and scalp health.',
    link: '/services#head-spa',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=50',
  },
  {
    title: 'Skin Treatments',
    description: 'Advanced facials, hydrafacial, microneedling, and dermaplaning.',
    link: '/services#facials',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=50',
  },
  {
    title: 'Brows & Lashes',
    description: 'Perfectly shaped brows, lamination, lash lifts, and tinting.',
    link: '/services#brows-lashes',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&q=50',
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
              <Link
                key={item.title}
                to={item.link}
                className="highlight-card"
                data-aos="fade-up"
                data-aos-delay={150 * (index + 1)}
              >
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
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book Your Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-strip">
        <div className="gallery-track">
          <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=40" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=300&q=40" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=300&q=40" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=300&q=40" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=40" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=40" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=300&q=40" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=300&q=40" alt="" loading="lazy" />
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
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Book on WhatsApp
            </a>
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
