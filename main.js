const FORM_ENDPOINT = "https://formspree.io/f/xzdkqlgy";
let currentLang = "fi";

const copy = {
  fi: {
    htmlLang: "fi",
    nav: { solutions: "Ratkaisut", pricing: "Hinnat", cta: "Aloita nyt" },
    hero: {
      badge: "Verkkosivut kuukausimaksulla - kaikki mukana",
      heading: "Yrityksesi ansaitsee<br>verkkosivut jotka<br><em>tekevät töitä.</em>",
      text: "Ammattimaiset verkkosivut, ylläpito ja jatkuvat päivitykset yhdellä kiinteällä kuukausimaksulla. Ei toimistolaskuja. Ei yllätyksiä.",
      cta: "Aloita - sivusto valmis 14 päivässä",
      secondary: "Katso esimerkit"
    },
    sections: {
      howLabel: "Miten se toimii",
      howHeading: "Kolme vaihetta.<br>Sitten unohda se.",
      solutionsLabel: "Ratkaisut",
      solutionsHeading: "Tehty juuri sinun alallesi.",
      solutionsBody: "Jokaisella alalla on omat tarpeensa. Skripti tunnistaa ne.",
      pricingLabel: "Hinnoittelu",
      pricingHeading: "Selkeä hinta.<br>Ei piilokuluja.",
      faqLabel: "UKK",
      faqHeading: "Usein kysyttyä.",
      finalHeading: "Valmis aloittamaan?<br><em>Sivusto valmiina 14 päivässä.</em>",
      finalText: "Liity satojen suomalaisten yritysten joukkoon joilla on verkkosivut jotka toimivat.",
      finalButton: "Aloita nyt - valitse pakettisi",
      footer: "skripti.fi - Helsinki, Suomi"
    },
    modal: {
      stepOf: "Aloita - vaihe",
      done: "Valmis!",
      industryTitle: "Millä alalla toimit?",
      industrySub: "Rakennamme sivustosi alan parhaiden käytäntöjen mukaan.",
      businessTitle: "Yrityksen tiedot",
      businessSub: "Perustiedot joita tarvitsemme sivustosi rakentamiseen.",
      packageTitle: "Valitse pakettisi",
      packageSub: "Voit vaihtaa pakettia myöhemmin milloin tahansa.",
      submitTitle: "Lähetä yhteydenotto",
      submitSub: "Tallennamme tietosi ja olemme yhteydessä 24 tunnin sisällä.",
      successTitle: "Kiitos yhteydenotosta!",
      sending: "Lähetetään...",
      send: "Lähetä yhteydenotto",
      failed: "Lähetys epäonnistui. Yritä uudelleen hetken kuluttua.",
      next: "Seuraava",
      back: "Takaisin",
      close: "Sulje"
    },
    labels: {
      company: "Yrityksen nimi *",
      contact: "Yhteyshenkilö *",
      email: "Sähköposti *",
      phone: "Puhelinnumero",
      website: "Nykyinen verkkosivuosoite (jos on)",
      notes: "Lisätietoja tai toiveita"
    }
  },
  en: {
    htmlLang: "en",
    nav: { solutions: "Solutions", pricing: "Pricing", cta: "Get started" },
    hero: {
      badge: "Websites on a monthly plan - all included",
      heading: "Your business deserves<br>a website that<br><em>does the work.</em>",
      text: "Professional websites, maintenance, and continuous updates with one fixed monthly fee. No agency invoices. No surprises.",
      cta: "Get started - website ready in 14 days",
      secondary: "See examples"
    },
    sections: {
      howLabel: "How it works",
      howHeading: "Three steps.<br>Then forget about it.",
      solutionsLabel: "Solutions",
      solutionsHeading: "Built for your industry.",
      solutionsBody: "Every industry has different needs. Skripti adapts to them.",
      pricingLabel: "Pricing",
      pricingHeading: "Clear pricing.<br>No hidden fees.",
      faqLabel: "FAQ",
      faqHeading: "Frequently asked questions.",
      finalHeading: "Ready to start?<br><em>Your website can be live in 14 days.</em>",
      finalText: "Join hundreds of Finnish businesses already using websites that work.",
      finalButton: "Get started - choose your package",
      footer: "skripti.fi - Helsinki, Finland"
    },
    modal: {
      stepOf: "Start - step",
      done: "Done!",
      industryTitle: "What industry are you in?",
      industrySub: "We build your website using best practices for your industry.",
      businessTitle: "Business details",
      businessSub: "Basic information we need to build your website.",
      packageTitle: "Choose your package",
      packageSub: "You can change package later anytime.",
      submitTitle: "Send contact request",
      submitSub: "We save your details and contact you within 24 hours.",
      successTitle: "Thanks for your request!",
      sending: "Sending...",
      send: "Send request",
      failed: "Sending failed. Please try again shortly.",
      next: "Next",
      back: "Back",
      close: "Close"
    },
    labels: {
      company: "Company name *",
      contact: "Contact person *",
      email: "Email *",
      phone: "Phone number",
      website: "Current website (if any)",
      notes: "Additional notes"
    }
  }
};

