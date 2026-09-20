/**
 * Charging Intelligence - Core Interactive Script
 * - Theme Switcher (Dark/Light) with localStorage & prefers-color-scheme
 * - Multi-language Engine (TR / EN) with instant DOM text replacement
 * - FAQ Accordion
 * - Mobile Navigation
 */

// --- Translation Dictionary (TR / EN) ---
const i18nData = {
  tr: {
    // Navigation
    "nav-features": "Özellikler",
    "nav-carplay": "CarPlay & Android Auto",
    "nav-operators": "Operatörler",
    "nav-screenshots": "Arayüz",
    "nav-faq": "S.S.S.",
    "nav-terms": "Kullanım Koşulları",
    "nav-privacy": "Gizlilik Politikası",
    "nav-support": "Destek",

    // Hero Section
    "hero-badge": "Yapay Zekâ Destekli Şarj & Rota",
    "hero-title-prefix": "Tüm İstasyonlar.",
    "hero-title-gradient": "Akıllı Rota.",
    "hero-title-suffix": "Sıfır Menzil Kaygısı.",
    "hero-desc": "Türkiye ve Avrupa'daki tüm lisanslı elektrikli araç şarj istasyonlarını canlı soket dolulukları, anlık tarife karşılaştırması, yapay zekâ rota planlaması ve Apple CarPlay & Android Auto desteği ile keşfedin.",
    "hero-store-apple-sub": "Hemen İndirin",
    "hero-store-apple-main": "App Store",
    "hero-store-google-sub": "Ücretsiz Edinin",
    "hero-store-google-main": "Google Play",
    "hero-carplay-ready": "Apple CarPlay & Android Auto",
    "hero-all-ev-compat": "%100 Tüm EV Modelleriyle Uyumlu",

    // Floating badges
    "badge-ccs": "CCS 180 kW DC",
    "badge-avail": "Canlı Boş Soket: 3/4",
    "badge-carplay": "CarPlay & Android Auto",
    "badge-carplay-sub": "Araç İçi Navigasyon Aktif",

    // Stats (Compiled from official EPDK, European DB & OCM Global datasets)
    "stat-stations": "350.000+",
    "stat-stations-label": "Canlı Şarj Soketi",
    "stat-dc": "85.000+",
    "stat-dc-label": "Hızlı DC Soket",
    "stat-operators": "1.186+",
    "stat-operators-label": "Lisanslı & Global Ağ",
    "stat-countries": "250+",
    "stat-countries-label": "Kapsanan Ülke",
    "stat-compat": "%100",
    "stat-compat-label": "Tüm EV'lerle Uyum",

    // Features Section
    "features-tag": "Akıllı Yetenekler",
    "features-title": "Elektrikli Sürüşün Geleceği Parmaklarınızın Ucunda",
    "features-desc": "Charging Intelligence, düzinelerce farklı uygulama arasında kaybolma devrine son verir.",
    "feat-1-title": "Tüm Operatörler Tek Haritada",
    "feat-1-desc": "Türkiye ve Avrupa genelinde IONITY, Fastned, EnBW, Tesla Supercharger, TotalEnergies, Allego'nun yanı sıra ZES, Trugo, Eşarj ve 1.100'den fazla lisanslı operatörün istasyonlarını tek ekranda canlı görün.",
    "feat-2-title": "Apple CarPlay & Android Auto",
    "feat-2-desc": "Aracınızın ekranına doğrudan bağlanın. İster iPhone ister Android kullanın; sürüş esnasında dikkatinizi yoldan ayırmadan en yakın boş şarj istasyonuna tek dokunuşla rota oluşturun.",
    "feat-3-title": "AI Destekli Rota Motoru",
    "feat-3-desc": "Varış noktanızı ve batarya seviyenizi girin; algoritma en hesaplı ve optimum şarj duraklarını, bekleme sürelerini saniyeler içinde hesaplasın.",
    "feat-4-title": "Canlı Tarife Karşılaştırması",
    "feat-4-desc": "AC ve DC soket fiyatlarını kWh bazında anlık karşılaştırın, bütçenize en uygun istasyonu kolayca seçin.",
    "feat-5-title": "Gelişmiş Soket Filtreleme",
    "feat-5-desc": "Tip 2, CCS, CHAdeMO soketlerine ve 22 kW'tan 300 kW+ ultra hızlı DC güç aralıklarına göre anında filtreleme yapın.",
    "feat-6-title": "Akıllı Sesli Arama",
    "feat-6-desc": "Yola çıkmadan önce veya sürüş esnasında mikrofon simgesine dokunarak doğal dille arama yapın. 'En yakın hızlı DC şarj', 'rotam üzerindeki boş istasyonlar' gibi sesli komutlarla eller serbest arama yapın ve tek dokunuşla rotanızı başlatın.",

    // CarPlay & Android Auto Section
    "carplay-tag": "Araç İçi Sistemler (In-Car)",
    "carplay-title": "Yoldayken de Kontrol Sizde: Apple CarPlay & Android Auto",
    "carplay-desc": "Charging Intelligence, hem Apple CarPlay hem de Android Auto araç içi sistemleriyle tam entegredir. Telefonunuza dokunmanıza gerek kalmadan:",
    "cp-item-1": "Aracınızın multimedya ekranında canlı soket doluluk durumlarını anlık görün",
    "cp-item-2": "Tek dokunuşla en yakın hızlı DC şarj istasyonuna dönüş yönlendirmesi başlatın",
    "cp-item-3": "Siri ve Google Asistan sesli komutlarıyla eller serbest rota oluşturun",
    "cp-item-4": "Sürüş güvenliğine uygun, dikkat dağıtmayan sertifikalı otomotiv arayüzü",

    // Operators Section
    "operators-tag": "Geniş Ağ Desteği",
    "operators-title": "Desteklenen Başlıca Şarj Operatörleri",
    "operators-desc": "Lisanslı tüm operatör ağları anlık olarak senkronize edilir.",
    "operators-more": "+1.180'den Fazla Global Ağ",

    // Screenshots Section
    "screenshots-tag": "Arayüz",
    "screenshots-title": "Sade, Akıcı ve Güçlü Deneyim",
    "screenshots-desc": "Göz yormayan koyu mod tasarımı ve sezgisel kontroller.",

    // FAQ Section
    "faq-tag": "Merak Edilenler",
    "faq-title": "Sıkça Sorulan Sorular",
    "faq-q1": "Charging Intelligence hangi araçlarla uyumludur?",
    "faq-a1": "Togg, Tesla, BMW, Mercedes-Benz, Renault, Hyundai, Porsche, MG, BYD, Volvo, Audi ve Türkiye ile Avrupa'daki tüm elektrikli ve plug-in hibrit araçlarla %100 uyumludur.",
    "faq-q2": "Apple CarPlay ve Android Auto'yu nasıl kullanırım?",
    "faq-a2": "Telefonunuzu (iPhone veya Android) aracınızın USB portuna veya kablosuz bağlantısına bağlamanız yeterlidir. Charging Intelligence simgesi araç ekranında otomatik olarak belirecektir.",
    "faq-q3": "Şarj fiyatları ne kadar sıklıkla güncellenir?",
    "faq-a3": "Lisanslı operatörlerin açıkladığı resmi tarife değişiklikleri sistemimiz tarafından anlık olarak taranır ve haritada güncellenir.",
    "faq-q4": "Uygulama ücretli mi?",
    "faq-a4": "Charging Intelligence'ı App Store ve Google Play'den ücretsiz indirebilir, harita ve temel arama özelliklerini hemen kullanabilirsiniz.",

    // CTA Section
    "cta-title": "Yolculuklarınızı Akıllı Enerjiyle Güçlendirin",
    "cta-desc": "Charging Intelligence uygulamasını şimdi indirin, menzil kaygısını geride bırakın.",

    // Footer
    "footer-brand-desc": "Elektrikli araç sürücüleri için akıllı şarj ağı ve rota planlama platformu.",
    "footer-col-quick": "Hızlı Bağlantılar",
    "footer-col-legal": "Yasal & Güvenlik",
    "footer-col-contact": "İletişim",
    "footer-rights": "Tüm hakları saklıdır.",
    "footer-delete-account": "Hesap Silme Talebi"
  },

  en: {
    // Navigation
    "nav-features": "Features",
    "nav-carplay": "CarPlay & Android Auto",
    "nav-operators": "Networks",
    "nav-screenshots": "Interface",
    "nav-faq": "FAQ",
    "nav-terms": "Terms of Use",
    "nav-privacy": "Privacy Policy",
    "nav-support": "Support",

    // Hero Section
    "hero-badge": "AI-Powered EV Charging & Smart Routing",
    "hero-title-prefix": "All Stations.",
    "hero-title-gradient": "Smart Routing.",
    "hero-title-suffix": "Zero Range Anxiety.",
    "hero-desc": "Discover all licensed EV charging stations across Turkey and Europe on a single live map with real-time socket availability, transparent tariff comparisons, AI-powered route optimization, and Apple CarPlay & Android Auto.",
    "hero-store-apple-sub": "Download on the",
    "hero-store-apple-main": "App Store",
    "hero-store-google-sub": "Get it on",
    "hero-store-google-main": "Google Play",
    "hero-carplay-ready": "Apple CarPlay & Android Auto Ready",
    "hero-all-ev-compat": "100% Compatible with All EVs",

    // Floating badges
    "badge-ccs": "CCS 180 kW DC",
    "badge-avail": "Live Sockets: 3/4 Free",
    "badge-carplay": "CarPlay & Android Auto",
    "badge-carplay-sub": "In-Car Navigation Active",

    // Stats (Compiled from official EPDK, European DB & OCM Global datasets)
    "stat-stations": "350,000+",
    "stat-stations-label": "Live Charging Sockets",
    "stat-dc": "85,000+",
    "stat-dc-label": "Fast DC Chargers",
    "stat-operators": "1,186+",
    "stat-operators-label": "EV Charging Networks",
    "stat-countries": "250+",
    "stat-countries-label": "Countries Covered",
    "stat-compat": "100%",
    "stat-compat-label": "Compatible with All EVs",

    // Features Section
    "features-tag": "Intelligent Capabilities",
    "features-title": "The Future of Electric Driving at Your Fingertips",
    "features-desc": "Charging Intelligence puts an end to juggling dozens of separate charging apps.",
    "feat-1-title": "All Networks on One Map",
    "feat-1-desc": "Explore major European CPOs like IONITY, Fastned, EnBW, Tesla Supercharger, TotalEnergies, and Allego alongside ZES, Trugo, Eşarj, and 1,180+ charging networks with live availability on a unified map.",
    "feat-2-title": "Apple CarPlay & Android Auto",
    "feat-2-desc": "Connect seamlessly to your car's dashboard display. Whether on iPhone or Android, explore nearby live chargers and start turn-by-turn routing with zero driving distraction.",
    "feat-3-title": "AI-Powered Routing Engine",
    "feat-3-desc": "Enter your destination and battery level; our algorithm calculates optimal charging stops, wait durations, and battery states in seconds.",
    "feat-4-title": "Real-Time Tariff Comparison",
    "feat-4-desc": "Compare per-kWh pricing across AC and DC connectors in real time and choose the most cost-effective station for your budget.",
    "feat-5-title": "Advanced Connector Filtering",
    "feat-5-desc": "Filter by connector types (Type 2, CCS, CHAdeMO) and power ratings from 22 kW up to 300 kW+ ultra-fast DC chargers.",
    "feat-6-title": "Intelligent Voice Search",
    "feat-6-desc": "Search hands-free using natural voice recognition before heading out or on the move. Find 'nearest fast DC charger' or 'available stations on route' effortlessly and launch navigation instantly.",

    // CarPlay & Android Auto Section
    "carplay-tag": "Automotive In-Car Display",
    "carplay-title": "Stay in Control on the Road: Apple CarPlay & Android Auto",
    "carplay-desc": "Charging Intelligence natively integrates with both Apple CarPlay and Android Auto in-car platforms. Without touching your smartphone:",
    "cp-item-1": "View real-time socket availability directly on your car's center console",
    "cp-item-2": "Launch one-tap turn-by-turn navigation to the nearest fast DC charger",
    "cp-item-3": "Search and navigate hands-free using Siri or Google Assistant voice commands",
    "cp-item-4": "Certified automotive UI optimized for distraction-free driving safety",

    // Operators Section
    "operators-tag": "Broad Coverage",
    "operators-title": "Supported Charging Networks",
    "operators-desc": "All licensed Turkish operators and leading European CPO networks are synced continuously with real-time status.",
    "operators-more": "+1,180 More Global Networks",

    // Screenshots Section
    "screenshots-tag": "Interface",
    "screenshots-title": "Clean, Fluid, and Intuitive",
    "screenshots-desc": "Carefully tuned dark mode and seamless gesture controls.",

    // FAQ Section
    "faq-tag": "Frequently Asked Questions",
    "faq-title": "Got Questions? We've Got Answers.",
    "faq-q1": "Which vehicles are supported?",
    "faq-a1": "Charging Intelligence supports all EVs and plug-in hybrids including Tesla, Togg, BMW, Mercedes-Benz, Renault, Hyundai, Porsche, MG, BYD, Volvo, Audi, and more.",
    "faq-q2": "How do I use Apple CarPlay and Android Auto?",
    "faq-a2": "Simply connect your smartphone (iPhone or Android) to your vehicle via USB cable or wireless projection. The Charging Intelligence icon will appear on your car display automatically.",
    "faq-q3": "How frequently are charging prices updated?",
    "faq-a3": "Official tariff announcements from licensed operators are synchronized continuously and reflected on the map in real time.",
    "faq-q4": "Is the app free to use?",
    "faq-a4": "Yes! Charging Intelligence can be downloaded for free from the App Store and Google Play, with full access to live maps and essential station discovery.",

    // CTA Section
    "cta-title": "Power Your Journeys with Smart Energy",
    "cta-desc": "Download Charging Intelligence today and leave range anxiety in the rear-view mirror.",

    // Footer
    "footer-brand-desc": "Next-generation smart EV charging companion and route planning platform.",
    "footer-col-quick": "Quick Links",
    "footer-col-legal": "Legal & Security",
    "footer-col-contact": "Contact",
    "footer-rights": "All rights reserved.",
    "footer-delete-account": "Delete Account Request"
  }
};

