import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../components/ServiceCard';
import { services, WHATSAPP_LINK } from '../data/services';

export default function Facials() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  const addons = [
    { name: 'Steam Add-on', price: '+£5' },
    { name: 'LED Light Therapy Add-on', price: '+£8' },
  ];

  return (
    <>
      <section className="page-hero page-hero-img">
        <img
          src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1200&q=70"
          alt=""
          className="page-hero-bg"
        />
        <div className="page-hero-overlay" />
        <div className="container">
          <h1 data-aos="fade-up">Facials &amp; Skin Treatments</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Advanced skincare treatments to rejuvenate, hydrate, and reveal your natural glow.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-grid">
          {services.facials.map((service) => (
            <ServiceCard key={service.name} {...service} addons={addons} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container" data-aos="zoom-in">
          <h2>Glow From Within</h2>
          <p>Book your facial or skin treatment and let your radiance shine through.</p>
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
