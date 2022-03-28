let modifier = document.getElementById('modifier');
let annuler = document.getElementById('annuler');
let retour = document.getElementById('retour');
let supprimer = document.getElementById('supprimer');
let inputconditions1 = document.getElementById('inputconditions1');
const IDCONDITION = 2;

function VerifCondition(CONDITION) {
    if (CONDITION === 'Doit garder la paix et avoir bonne conduite' || CONDITION === "Aucune consommation d'alcool ou de drogue non prescrite") {
        document.getElementById('inputconditions1').classList.add('is-hidden');
    }
}

async function boutonsupprimer() {
    const settings = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        },
    };
    const reponse = await fetch(`http://localhost:3000/deletecondition/${IDCONDITION}`, settings);

    if (reponse.ok) {
        alert('condition supprimer');
    }
}

function boutonannuler() {
    console.log('dans bouton annuler');
    inputconditions1.value = '';
}

function boutonretour() {
    console.log('dans bouton retour');
}

async function ReturnCondition() {
    const reponse = await fetch(`http://localhost:3000/returncondition/${IDCONDITION}`);

    if (reponse.ok) {
        const data = await reponse.json();
        VerifCondition(data[0].Libelle);
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
async function boutonmodifier() {
    const reponse = await fetch(`http://localhost:3000/returncondition/${IDCONDITION}`);

    if (reponse.ok) {
        const data = await reponse.json();
        let conditions = document.getElementById('condition').innerHTML;
        let input1 = document.getElementById('inputconditions1').value;
        let input2 = document.getElementById('inputconditions2').value;
        const settings = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
            },
        };
        if (conditions === 'Ne pas entrer en contact avec ') {
            console.log(data);
            await fetch(`http://localhost:3000/updatevictime/${data[0].Id}/${input1}`, settings);
            alert('condition modifier');
        } else if (conditions === 'Ne pas fréquenter ') {
            console.log(data);
            await fetch(`http://localhost:3000/updatefrequentation/${data[0].Id}/${input1}`, settings);
            alert('condition modifier');
        } else if (conditions === 'Avoir comme adresse le ') {
            console.log(data);
            await fetch(`http://localhost:3000/updateadresse/${data[0].IdPersonne}/${input1}`, settings);
            alert('condition modifier');
        } else if (conditions === 'Doit demeurer à cet endroit entre') {
            console.log(data);
            await fetch(`http://localhost:3000/updateheure/${data[0].Id}/${input1}/${input2}`, settings);
            alert('condition modifier');
        } else {
            alert('cette condition peut seulement etre supprimer');
        }
    }
}
modifier.addEventListener('click', boutonmodifier);
retour.addEventListener('click', boutonretour);
annuler.addEventListener('click', boutonannuler);
supprimer.addEventListener('click', boutonsupprimer);

ReturnCondition();