const FORM_ENDPOINT = "https://formspree.io/f/xzdkqlgy";

const solutions = [
  { id: "ravintolat", label: "Ravintolat", title: "Ravintolat & kahvilat", sub: "Ruokalista, varaukset, tapahtumat", feats: [["Integraatio", "Tableonline-varaus"], ["Sisalto", "Ruokalista + kausipaivitykset"], ["Kielet", "FI, EN, SV vakiona"], ["Erikoisuus", "Tapahtumasivut"]], quote: "\"Uusi sesonkiruokalista paivitetty tunnissa - ennen se vei koko paivan.\"" },
  { id: "kauneus", label: "Kauneus & hyvinvointi", title: "Kauneus & hyvinvointi", sub: "Ajanvaraukset, palvelut, henkilokunta", feats: [["Integraatio", "Timma / Booklr ajanvaraus"], ["Sisalto", "Palveluhinnasto + galleria"], ["Kielet", "FI + EN"], ["Erikoisuus", "Ennen-jalkeen-galleria"]], quote: "\"Asiakkaat varaavat ajan verkossa - ei enaa puheluja auki ollessa.\"" },
  { id: "rakentaminen", label: "Rakentaminen", title: "Rakentaminen & remontit", sub: "Referenssit, tarjouspyynto, yhteystiedot", feats: [["Integraatio", "Tarjouspyyntolomake"], ["Sisalto", "Referenssikohteet + kuvat"], ["Kielet", "FI + EN"], ["Erikoisuus", "Projektisalkku"]], quote: "\"Asiakkaat nakevat toimme ennen kuin soittavat - laadukkaammat liidit.\"" },
  { id: "ammattipalvelut", label: "Ammattipalvelut", title: "Ammattipalvelut", sub: "Asianajajat, tilitoimistot, konsultit", feats: [["Integraatio", "Calendly-varaukset"], ["Sisalto", "Palvelut + tiimi + blogi"], ["Kielet", "FI + EN + SV"], ["Erikoisuus", "Asiantuntijaprofiilit"]], quote: "\"Sivusto rakentaa luottamusta ennen ensimmaista tapaamista.\"" },
  { id: "kauppa", label: "Kauppa & retail", title: "Vahittaiskauppa", sub: "Tuotteet, aukioloajat, sijainti", feats: [["Integraatio", "Tuoteluettelo / verkkokauppa"], ["Sisalto", "Tuotteet + tarjoukset"], ["Kielet", "FI + EN"], ["Erikoisuus", "Sesonkikampanjat"]], quote: "\"Tuotteet esilla verkossa - asiakkaat tietavat mita loytavat.\"" },
  { id: "liikunta", label: "Liikunta & urheilu", title: "Liikunta & urheilu", sub: "Tuntiohjelma, jasenyydet, varaukset", feats: [["Integraatio", "Eazybreak / tuntivaraukset"], ["Sisalto", "Tuntiohjelma + valmentajat"], ["Kielet", "FI + EN"], ["Erikoisuus", "Jasenyyssivut"]], quote: "\"Uudet asiakkaat loytavat meidat Googlesta - ei enaa pelkka some.\"" }
];

const faqs = [
  ["Mita tarkoittaa \"rajattomat paivitykset\"?", "Kaikki sisaltomuutokset - uudet palvelut, hinnaston paivitykset, kuvat, tekstit, aukioloajat - kuuluvat hintaan. Lahetat pyynnon, me toteutamme."],
  ["Mita jos haluan lopettaa?", "Peruuta milloin tahansa ilman irtisanomismaksuja. Domain siirtyy sinulle ja saat kaikki tiedostot haltuusi."],
  ["Onko hosting mukana hinnassa?", "Kyllä - hosting, SSL-sertifikaatti, domain (ensimmainen vuosi) ja Cloudflare-tietoturva sisaltyvat kaikkiin paketteihin."],
  ["Miten toimialaintegraatiot toimivat?", "Ravintolalle rakennamme varausjarjestelman, kauneushoitolalle ajanvarauksen, verkkokaupalle tuoteluettelon - ilman lisahintaa Standard- ja Pro-paketeissa."],
  ["Kuinka nopeasti sivusto on valmis?", "14 paivassa ensimmaisesta yhteydenotosta. Pro-asiakkaille pystymme toimittamaan nopeammin."]
];

