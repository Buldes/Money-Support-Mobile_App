export var currentUserData = []

export const setCurrentUserData = (value) => {
    currentUserData = value
}

export const AddToCurrentUserData = (value) => {
    currentUserData.push(value)
}

export const setToWelcomeData = () => {
    const currentDate = new Date()

    setCurrentUserData([
        {"id":2, "state":"Expenditures", "date":{"day":currentDate.getDate(),"month":currentDate.getMonth() + 1,"year":currentDate.getFullYear()}, "amount":0.5, "bankBalance":0},
        {"id":1, "state":"Income", "date":{"day":currentDate.getDate(),"month":currentDate.getMonth() + 1,"year":currentDate.getFullYear()}, "amount":1, "bankBalance":0},
        {"id":0, "state":"Initialization", "date":{"day":currentDate.getDate(),"month":currentDate.getMonth() + 1,"year":currentDate.getFullYear()}, "amount":0, "bankBalance":0}
    ])
}

export var newEntry = {}

export const setNewEntry = (value) => {
    newEntry = value
}

export const allLanguages = {
    "en": "English",           // English
    "de": "Deutsch",           // German
    "es": "Español",           // Spain
    "fr": "Français",          // French
    "ita": "italiano",         // Italian
    "pt": "Português",         // Portuguese
    "ru": "Русский",           // Russian   
    "pl": "Polski",            // Polish
    "ar": "العربية",          // Arabic
    "hi": "हिन्दी",              // Hindi
    "bn": "বাংলা",              // Bengali
    "zh": "中文 (Mandarin)",   // Chinese (Mandarin)
    "ja": "日本語",            // Japanese
  }

export const flagForLanguage = {
    "en": "us",           // English => America
    "de": "de",           // German => Germany
    "es": "es",           // Spain => Spain
    "fr": "fr",           // French => France
    "ita": "it",          // Italian => Italy
    "pt": "pt",           // Portuguese => Portuguese
    "ru": "ru",           // Russian => Russian
    "pl": "pl",           // Polish => Poland
    "ar": "al",           // Arabic => Arabia
    "hi": "in",           // Hindi => India
    "bn": "bn",           // Bengali => Brunei Darussalam
    "zh": "cn",           // Chinese (Mandarin) => China
    "ja": "jp",           // Japanese => Japan
}

export const allCurrencies = {
    'USD': "US dollars",
    'EUR': "Euro",
    'GBP': "British pound",
    'JPY': "Japanese Yen",
    'CNY': "Chinese Yuan",
    'CAD': "Canadian dollar",
    'AUD': "Australian dollar",
    'INR': "Indian Rupee",
    'BRL': "Brazilian Real",
    'CHF': "Swiss franc",
} 