const solutionsByLang = {
  fi: [
    { id: "ravintolat", label: "Ravintolat", title: "Ravintolat & kahvilat", sub: "Ruokalista, varaukset, tapahtumat", feats: [["Integraatio", "TableOnline-varaus"], ["Sisältö", "Ruokalista + kausipäivitykset"], ["Kielet", "FI, EN, SV vakiona"], ["Erikoisuus", "Tapahtumasivut"]], quote: "\"Uusi sesonkiruokalista päivitetty tunnissa - ennen se vei koko päivän.\"" },
    { id: "kauneus", label: "Kauneus", title: "Kauneus & hyvinvointi", sub: "Ajanvaraukset, palvelut, henkilökunta", feats: [["Integraatio", "Timma / Booklr"], ["Sisältö", "Palveluhinnasto + galleria"], ["Kielet", "FI + EN"], ["Erikoisuus", "Ennen-jälkeen-galleria"]], quote: "\"Asiakkaat varaavat ajan verkossa - ei enää puhelurumbaa.\"" }
  ],
  en: [
    { id: "restaurants", label: "Restaurants", title: "Restaurants & Cafes", sub: "Menus, bookings, events", feats: [["Integration", "TableOnline booking"], ["Content", "Menus + seasonal updates"], ["Languages", "FI, EN, SV by default"], ["Special", "Event pages"]], quote: "\"Our seasonal menu now updates in an hour, not a full day.\"" },
    { id: "beauty", label: "Beauty", title: "Beauty & Wellness", sub: "Bookings, services, staff", feats: [["Integration", "Timma / Booklr"], ["Content", "Service pricing + gallery"], ["Languages", "FI + EN"], ["Special", "Before/after gallery"]], quote: "\"Customers book online now - no more phone overload.\"" }
  ]
};

const faqsByLang = {
  fi: [
    ["Mitä tarkoittaa \"rajattomat päivitykset\"?", "Kaikki sisältömuutokset - uudet palvelut, hinnastot, kuvat, tekstit - kuuluvat hintaan."],
    ["Onko hosting mukana hinnassa?", "Kyllä. Hosting, SSL ja tekninen ylläpito sisältyvät kaikkiin paketteihin."]
  ],
  en: [
    ["What do \"unlimited updates\" include?", "All content updates - new services, pricing, images, and text - are included in your monthly plan."],
    ["Is hosting included?", "Yes. Hosting, SSL, and technical maintenance are included in all packages."]
  ]
};

const packagesByLang = {
  fi: {
    starter: { name: "Starter", price: 99, desc: "5-sivuinen sivusto, FI+EN, 2 päivitystä/kk" },
    standard: { name: "Standard", price: 169, desc: "8-sivuinen sivusto, FI+EN+SV, rajattomat päivitykset" },
    pro: { name: "Pro", price: 269, desc: "Rajattomat sivut, nopea päivitys, SEO + Google-mainokset" }
  },
  en: {
    starter: { name: "Starter", price: 99, desc: "5-page website, FI+EN, 2 updates/month" },
    standard: { name: "Standard", price: 169, desc: "8-page website, FI+EN+SV, unlimited updates" },
    pro: { name: "Pro", price: 269, desc: "Unlimited pages, fast updates, SEO + Google Ads" }
  }
};

const industriesByLang = {
  fi: [
    { id: "ravintolat", icon: "🍽", name: "Ravintola / kahvila", sub: "Ruokalista, varaukset" },
    { id: "kauneus", icon: "✂", name: "Kauneus & hyvinvointi", sub: "Ajanvaraukset, palvelut" },
    { id: "muu", icon: "✦", name: "Muu toimiala", sub: "Kaikki muut yritykset" }
  ],
  en: [
    { id: "restaurants", icon: "🍽", name: "Restaurant / cafe", sub: "Menus, bookings" },
    { id: "beauty", icon: "✂", name: "Beauty & wellness", sub: "Bookings, services" },
    { id: "other", icon: "✦", name: "Other industry", sub: "All other businesses" }
  ]
};

