
const WHATSAPP_NUMBER = "213564563148"; // remplacez par le numéro WhatsApp de la boutique, format international sans le +


// PRODUITS (dupliqué dans commande.js — garder les deux fichiers synchronisés)

const PRODUCTS = {
  p1: { price:1200, maker:'Atelier  — Sétif',
        name:{ fr:'Panneau mural Mandala Ø 60 cm', ar:'لوحة حائط ماندالا Ø 60 سم' },
        tag:{ fr:'Bois massif', ar:'خشب صلب' } },
  p2: { price:6200, maker:'Atelier  — Sétif',
        name:{ fr:'Suspension géométrique hexagonale', ar:'مصباح معلّق هندسي سداسي' },
        tag:{ fr:'MDF laqué', ar:'MDF مطلي' } },
  p3: { price:3900, maker:'Atelier  — Sétif',
        name:{ fr:'Étagère murale silhouette maison', ar:'رف حائط بتصميم منزل' },
        tag:{ fr:'Métal découpé', ar:'معدن مقصوص' } },
  p4: { price:2300, maker:'Atelier  — Sétif',
        name:{ fr:'Porte-nom calligraphié sur mesure', ar:'لوحة اسم بخط مخصص' },
        tag:{ fr:'Noyer massif', ar:'خشب جوز صلب' } },
  p5: { price:7000, maker:'Atelier  — Sétif',
        name:{ fr:'Panneau  60 cm', ar:'لوحة   60 سم' } },
        p6: { price:5000, maker:'Atelier  — Sétif',
        name:{ fr:'Produit', ar:'لوحة  م' } },
};


// TRADUCTIONS (dupliqué dans commande.js pour les clés utilisées là-bas)

