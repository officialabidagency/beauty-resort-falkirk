import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const { items, removeItem, clearCart, count, isOpen, setIsOpen, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    const serviceNames = items.map((i) => i.name).join(',');
    const query = serviceNames ? `?services=${encodeURIComponent(serviceNames)}` : '';
    setIsOpen(false);
    navigate(`/#booking${query}`);
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
      <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-header-left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <h3>Your Booking</h3>
            {count > 0 && <span className="cart-count">{count}</span>}
          </div>
          <button className="cart-close" onClick={() => setIsOpen(false)} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-cash-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          Cash Only
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-700)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <p>No services selected yet</p>
            <span>Browse services and select treatments</span>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li key={item.name} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">{item.price}</span>
                  </div>
                  {item.addOns && item.addOns.length > 0 && (
                    <div className="cart-item-addons">
                      {item.addOns.map((ad) => (
                        <span key={ad.name} className="cart-item-addon">+ {ad.name} ({ad.price})</span>
                      ))}
                    </div>
                  )}
                  <button className="cart-item-remove" onClick={() => removeItem(item.name)} aria-label="Remove">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-total">
              <span>Total</span>
              <span className="cart-total-price">£{totalPrice}</span>
            </div>

            <div className="cart-footer">
              <button className="btn btn-outline cart-clear" onClick={clearCart}>
                Clear All
              </button>
              <button className="btn btn-primary cart-book-btn" onClick={handleConfirmBooking}>
                Confirm Booking
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
