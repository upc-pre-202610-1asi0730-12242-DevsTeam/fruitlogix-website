/**
 * i18n.js — FruitLogix translation module
 */

const I18n = (() => {
  const STORAGE_KEY = 'fruitlogix_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'es';
  let translations = {};

  async function loadJSON(lang) {
    const res = await fetch(`assets/i18n/${lang}.json`);
    if (!res.ok) throw new Error(`[i18n] Could not load ${lang}.json (HTTP ${res.status})`);
    return res.json();
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key] !== undefined) {
        el.textContent = translations[key];
      }
    });
  }

  function updateToggle() {
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('lang-active', btn.dataset.lang === currentLang);
    });
    document.documentElement.setAttribute('lang', currentLang);
  }

  async function setLanguage(lang) {
    if (lang === currentLang && Object.keys(translations).length > 0) return;
    try {
      translations = await loadJSON(lang);
      currentLang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
      applyTranslations();
      updateToggle();
    } catch (err) {
      console.error(err);
    }
  }

  async function init() {
    await setLanguage(currentLang);

    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  return { init, setLanguage };
})();

document.addEventListener('DOMContentLoaded', () => I18n.init());