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

const generateBookingId = () => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(1000 + Math.random() * 9000);
  return `BR-${year}${month}${day}-${random}`;
};

export default function BookingForm() {
  const [searchParams] = useSearchParams();
  const preselectedNames = searchParams.get('services')?.split(',').filter(Boolean) || [];
  const [selectedServices, setSelectedServices] = useState(preselectedNames);
  const [addOns, setAddOns] = useState({});
  const [form, setForm] = useState({ name: '', phone: '', allergies: '', skinConditions: '', date: '' });
  const [patchTestAgreed, setPatchTestAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (preselectedNames.length > 0) {
      setSelectedServices(preselectedNames);
    }
  }, [searchParams]);

  const selectedDetails = selectedServices
    .map((name) => allServices.find((s) => s.name === name))
    .filter(Boolean);

  const hasSteamAddOnEligible = selectedDetails.some((s) => s.hasSteamAddOn);

  const addService = (serviceName) => {
    if (serviceName && !selectedServices.includes(serviceName)) {
      setSelectedServices((prev) => [...prev, serviceName]);
    }
  };

  const removeService = (serviceName) => {
    setSelectedServices((prev) => prev.filter((s) => s !== serviceName));
    setAddOns((prev) => {
      const next = { ...prev };
      delete next[serviceName];
      return next;
    });
  };

  const toggleAddOn = (serviceName) => {
    setAddOns((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
  };

  const calculateTotal = () => {
    return selectedDetails.reduce((sum, s) => {
      const base = parseInt(s.price.replace(/[^0-9]/g, '')) || 0;
      const steam = addOns[s.name] ? 5 : 0;
      return sum + base + steam;
    }, 0);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (selectedServices.length === 0) e.services = 'Select at least one service';
    if (!form.date) e.date = 'Required';
    if (!patchTestAgreed) e.patchTest = 'Please acknowledge the patch test notice';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const bookingId = generateBookingId();
    const total = calculateTotal();

    const serviceLines = selectedDetails.map((s, i) => {
      let line = `${i + 1}. ${s.name} — ${s.price}`;
      if (addOns[s.name]) line += ` + £5 Steam Add-on`;
      return line;
    }).join('%0A');

    const healthNotes = [];
    if (form.allergies.trim()) healthNotes.push(`Allergies: ${form.allergies}`);
    if (form.skinConditions.trim()) healthNotes.push(`Skin Conditions: ${form.skinConditions}`);
    const healthSection = healthNotes.length > 0
      ? `%0AHealth Notes:%0A${healthNotes.join('%0A')}`
      : '';

    const msg = [
      `New Booking Request`,
      ``,
      `Booking ID: ${bookingId}`,
      ``,
      `Client Details:`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      healthSection,
      ``,
      `Selected Treatments:%0A${serviceLines}`,
      ``,
      `Total: £${total} (Cash Only)`,
      ``,
      `Preferred Date: ${form.date}`,
      ``,
      `A patch test may be required for certain treatments.`,
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

        <div className="booking-cash-notice" data-aos="fade-up" data-aos-delay="150">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          Cash Only — No online payment required
        </div>

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
              <label>Phone Number</label>
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
                  <div className="booking-service-tag-info">
                    <span>{s.name} — {s.price}</span>
                    {s.hasSteamAddOn && (
                      <label className="booking-steam-toggle">
                        <input
                          type="checkbox"
                          checked={!!addOns[s.name]}
                          onChange={() => toggleAddOn(s.name)}
                        />
                        <span>+£5 Steam</span>
                      </label>
                    )}
                  </div>
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
            <label>Do you have any allergies?</label>
            <input
              type="text"
              placeholder="List any allergies (optional)"
              value={form.allergies}
              onChange={handleChange('allergies')}
            />
          </div>

          <div className="booking-field">
            <label>Do you have any skin conditions?</label>
            <input
              type="text"
              placeholder="List any skin conditions (optional)"
              value={form.skinConditions}
              onChange={handleChange('skinConditions')}
            />
          </div>

          <div className="booking-patch-test">
            <label className={`booking-patch-label ${errors.patchTest ? 'error' : ''}`}>
              <input
                type="checkbox"
                checked={patchTestAgreed}
                onChange={() => {
                  setPatchTestAgreed(!patchTestAgreed);
                  if (errors.patchTest) setErrors((prev) => ({ ...prev, patchTest: undefined }));
                }}
              />
              <span>I understand that a patch test may be required for certain treatments.</span>
            </label>
            {errors.patchTest && <span className="booking-error">{errors.patchTest}</span>}
          </div>

          <div className="booking-field">
            <label>Preferred Date</label>
            <input
              type="date"
              value={form.date}
              onChange={handleChange('date')}
            />
            {errors.date && <span className="booking-error">{errors.date}</span>}
          </div>

          {selectedDetails.length > 0 && (
            <div className="booking-price-summary">
              <span className="booking-price-label">Total (Cash Only)</span>
              <span className="booking-price-value">£{calculateTotal()}</span>
            </div>
          )}

          <button type="submit" className="btn btn-primary booking-submit">
            Send Booking via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
