// src/plugins/i18n.js
import { createI18n } from 'petite-vue-i18n';

// Scrape the page language from the document
const pageLanguage = document.documentElement.lang;


// Setup the internationalization global variable
const i18n = createI18n({
    locale: pageLanguage,
    fallbackLocale: 'en',
    legacy: false,
});

// Changing the local messages
export async function loadLocaleMessages(locale : string) {
    // Do not import any english - as it'll default
    if (locale === 'en') return locale;

    // Dynamically import the messages for the given locale
    const messages = await import(`./locales/${locale}-lang.json`);
    i18n.global.setLocaleMessage(locale, messages.default);

    // Return the locale
    return locale;
}

export default i18n;