const packages = {
  starter: { name: "Starter", price: 99, desc: "5-sivuinen sivusto, FI+EN, 2 paivitysta/kk" },
  standard: { name: "Standard", price: 169, desc: "8-sivuinen sivusto, FI+EN+SV, rajattomat paivitykset + integraatiot" },
  pro: { name: "Pro", price: 269, desc: "Rajattomat sivut, saman paivan paivitys, SEO + Google-mainokset" }
};

const industries = [
  { id: "ravintolat", icon: "🍽", name: "Ravintola / kahvila", sub: "Ruokalista, varaukset" },
  { id: "kauneus", icon: "✂", name: "Kauneus & hyvinvointi", sub: "Ajanvaraukset, palvelut" },
  { id: "rakentaminen", icon: "🔧", name: "Rakennus & remontit", sub: "Referenssit, tarjoukset" },
  { id: "ammattipalvelut", icon: "💼", name: "Ammattipalvelut", sub: "Konsultointi, asiantuntija" },
  { id: "kauppa", icon: "🛍", name: "Kauppa & retail", sub: "Tuotteet, myymala" },
  { id: "liikunta", icon: "⚡", name: "Liikunta & urheilu", sub: "Tunnit, jasenyydet" },
  { id: "muu", icon: "✦", name: "Muu toimiala", sub: "Kaikki muut yritykset" }
];

let activeSol = 0;
let modalStep = 1;
const TOTAL_STEPS = 4;
let isSubmitting = false;
let lastActiveElement = null;
let formData = { pkg: "standard", industry: "", bizName: "", contactName: "", email: "", phone: "", domain: "", notes: "" };