let activeSol = 0;
let modalStep = 1;
const TOTAL_STEPS = 4;
let isSubmitting = false;
let lastActiveElement = null;
let formData = { pkg: "standard", industry: "", bizName: "", contactName: "", email: "", phone: "", domain: "", notes: "" };

function renderSolutions() {
  const solutions = solutionsByLang[currentLang];
  const s = solutions[activeSol];
  document.getElementById("sol-tabs").innerHTML = solutions.map((x, i) => `<button type="button" class="tab${i === activeSol ? " active" : ""}" onclick="setSol(${i})">${x.label}</button>`).join("");
  document.getElementById("sol-panel").innerHTML = `
    <div class="sol-header"><h3>${s.title}</h3><p>${s.sub}</p></div>
    <div class="sol-body">
      <div class="sol-feats">${s.feats.map((f) => `<div class="sol-feat"><div class="fl">${f[0]}</div><div class="fv">${f[1]}</div></div>`).join("")}</div>
      <div class="sol-quote">${s.quote}</div>
    </div>`;
}

function setSol(i) {
  activeSol = i;
  renderSolutions();
}

function renderFaq() {
  const faqs = faqsByLang[currentLang];
  document.getElementById("faq-list").innerHTML = faqs.map((f, i) => `
    <div class="faq-item">
      <button class="faq-btn" type="button" aria-expanded="false" aria-controls="fa${i}" onclick="toggleFaq(${i})">
        <span class="faq-q">${f[0]}</span>
        <span class="faq-icon" id="fi${i}">+</span>
      </button>
      <div class="faq-a" id="fa${i}" role="region">${f[1]}</div>
    </div>`).join("");
}

function toggleFaq(i) {
  const a = document.getElementById(`fa${i}`);
  const ic = document.getElementById(`fi${i}`);
  const btn = ic.closest("button");
  const open = a.classList.toggle("open");
  ic.textContent = open ? "−" : "+";
  btn.setAttribute("aria-expanded", String(open));
}

function openModal(pkg) {
  if (pkg) formData.pkg = pkg;
  lastActiveElement = document.activeElement;
  modalStep = 1;
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");
  renderModal();
  trapFocus();
}

