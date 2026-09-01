import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../components/ServiceCard';
import { services, WHATSAPP_LINK } from '../data/services';
import '../index.css';

export default function Hair() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  return (
    <>
      <section className="page-hero page-hero-img">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=70"
          alt=""
          className="page-hero-bg"
        />
        <div className="page-hero-overlay" />
        <div className="container">
          <h1 data-aos="fade-up">Hair Services</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Precision cuts, luxury colour, and styling — crafted to perfection for every occasion.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-grid">
          {services.hair.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container" data-aos="zoom-in">
          <h2>Ready for a New Look?</h2>
          <p>Book your hair appointment today and let us transform your style.</p>
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
