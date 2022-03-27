let modifier = document.getElementById('modifier');
let annuler = document.getElementById('annuler');
let retour = document.getElementById('retour');
let inputconditions1 = document.getElementById('inputconditions1');

function boutonannuler() {
    console.log('dans bouton annuler');
    inputconditions1.value = '';
}

function boutonretour() {
    console.log('dans bouton retour');
}

async function ReturnCondition() {
    const reponse = await fetch(`http://localhost:3000/returncondition/${2}`);

    if (reponse.ok) {
        const data = await reponse.json();
        console.log(data);
        if (data !== 0) {
            document.getElementById('condition').innerHTML = data[0].Libelle;
        }
        if (data[0].Libelle === 'Ne pas entrer en contact avec ') {
            document.getElementById('inputconditions1').value = data[0].Victime;
        } else if (data[0].Libelle === 'Ne pas fréquenter ') {
            document.getElementById('inputconditions1').value = data[0].Frequentation;
        } else if (data[0].Libelle === 'Avoir comme adresse le ') {
            const reponse2 = await fetch(`http://localhost:3000/returnpersonne/${data[0].IdPersonne}`);
            if (reponse2.ok) {
                const data2 = await reponse2.json();
                document.getElementById('inputconditions1').value = data2[0].Adresse1;
                console.log(data2[0].Adresse1);
            }
        } else if (data[0].Libelle === 'Doit demeurer à cet endroit entre') {
            document.getElementById('inputconditions2').classList.remove('is-hidden');
            document.getElementById('span1').classList.remove('is-hidden');
            document.getElementById('inputconditions1').value = data[0].HeureDebut.split('T')[1];
            document.getElementById('inputconditions2').value = data[0].HeureFin.split('T')[1];
        }
    }
}
function boutonmodifier() {
}

modifier.addEventListener('click', boutonmodifier);
retour.addEventListener('click', boutonretour);
annuler.addEventListener('click', boutonannuler);

ReturnCondition();