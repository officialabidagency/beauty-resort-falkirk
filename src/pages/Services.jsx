import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../components/ServiceCard';
import { services, WHATSAPP_LINK } from '../data/services';
import './Services.css';
import '../index.css';

const categories = [
  { key: 'hair', id: 'hair', title: 'Hair Services', description: 'Precision cuts, luxury colour, and styling — crafted to perfection.', image: '/images/hair.jpg' },
  { key: 'headSpa', id: 'head-spa', title: 'Japanese Head Spa', description: 'Traditional scalp therapy for deep relaxation and scalp health.', image: '/images/headspa.jpg' },
  { key: 'browsLashes', id: 'brows-lashes', title: 'Brows & Lashes', description: 'Perfectly shaped brows, lamination, lash lifts, and tinting.', image: '/images/lashes.jpg' },
  { key: 'makeup', id: 'makeup', title: 'Makeup', description: 'Glamorous party makeup, bridal looks, and bespoke hairstyling.', image: '/images/makeup.jpg' },
  { key: 'facials', id: 'facials', title: 'Facials & Skin Treatments', description: 'Advanced facials, hydrafacial, microneedling, and dermaplaning.', image: '/images/skin.jpg' },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="services-tabs-wrapper">
        <div className="services-tabs">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="services-tab"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(cat.id);
              }}
            >
              {cat.title}
            </a>
          ))}
        </div>
      </div>

      {categories.map((cat) => (
        <section key={cat.key} id={cat.id} className="service-category-section">
          <div className="page-hero page-hero-img">
            <img src={cat.image} alt="" className="page-hero-bg" loading="lazy" />
            <div className="page-hero-overlay" />
            <div className="container">
              <h1 data-aos="fade-up">{cat.title}</h1>
              <p data-aos="fade-up" data-aos-delay="100">{cat.description}</p>
            </div>
          </div>
          <section className="services-section">
            <div className="services-grid">
              {services[cat.key].map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </section>
        </section>
      ))}

      <section className="cta-section">
        <div className="container" data-aos="zoom-in">
          <h2>Ready to Treat Yourself?</h2>
          <p>Add services to your cart and confirm your booking today.</p>
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