// --- State Management ---
// Ensure default starts with EN and Light mode
if (!localStorage.getItem('ci_default_en_light_v1')) {
  localStorage.setItem('ci_lang', 'en');
  localStorage.setItem('ci_theme', 'light');
  localStorage.setItem('ci_default_en_light_v1', 'true');
}

let currentLang = localStorage.getItem('ci_lang') || 'en';
let currentTheme = localStorage.getItem('ci_theme') || 'light';

// --- Apply Theme ---
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ci_theme', theme);

  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// --- Toggle Theme ---
function toggleTheme() {
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
}

// --- Dynamic Dataset Integration & Animated Counters ---
let statsAnimated = false;

function formatCounterValue(num, suffix, prefixTr, suffixEn, lang) {
  const rounded = Math.round(num);
  const isTr = lang === 'tr';
  const sep = isTr ? '.' : ',';
  const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);

  if (isTr && prefixTr) {
    return prefixTr + formatted + (suffix || '');
  } else if (!isTr && suffixEn) {
    return formatted + suffixEn;
  }
  return formatted + (suffix || '');
}

// Update target numbers from compiled stats (if available)
function applyCompiledStats(data) {
  if (!data || !data.summary) return;
  const s = data.summary;

  const elSockets = document.getElementById('stat-counter-sockets');
  const elOperators = document.getElementById('stat-counter-operators');
  const elDc = document.getElementById('stat-counter-dc');
  const elCountries = document.getElementById('stat-counter-countries');
  const elCompat = document.getElementById('stat-counter-compat');

  const socketsTarget = s.totalSocketsCombined ? 350000 : (s.totalSockets || 350000);
  const dcTarget = s.fastDcCombined ? 85000 : (s.fastDcSockets || 85000);

  if (elSockets) {
    elSockets.setAttribute('data-target', socketsTarget);
  }
  if (elDc) {
    elDc.setAttribute('data-target', dcTarget);
  }
  if (elOperators && s.totalCombinedOperators) {
    elOperators.setAttribute('data-target', s.totalCombinedOperators);
  }
  if (elCountries && (s.countriesCovered || s.ocmCountries)) {
    elCountries.setAttribute('data-target', s.countriesCovered || s.ocmCountries);
  }
  if (elCompat && s.compatibilityPct) {
    elCompat.setAttribute('data-target', s.compatibilityPct);
  }

  // Update i18n dictionary dynamically
  i18nData.tr['stat-stations'] = '350.000+';
  i18nData.en['stat-stations'] = '350,000+';

  if (s.totalCombinedOperators) {
    const opStrTr = s.totalCombinedOperators.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const opStrEn = s.totalCombinedOperators.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    i18nData.tr['stat-operators'] = opStrTr + '+';
    i18nData.en['stat-operators'] = opStrEn + '+';
    i18nData.tr['operators-more'] = `+${opStrTr}'den Fazla Global Ağ`;
    i18nData.en['operators-more'] = `+${opStrEn} More Global Networks`;
    const elMore = document.querySelector('[data-i18n="operators-more"]');
    if (elMore) {
      elMore.textContent = currentLang === 'tr' ? i18nData.tr['operators-more'] : i18nData.en['operators-more'];
    }
  }

  if (s.countriesCovered || s.ocmCountries) {
    const cCount = s.countriesCovered || s.ocmCountries;
    i18nData.tr['stat-countries'] = cCount + '+';
    i18nData.en['stat-countries'] = cCount + '+';
  }

  i18nData.tr['stat-dc'] = '85.000+';
  i18nData.en['stat-dc'] = '85,000+';
}