function renderSolutions() {
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
  document.getElementById("modal-title").textContent = modalStep <= TOTAL_STEPS ? `Aloita - vaihe ${modalStep}/${TOTAL_STEPS}` : "Valmis!";
  let html = "";

  if (modalStep <= TOTAL_STEPS) {
    html += "<div class=\"progress-bar\">";
    for (let i = 1; i <= TOTAL_STEPS; i += 1) {
      html += `<div class="pb-step${i < modalStep ? " done" : i === modalStep ? " active" : ""}"></div>`;
    }
    html += "</div>";
  }

  if (modalStep === 1) {
    html += "<div class=\"step-title\">Milla alalla toimit?</div>";
    html += "<div class=\"step-sub\">Rakennamme sivustosi alan parhaiden kaytantojen mukaan.</div>";
    html += "<div class=\"industry-grid\">";
    industries.forEach((ind) => {
      html += `<button type="button" class="industry-card${formData.industry === ind.id ? " selected" : ""}" onclick="selectIndustry('${ind.id}')">
        <div class="ic-icon">${ind.icon}</div>
        <div class="ic-name">${ind.name}</div>
        <div class="ic-sub">${ind.sub}</div>
      </button>`;
    });
    html += "</div>";
    html += modalNav(false, !formData.industry, "Seuraava");
  } else if (modalStep === 2) {
    html += "<div class=\"step-title\">Yrityksen tiedot</div>";
    html += "<div class=\"step-sub\">Perustiedot joita tarvitsemme sivustosi rakentamiseen.</div>";
    html += `<div class="form-group"><label class="form-label" for="biz-name">Yrityksen nimi *</label><input id="biz-name" class="form-input" placeholder="Esim. Ravintola Lahde" value="${escapeAttr(formData.bizName)}" oninput="formData.bizName=this.value" /></div>`;
    html += `<div class="form-row">
      <div class="form-group"><label class="form-label" for="contact-name">Yhteyshenkilo *</label><input id="contact-name" class="form-input" placeholder="Etunimi Sukunimi" value="${escapeAttr(formData.contactName)}" oninput="formData.contactName=this.value" /></div>
      <div class="form-group"><label class="form-label" for="phone">Puhelinnumero</label><input id="phone" class="form-input" placeholder="+358 40 123 4567" value="${escapeAttr(formData.phone)}" oninput="formData.phone=this.value" /></div>
    </div>`;
    html += `<div class="form-group"><label class="form-label" for="email">Sahkoposti *</label><input id="email" class="form-input" type="email" placeholder="sina@yritys.fi" value="${escapeAttr(formData.email)}" oninput="formData.email=this.value" /></div>`;
    html += `<div class="form-group"><label class="form-label" for="domain">Nykyinen verkkosivuosoite (jos on)</label><input id="domain" class="form-input" placeholder="www.yritys.fi" value="${escapeAttr(formData.domain)}" oninput="formData.domain=this.value" /></div>`;
    html += `<div class="form-group"><label class="form-label" for="notes">Lisatietoja tai toiveita</label><textarea id="notes" class="form-input" style="resize:vertical;min-height:72px;" placeholder="Varit, tyyli, erityistoiveet..." oninput="formData.notes=this.value">${escapeHtml(formData.notes)}</textarea></div>`;
    const ok = formData.bizName && formData.contactName && formData.email;
    html += modalNav(true, !ok, "Seuraava");
  } else if (modalStep === 3) {
    html += "<div class=\"step-title\">Valitse pakettisi</div>";
    html += "<div class=\"step-sub\">Voit vaihtaa pakettia myohemmin milloin tahansa.</div>";
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
    html += modalNav(true, false, "Siirry vahvistukseen");
  } else if (modalStep === 4) {
    const pkg = packages[formData.pkg];
    const ind = industries.find((x) => x.id === formData.industry);
    html += "<div class=\"step-title\">Laheta yhteydenotto</div>";
    html += "<div class=\"step-sub\">Tallennamme tietosi ja olemme yhteydessa 24 tunnin sisalla.</div>";
    html += `<div class="summary-box">
      <div class="summary-row"><span class="sk">Yritys</span><span class="sv">${escapeHtml(formData.bizName)}</span></div>
      <div class="summary-row"><span class="sk">Toimiala</span><span class="sv">${ind ? ind.name : "-"}</span></div>
      <div class="summary-row"><span class="sk">Paketti</span><span class="sv">${pkg.name}</span></div>
      <div class="summary-row"><span class="sk">Sahkoposti</span><span class="sv">${escapeHtml(formData.email)}</span></div>
      <div class="summary-row"><span class="sk">Kuukausimaksu</span><span class="sv">EUR ${pkg.price}/kk</span></div>
    </div>`;
    html += `<p id="submit-status" class="step-sub" aria-live="polite"></p>`;
    html += `<div class="modal-nav">
      <button class="btn-back" type="button" onclick="prevStep()">← Takaisin</button>
      <button class="btn-next" id="submit-btn" type="button" onclick="submitLead()" ${isSubmitting ? "disabled" : ""}>${isSubmitting ? "Lahetetaan..." : "Laheta yhteydenotto →"}</button>
    </div>`;
  } else if (modalStep === 5) {
    const pkg = packages[formData.pkg];
    html += "<div class=\"success-icon\">✓</div>";
    html += "<div class=\"success-title\">Kiitos yhteydenotosta!</div>";
    html += `<div class=\"success-sub\">Hienoa, ${escapeHtml(formData.contactName)}! Olemme saaneet pyyntosi pakettiin ${pkg.name} ja otamme yhteytta 24 tunnin sisalla.</div>`;
    html += "<div style=\"margin-top:20px;text-align:center\"><button class=\"btn-primary\" type=\"button\" onclick=\"closeModal()\">Sulje</button></div>";
  }

  document.getElementById("modal-body").innerHTML = html;
}

function modalNav(showBack, nextDisabled, nextLabel) {
  return `<div class="modal-nav">
    ${showBack ? "<button class=\"btn-back\" type=\"button\" onclick=\"prevStep()\">← Takaisin</button>" : "<div></div>"}
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
  if (isSubmitting) return;
  isSubmitting = true;
  renderModal();
  const status = document.getElementById("submit-status");
  if (status) status.textContent = "Lahetetaan...";

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
    if (status) status.textContent = "Lahetys epaonnistui. Yrita uudelleen hetken kuluttua.";
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

document.addEventListener("keydown", handleKeydown);
renderSolutions();
renderFaq();
