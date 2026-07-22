const WHATSAPP_NUMBER = "213564563148";


// PRODUITS (dupliqué de script.js — gardez les deux fichiers synchronisés)

const PRODUCTS = {
  p1: { price:1200, maker:'Atelier  — Sétif',
        name:{ fr:'Panneau mural Mandala Ø 60 cm', ar:'لوحة حائط ماندالا Ø 60 سم' } },
  p2: { price:6200, maker:'Atelier  — Sétif',
        name:{ fr:'Suspension géométrique hexagonale', ar:'مصباح معلّق هندسي سداسي' } },
  p3: { price:3900, maker:'Atelier  — Sétif',
        name:{ fr:'Étagère murale silhouette maison', ar:'رف حائط بتصميم منزل' } },
  p4: { price:2300, maker:'Atelier  — Sétif',
        name:{ fr:'Porte-nom calligraphié sur mesure', ar:'لوحة اسم بخط مخصص' } },
  p5: { price:7000, maker:'Atelier  — Sétif',
        name:{ fr:'Panneau  60 cm', ar:'لوحة   60 سم' } },
        p6: { price:5000, maker:'Atelier  — Sétif',
        name:{ fr:'Produit', ar:'لوحة  م' } },

};


// TRADUCTIONS (sous-ensemble utilisé sur cette page)

const T = {
  fr: {
    "order.continue":"← Continuer mes achats",
    "order.title":"Votre commande",
    "order.subtitle":"Vérifiez vos articles, indiquez vos coordonnées, puis envoyez la commande directement à l'atelier par WhatsApp.",
    "order.empty":"Votre panier est vide.<br>Parcourez nos <a href=\"index.html#produits\">créations</a> pour ajouter un article.",
    "order.clear":"Vider le panier",
    "order.delivery":"Informations de livraison",

    "form.name":"Nom complet", "form.name.ph":"Votre nom",
    "form.phone":"Téléphone", "form.phone.ph":"05 xx xx xx xx",
    "form.wilaya":"Wilaya", "form.wilaya.ph":"ex. Sétif",
    "form.commune":"Commune", "form.commune.ph":"ex. El Eulma",
    "form.address":"Adresse de livraison", "form.address.ph":"Rue, immeuble, repère...",

    "cart.subtotal":"Sous-total", "cart.shipping":"Livraison", "cart.shippingVal":"Calculée par l'atelier",
    "cart.total":"Total", "cart.sendWa":"Envoyer la commande via WhatsApp",
    "cart.remove":"retirer",
    "cart.wanote":"Votre commande sera envoyée par <b>WhatsApp</b> à l'atelier, qui vous confirmera le prix final et le délai de livraison.",

    "alert.checkout":"Merci de renseigner au moins votre nom, téléphone et adresse de livraison.",
    "wa.orderTitle":"Nouvelle commande MR Décor",
    "wa.total":"Total", "wa.client":"Client", "wa.phone":"Téléphone", "wa.wilayaCommune":"Wilaya/Commune", "wa.address":"Adresse",

    "footer.copy":"© 2026 MR Décor", "footer.cities":"Sétif"
  },
  ar: {
    "order.continue":"→ متابعة التسوق",
    "order.title":"طلبك",
    "order.subtitle":"تحقق من مقالاتك، أدخل معلومات التواصل، ثم أرسل الطلب مباشرة إلى الورشة عبر واتساب.",
    "order.empty":"سلتك فارغة.<br>تصفّح <a href=\"index.html#produits\">تصاميمنا</a> لإضافة قطعة.",
    "order.clear":"إفراغ السلة",
    "order.delivery":"معلومات التوصيل",

    "form.name":"الاسم الكامل", "form.name.ph":"اسمك",
    "form.phone":"رقم الهاتف", "form.phone.ph":"05 xx xx xx xx",
    "form.wilaya":"الولاية", "form.wilaya.ph":"مثال: سطيف",
    "form.commune":"البلدية", "form.commune.ph":"مثال: العلمة",
    "form.address":"عنوان التوصيل", "form.address.ph":"الشارع، العمارة، نقطة مرجعية...",

    "cart.subtotal":"المجموع الفرعي", "cart.shipping":"التوصيل", "cart.shippingVal":"تحدده الورشة",
    "cart.total":"المجموع", "cart.sendWa":"إرسال الطلب عبر واتساب",
    "cart.remove":"إزالة",
    "cart.wanote":"سيتم إرسال طلبك عبر <b>واتساب</b> إلى الورشة، التي ستؤكد لك السعر النهائي ومدة التوصيل.",

    "alert.checkout":"يرجى تعبئة الاسم ورقم الهاتف وعنوان التوصيل على الأقل.",
    "wa.orderTitle":"طلب جديد — MR Décor",
    "wa.total":"المجموع", "wa.client":"الزبون", "wa.phone":"الهاتف", "wa.wilayaCommune":"الولاية/البلدية", "wa.address":"العنوان",

    "footer.copy":"© 2026 MR Décor", "footer.cities":"سطيف"
  }
};

let currentLang = 'fr';

function applyTranslations(){
  const dict = T[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(!dict[key]) return;
    if(el.getAttribute('data-i18n-html') === 'true'){
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    if(dict[key]) el.setAttribute('placeholder', dict[key]);
  });
}

