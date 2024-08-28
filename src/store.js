import { reactive } from 'vue';  // Importa il metodo reactive da Vue

export const store = reactive({
    // Base URL dell'API da cui ottenere i film cercati
    searchMovieApi: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '2193eedc3082d0f581dd1cdebb7f8641',
    searchFilm: null, // Qui viene memorizzato il titolo del film cercato
    filmList: [], // Array dei film visibili vuoti 
    languageToCountry: {
        en: 'gb',  // English - United Kingdom
        es: 'es',  // Spanish - Spain
        zh: 'cn',  // Chinese - China
        hi: 'in',  // Hindi - India
        ar: 'sa',  // Arabic - Saudi Arabia
        pt: 'br',  // Portuguese - Brazil
        ru: 'ru',  // Russian - Russia
        ja: 'jp',  // Japanese - Japan
        de: 'de',  // German - Germany
        fr: 'fr',  // French - France
        ko: 'kr',  // Korean - South Korea
        it: 'it',  // Italian - Italy
        tr: 'tr',  // Turkish - Turkey
        nl: 'nl',  // Dutch - Netherlands
        sv: 'se',  // Swedish - Sweden
        no: 'no',  // Norwegian - Norway
        fi: 'fi',  // Finnish - Finland
        da: 'dk',  // Danish - Denmark
        pl: 'pl',  // Polish - Poland
        he: 'il',  // Hebrew - Israel
        th: 'th',  // Thai - Thailand
        vi: 'vn',  // Vietnamese - Vietnam
        ms: 'my',  // Malay - Malaysia
        id: 'id',  // Indonesian - Indonesia
        el: 'gr',  // Greek - Greece
        cs: 'cz',  // Czech - Czech Republic
        hu: 'hu',  // Hungarian - Hungary
        ro: 'ro',  // Romanian - Romania
        sr: 'rs',  // Serbian - Serbia
        uk: 'ua',  // Ukrainian - Ukraine
        bg: 'bg',  // Bulgarian - Bulgaria
        hr: 'hr',  // Croatian - Croatia
        sk: 'sk',  // Slovak - Slovakia
        lt: 'lt',  // Lithuanian - Lithuania
        lv: 'lv',  // Latvian - Latvia
        et: 'ee',  // Estonian - Estonia
        sl: 'si',  // Slovenian - Slovenia
        mk: 'mk',  // Macedonian - North Macedonia
        mt: 'mt',  // Maltese - Malta
        is: 'is',  // Icelandic - Iceland
        ga: 'ie',  // Irish - Ireland
        cy: 'gb-wls', // Welsh - Wales (United Kingdom)
        bn: 'bd',  // Bengali - Bangladesh
        ur: 'pk',  // Urdu - Pakistan
        fa: 'ir',  // Persian - Iran
        am: 'et',  // Amharic - Ethiopia
        sw: 'tz',  // Swahili - Tanzania
        ta: 'lk',  // Tamil - Sri Lanka
        my: 'mm',  // Burmese - Myanmar
    }
});