function closeModal() {
  const overlay = document.getElementById("overlay");
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
  if (lastActiveElement && typeof lastActiveElement.focus === "function") {
    lastActiveElement.focus();
  }
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById("overlay")) closeModal();
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function renderModal() {
  const t = copy[currentLang];
  const packages = packagesByLang[currentLang];
  const industries = industriesByLang[currentLang];
  document.getElementById("modal-title").textContent = modalStep <= TOTAL_STEPS ? `${t.modal.stepOf} ${modalStep}/${TOTAL_STEPS}` : t.modal.done;
  let html = "";

  if (modalStep <= TOTAL_STEPS) {
    html += "<div class=\"progress-bar\">";
    for (let i = 1; i <= TOTAL_STEPS; i += 1) {
      html += `<div class="pb-step${i < modalStep ? " done" : i === modalStep ? " active" : ""}"></div>`;
    }
    html += "</div>";
  }

  if (modalStep === 1) {
    html += `<div class="step-title">${t.modal.industryTitle}</div>`;
    html += `<div class="step-sub">${t.modal.industrySub}</div>`;
    html += "<div class=\"industry-grid\">";
    industries.forEach((ind) => {
      html += `<button type="button" class="industry-card${formData.industry === ind.id ? " selected" : ""}" onclick="selectIndustry('${ind.id}')">
        <div class="ic-icon">${ind.icon}</div>
        <div class="ic-name">${ind.name}</div>
        <div class="ic-sub">${ind.sub}</div>
      </button>`;
    });
    html += "</div>";
    html += modalNav(false, !formData.industry, t.modal.next);
  } else if (modalStep === 2) {
    html += `<div class="step-title">${t.modal.businessTitle}</div>`;
    html += `<div class="step-sub">${t.modal.businessSub}</div>`;
    html += `<div class="form-group"><label class="form-label" for="biz-name">${t.labels.company}</label><input id="biz-name" class="form-input" placeholder="Acme Oy" value="${escapeAttr(formData.bizName)}" oninput="formData.bizName=this.value" /></div>`;
    html += `<div class="form-row">
      <div class="form-group"><label class="form-label" for="contact-name">${t.labels.contact}</label><input id="contact-name" class="form-input" placeholder="Matti Meikäläinen" value="${escapeAttr(formData.contactName)}" oninput="formData.contactName=this.value" /></div>
      <div class="form-group"><label class="form-label" for="phone">${t.labels.phone}</label><input id="phone" class="form-input" placeholder="+358 40 123 4567" value="${escapeAttr(formData.phone)}" oninput="formData.phone=this.value" /></div>
    </div>`;
    html += `<div class="form-group"><label class="form-label" for="email">${t.labels.email}</label><input id="email" class="form-input" type="email" placeholder="you@company.com" value="${escapeAttr(formData.email)}" oninput="formData.email=this.value" /></div>`;
    html += `<div class="form-group"><label class="form-label" for="domain">${t.labels.website}</label><input id="domain" class="form-input" placeholder="www.company.com" value="${escapeAttr(formData.domain)}" oninput="formData.domain=this.value" /></div>`;
    html += `<div class="form-group"><label class="form-label" for="notes">${t.labels.notes}</label><textarea id="notes" class="form-input" style="resize:vertical;min-height:72px;" placeholder="Tell us your goals and style..." oninput="formData.notes=this.value">${escapeHtml(formData.notes)}</textarea></div>`;
    const ok = formData.bizName && formData.contactName && formData.email;
    html += modalNav(true, !ok, t.modal.next);
  } else if (modalStep === 3) {
    html += `<div class="step-title">${t.modal.packageTitle}</div>`;
    html += `<div class="step-sub">${t.modal.packageSub}</div>`;
    html += "<div class=\"pkg-list\">";
    Object.entries(packages).forEach(([key, p]) => {
      html += `<button type="button" class="pkg-card${formData.pkg === key ? " selected" : ""}" onclick="formData.pkg='${key}';renderModal()">
        <div class="pkg-card-inner">
          <div class="pkg-radio${formData.pkg === key ? " checked" : ""}"></div>
          <div class="pkg-left"><div class="pkg-name">${p.name}</div><div class="pkg-desc">${p.desc}</div></div>
        </div>
        <div class="pkg-right"><div class="pkg-price">EUR ${p.price}<span>/kk</span></div></div>
      </button>`;
    });
    html += "</div>";
    html += modalNav(true, false, t.modal.next);
  } else if (modalStep === 4) {
    const pkg = packages[formData.pkg];
    const ind = industries.find((x) => x.id === formData.industry);
    html += `<div class="step-title">${t.modal.submitTitle}</div>`;
    html += `<div class="step-sub">${t.modal.submitSub}</div>`;
    html += `<div class="summary-box">
      <div class="summary-row"><span class="sk">Yritys</span><span class="sv">${escapeHtml(formData.bizName)}</span></div>
      <div class="summary-row"><span class="sk">Toimiala</span><span class="sv">${ind ? ind.name : "-"}</span></div>
      <div class="summary-row"><span class="sk">Paketti</span><span class="sv">${pkg.name}</span></div>
      <div class="summary-row"><span class="sk">Sahkoposti</span><span class="sv">${escapeHtml(formData.email)}</span></div>
      <div class="summary-row"><span class="sk">Kuukausimaksu</span><span class="sv">EUR ${pkg.price}/kk</span></div>
    </div>`;
    html += `<p id="submit-status" class="step-sub" aria-live="polite"></p>`;
    html += `<div class="modal-nav">
      <button class="btn-back" type="button" onclick="prevStep()">← ${t.modal.back}</button>
      <button class="btn-next" id="submit-btn" type="button" onclick="submitLead()" ${isSubmitting ? "disabled" : ""}>${isSubmitting ? t.modal.sending : `${t.modal.send} →`}</button>
    </div>`;
  } else if (modalStep === 5) {
    const pkg = packages[formData.pkg];
    html += "<div class=\"success-icon\">✓</div>";
    html += `<div class="success-title">${t.modal.successTitle}</div>`;
    html += `<div class="success-sub">${escapeHtml(formData.contactName)}, ${t.modal.submitSub}</div>`;
    html += `<div style="margin-top:20px;text-align:center"><button class="btn-primary" type="button" onclick="closeModal()">${t.modal.close}</button></div>`;
  }

  document.getElementById("modal-body").innerHTML = html;
}

function modalNav(showBack, nextDisabled, nextLabel) {
  const t = copy[currentLang];
  return `<div class="modal-nav">
    ${showBack ? `<button class="btn-back" type="button" onclick="prevStep()">← ${t.modal.back}</button>` : "<div></div>"}
    <button class="btn-next" type="button" onclick="nextStep()" ${nextDisabled ? "disabled" : ""}>${nextLabel} →</button>
  </div>`;
}

