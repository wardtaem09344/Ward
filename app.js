(function () {
  var S = window.SITE, root = document.documentElement;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var lang = (navigator.language || "").toLowerCase().indexOf("ar") === 0 ? "ar" : "en";
  lang = store.get("lang") || lang;
  var q = new URLSearchParams(location.search).get("lang");
  if (q) lang = q === "ar" ? "ar" : "en";

  var theme = store.get("theme") || (window.matchMedia && matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  function svg(d, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + (extra || "") + "</svg>";
  }
  var I = {
    ai: svg('<path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>'),
    code: svg('<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"/>'),
    web: svg('<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="M3 9h18M6.5 6.8h.01M9 6.8h.01"/>'),
    mobile: svg('<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>'),
    shield: svg('<path d="M12 3l7 3v5.5c0 4.3-2.9 7.6-7 9.5-4.1-1.9-7-5.2-7-9.5V6z"/><path d="M9 12l2 2 4-4"/>'),
    cloud: svg('<path d="M7 18.5a4 4 0 010-8 5.2 5.2 0 019.8-1.2A4.6 4.6 0 0117 18.5z"/>'),
    auto: svg('<path d="M20 11a8 8 0 00-14-4M4 4v4h4M4 13a8 8 0 0014 4M20 20v-4h-4"/>'),
    chat: svg('<path d="M4 5h16v11H9.5L4 20z"/><path d="M8 9.5h8M8 12.5h5"/>'),
    scale: svg('<path d="M5 20V11M12 20V4M19 20v-6"/>'),
    bolt: svg('<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>'),
    clean: svg('<circle cx="12" cy="12" r="9"/><path d="M8.5 12.2l2.5 2.5 4.5-5"/>'),
    gauge: svg('<path d="M4 17a8 8 0 1116 0"/><path d="M12 17l4-5"/>'),
    heart: svg('<path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"/>'),
    sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"/>'),
    moon: svg('<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>'),
    menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
    arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    up: svg('<path d="M7 17L17 7M9 7h8v8"/>'),
    telegram: svg('<path d="M21 4L3 11l5.2 2L10 19l3.2-3.8L18 19z"/>'),
    github: svg('<path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>'),
    instagram: svg('<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><path d="M16.6 7.4h.01"/>'),
    tiktok: svg('<path d="M14 4v10.5a3.5 3.5 0 11-3.5-3.5M14 4c.3 2.2 1.8 3.7 4 4"/>'),
    mail: svg('<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="M4 7l8 6 8-6"/>')
  };
  var svcIcons = ["ai", "code", "web", "mobile", "shield", "cloud", "auto", "chat"];
  var prIcons = ["shield", "scale", "bolt", "clean", "gauge", "heart"];

  function socials() {
    var L = S.links, out = "";
    [["telegram", L.telegram], ["github", L.github], ["instagram", L.instagram], ["tiktok", L.tiktok]].forEach(function (p) {
      if (p[1]) out += '<a class="ico" href="' + esc(p[1]) + '" target="_blank" rel="noopener" aria-label="' + p[0] + '">' + I[p[0]] + "</a>";
    });
    if (L.email) out += '<a class="ico" href="mailto:' + esc(L.email) + '" aria-label="email">' + I.mail + "</a>";
    return out;
  }
  function head(n, title, sub) {
    return '<div class="sh rv"><span class="n">' + n + "</span><h2>" + esc(title) + "</h2><p>" + esc(sub) + "</p></div>";
  }
  function pad(i) { return (i < 9 ? "0" : "") + (i + 1); }

  function render() {
    var t = S[lang], L = S.links, ar = lang === "ar";
    root.lang = lang; root.dir = ar ? "rtl" : "ltr"; root.dataset.theme = theme;
    document.title = t.title;
    document.querySelector('meta[name="description"]').content = t.desc;
    var tg = L.telegram || ("mailto:" + L.email);
    var bannerOn = store.get("banner") !== "off";

    var top = "";
    if (bannerOn) top += '<div class="banner"><p>' + esc(t.banner[0]) + '</p><a href="' + esc(tg) + '" target="_blank" rel="noopener">' + esc(t.banner[1]) + '</a><button id="bx" aria-label="close">' + I.close + "</button></div>";
    top += '<div class="bar"><a class="logo" href="#top"><span class="mark">' + esc((t.brand[0] || "W")) + "</span><b>" + esc(t.brand) + "</b></a>" +
      '<nav id="nav">' + ["services", "work", "process", "faq", "contact"].map(function (k) { return '<a href="#' + k + '">' + esc(t.nav[k]) + "</a>"; }).join("") + "</nav>" +
      '<div class="tools"><button class="pill" id="lang">' + esc(t.langSwitch) + '</button><button class="round" id="theme" aria-label="theme">' + (theme === "dark" ? I.sun : I.moon) + '</button><button class="round menu" id="menu" aria-label="menu">' + I.menu + "</button></div></div>";
    document.getElementById("top").innerHTML = top;

    var h = t.hero, handle = S.handle || "ward";
    var html = '<section class="hero"><div class="hero-l"><p class="kick rv"><span class="dot"></span>' + esc(h.kicker) + "</p>" +
      '<h1 class="rv">' + esc(h.h1[0]) + " <em>" + esc(h.h1[1]) + "</em> " + esc(h.h1[2]) + '</h1><p class="lead rv">' + esc(h.p) + "</p>" +
      '<div class="btns rv"><a class="btn pri" href="' + esc(tg) + '" target="_blank" rel="noopener">' + esc(t.cta) + I.arrow + '</a><a class="btn" href="#contact">' + esc(t.cta2) + "</a></div>" +
      '<ul class="facts rv">' + h.facts.map(function (f) { return "<li>" + I.clean + esc(f) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="hero-r rv" dir="ltr"><div class="term"><div class="tb"><i></i><i></i><i></i><span>~/' + esc(handle) + '</span></div><pre><code>' +
      '<span class="m">$</span> ' + esc(handle) + ' new project\n<span class="ok">✓</span> scope &amp; budget agreed\n<span class="ok">✓</span> design approved\n<span class="ok">✓</span> built, tested, deployed\n<span class="ok">✓</span> source code handed over\n\n<span class="m">$</span> <span class="cur"></span></code></pre></div>' +
      '<div class="chip c1"><b>24h</b><span>reply</span></div><div class="chip c2"><b>100%</b><span>yours</span></div></div></section>';

    html += '<section id="services">' + head("01", t.servicesTitle, t.subs.services) + '<div class="grid">' +
      t.services.map(function (s, i) { return '<article class="card rv"><span class="ic">' + I[svcIcons[i % 8]] + "</span><h3>" + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></article>"; }).join("") + "</div></section>";

    html += '<section id="work">' + head("02", t.workTitle, t.subs.work) + '<div class="works">' +
      t.work.map(function (w, i) { return '<a class="work rv" href="' + esc(w[3]) + '" target="_blank" rel="noopener"><div class="wt"><span class="tagc">' + esc(w[1]) + '</span><span class="go">' + I.up + "</span></div><h3>" + esc(w[0]) + "</h3><p>" + esc(w[2]) + '</p><span class="big">' + pad(i) + "</span></a>"; }).join("") + "</div></section>";

    html += '<section id="process">' + head("03", t.processTitle, t.subs.process) + '<ol class="steps">' +
      t.process.map(function (p, i) { return '<li class="rv"><span class="num">' + pad(i) + "</span><h3>" + esc(p[0]) + "</h3><p>" + esc(p[1]) + "</p></li>"; }).join("") + "</ol></section>";

    html += '<section id="principles">' + head("04", t.principlesTitle, t.subs.principles) + '<div class="grid g3">' +
      t.principles.map(function (p, i) { return '<article class="card rv"><span class="ic">' + I[prIcons[i % 6]] + "</span><h3>" + esc(p[0]) + "</h3><p>" + esc(p[1]) + "</p></article>"; }).join("") + "</div></section>";

    html += '<section id="faq" class="split"><div>' + head("05", t.faqTitle, t.subs.faq) + '</div><div class="faq">' +
      t.faq.map(function (f) { return '<details class="rv"><summary>' + esc(f[0]) + "<i></i></summary><p>" + esc(f[1]) + "</p></details>"; }).join("") + "</div></section>";

    html += '<section class="owner"><div class="who rv"><div class="av">' + esc(t.owner.name.replace(/[\[\]]/g, "").trim()[0] || "W") + '</div><div><span class="tagc">' + esc(t.ownerTitle) + "</span><h3>" + esc(t.owner.name) + '</h3><span class="role">' + esc(t.owner.role) + "</span><p>" + esc(t.owner.bio) + "</p></div></div></section>";

    html += '<section id="contact" class="cta"><div class="ctab rv"><h2>' + esc(t.closing[0]) + "</h2><p>" + esc(t.closing[1]) + '</p><div class="btns"><a class="btn pri" href="' + esc(tg) + '" target="_blank" rel="noopener">' + esc(t.cta) + I.arrow + "</a>" +
      (L.email ? '<a class="btn" href="mailto:' + esc(L.email) + '">' + esc(L.email) + "</a>" : "") + "</div></div></section>";

    document.getElementById("main").innerHTML = html;
    document.getElementById("foot").innerHTML = '<div class="bar"><span>© ' + new Date().getFullYear() + " " + esc(t.brand) + ". " + esc(t.footer) + '</span><div class="soc">' + socials() + "</div></div>";

    var hd = document.getElementById("top");
    document.getElementById("lang").onclick = function () { lang = lang === "en" ? "ar" : "en"; store.set("lang", lang); render(); };
    document.getElementById("theme").onclick = function () { theme = theme === "dark" ? "light" : "dark"; store.set("theme", theme); render(); };
    document.getElementById("menu").onclick = function () { hd.classList.toggle("open"); };
    document.querySelectorAll("#nav a").forEach(function (a) { a.onclick = function () { hd.classList.remove("open"); }; });
    var bx = document.getElementById("bx");
    if (bx) bx.onclick = function () { store.set("banner", "off"); render(); };

    var els = document.querySelectorAll(".rv");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px" });
      els.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 60 + "ms"; io.observe(el); });
    } else els.forEach(function (el) { el.classList.add("in"); });
  }
  render();
})();
