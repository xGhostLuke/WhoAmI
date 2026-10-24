// WhoAmI: gebaut vom Privat-ERP (App Website). Die Seite ist ohne JS vollständig lesbar (Englisch);
// das Skript ergänzt nur den Schreibmaschinen-Effekt der Überschrift, den Sprachumschalter und das Schließen des Handy-Menüs.
"use strict";

const root = document.documentElement;
const headline = document.getElementById("headline");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let timer = null;

function stored() {
  try { return localStorage.getItem("lang"); } catch { return null; }
}

function type() {
  clearTimeout(timer);
  const text = headline.dataset[root.dataset.lang] || headline.dataset.en;
  if (reduced) {
    headline.textContent = text;
    return;
  }
  let index = 0;
  headline.textContent = "";
  headline.classList.add("typing");
  (function step() {
    headline.textContent = text.slice(0, ++index);
    if (index < text.length) timer = setTimeout(step, 55 + Math.random() * 60);
  })();
}

function setLang(lang) {
  root.dataset.lang = lang;
  root.lang = lang;
  try { localStorage.setItem("lang", lang); } catch { /* privater Modus */ }
  type();
}

const toggle = document.getElementById("lang");
if (toggle && !toggle.hidden) {
  toggle.addEventListener("click", () => setLang(root.dataset.lang === "en" ? "de" : "en"));
  setLang(stored() === "de" ? "de" : "en");
} else {
  type();
}

// Handy-Menü nach dem Sprung zu einem Abschnitt schließen
document.querySelectorAll(".narrow a").forEach(link =>
  link.addEventListener("click", () => link.closest("details").removeAttribute("open")));