function nextStep() {
  if (modalStep < TOTAL_STEPS) {
    modalStep += 1;
    renderModal();
  }
}

function prevStep() {
  if (modalStep > 1) {
    modalStep -= 1;
    renderModal();
  }
}

function selectIndustry(id) {
  formData.industry = id;
  renderModal();
}

async function submitLead() {
  const t = copy[currentLang];
  if (isSubmitting) return;
  isSubmitting = true;
  renderModal();
  const status = document.getElementById("submit-status");
  if (status) status.textContent = t.modal.sending;

  const payload = {
    company: formData.bizName,
    contactName: formData.contactName,
    email: formData.email,
    phone: formData.phone,
    currentWebsite: formData.domain,
    industry: industries.find((x) => x.id === formData.industry)?.name || formData.industry,
    package: packages[formData.pkg].name,
    packagePricePerMonth: packages[formData.pkg].price,
    notes: formData.notes
  };

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("submit_failed");
    modalStep = 5;
    renderModal();
  } catch (err) {
    if (status) status.textContent = t.modal.failed;
  } finally {
    isSubmitting = false;
    if (modalStep === 4) renderModal();
  }
}

function trapFocus() {
  const modal = document.getElementById("modal");
  const selectors = "button,[href],input,select,textarea,[tabindex]:not([tabindex='-1'])";
  const first = modal.querySelector(selectors);
  if (first) first.focus();
}

function handleKeydown(e) {
  const overlay = document.getElementById("overlay");
  if (overlay.classList.contains("hidden")) return;
  if (e.key === "Escape") {
    closeModal();
    return;
  }
  if (e.key !== "Tab") return;
  const modal = document.getElementById("modal");
  const focusables = [...modal.querySelectorAll("button,[href],input,select,textarea,[tabindex]:not([tabindex='-1'])")].filter((el) => !el.disabled);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

window.openModal = openModal;
window.closeModal = closeModal;
window.handleOverlayClick = handleOverlayClick;
window.scrollToSection = scrollToSection;
window.setSol = setSol;
window.toggleFaq = toggleFaq;
window.selectIndustry = selectIndustry;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.submitLead = submitLead;
window.setLanguage = setLanguage;

function applyStaticCopy() {
  const t = copy[currentLang];
  document.documentElement.lang = t.htmlLang;
  document.getElementById("nav-solutions").textContent = t.nav.solutions;
  document.getElementById("nav-pricing").textContent = t.nav.pricing;
  document.getElementById("nav-cta").textContent = t.nav.cta;
  document.getElementById("hero-badge").textContent = t.hero.badge;
  document.getElementById("hero-heading").innerHTML = t.hero.heading;
  document.getElementById("hero-text").textContent = t.hero.text;
  document.getElementById("hero-cta").textContent = t.hero.cta;
  document.getElementById("hero-secondary").textContent = t.hero.secondary;
  document.getElementById("how-label").textContent = t.sections.howLabel;
  document.getElementById("how-heading").innerHTML = t.sections.howHeading;
  document.getElementById("solutions-label").textContent = t.sections.solutionsLabel;
  document.getElementById("solutions-heading").textContent = t.sections.solutionsHeading;
  document.getElementById("solutions-body").textContent = t.sections.solutionsBody;
  document.getElementById("pricing-label").textContent = t.sections.pricingLabel;
  document.getElementById("pricing-heading").innerHTML = t.sections.pricingHeading;
  document.getElementById("faq-label").textContent = t.sections.faqLabel;
  document.getElementById("faq-heading").textContent = t.sections.faqHeading;
  document.getElementById("cta-heading").innerHTML = t.sections.finalHeading;
  document.getElementById("final-cta-text").textContent = t.sections.finalText;
  document.getElementById("final-cta-button").textContent = t.sections.finalButton;
  document.getElementById("footer-text").textContent = t.sections.footer;
}

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "fi";
  document.getElementById("lang-fi").classList.toggle("active", currentLang === "fi");
  document.getElementById("lang-en").classList.toggle("active", currentLang === "en");
  activeSol = 0;
  applyStaticCopy();
  renderSolutions();
  renderFaq();
  if (!document.getElementById("overlay").classList.contains("hidden")) renderModal();
}

document.addEventListener("keydown", handleKeydown);
setLanguage("fi");
