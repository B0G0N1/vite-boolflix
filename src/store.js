import { reactive } from 'vue';  // Importa il metodo reactive da Vue

export const store = reactive({
    // Base URL dell'API da cui ottenere i film cercati
    searchMovieApi: 'https://api.themoviedb.org/3/search/movie',
    searchShowsApi: 'https://api.themoviedb.org/3/search/tv',
    apiKey: '2193eedc3082d0f581dd1cdebb7f8641',
    searchFilm: null, // Qui viene memorizzato il titolo del film cercato
    filmList: [], // Array dei film visibili vuoti  
    languageToCountry: {
        en: 'gb',  // English - United Kingdom
            zh: 'cn',  // Chinese - China
            hi: 'in',  // Hindi - India
            ar: 'sa',  // Arabic - Saudi Arabia
            pt: 'br',  // Portuguese - Brazil
            ja: 'jp',  // Japanese - Japan
            ko: 'kr',  // Korean - South Korea
            es: 'mx',  // Spanish - Mexico
            nl: 'be',  // Dutch - Belgium
            sv: 'fi',  // Swedish - Finland
            no: 'dk',  // Norwegian - Denmark
            fi: 'se',  // Finnish - Sweden
            da: 'no',  // Danish - Norway
            pl: 'lt',  // Polish - Lithuania
            he: 'il',  // Hebrew - Israel
            th: 'th',  // Thai - Thailand
            vi: 'vn',  // Vietnamese - Vietnam
            ms: 'sg',  // Malay - Singapore
            id: 'id',  // Indonesian - Indonesia
            el: 'cy',  // Greek - Cyprus
            cs: 'sk',  // Czech - Slovakia
            hu: 'ro',  // Hungarian - Romania
            ro: 'md',  // Romanian - Moldova
            sr: 'rs',  // Serbian - Serbia
            uk: 'ua',  // Ukrainian - Ukraine
            bg: 'mk',  // Bulgarian - North Macedonia
            hr: 'ba',  // Croatian - Bosnia and Herzegovina
            sk: 'cz',  // Slovak - Czech Republic
            lt: 'lv',  // Lithuanian - Latvia
            lv: 'ee',  // Latvian - Estonia
            et: 'ee',  // Estonian - Estonia
            sl: 'si',  // Slovenian - Slovenia
            ga: 'ie',  // Irish - Ireland
            cy: 'gb',  // Welsh - United Kingdom
            bn: 'bd',  // Bengali - Bangladesh
            ur: 'pk',  // Urdu - Pakistan
            fa: 'ir',  // Persian - Iran
            am: 'et',  // Amharic - Ethiopia
            sw: 'ke',  // Swahili - Kenya
            ta: 'lk',  // Tamil - Sri Lanka
            my: 'mm',  // Burmese - Myanmar
            zh_tw: 'tw',  // Chinese (Taiwan) - Taiwan
            km: 'kh',  // Khmer - Cambodia
            sq: 'al',  // Albanian - Albania
            tg: 'tj',  // Tajik - Tajikistan
            ky: 'kg',  // Kyrgyz - Kyrgyzstan
            uz: 'uz',  // Uzbek - Uzbekistan
            ps: 'af',  // Pashto - Afghanistan
            ne: 'np',  // Nepali - Nepal
            si: 'lk',  // Sinhala - Sri Lanka
    }
});
