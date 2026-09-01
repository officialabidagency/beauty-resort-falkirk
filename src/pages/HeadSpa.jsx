import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../components/ServiceCard';
import { services, WHATSAPP_LINK } from '../data/services';

export default function HeadSpa() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  return (
    <>
      <section className="page-hero page-hero-img">
        <img
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=70"
          alt=""
          className="page-hero-bg"
        />
        <div className="page-hero-overlay" />
        <div className="container">
          <h1 data-aos="fade-up">Japanese Head Spa</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Traditional Japanese scalp therapy — the ultimate relaxation and scalp health experience.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-grid">
          {services.headSpa.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container" data-aos="zoom-in">
          <h2>Experience the Healing</h2>
          <p>Book your Japanese Head Spa session and discover total scalp relaxation.</p>
          <div className="cta-actions">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
