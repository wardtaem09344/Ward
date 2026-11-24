(function () {
  var S = window.SITE;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var lang = "en";
  lang = (navigator.language || "").toLowerCase().indexOf("ar") === 0 ? "ar" : "en";
  try { lang = localStorage.getItem("lang") || lang; } catch (e) {}
  if (new URLSearchParams(location.search).get("lang")) lang = new URLSearchParams(location.search).get("lang") === "ar" ? "ar" : "en";

  var icon = {
    telegram: '<svg viewBox="0 0 24 24"><path d="M21 4L3 11l5 2 2 6 3-4 5 4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.800-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6.2 0C6.5 2.800 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="16.6" cy="7.4" r="1" fill="currentColor"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M14 4v10.5a3.5 3.5 0 11-3.5-3.5M14 4c.3 2.2 1.800 3.700 4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'
  };

  function socials() {
    var L = S.links, out = "";
    [["telegram", L.telegram], ["github", L.github], ["instagram", L.instagram], ["tiktok", L.tiktok]].forEach(function (p) {
      if (p[1]) out += '<a class="ico" href="' + esc(p[1]) + '" target="_blank" rel="noopener" aria-label="' + p[0] + '">' + icon[p[0]] + "</a>";
    });
    if (L.email) out += '<a class="ico" href="mailto:' + esc(L.email) + '" aria-label="email">' + icon.mail + "</a>";
    return out;
  }

  function render() {
    var t = S[lang], L = S.links;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t.title;
    document.querySelector('meta[name="description"]').content = t.desc;
    var skip = document.querySelector(".skip"); skip.textContent = lang === "ar" ? "تخطي" : "Skip";
    var tg = L.telegram || ("mailto:" + L.email);

    document.getElementById("top").innerHTML =
      '<div class="bar"><a class="logo" href="#top"><i></i><b>' + esc(t.brand) + '</b></a>' +
      '<nav>' + ["services", "work", "process", "faq", "contact"].map(function (k) { return '<a href="#' + k + '">' + esc(t.nav[k]) + "</a>"; }).join("") + "</nav>" +
      '<button class="lang" id="lang">' + esc(t.langSwitch) + "</button></div>";

    var h = t.hero;
    var html = '<section class="hero"><p class="kick"><span class="dot"></span>' + esc(h.kicker) + "</p>" +
      '<h1>' + esc(h.h1[0]) + " <em>" + esc(h.h1[1]) + "</em> " + esc(h.h1[2]) + "</h1><p class=lead>" + esc(h.p) + "</p>" +
      '<div class="btns"><a class="btn pri" href="' + esc(tg) + '" target="_blank" rel="noopener">' + esc(t.cta) + ' <span>→</span></a><a class="btn" href="#contact">' + esc(t.cta2) + "</a></div>" +
      '<ul class="facts">' + h.facts.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></section>";

    html += '<section id="services"><h2><span class="n">01</span>' + esc(t.servicesTitle) + '</h2><div class="grid">' +
      t.services.map(function (s, i) { return '<article class="card"><span class="mono">' + String(i + 1).padStart(2, "0") + "</span><h3>" + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></article>"; }).join("") + "</div></section>";

    html += '<section id="work"><h2><span class="n">02</span>' + esc(t.workTitle) + '</h2><div class="rows">' +
      t.work.map(function (w) { return '<a class="row" href="' + esc(w[3]) + '" target="_blank" rel="noopener"><span class="mono">' + esc(w[1]) + "</span><h3>" + esc(w[0]) + "</h3><p>" + esc(w[2]) + '</p><span class="go">' + esc(t.visit) + " ↗</span></a>"; }).join("") + "</div></section>";

    html += '<section id="process"><h2><span class="n">03</span>' + esc(t.processTitle) + '</h2><ol class="steps">' +
      t.process.map(function (p) { return "<li><h3>" + esc(p[0]) + "</h3><p>" + esc(p[1]) + "</p></li>"; }).join("") + "</ol></section>";

    html += '<section id="faq"><h2><span class="n">04</span>' + esc(t.faqTitle) + "</h2><div class=faq>" +
      t.faq.map(function (q) { return "<details><summary>" + esc(q[0]) + "</summary><p>" + esc(q[1]) + "</p></details>"; }).join("") + "</div></section>";

    html += '<section class="owner"><h2><span class="n">05</span>' + esc(t.ownerTitle) + '</h2><div class="who"><div class="av">' + esc((t.owner.name.replace(/[\[\]]/g, "").trim()[0] || "W")) + '</div><div><h3>' + esc(t.owner.name) + '</h3><span class="mono">' + esc(t.owner.role) + "</span><p>" + esc(t.owner.bio) + "</p></div></div></section>";

    html += '<section id="contact" class="close"><h2>' + esc(t.closing[0]) + "</h2><p>" + esc(t.closing[1]) + '</p><div class="btns"><a class="btn pri" href="' + esc(tg) + '" target="_blank" rel="noopener">' + esc(t.cta) + ' <span>→</span></a>' +
      (L.email ? '<a class="btn" href="mailto:' + esc(L.email) + '">' + esc(L.email) + "</a>" : "") + "</div></section>";

    document.getElementById("main").innerHTML = html;
    document.getElementById("foot").innerHTML = '<div class="bar"><span>© ' + new Date().getFullYear() + " " + esc(t.brand) + ". " + esc(t.footer) + '</span><div class="soc">' + socials() + "</div></div>";
    document.getElementById("lang").onclick = function () {
      lang = lang === "en" ? "ar" : "en";
      try { localStorage.setItem("lang", lang); } catch (e) {}
      render();
    };
  }
  render();
})();
