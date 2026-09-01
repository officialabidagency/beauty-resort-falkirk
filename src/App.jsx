import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Toast from './components/Toast';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash === '#booking') {
      setTimeout(() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (hash === '#contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <Cart />
      <Toast />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:category" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}
