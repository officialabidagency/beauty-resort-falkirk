export const WHATSAPP_NUMBER = '447984929563';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = 'beautyresortfk2@gmail.com';
export const PHONE = '07984 929563';

export const socials = {
  instagram: 'https://www.instagram.com/beauty_resort_falkirk_/',
  facebook: 'https://www.facebook.com/share/19H6BLLyGM/',
};

export const services = {
  hair: [
    { name: 'Cut & Blow Dry', price: 'From £35', description: 'Precision cut styled to perfection with a luxury blow dry.' },
    { name: 'Trim / Fringe Trim', price: '£8', description: 'Quick maintenance trim to keep your style sharp.' },
    { name: 'Blow Dry', price: 'From £20', description: 'Smooth, voluminous blow dry for any occasion.' },
    { name: 'Bouncy Blow Dry', price: 'From £30', description: 'Full, bouncy blow dry with body and movement.' },
    { name: 'Curls', price: 'From £25', description: 'Beautiful curls crafted for a flawless finish.' },
    { name: 'Hair Styling / Hair Up', price: 'From £30', description: 'Elegant updos and styling for special events.' },
    { name: 'Root Colour', price: 'From £55', description: 'Seamless root colour refresh for a natural look.' },
    { name: 'Full Head Colour', price: 'From £70', description: 'Complete colour transformation from root to tip.' },
    { name: 'Toner / Glossing', price: 'From £70', description: 'Add shine and dimension with a toner or gloss treatment.' },
    { name: 'Balayage', price: 'From £95', description: 'Hand-painted highlights for a sun-kissed, natural finish.' },
    { name: 'Brazilian Blow Dry / Hair Botox', price: 'From £90', description: 'Smoothing treatment for frizz-free, silky hair.' },
    { name: 'Hair Jewellery', price: '£7–£10', description: 'Hair jewellery available to purchase or add to your hairstyle. Ask me about the available designs.' },
  ],
  headSpa: [
    {
      name: 'Japanese Head Spa',
      price: '£55',
      description: 'Traditional Japanese scalp therapy combining massage, deep cleansing, and relaxation for ultimate scalp health.',
      featured: false,
    },
    {
      name: 'Back, Neck & Shoulder Massage',
      price: '£30',
      description: 'A relaxing massage focusing on the back, neck and shoulders, designed to ease everyday tension and leave you feeling relaxed and refreshed. Perfect for: tight muscles, everyday stress and general relaxation. Please note: This is a relaxation massage and not a medical treatment.',
      duration: '30 minutes',
    },
    {
      name: 'Luxury Head Spa Package',
      price: '£100',
      description: 'The ultimate indulgence — a complete head-to-shoulder luxury experience.',
      featured: true,
      includes: [
        'Japanese Head Spa',
        'Neck & Shoulder Massage',
        'Express Facial',
        'Blow Dry',
        'Steam Treatment',
      ],
    },
  ],
  browsLashes: [
    { name: 'Brow Wax', price: '£8', description: 'Perfectly shaped brows with a precision wax.' },
    { name: 'Brow Tint', price: '£8', description: 'Define and enhance your brows with a custom tint.' },
    { name: 'Brow Wax & Tint', price: '£15', description: 'Complete brow shaping and tinting combo.' },
    { name: 'Brow Lamination', price: '£30', description: 'Sleek, fluffy brows set in place for a polished look.' },
    { name: 'Lash Lift & Tint', price: '£35', description: 'Natural-looking curled lashes with a dark tint.' },
  ],
  makeup: [
    { name: 'Party Makeup (Including Lashes)', price: '£35', description: 'Glamorous makeup look complete with strip lashes for any celebration.' },
    { name: 'Bridal Makeup', price: 'From £90', description: 'Timeless, flawless bridal makeup tailored to your vision.' },
    { name: 'Bridal Hair Styling', price: 'Contact for pricing', description: 'Bespoke bridal hairstyling to complement your look.' },
    { name: 'Hair Up', price: 'From £30', description: 'Elegant hair updos for any special occasion.' },
  ],
  facials: [
    { name: 'Express Facial', price: '£25', description: 'A quick refresh to cleanse, tone, and hydrate your skin.' },
    { name: 'Luxury / Advanced Facial', price: '£40', description: 'A deeply nourishing facial using premium products.', hasSteamAddOn: true },
    { name: 'Aloe Vera Facial', price: '£35', description: 'Soothing aloe vera treatment for calm, hydrated skin.', hasSteamAddOn: true },
    { name: 'Dermaplaning Facial', price: '£35', description: 'Gentle exfoliation revealing smooth, radiant skin.' },
    { name: 'Dermaplaning + LED Light Therapy', price: '£40', description: 'Advanced exfoliation combined with LED rejuvenation.' },
    { name: 'Hydra Dermabrasion (Hydrafacial)', price: '£60', description: 'Deep cleansing, exfoliation, and hydration in one treatment.', hasSteamAddOn: true },
    { name: 'Glass Skin Effect ✨', price: '£75', description: 'Dermaplaning, Hydra Hydration, Hyaluronic Acid, Cold Hammer, Cooling Jelly Mask, Moisturiser & SPF. Designed to leave your skin feeling smooth, hydrated, refreshed and beautifully glowing.' },
    { name: 'Microneedling', price: '£70', description: 'Collagen induction therapy for skin renewal and texture improvement.' },
  ],
};

export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
];
