import { useCart } from '../context/CartContext';

export default function ServiceCard({ name, price, description, featured, includes, addons }) {
  const { addItem, items } = useCart();
  const isInCart = items.some((i) => i.name === name);

  return (
    <div className={`service-card ${featured ? 'featured' : ''}`} data-aos="fade-up" data-aos-duration="600">
      {featured && <span className="badge">Most Popular</span>}
      <h3 className="service-name">{name}</h3>
      <p className="service-desc">{description}</p>
      <span className="service-price">{price}</span>

      {includes && includes.length > 0 && (
        <div className="addon-section">
          <h4>Includes</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {includes.map((item, i) => (
              <li key={i} className="addon-item">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {addons && addons.length > 0 && (
        <div className="addon-section">
          <h4>Add-ons</h4>
          {addons.map((addon, i) => (
            <div key={i} className="addon-item">
              <span>{addon.name}</span>
              <span className="addon-price">{addon.price}</span>
            </div>
          ))}
        </div>
      )}

      <div className="service-actions">
        <button
          className="btn btn-primary service-add-btn"
          onClick={() => addItem({ name, price })}
          disabled={isInCart}
        >
          {isInCart ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Added
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
