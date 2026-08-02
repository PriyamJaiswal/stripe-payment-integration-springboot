
//   APP — Shared Components & Utilities


/* --- SVG Icons --- */
const Icons = {
  search: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>`,
  cart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>`,
  heartFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>`,
  minus: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"/></svg>`,
  starEmpty: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>`,
  truck: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>`,
  refresh: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>`,
  edit: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/></svg>`,
  package: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>`,
  creditCard: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>`,
};

/* --- Toast System --- */
const Toast = (() => {
  let container;
  const init = () => {
    if (!container) { container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
  };
  const show = (msg, type = 'success', duration = 3000) => {
    init();
    const colors = { success: 'var(--success)', error: 'var(--danger)', warning: 'var(--warning)', info: 'var(--primary)' };
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `<span style="color:${colors[type] || colors.info}">${type === 'success' ? Icons.check : type === 'error' ? Icons.close : Icons.shield}</span><span>${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">${Icons.close}</button>`;
    container.appendChild(el);
    setTimeout(() => { el.style.animation = 'slideOut .3s ease forwards'; setTimeout(() => el.remove(), 300); }, duration);
  };
  return { show, success: (m) => show(m, 'success'), error: (m) => show(m, 'error'), warning: (m) => show(m, 'warning'), info: (m) => show(m, 'info') };
})();

/* --- Render Stars --- */
function renderStars(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) s += i <= Math.round(rating) ? Icons.star : Icons.starEmpty;
  return `<span class="stars">${s}</span>`;
}

/* --- Format Currency --- */
function formatPrice(cents) { return '$' + (cents / 100).toFixed(2); }

/* --- Render Navbar --- */
function renderNavbar(activePage = '') {
  const count = Store.getCartCount();
  return `
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="/" class="nav-logo">
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
        Cartly
      </a>
      <div class="nav-search">
        ${Icons.search}
        <input type="text" placeholder="Search products..." id="nav-search-input">
      </div>
      <div class="nav-links">
        <a href="/" class="${activePage === 'home' ? 'active' : ''}">Home</a>
        <a href="/cart" class="${activePage === 'cart' ? 'active' : ''}">Cart</a>
        <a href="/orders" class="${activePage === 'orders' ? 'active' : ''}">Orders</a>
      </div>
      <div class="nav-actions">
        <a href="/wishlist" class="nav-icon" title="Wishlist">${Icons.heart}</a>
        <a href="/cart" class="nav-icon" title="Cart" id="nav-cart-icon">
          ${Icons.cart}
          ${count > 0 ? `<span class="cart-badge" id="cart-badge">${count}</span>` : '<span class="cart-badge" id="cart-badge" style="display:none">0</span>'}
        </a>
        <a href="/profile" class="nav-icon" title="Profile">${Icons.user}</a>
      </div>
      <button class="mobile-toggle" id="mobile-toggle">${Icons.menu}</button>
    </div>
  </nav>
  <div class="mobile-nav" id="mobile-nav">
    <div class="mobile-nav-panel">
      <button onclick="document.getElementById('mobile-nav').classList.remove('active')" style="float:right">${Icons.close}</button>
      <div class="mobile-nav-links">
        <a href="/">Home</a>
        <a href="/cart">Cart (${count})</a>
        <a href="/orders">Orders</a>
        <a href="/profile">Profile</a>
      </div>
    </div>
  </div>`;
}

/* --- Render Footer --- */
function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="/" class="nav-logo" style="color:#fff;margin-bottom:8px;display:inline-flex">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
            Cartly
          </a>
          <p class="footer-desc">Premium shopping experience with curated products and secure payments powered by Stripe.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <div class="footer-links">
            <a href="/">All Products</a><a href="/#categories">Categories</a><a href="/orders">Orders</a>
          </div>
        </div>
        <div>
          <h4>Support</h4>
          <div class="footer-links">
            <a href="#">Help Center</a><a href="#">Shipping</a><a href="#">Returns</a>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div class="footer-links">
            <a href="#">About</a><a href="#">Careers</a><a href="#">Privacy</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Cartly. All rights reserved.</span>
        <div class="footer-social">
          <a href="#">Twitter</a><a href="#">GitHub</a><a href="#">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>`;
}

/* --- Init Navbar Events --- */
function initNavbar() {
  const toggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => mobileNav.classList.add('active'));
    mobileNav.addEventListener('click', (e) => { if (e.target === mobileNav) mobileNav.classList.remove('active'); });
  }
  // Update cart badge on changes
  document.addEventListener('cartUpdated', () => {
    const badge = document.getElementById('cart-badge');
    const count = Store.getCartCount();
    if (badge) { badge.textContent = count; badge.style.display = count > 0 ? 'flex' : 'none'; }
  });
  // Search
  const searchInput = document.getElementById('nav-search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        window.location.href = '/?search=' + encodeURIComponent(searchInput.value.trim());
      }
    });
  }
}

/* --- Ripple Effect on Buttons --- */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

/* --- Stripe Integration Helper (reuses existing endpoint) --- */
const StripeHelper = (() => {
  const stripe = typeof Stripe !== 'undefined' ? Stripe("pk_test_51SRcD6QNjilw6T4B8XA5DjOE0LkzvRqioQ7lq9i5q9lFpIrAGf44Tp4k1UKB7MEUJWUWMg9HZMZDKmszluUmCpxV00nRqUZBxU") : null;

  const checkout = async (name, amountInCents, quantity) => {
    if (!stripe) { Toast.error('Payment system not loaded'); return; }
    try {
      const res = await fetch('/product/v1/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, amount: amountInCents, quantity }),
      });
      if (!res.ok) throw new Error('Checkout failed');
      const data = await res.json();
      const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (result.error) Toast.error(result.error.message);
    } catch (err) {
      console.error(err);
      Toast.error('Payment failed. Please try again.');
    }
  };

  return { checkout };
})();
