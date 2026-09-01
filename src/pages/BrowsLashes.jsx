import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../components/ServiceCard';
import { services, WHATSAPP_LINK } from '../data/services';

export default function BrowsLashes() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  return (
    <>
      <section className="page-hero page-hero-img">
        <img
          src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1200&q=70"
          alt=""
          className="page-hero-bg"
        />
        <div className="page-hero-overlay" />
        <div className="container">
          <h1 data-aos="fade-up">Brows &amp; Lashes</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Perfectly shaped brows and gorgeous lashes to frame your face beautifully.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-grid">
          {services.browsLashes.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container" data-aos="zoom-in">
          <h2>Frame Your Eyes</h2>
          <p>Book your brow or lash treatment and let your eyes do the talking.</p>
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