const T = {
  fr: {
    "nav.categories":"Catégories", "nav.comment":"Comment ça marche", "nav.produits":"Créations",
    "header.cart":"Panier", "header.menu":"MENU",

    "hero.eyebrow":"Création CNC & décoration",
    "hero.title":"La précision d'une machine, <em>l'âme</em> d'un atelier.",
    "hero.lead":"MR Décor est l'atelier CNC qui donne vie à vos idées déco — panneaux ajourés, luminaires, mobilier et objets gravés, fabriqués à la demande.",
    "hero.cta1":"Découvrir les créations",
    "hero.stat1":"Commandes livrées", "hero.stat2":"Note moyenne clients", "hero.stat3":"Délai moyen",

    "cat.eyebrow":"Catalogue", "cat.title":"Six familles de pièces, un seul fichier de découpe.",
    "cat.desc":"Chaque catégorie regroupe des modèles prêts à commander ou personnalisables aux dimensions de votre intérieur.",
    "cat.1.idx":"01 / Murale", "cat.1.title":"Décoration murale", "cat.1.n":"312 modèles",
    "cat.2.idx":"02 / Lumière", "cat.2.title":"Luminaires ajourés", "cat.2.n":"148 modèles",
    "cat.3.idx":"03 / Mobilier", "cat.3.title":"Mobilier sur mesure", "cat.3.n":"96 modèles",
    "cat.4.idx":"04 / Signes", "cat.4.title":"Signalétique & enseignes", "cat.4.n":"204 modèles",
    "cat.5.idx":"05 / Objets", "cat.5.title":"Objets décoratifs", "cat.5.n":"176 modèles",
    "cat.6.idx":"06 / Cadeaux", "cat.6.title":"Pièces personnalisées", "cat.6.n":"89 modèles",

    "comment.eyebrow":"Processus", "comment.title":"Du fichier vectoriel à l'objet livré.",
    "comment.desc":"Trois étapes, du choix du modèle à la réception, sans jamais toucher une machine vous-même.",
    "step.1.title":"Choisissez votre pièce",
    "step.1.desc":"Parcourez nos modèles prêts à commander, en plusieurs tailles et finitions.",
    "step.2.title":"L'atelier usine la pièce",
    "step.2.desc":"Notre atelier CNC découpe, ponce et finit votre commande à partir du fichier validé.",
    "step.3.title":"Livraison à votre porte",
    "step.3.desc":"Confirmation par WhatsApp, suivi de fabrication, puis livraison protégée directement chez vous.",

    "prod.eyebrow":"Sélection", "prod.title":"Créations récemment mises en ligne.",
    "prod.desc":"Pièces uniques ou petites séries, fabriquées à la commande dans notre atelier.",

    "footer.desc":"Atelier algérien de création CNC et de décoration fabriquée à la demande.",
    "footer.col1":"Catalogue", "footer.col1.l1":"Décoration murale", "footer.col1.l2":"Luminaires", "footer.col1.l3":"Mobilier",
    "footer.col2":"Informations", "footer.col2.l2":"Comment ça marche", "footer.col2.l4":"Mon panier",
    "footer.col3":"Support", "footer.col3.l1":"Suivi de commande", "footer.col3.l2":"Livraison", "footer.col3.l3":"Contact",
    "footer.copy":"© 2026 MR Décor", "footer.cities":"Sétif"
  },

  ar: {
    "nav.categories":"الفئات", "nav.comment":"كيف يعمل الموقع", "nav.produits":"التصاميم",
    "header.cart":"السلة", "header.menu":"القائمة",

    "hero.eyebrow":"صناعة CNC وديكور",
    "hero.title":"دقّة الآلة، <em>وروح</em> الورشة.",
    "hero.lead":"MR Décor هي الورشة التي تحوّل أفكارك الديكورية إلى واقع — لوحات مزخرفة، إضاءة، أثاث وقطع منحوتة، تُصنع عند الطلب.",
    "hero.cta1":"اكتشف التصاميم",
    "hero.stat1":"طلب تم توصيله", "hero.stat2":"تقييم العملاء", "hero.stat3":"متوسط مدة التنفيذ",

    "cat.eyebrow":"الكتالوج", "cat.title":"ست فئات من القطع، وملف حفر واحد لكل منها.",
    "cat.desc":"تضم كل فئة تصاميم جاهزة للطلب أو قابلة للتخصيص حسب أبعاد منزلك.",
    "cat.1.idx":"01 / حائط", "cat.1.title":"ديكور الحائط", "cat.1.n":"312 تصميم",
    "cat.2.idx":"02 / إضاءة", "cat.2.title":"إضاءة مزخرفة", "cat.2.n":"148 تصميم",
    "cat.3.idx":"03 / أثاث", "cat.3.title":"أثاث حسب الطلب", "cat.3.n":"96 تصميم",
    "cat.4.idx":"04 / لافتات", "cat.4.title":"لافتات وواجهات", "cat.4.n":"204 تصميم",
    "cat.5.idx":"05 / قطع", "cat.5.title":"قطع ديكورية", "cat.5.n":"176 تصميم",
    "cat.6.idx":"06 / هدايا", "cat.6.title":"قطع مخصصة", "cat.6.n":"89 تصميم",

    "comment.eyebrow":"سير العمل", "comment.title":"من الملف الرقمي إلى القطعة الجاهزة.",
    "comment.desc":"ثلاث خطوات فقط، من اختيار التصميم إلى الاستلام، دون الحاجة لمس أي آلة بنفسك.",
    "step.1.title":"اختر قطعتك",
    "step.1.desc":"تصفّح تصاميمنا الجاهزة للطلب، بعدة أحجام ولمسات نهائية.",
    "step.2.title":"الورشة تُصنّع القطعة",
    "step.2.desc":"تقوم ورشتنا بالقطع والصنفرة والتشطيب اعتمادًا على الملف المعتمد.",
    "step.3.title":"التوصيل إلى باب منزلك",
    "step.3.desc":"تأكيد عبر واتساب، متابعة التصنيع، ثم توصيل آمن مباشرة إلى منزلك.",

    "prod.eyebrow":"مختارات", "prod.title":"تصاميم أُضيفت مؤخرًا.",
    "prod.desc":"قطع فريدة أو بكميات محدودة، تُصنع عند الطلب في ورشتنا.",

    "footer.desc":"ورشة جزائرية لصناعة CNC والديكور المصنوع عند الطلب.",
    "footer.col1":"الكتالوج", "footer.col1.l1":"ديكور الحائط", "footer.col1.l2":"إضاءة", "footer.col1.l3":"أثاث",
    "footer.col2":"معلومات", "footer.col2.l2":"كيف يعمل الموقع", "footer.col2.l4":"سلتي",
    "footer.col3":"الدعم", "footer.col3.l1":"تتبع الطلب", "footer.col3.l2":"التوصيل", "footer.col3.l3":"اتصل بنا",
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

  document.querySelectorAll('[data-i18n-prod]').forEach(el=>{
    const [pid, field] = el.getAttribute('data-i18n-prod').split('.');
    if(PRODUCTS[pid] && PRODUCTS[pid][field]){
      el.textContent = PRODUCTS[pid][field][currentLang];
    }
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
}

document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>setLanguage(btn.dataset.lang));
});


// MODE CLAIR / MODE NUIT — clair par défaut, choix mémorisé (localStorage)

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


// BADGE PANIER (le panier lui-même vit sur commande.html / localStorage)

function updateCartBadge(){
  let cart = [];
  try{ cart = JSON.parse(localStorage.getItem('mrdecor_cart') || '[]'); }catch(e){}
  const count = cart.reduce((s,i)=>s+(i.qty||0),0);
  const badge = document.getElementById('cartBadge');
  if(!badge) return;
  badge.style.display = count>0 ? 'flex' : 'none';
  badge.textContent = count;
}
updateCartBadge();

// Reveal on scroll 
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.12});
revealEls.forEach(el=>io.observe(el));
