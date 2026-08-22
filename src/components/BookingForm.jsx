import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { WHATSAPP_NUMBER, services } from '../data/services';
import './BookingForm.css';

const allServices = [
  ...services.hair,
  ...services.headSpa,
  ...services.browsLashes,
  ...services.makeup,
  ...services.facials,
];

export default function BookingForm() {
  const [searchParams] = useSearchParams();
  const preselectedNames = searchParams.get('services')?.split(',').filter(Boolean) || [];
  const [selectedServices, setSelectedServices] = useState(preselectedNames);
  const [form, setForm] = useState({ name: '', phone: '', address: '', date: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (preselectedNames.length > 0) {
      setSelectedServices(preselectedNames);
    }
  }, [searchParams]);

  const selectedDetails = selectedServices
    .map((name) => allServices.find((s) => s.name === name))
    .filter(Boolean);

  const addService = (serviceName) => {
    if (serviceName && !selectedServices.includes(serviceName)) {
      setSelectedServices((prev) => [...prev, serviceName]);
    }
  };

  const removeService = (serviceName) => {
    setSelectedServices((prev) => prev.filter((s) => s !== serviceName));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.address.trim()) e.address = 'Required';
    if (selectedServices.length === 0) e.services = 'Select at least one service';
    if (!form.date) e.date = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const serviceLines = selectedDetails
      .map((s, i) => `${i + 1}. ${s.name} — ${s.price}`)
      .join('%0A');

    const msg = [
      `Hello! I'd like to book an appointment.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
      `Services:%0A${serviceLines}`,
      `Date: ${form.date}`,
      ``,
      `Thank you!`,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, '_blank');
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section className="booking-section" id="booking">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Book Your Appointment</h2>
        <hr className="gold-line" />
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Fill in your details and we'll confirm your booking via WhatsApp
        </p>

        <form className="booking-form-full" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
          <div className="booking-row">
            <div className="booking-field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange('name')}
              />
              {errors.name && <span className="booking-error">{errors.name}</span>}
            </div>
            <div className="booking-field">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="e.g. 07123456789"
                value={form.phone}
                onChange={handleChange('phone')}
              />
              {errors.phone && <span className="booking-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="booking-field">
            <label>Address</label>
            <input
              type="text"
              placeholder="Your full address"
              value={form.address}
              onChange={handleChange('address')}
            />
            {errors.address && <span className="booking-error">{errors.address}</span>}
          </div>

          <div className="booking-field">
            <label>Add a Service</label>
            <select value="" onChange={(e) => { addService(e.target.value); e.target.value = ''; }}>
              <option value="">Select a service to add</option>
              {allServices.map((s) => (
                <option key={s.name} value={s.name} disabled={selectedServices.includes(s.name)}>
                  {s.name} — {s.price}
                </option>
              ))}
            </select>
            {errors.services && <span className="booking-error">{errors.services}</span>}
          </div>

          {selectedDetails.length > 0 && (
            <div className="booking-selected-services">
              {selectedDetails.map((s) => (
                <div key={s.name} className="booking-service-tag">
                  <span>{s.name} — {s.price}</span>
                  <button type="button" onClick={() => removeService(s.name)} aria-label="Remove">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="booking-field">
            <label>Date</label>
            <input
              type="date"
              value={form.date}
              onChange={handleChange('date')}
            />
            {errors.date && <span className="booking-error">{errors.date}</span>}
          </div>

          <button type="submit" className="btn btn-primary booking-submit">
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}
