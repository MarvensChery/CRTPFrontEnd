// Check la validité des jours
function isJourValide(str) {
    const strToInt = parseInt(str, 10);
    if (strToInt > 31 || strToInt < 1) {
        return false;
    }
    return /^\d+$/.test(str);
}
// Check la validité des mois
function isMoisValide(str) {
    const strToInt = parseInt(str, 10);
    if (strToInt > 12 || strToInt < 1) {
        return false;
    }
    return /^\d+$/.test(str);
}
// Check la validité des années
function isAnneeValide(str) {
    const strToInt = parseInt(str, 10);
    if (strToInt > 2022 || strToInt < 1910) {
        return false;
    }
    return /^\d+$/.test(str);
}
// Check la validité de la date

function isDateValide(annee, mois, jour) {
    const day = new Date(annee, mois, 0);
    const splitDate = day.toUTCString().split(' ');
    const dayMax = parseInt(splitDate[1], 10);
    const jourVal = parseInt(jour, 10);
    if (dayMax < jourVal) {
        return false;
    }
    return true;
}

// Pour convertir la permiere lettre d'un string en majuscule
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
// Pour Convertir toute les lettres en majuscule
function capitalizeAllLetter(str) {
    return str.toUpperCase();
}

// Pour valider l'heure
function chekHour(str) {
    return /^\d{1,2}:\d{2}([ap]m)?$/.test(str);
}
// Check si l'inputs du nom contient les bons characteres
function checkNomInput(str) {
    return /^[a-zA-Z\- ÄäÖöÉéÈèÜüÊêÛûÎî]+$/.test(str);
}
// Check si l'inputs des Prenom contiennent les bons characteres
function checkPrenomInput(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî]+$/.test(str);
}
// Vérifie que le numéro de téléphone est juste 10 chiffres
function verifieNumTel(str) {
    return /^[0-9]{10}$/.test(str);
}
// Vérifie que Le numéro de permis est Une lettre suivi de 12 chiffres
function verifieNumPermis(str) {
    return /^[A-Z]{1}[0-9]{12}$/.test(str);
}
// Vérifie que l'adresse a un maximum de 50 caracthères
function verifieAdresse(str) {
    return /^.{0,50}$/.test(str);
}

// Vérifie que l'adresse commence par un chiffre a un maximum de 50 caracthères
function verifieAdresse2(str) {
    return /^[0-9]{1,6}\s[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî-\s]{0,50}$/.test(str);
}

// Vérifie que la ville a un maximum de 50 caracthères
function verifieVille(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî-\s]{0,50}$/.test(str);
}
// Vérifie que la province a un maximum de 50 caracthères
function verifieProvince(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî-\s]{0,50}$/.test(str);
}
// Vérifie que le code postal est une lettre, un chiffre,
// une lettre, un espace, un chiffre, une lettre, un chiffre
function verifieCodePostal(str) {
    return /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/.test(str);
}
// Vérifie que la taille et le poids ont un maximum de 3 nombres
function verifieTaillePoids(str) {
    return /^[0-9]{0,3}$/.test(str);
}
// Vérifie que la couleur des yeux et cheveux ont un maximum de 15 caracthères
function verifieYeuxCheveux(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî]{0,15}$/.test(str);
}
// Vérifie que la marque est un maximum de 100 caracthères
function verifieMarques(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,100}$/.test(str);
}
// Vérifie que le gilet, le pantalon et les autres vêtements ont un maximum de 50 caracthères
function verifieGiletPantalonAutreVetement(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî,-\s]{0,50}$/.test(str);
}
// Vérifie que l'heure est dans le format 00:00
// ,donc 2 nombres suivie d'un 2 points et encore 2 nombres
function validationHeure(heure) {
    return /^[0-9]{2}[:][0-9]{2}$/.test(heure);
}
// Vérifie que le NuméroFPS sois
function isNumeroValid(numeroFPS) {
    return /^[0-9]{6}$/.test(numeroFPS);
}

// Vérifie que la taille sois de 3 chiffres
function isHeightValid(taille) {
    return /^[0-9]{3}$/.test(taille);
}
// Vérifie que le poids de 2 à 3 chiffres
function isWeightValid(poid) {
    return /^[0-9]{2,3}$/.test(poid);
}

// Check si l'inputs du nom et Prenom contiennent les bons characteres
function checkNomPrenomInput(str) {
    return /^[a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî]{0,20}[' '][a-zA-ZÄäÖöÉéÈèÜüÊêÛûÎî]{0,20}$/.test(str);
}

export {
    capitalizeAllLetter,
    isJourValide,
    isMoisValide,
    isAnneeValide,
    isDateValide,
    capitalizeFirstLetter,
    validationHeure,
    isNumeroValid,
    isHeightValid,
    isWeightValid,
    verifieNumTel,
    verifieNumPermis,
    verifieAdresse,
    verifieVille,
    verifieCodePostal,
    verifieTaillePoids,
    verifieYeuxCheveux,
    verifieMarques,
    verifieGiletPantalonAutreVetement,
    checkNomInput,
    checkPrenomInput,
    chekHour,
    verifieProvince,
    checkNomPrenomInput,
    verifieAdresse2,
};