// Load compiled dataset statistics
function loadDatasetStats() {
  if (window.CI_COMPILED_STATS) {
    applyCompiledStats(window.CI_COMPILED_STATS);
  }

  if (window.location && window.location.protocol && window.location.protocol.startsWith('http')) {
    fetch('data/stats.json')
      .then(res => res.json())
      .then(data => {
        applyCompiledStats(data);
        if (statsAnimated) {
          updateCounterDisplay(currentLang);
        }
      })
      .catch(() => {});
  }
}

// Animate numbers counting up from 0
function animateCounters() {
  if (statsAnimated) return;
  statsAnimated = true;

  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const duration = 2200; // ms
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Smooth ease-out cubic
    const ease = 1 - Math.pow(1 - progress, 3);

    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target')) || 0;
      const suffix = counter.getAttribute('data-suffix') || '';
      const prefixTr = counter.getAttribute('data-prefix-tr') || '';
      const suffixEn = counter.getAttribute('data-suffix-en') || '';
      const currentVal = ease * target;

      counter.textContent = formatCounterValue(currentVal, suffix, prefixTr, suffixEn, currentLang);
    });

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target')) || 0;
        const suffix = counter.getAttribute('data-suffix') || '';
        const prefixTr = counter.getAttribute('data-prefix-tr') || '';
        const suffixEn = counter.getAttribute('data-suffix-en') || '';
        counter.textContent = formatCounterValue(target, suffix, prefixTr, suffixEn, currentLang);
      });
    }
  }

  requestAnimationFrame(step);
}

