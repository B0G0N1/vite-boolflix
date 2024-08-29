import { reactive } from 'vue';  // Importa il metodo reactive da Vue

// Creazione di un oggetto reattivo per lo stato globale dell'applicazione
export const store = reactive({
    searchApi: 'https://api.themoviedb.org/3/search',  // Base URL dell'API per cercare i film
    apiKey: '2193eedc3082d0f581dd1cdebb7f8641',  // Chiave API per autenticazione
    searchFilm: 'Simpson',  // Titolo del film cercato
    filmList: [],  // Elenco dei film trovati

    // Mappatura della lingua (codice ISO 639-1) alla bandiera del rispettivo paese
    languageToCountry: {
        en: 'gb',  // English - United Kingdom 🇬🇧
        zh: 'cn',  // Chinese - China 🇨🇳
        hi: 'in',  // Hindi - India 🇮🇳
        ar: 'sa',  // Arabic - Saudi Arabia 🇸🇦
        pt: 'br',  // Portuguese - Brazil 🇧🇷
        ja: 'jp',  // Japanese - Japan 🇯🇵
        ko: 'kr',  // Korean - South Korea 🇰🇷
        es: 'mx',  // Spanish - Mexico 🇲🇽
        nl: 'be',  // Dutch - Belgium 🇧🇪
        sv: 'fi',  // Swedish - Finland 🇫🇮
        no: 'dk',  // Norwegian - Denmark 🇩🇰
        fi: 'se',  // Finnish - Sweden 🇸🇪
        da: 'no',  // Danish - Norway 🇳🇴
        pl: 'lt',  // Polish - Lithuania 🇱🇹
        he: 'il',  // Hebrew - Israel 🇮🇱
        th: 'th',  // Thai - Thailand 🇹🇭
        vi: 'vn',  // Vietnamese - Vietnam 🇻🇳
        ms: 'sg',  // Malay - Singapore 🇸🇬
        id: 'id',  // Indonesian - Indonesia 🇮🇩
        el: 'cy',  // Greek - Cyprus 🇨🇾
        cs: 'sk',  // Czech - Slovakia 🇸🇰
        hu: 'ro',  // Hungarian - Romania 🇷🇴
        ro: 'md',  // Romanian - Moldova 🇲🇩
        sr: 'rs',  // Serbian - Serbia 🇷🇸
        uk: 'ua',  // Ukrainian - Ukraine 🇺🇦
        bg: 'mk',  // Bulgarian - North Macedonia 🇲🇰
        hr: 'ba',  // Croatian - Bosnia and Herzegovina 🇧🇦
        sk: 'cz',  // Slovak - Czech Republic 🇨🇿
        lt: 'lv',  // Lithuanian - Latvia 🇱🇻
        lv: 'ee',  // Latvian - Estonia 🇪🇪
        et: 'ee',  // Estonian - Estonia 🇪🇪
        sl: 'si',  // Slovenian - Slovenia 🇸🇮
        ga: 'ie',  // Irish - Ireland 🇮🇪
        cy: 'gb',  // Welsh - United Kingdom 🇬🇧
        bn: 'bd',  // Bengali - Bangladesh 🇧🇩
        ur: 'pk',  // Urdu - Pakistan 🇵🇰
        fa: 'ir',  // Persian - Iran 🇮🇷
        am: 'et',  // Amharic - Ethiopia 🇪🇹
        sw: 'ke',  // Swahili - Kenya 🇰🇪
        ta: 'lk',  // Tamil - Sri Lanka 🇱🇰
        my: 'mm',  // Burmese - Myanmar 🇲🇲
        zh_tw: 'tw',  // Chinese (Taiwan) - Taiwan 🇹🇼
        km: 'kh',  // Khmer - Cambodia 🇰🇭
        sq: 'al',  // Albanian - Albania 🇦🇱
        tg: 'tj',  // Tajik - Tajikistan 🇹🇯
        ky: 'kg',  // Kyrgyz - Kyrgyzstan 🇰🇬
        uz: 'uz',  // Uzbek - Uzbekistan 🇺🇿
        ps: 'af',  // Pashto - Afghanistan 🇦🇫
        ne: 'np',  // Nepali - Nepal 🇳🇵
        si: 'lk',  // Sinhala - Sri Lanka 🇱🇰
    }
});