function setLanguage(lang){
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyTranslations();
  renderOrder();
}

document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>setLanguage(btn.dataset.lang));
});


// MODE CLAIR / MODE NUIT

function applyTheme(theme){
  if(theme === 'dark'){
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  try{ localStorage.setItem('mrdecor_theme', theme); }catch(e){}
}
(function initTheme(){
  let saved = 'light';
  try{ saved = localStorage.getItem('mrdecor_theme') || 'light'; }catch(e){}
  applyTheme(saved);
})();
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyTheme(isDark ? 'light' : 'dark');
});


// PANIER (localStorage — partagé avec index.html)
// Remarque : localStorage fonctionne une fois le site publié en ligne.
function getCart(){
  try{ return JSON.parse(localStorage.getItem('mrdecor_cart') || '[]'); }
  catch(e){ return []; }
}
function saveCart(cart){
  try{ localStorage.setItem('mrdecor_cart', JSON.stringify(cart)); }catch(e){}
}

function addToCartFromUrl(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if(id && PRODUCTS[id]){
    const qty = Math.max(1, parseInt(params.get('qty'), 10) || 1);
    let cart = getCart();
    const existing = cart.find(i=>i.id===id);
    if(existing){ existing.qty += qty; } else { cart.push({id, qty}); }
    saveCart(cart);
  }
  history.replaceState(null, '', window.location.pathname);
}

function fmt(n){ return n.toLocaleString('fr-FR') + ' DA'; }

const orderItemsEl = document.getElementById('orderItems');
const orderEmptyEl = document.getElementById('orderEmpty');
const orderSummaryEl = document.getElementById('orderSummary');
const clearCartBtn = document.getElementById('clearCart');
const subtotalVal = document.getElementById('subtotalVal');
const totalVal = document.getElementById('totalVal');

function renderOrder(){
  const dict = T[currentLang];
  let cart = getCart().filter(i=>PRODUCTS[i.id]);

  if(cart.length === 0){
    orderEmptyEl.style.display = 'block';
    orderItemsEl.style.display = 'none';
    orderSummaryEl.style.display = 'none';
    clearCartBtn.style.display = 'none';
    applyTranslations();
    return;
  }

  orderEmptyEl.style.display = 'none';
  orderItemsEl.style.display = 'block';
  orderSummaryEl.style.display = 'block';
  clearCartBtn.style.display = 'inline-block';

  orderItemsEl.innerHTML = cart.map(item=>{
    const p = PRODUCTS[item.id];
    const name = p.name[currentLang];
    return `
      <div class="cart-item">
        <div class="thumb"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg></div>
        <div class="info">
          <div class="name">${name}</div>
          <div class="unit">${p.maker} · ${fmt(p.price)}</div>
          <div class="qty-ctrl">
            <button onclick="changeQty('${item.id}',-1)">−</button>
            <span class="qn">${item.qty}</span>
            <button onclick="changeQty('${item.id}',1)">+</button>
            <button class="item-remove" onclick="removeItem('${item.id}')">${dict['cart.remove']}</button>
          </div>
        </div>
        <div class="item-total">${fmt(p.price*item.qty)}</div>
      </div>
    `;
  }).join('');

  const subtotal = cart.reduce((s,i)=>s+PRODUCTS[i.id].price*i.qty,0);
  subtotalVal.textContent = fmt(subtotal);
  totalVal.textContent = fmt(subtotal);

  applyTranslations();
}

function changeQty(id, delta){
  let cart = getCart();
  const item = cart.find(i=>i.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){ cart = cart.filter(i=>i.id!==id); }
  saveCart(cart);
  renderOrder();
}
function removeItem(id){
  let cart = getCart().filter(i=>i.id!==id);
  saveCart(cart);
  renderOrder();
}
window.changeQty = changeQty;
window.removeItem = removeItem;

clearCartBtn.addEventListener('click', ()=>{
  saveCart([]);
  renderOrder();
});

document.getElementById('sendWhatsapp').addEventListener('click', ()=>{
  const dict = T[currentLang];
  const cart = getCart().filter(i=>PRODUCTS[i.id]);
  if(cart.length === 0) return;

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const wilaya = document.getElementById('custWilaya').value.trim();
  const commune = document.getElementById('custCommune').value.trim();
  const address = document.getElementById('custAddress').value.trim();

  if(!name || !phone || !address){
    alert(dict['alert.checkout']);
    return;
  }

  const subtotal = cart.reduce((s,i)=>s+PRODUCTS[i.id].price*i.qty,0);
  let msg = `${dict['wa.orderTitle']}\n\n`;
  cart.forEach(i=>{
    const p = PRODUCTS[i.id];
    msg += `• ${p.name[currentLang]} x${i.qty} — ${fmt(p.price*i.qty)}\n`;
  });
  msg += `\n${dict['wa.total']}: ${fmt(subtotal)}\n\n`;
  msg += `${dict['wa.client']}: ${name}\n${dict['wa.phone']}: ${phone}\n${dict['wa.wilayaCommune']}: ${wilaya} / ${commune}\n${dict['wa.address']}: ${address}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});

// ====== Init ======
addToCartFromUrl();
renderOrder();