// Update counters when language changes
function updateCounterDisplay(lang) {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target')) || 0;
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefixTr = counter.getAttribute('data-prefix-tr') || '';
    const suffixEn = counter.getAttribute('data-suffix-en') || '';
    counter.textContent = formatCounterValue(target, suffix, prefixTr, suffixEn, lang);
  });
}

function initStatsObserver() {
  const statsSection = document.getElementById('stats');
  if (!statsSection) {
    animateCounters();
    return;
  }

  // Pre-set 0 before scrolling into view
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(counter => {
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefixTr = counter.getAttribute('data-prefix-tr') || '';
    const suffixEn = counter.getAttribute('data-suffix-en') || '';
    counter.textContent = formatCounterValue(0, suffix, prefixTr, suffixEn, currentLang);
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(statsSection);
  } else {
    animateCounters();
  }
}

// --- Apply Language ---
function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLang = lang;
  localStorage.setItem('ci_lang', lang);
  document.documentElement.lang = lang;

  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (el.classList.contains('stat-number') && el.hasAttribute('data-target')) {
      if (statsAnimated) {
        const target = parseFloat(el.getAttribute('data-target')) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const prefixTr = el.getAttribute('data-prefix-tr') || '';
        const suffixEn = el.getAttribute('data-suffix-en') || '';
        el.textContent = formatCounterValue(target, suffix, prefixTr, suffixEn, lang);
      }
      return;
    }
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  if (typeof updateGalleryCaptionFn === 'function') {
    updateGalleryCaptionFn();
  }
}

