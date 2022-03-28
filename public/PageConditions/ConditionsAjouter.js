let input = document.getElementById('Condition');
let inputconditions1 = document.getElementById('inputconditions1');
let inputconditions2 = document.getElementById('inputconditions2');
let inputconditions3 = document.getElementById('inputconditions3');
let span1 = document.getElementById('span1');
let ajouter = document.getElementById('ajouter');
let annuler = document.getElementById('annuler');
let retour = document.getElementById('retour');
const IDPERSONNE = 3;
const IDIPPE = 8;

function changeOptionCondition() {
    let value = input.value;
    // console.log(value)
    // console.log(inputconditions1)
    // console.log(inputconditions2)
    // console.log(inputconditions3)
    switch (value) {
    case '2':
        // console.log("value = 2")
        inputconditions1.className = 'column input is-6';
        inputconditions1.placeholder = 'Ex: 1090 Rue Deschamp';
        inputconditions2.className = 'column input is-3 is-hidden';
        inputconditions3.className = 'column input is-3 is-hidden';
        span1.className = 'is-hidden';
        break;
    case '5':
        // console.log("value = 5")
        inputconditions1.className = 'column input is-6';
        inputconditions1.placeholder = 'Ex: Mario';
        inputconditions2.className = 'column input is-3 is-hidden';
        inputconditions3.className = 'column input is-3 is-hidden';
        span1.className = 'is-hidden';
        break;
    case '6':
        // console.log("value = 6")
        inputconditions1.className = 'column input is-6';
        inputconditions1.placeholder = 'Ex: Luigi';
        inputconditions2.className = 'column input is-3 is-hidden';
        inputconditions3.className = 'column input is-3 is-hidden';
        span1.className = 'is-hidden';
        break;
    case '7':
        // console.log("value = 7")
        inputconditions1.className = 'column input is-6 is-hidden';
        inputconditions2.className = 'column input is-3';
        inputconditions3.className = 'column input is-3';
        span1.className = '';
        break;
    default:
        // console.log("dans default")
        inputconditions1.className = 'column input is-6 is-hidden';
        inputconditions2.className = 'column input is-3 is-hidden';
        inputconditions3.className = 'column input is-3 is-hidden';
        span1.className = 'is-hidden';
    }
}

function boutonannuler() {
    // console.log("dans bouton annuler")
    document.getElementById('Condition').selectedIndex = 0;
    inputconditions1.className = 'column input is-6 is-hidden';
    inputconditions2.className = 'column input is-3 is-hidden';
    inputconditions3.className = 'column input is-3 is-hidden';
    inputconditions1.value = '';
    inputconditions2.value = '';
    inputconditions3.value = '';
    span1.className = 'is-hidden';
}

function boutonretour() {
    //console.log("dans bouton retour")
    window.location.href = 'http://localhost:5000/Acceuil/Acceuil.html';
}

async function boutonajouter() {
    let option = document.getElementById('Condition').value;
    let text = input.options[input.selectedIndex].text;
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
    };
    if (option == 3 || option == 4) {
        const ajout = await fetch(`http://localhost:3000/ajoutercondition/${IDPERSONNE}/${IDIPPE}/${text}`, settings);
        if (ajout.ok) {
            alert('Condition Ajouter');
        } else {
            console.error('ERROR');
        }
    } else if (option == 2) {
        let conditions1 = document.getElementById('inputconditions1').value;
        const ajout = await fetch(`http://localhost:3000/ajouterconditionadresse/${IDIPPE}/${`${text} `}/${IDPERSONNE}/${conditions1}`, settings);
        if (ajout.ok) {
            alert('Condition Ajouter');
        } else {
            console.error('ERROR');
        }
    } else if (option == 5) {
        let conditions1 = document.getElementById('inputconditions1').value;
        const ajout = await fetch(`http://localhost:3000/ajouterconditionvictime/${IDPERSONNE}/${IDIPPE}/${`${text} `}/${conditions1}`, settings);
        if (ajout.ok) {
            alert('Condition Ajouter');
        } else {
            console.error('ERROR');
        }
    } else if (option == 6) {
        let conditions1 = document.getElementById('inputconditions1').value;
        const ajout = await fetch(`http://localhost:3000/ajouterconditionfrequentation/${IDPERSONNE}/${IDIPPE}/${`${text} `}/${conditions1}`, settings);
        if (ajout.ok) {
            alert('Condition Ajouter');
        } else {
            console.error('ERROR');
        }
    } else if (option == 7) {
        let conditions2 = document.getElementById('inputconditions2').value;
        let conditions3 = document.getElementById('inputconditions3').value;
        const ajout = await fetch(`http://localhost:3000/ajouterconditionheure/${IDPERSONNE}/${IDIPPE}/${text}/${conditions2}/${conditions3}`, settings);
        if (ajout.ok) {
            alert('Condition Ajouter');
        } else {
            console.error('ERROR');
        }
    } else {
        alert('veuillez sÃ©lectionner une condition');
    }
}
input.addEventListener('change', changeOptionCondition);
ajouter.addEventListener('click', boutonajouter);
retour.addEventListener('click', boutonretour);
annuler.addEventListener('click', boutonannuler);