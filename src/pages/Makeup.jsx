import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../components/ServiceCard';
import { services, WHATSAPP_LINK } from '../data/services';

export default function Makeup() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  const makeupAddons = [
    { name: 'Cooling Eye Pads / Under Eye Pads', price: '+£5' },
  ];

  return (
    <>
      <section className="page-hero page-hero-img">
        <img
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=70"
          alt=""
          className="page-hero-bg"
        />
        <div className="page-hero-overlay" />
        <div className="container">
          <h1 data-aos="fade-up">Makeup</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Flawless makeup for every occasion — from party glam to timeless bridal beauty.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-grid">
          {services.makeup.map((service) => (
            <ServiceCard
              key={service.name}
              {...service}
              addons={
                service.name.includes('Party Makeup') || service.name.includes('Bridal Makeup')
                  ? makeupAddons
                  : undefined
              }
            />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container" data-aos="zoom-in">
          <h2>Look Your Absolute Best</h2>
          <p>Book your makeup appointment — whether it's for a special day or a night out.</p>
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