// --- Initialize Event Listeners on DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  // Load live or compiled dataset statistics
  loadDatasetStats();

  // Set initial theme and language
  setTheme(currentTheme);
  setLanguage(currentLang);

  // Initialize animated counter on scroll
  initStatsObserver();

  // Theme Toggle Button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Language Switcher Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when clicking links
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.textContent = '☰';
      });
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close other open FAQ items
      document.querySelectorAll('.faq-item').forEach(other => other.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Initialize Screenshot Lightbox Gallery
  initScreenshotGallery();
});

// --- Screenshot Lightbox Gallery Logic ---
let updateGalleryCaptionFn = null;

function initScreenshotGallery() {
  const dialog = document.getElementById('gallery-dialog');
  const activeImg = document.getElementById('gallery-active-img');
  const captionText = document.getElementById('gallery-caption-text');
  const counter = document.getElementById('gallery-counter');
  const closeBtn = document.getElementById('gallery-close-btn');
  const prevBtn = document.getElementById('gallery-prev-btn');
  const nextBtn = document.getElementById('gallery-next-btn');
  const slides = document.querySelectorAll('.screenshot-slide[data-gallery-index]');

  if (!dialog || !activeImg || !slides.length) return;

  const galleryData = [
    {
      src: 'assets/screenshots/OTP Screen.png',
      tr: 'OTP Doğrulama Ekranı (OTP Screen)',
      en: 'OTP Screen'
    },
    {
      src: 'assets/screenshots/Connenting Screen.png',
      tr: 'Bağlantı Ekranı (Connecting Screen)',
      en: 'Connecting Screen'
    },
    {
      src: 'assets/screenshots/Search Screenshots.png',
      tr: 'Arama Ekranı (Search Screen)',
      en: 'Search Screen'
    },
    {
      src: 'assets/screenshots/Map Screen.png',
      tr: 'Harita Ekranı (Map Screen)',
      en: 'Map Screen'
    },
    {
      src: 'assets/screenshots/Map EU Screen.png',
      tr: 'Avrupa Harita Ekranı (Map EU Screen)',
      en: 'Map EU Screen'
    },
    {
      src: 'assets/screenshots/Connect EV Screen.png',
      tr: 'Araç Bağlantı Ekranı (Connect EV Screen)',
      en: 'Connect EV Screen'
    },
    {
      src: 'assets/screenshots/My Vehicle Screen .png',
      tr: 'Aracım Ekranı (My Vehicle Screen)',
      en: 'My Vehicle Screen'
    },
    {
      src: 'assets/screenshots/Profile screen.png',
      tr: 'Profil Ekranı (Profile Screen)',
      en: 'Profile Screen'
    }
  ];

  let currentIndex = 0;

  function renderGalleryItem(index) {
    if (index < 0) index = galleryData.length - 1;
    if (index >= galleryData.length) index = 0;
    currentIndex = index;

    const item = galleryData[currentIndex];
    activeImg.style.opacity = '0';
    activeImg.style.transform = 'scale(0.96)';

    setTimeout(() => {
      activeImg.src = item.src;
      activeImg.alt = currentLang === 'tr' ? item.tr : item.en;
      if (captionText) {
        captionText.textContent = currentLang === 'tr' ? item.tr : item.en;
      }
      if (counter) {
        counter.textContent = `${currentIndex + 1} / ${galleryData.length}`;
      }
      activeImg.style.opacity = '1';
      activeImg.style.transform = 'scale(1)';
    }, 100);
  }

  updateGalleryCaptionFn = () => {
    if (dialog.hasAttribute('open')) {
      const item = galleryData[currentIndex];
      if (captionText) {
        captionText.textContent = currentLang === 'tr' ? item.tr : item.en;
      }
      activeImg.alt = currentLang === 'tr' ? item.tr : item.en;
    }
  };

  function openGallery(index) {
    renderGalleryItem(index);
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  }

  function closeGallery() {
    if (typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
  }

  // Click on screenshot slides to open gallery
  slides.forEach(slide => {
    const idx = parseInt(slide.getAttribute('data-gallery-index'), 10) || 0;
    slide.addEventListener('click', () => openGallery(idx));
    slide.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGallery(idx);
      }
    });
  });

  // Navigation Buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      renderGalleryItem(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      renderGalleryItem(currentIndex + 1);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeGallery();
    });
  }

  // Fallback for browsers without closedby support
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        closeGallery();
      }
    });
  }

  // Click on backdrop outside image/controls to close
  const wrapper = document.getElementById('gallery-wrapper');
  if (wrapper) {
    wrapper.addEventListener('click', (event) => {
      if (event.target === wrapper) {
        closeGallery();
      }
    });
  }

  // Keyboard navigation (Escape is native with showModal, Left/Right arrows for prev/next)
  window.addEventListener('keydown', (e) => {
    if (!dialog.hasAttribute('open')) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      renderGalleryItem(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      renderGalleryItem(currentIndex + 1);
    }
  });

  // Mobile touch swipe gestures
  let touchStartX = 0;
  let touchEndX = 0;

  dialog.addEventListener('touchstart', (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      touchStartX = e.changedTouches[0].screenX;
    }
  }, { passive: true });

  dialog.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          renderGalleryItem(currentIndex - 1); // Swipe right -> previous
        } else {
          renderGalleryItem(currentIndex + 1); // Swipe left -> next
        }
      }
    }
  }, { passive: true });
}

