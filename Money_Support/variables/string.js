export var language = "de";
/*All Languages:
'en':   English
'de':   German */

export const setLanguage = (value) => {
    language = value
}

export var currency = "EUR" 
/* All Currencies:
'USD': US dollars
'EUR': Euro
'GBP': British pound
'JPY': Japanese Yen
'CNY': Chinese Yuan
'CAD': Canadian dollar
'AUD': Australian dollar
'INR': Indian Rupee
'BRL': Brazilian Real
'CHF': Swiss franc*/

export const setCurrency = (value) => {
    currency = value
}

export var numLayout = "de-DE";
/* All Layouts
'de-DE' = 1.000,00 €
'fr-FR' = 1 000,00 €
'fr-CH' = 1 000.00 €
'en-US' = €1,000.00
'pt-BR' = € 1.000,00
'en-ZA' = €1 000,00*/


export const SetNumLayout = (value) => {
    numLayout = value
}

export var currentuserKey = "Test#8";

export const setCurrentUserKey = (value) => {
    currentuserKey = value
}