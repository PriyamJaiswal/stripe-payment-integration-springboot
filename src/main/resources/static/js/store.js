 // STORE — Cart & State Management (localStorage)

const Store = (() => {
  const KEYS = { CART: 'ec_cart', ADDRESSES: 'ec_addresses', ORDERS: 'ec_orders', WISHLIST: 'ec_wishlist', PROFILE: 'ec_profile' };
  const get = (k) => { try { return JSON.parse(localStorage.getItem(k)) || null; } catch { return null; } };
  const set = (k, v) => localStorage.setItem(k, JSON.stringify(v));

  /* --- Products Catalog --- */
  const PRODUCTS = [
    { id: 'smartphone', name: 'Smartphone', price: 15000, displayPrice: 150.00, image: '/images/smartphone.png', category: 'Electronics', rating: 4.5, reviews: 128, description: 'Premium smartphone with stunning display, powerful processor, and advanced camera system. Features 6.7" AMOLED display, 128GB storage, and all-day battery life.', specs: { Display: '6.7" AMOLED', Storage: '128 GB', Battery: '5000 mAh', Camera: '108 MP', RAM: '8 GB', OS: 'Android 14' }},
    { id: 'headphones', name: 'Headphones', price: 5000, displayPrice: 50.00, image: '/images/headphones.png', category: 'Audio', rating: 4.3, reviews: 89, description: 'Immersive wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Ultra-comfortable for all-day wear.', specs: { Type: 'Over-ear', Connectivity: 'Bluetooth 5.3', Battery: '30 hours', ANC: 'Yes', Weight: '250g', Driver: '40mm' }},
    { id: 'laptop', name: 'Laptop', price: 75000, displayPrice: 750.00, image: '/images/laptop.png', category: 'Computers', rating: 4.7, reviews: 234, description: 'Ultra-thin professional laptop with M-series chip, brilliant Retina display, and exceptional battery life. Perfect for creative professionals.', specs: { Display: '14" Retina', Processor: 'M3 Chip', RAM: '16 GB', Storage: '512 GB SSD', Battery: '18 hours', Weight: '1.4 kg' }},
    { id: 'serum', name: 'Vitamin C Serum', price: 4000, displayPrice: 40.00, image: '/images/img.png', category: 'Beauty', rating: 4.6, reviews: 312, description: 'Advanced vitamin C serum with hyaluronic acid for brighter, smoother skin. Dermatologist tested and suitable for all skin types.', specs: { Volume: '30 ml', Type: 'Serum', 'Key Ingredient': 'Vitamin C 20%', 'Skin Type': 'All', Cruelty: 'Free', Paraben: 'Free' }},
    { id: 'accessory', name: 'Smart Watch', price: 4000, displayPrice: 40.00, image: '/images/img_1.png', category: 'Wearables', rating: 4.2, reviews: 67, description: 'Feature-packed smartwatch with health monitoring, GPS tracking, and customizable watch faces. Water-resistant up to 50 meters.', specs: { Display: '1.4" AMOLED', Battery: '7 days', Water: 'IP68', GPS: 'Built-in', Sensors: 'Heart, SpO2', Compat: 'iOS & Android' }},
    { id: 'keyboard', name: 'Mechanical Keyboard', price: 12000, displayPrice: 120.00, image: '/images/img_2.png', category: 'Accessories', rating: 4.8, reviews: 156, description: 'Premium mechanical keyboard with hot-swappable switches, RGB backlighting, and aircraft-grade aluminum frame. Perfect for work and gaming.', specs: { Switches: 'Mechanical', Layout: '75%', Backlight: 'RGB', Connectivity: 'USB-C / BT', Battery: '4000 mAh', Frame: 'Aluminum' }},
  ];

  const getProduct = (id) => PRODUCTS.find(p => p.id === id);
  const getProducts = () => PRODUCTS;
  const getCategories = () => [...new Set(PRODUCTS.map(p => p.category))];

  /* --- Cart --- */
  const getCart = () => get(KEYS.CART) || [];
  const saveCart = (c) => { set(KEYS.CART, c); document.dispatchEvent(new Event('cartUpdated')); };
  const addToCart = (productId, qty = 1) => {
    const cart = getCart();
    const idx = cart.findIndex(i => i.id === productId);
    if (idx >= 0) cart[idx].qty += qty;
    else cart.push({ id: productId, qty });
    saveCart(cart);
  };
  const removeFromCart = (productId) => { saveCart(getCart().filter(i => i.id !== productId)); };
  const updateQty = (productId, qty) => {
    if (qty < 1) return removeFromCart(productId);
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) { item.qty = qty; saveCart(cart); }
  };
  const clearCart = () => saveCart([]);
  const getCartCount = () => getCart().reduce((t, i) => t + i.qty, 0);
  const getCartTotal = () => getCart().reduce((t, i) => { const p = getProduct(i.id); return t + (p ? p.price * i.qty : 0); }, 0);
  const getCartItems = () => getCart().map(i => ({ ...i, product: getProduct(i.id) })).filter(i => i.product);

  /* --- Addresses --- */
  const getAddresses = () => get(KEYS.ADDRESSES) || [];
  const saveAddress = (addr) => {
    const addrs = getAddresses();
    if (addr.id) { const idx = addrs.findIndex(a => a.id === addr.id); if (idx >= 0) addrs[idx] = addr; }
    else { addr.id = Date.now().toString(); addrs.push(addr); }
    if (addr.isDefault) addrs.forEach(a => { if (a.id !== addr.id) a.isDefault = false; });
    set(KEYS.ADDRESSES, addrs);
  };
  const deleteAddress = (id) => { set(KEYS.ADDRESSES, getAddresses().filter(a => a.id !== id)); };
  const getDefaultAddress = () => getAddresses().find(a => a.isDefault) || getAddresses()[0] || null;

  /* --- Orders --- */
  const getOrders = () => get(KEYS.ORDERS) || [];
  const createOrder = (data) => {
    const orders = getOrders();
    const order = {
      id: 'ORD-' + Date.now().toString(36).toUpperCase(),
      date: new Date().toISOString(),
      status: 'confirmed',
      items: data.items,
      address: data.address,
      shipping: data.shipping,
      payment: data.payment,
      subtotal: data.subtotal,
      shippingCost: data.shippingCost,
      tax: data.tax,
      total: data.total,
      coupon: data.coupon || null,
    };
    orders.unshift(order);
    set(KEYS.ORDERS, orders);
    return order;
  };
  const getOrder = (id) => getOrders().find(o => o.id === id);

  /* --- Wishlist --- */
  const getWishlist = () => get(KEYS.WISHLIST) || [];
  const toggleWishlist = (productId) => {
    let wl = getWishlist();
    if (wl.includes(productId)) wl = wl.filter(i => i !== productId);
    else wl.push(productId);
    set(KEYS.WISHLIST, wl);
    return wl.includes(productId);
  };
  const isInWishlist = (productId) => getWishlist().includes(productId);

  /* --- Shipping Options --- */
  const SHIPPING = [
    { id: 'standard', name: 'Standard Delivery', price: 0, days: '5-7 business days', desc: 'Free shipping on all orders' },
    { id: 'express', name: 'Express Delivery', price: 999, days: '2-3 business days', desc: 'Fast & reliable shipping' },
    { id: 'sameday', name: 'Same Day Delivery', price: 1999, days: 'Today by 9 PM', desc: 'Order within 2 hours' },
  ];
  const getShippingOptions = () => SHIPPING;

  return {
    PRODUCTS, getProduct, getProducts, getCategories,
    getCart, addToCart, removeFromCart, updateQty, clearCart, getCartCount, getCartTotal, getCartItems,
    getAddresses, saveAddress, deleteAddress, getDefaultAddress,
    getOrders, createOrder, getOrder,
    getWishlist, toggleWishlist, isInWishlist,
    getShippingOptions,
  };
})();
