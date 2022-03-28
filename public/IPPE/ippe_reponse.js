window.addEventListener('DOMContentLoaded', async () => {
    document.getElementById("imgHome").addEventListener('click', () => {
        window.location.href = "http://localhost:5000/Acceuil/Acceuil.html"
    })
    const urlParams = new URLSearchParams(window.location.search);
    //obtenir la valeur d'un paramètre
    const nomFamille = urlParams.get('nomFamille');
    const prenom1 = urlParams.get('prenom1');
    const prenom2 = urlParams.get('prenom2');
    const masculin = urlParams.get('masculin');
    const dateNaissance = urlParams.get('dateNaissance')
    const rightarrow = document.getElementById('rightarrow')
    const leftarrow = document.getElementById('leftarrow')
    const infoippe = document.getElementById('infoippe');
    const reponse = document.getElementById('reponse');
    const ippe = document.getElementById('ippe');
    //ippe_reponse.html?nomFamille=Dwad&prenom1=Awd&prenom2=Awd&masculin=true&dateNaissance=1958-9-19T00:00:00.000Z
    //`http://localhost:3000/ippeInfo?nomFamille=${nomFamille}&prenom1=${prenom1}&prenom2=${prenom2}&masculin=${sexe}&dateNaissance=${dateNaissance}`
    //http://localhost:3000/ippeInfo?nomFamille=Hébert&prenom1=Francis&prenom2=&masculin=true&dateNaissance=1992-10-19T00:00:00.000Z
    //http://localhost:3000/ippeInfo?nomFamille=Amoussougbo&prenom1=Yaken&prenom2=&masculin=true&dateNaissance=2000-03-04T00:00:00.000Z
    //http://localhost:3000/ippeInfo?nomFamille=Michaud&prenom1=No%C3%A9mie&prenom2=&masculin=false&dateNaissance=2002-07-08T00:00:00.000Z
    //http://localhost:3000/ippeInfo?nomFamille=Coutu&prenom1=Jean&prenom2=Pierre&masculin=true&dateNaissance=1998-06-24T00:00:00.000Z
    //http://localhost:3000/ippeInfo?nomFamille=Ducharme&prenom1=Benoit&prenom2=&masculin=true&dateNaissance=1975-08-31T00:00:00.000Z
    //http://localhost:3000/ippeInfo?nomFamille=Sirois&prenom1=Danielle&prenom2=&masculin=false&dateNaissance=1980-02-14T00:00:00.000Z
    //http://localhost:3000/ippeInfo?nomFamille=B%C3%A9langer&prenom1=Claude&prenom2=&masculin=true&dateNaissance=1976-07-12T00:00:00.000Z
    //http://localhost:3000/ippeInfo?nomFamille=Levasseur&prenom1=Marc&prenom2=&masculin=true&dateNaissance=1971-11-07T00:00:00.000Z
    const resultat = await fetch(`http://localhost:3000/ippeInfo?nomFamille=${nomFamille}&prenom1=${prenom1}&prenom2=${prenom2}&masculin=${masculin}&dateNaissance=${dateNaissance}`);
    if (resultat.ok) {
        function deuxiemeReponse() {
            if (data[0].IPPE.length === 1) {
                console.log("1 reponses ippe")
                return ''
            } else if (data[0].IPPE.length === 2) {
                console.log("2 reponses ippe")
                let ippe2 = document.getElementById("ippe2");
                let reponse2 = document.getElementById("reponse2")
                reponse2.innerHTML = `***${data[0].IPPE[1].typeEvenement}***`;

                let dataippe2;
                
                console.log(dataippe2)
                console.log(data[0].IPPE[1].typeEvenement);
                console.log(data[0].IPPE.length)

                switch (data[0].IPPE[1].typeEvenement) {
                    case 'Recherché':
                        dataippe2 = `
              <tr>
                  <td>Mandat:</td>
                  <td>${data[0].IPPE[1].mandat}</td>
              </tr>
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[1].cour}</td>
              </tr>
              <tr>
                  <td>Numero de mandat:</td>
                  <td>${data[0].IPPE[1].noMandat}</td>
              </tr>
              <tr>
                  <td>Nature du crime :</td>
                  <td>${data[0].IPPE[1].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement :</td>
                  <td>${data[0].IPPE[1].noEvenement}</td>
              </tr>
              <!--condtions-->
            
              `;

                        ippe2.innerHTML = dataippe2;
                        break;

                    case 'Sous observation':
                        dataippe2 = `
              <tr>
                  <td>Motif:</td>
                  <td>${data[0].IPPE[0].motif}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <tr>
                  <td>Dossier :</td>
                  <td>${data[0].IPPE[0].dossierEnquete}</td>
              </tr>
              <!--condtions-->
            
              `;

                        ippe2.innerHTML = dataippe2;
                        break;

                    case 'Accusé':
                        dataippe2 = `
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[0].cour}</td>
              </tr>
              <tr>
                  <td>Numero de cause:</td>
                  <td>${data[0].IPPE[0].noCause}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <!--condtions-->
              `;

                        ippe2.innerHTML = dataippe2;
                        break;

                    case 'Probation':
                        dataippe2 = `
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[0].cour}</td>
              </tr>
              <tr>
                  <td>Numero de cause:</td>
                  <td>${data[0].IPPE[0].noCause}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <tr>
                  <td>Fin de sentence:</td>
                  <td>${data[0].IPPE[0].finSentence.split('T')[0]}</td>
              </tr>
              <!--condtions-->
            
              <tr>
                  <td>Agent de probation:</td>
                  <td>${data[0].IPPE[0].agentProbation}</td>
              </tr>
              <tr>
                  <td>Telephone:</td>
                  <td>${data[0].IPPE[0].telephone} Poste: ${data[0].IPPE[0].poste}</td>
              </tr>
              `;

                        ippe2.innerHTML = dataippe2;
                        break;

                    case 'Libération Conditionnelle':
                        dataippe2 = `
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[0].cour}</td>
              </tr>
              <tr>
                  <td>Numero de cause:</td>
                  <td>${data[0].IPPE[0].noCause}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[0].natureCrime}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <!--FPS-->
              ${formatterFPS()}
              <tr>
                  <td>Lieu de detention:</td>
                  <td>${data[0].IPPE[0].lieuDetention}</td>
              </tr>
              <tr>
                  <td>Fin de la sentence:</td>
                  <td>${data[0].IPPE[0].finSentence.split('T')[0]}</td>
              </tr>
            <!--condtions-->
            
            <tr>
                <td>Agent de libération conditionnelle à contacter :</td>
                <td>${data[0].IPPE[0].agentLiberation}</td>
            </tr>
            <tr>
                <td>Téléphone :</td>
                <td>${data[0].IPPE[0].telephone}</td>
            </tr>
              `;

                        ippe2.innerHTML = dataippe2;
                        break;

                    case 'Disparu':
                        let disparuprob2;
                        if (data[0].Depressif === true) {
                            disparuprob2 = "Depressif"
                        }
                        dataippe2 = `
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <tr>
                  <td>Nature:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Derniere fois vu::</td>
                  <td>${data[0].IPPE[0].vuDerniereFois}</td>
              </tr>
              <tr>
                <td><strong>Description physique</strong></td>
            </tr>
            <tr>
                <td>Race :</td>
                <td>${data[0].Race}</td>
            </tr>
            <tr>
                <td>Taille :</td>
                <td>${data[0].Taille}cm</td>
            </tr>
            <tr>
                <td>Poids :</td>
                <td>${data[0].Poids}kg</td>
            </tr>
            <tr>
                <td>Yeux :</td>
                <td>${data[0].Yeux}</td>
            </tr>
            <tr>
                <td>Cheveux :</td>
                <td>${data[0].Cheveux}</td>
            </tr>
            <tr>
                <td>Marques :</td>
                <td>${data[0].Marques}</td>
            </tr>
            <tr>
                <td><strong>Description vestimentaire</strong></td>
            </tr>
            <tr>
                <td>Gilet :</td>
                <td>${data[0].Gilet}</td>
            </tr>
            <tr>
                <td>Pantalon :</td>
                <td>${data[0].Pantalon}</td>
            </tr>
            <tr>
                <td>Autre(s) vêtement(s) :</td>
                <td>${data[0].AutreVetement}</td>
            </tr>
            <tr>
                <td>Problematique de sante connu:</td>
                <td>${disparuprob}</td>
            </tr>
            <!--condtions-->
            
              `;

                        ippe2.innerHTML = dataippe2;
                        break;

                    case 'Interdit':
                        dataippe2 = `
              <tr>
                  <td>Nature:</td>
                  <td>${data[0].IPPE[1].nature}</td>
              </tr>
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[1].cour}</td>
              </tr>
              <tr>
                  <td>Numero de cause:</td>
                  <td>${data[0].IPPE[1].noCause}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[1].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[1].noEvenement}</td>
              </tr>
              <tr>
                  <td>Expiration:</td>
                  <td>${data[0].IPPE[1].finSentence.split('T')[0]}</td>
              </tr>
              <!--condtions-->
            
              `;
                        console.log(dataippe2)
                        console.log(ippe2)
                        ippe2.innerHTML = dataippe2;
                        console.log(ippe2)
                        break;
                }
            }
            return ''
        }

        function formatterFPS() {
            return `<tr>
            <td>FPS :</td>
            <td>${data[0].FPS.NoFPS}</td>
        </tr>`
        }

        function formatterConditions() {
            console.log(data[0].IPPE[0].conditions)
            let returneddata = `<tr>
        <td><strong>Condition(s) :</strong></td>
    </tr>`;
            if (data[0].IPPE[0].conditions === null || data[0].IPPE[0].conditions.length === 0) {
                return ''
            } else if (data[0].IPPE[0].conditions.length > 0) {
                data[0].IPPE[0].conditions.forEach(element => {
                    console.log(element.victime, element.frequentation, element.libelle)
                    if (element.frequentation === null && element.victime === null) {
                        returneddata += `<tr>
                                        <td></td>
                                        <td>${element.libelle}</td>
                                    </tr>`
                    } else if (element.frequentation === null && element.victime !== null) {
                        returneddata += `<tr>
                                        <td></td>
                                        <td>${element.libelle} ${element.victime}</td>
                                    </tr>`
                    } else if (element.frequentation !== null && element.victime === null) {
                        returneddata += `<tr>
                                        <td></td>
                                        <td>${element.libelle} ${element.frequentation}</td>
                                    </tr>`
                    }
                });
            }
            return returneddata
        }

        document.getElementById("body").classList.remove("is-hidden")
        const data = await resultat.json();

        if (data[0].IPPE.length === 1 || data[0].IPPE.length === 0) {
            console.log("(-)1 reponses ippe")
            rightarrow.className = "shadow zoom is-hidden"
            leftarrow.className = "shadow zoom is-hidden"
        } else {
            leftarrow.className = "shadow zoom is-hidden"
        }

        console.log(data)
        let datasexe;
        let dataprenom2;
        if (data[0].Masculin === true) { datasexe = "Masculin" } else { datasexe = "Feminin" }
        if (data[0].Prenom2 === null) { dataprenom2 = "" } else { dataprenom2 = data[0].Prenom2 }

        let dataddn = data[0].DateNaissance.split('T')[0]
        const html = `
          <tr>
          <td>Nom:</td>
          <td>${data[0].NomFamille}</td>
      </tr>
      <tr>
          <td>Prenom 1 :</td>
          <td>${data[0].Prenom1}</td>
          <td>Prenom 2 :</td>
          <td>${dataprenom2}</td>
      </tr>
      <tr>
          <td>Sexe :</td>
          <td>${datasexe}</td>
          <td>Date de naissance :</td>
          <td>${dataddn}</td>
      </tr>
        `;

        if (data[0].IPPE.length !== 0) {
            reponse.innerHTML = `***${data[0].IPPE[0].typeEvenement}***`;

            let dataippe;

            console.log(data[0].IPPE[0].typeEvenement);
            console.log(data[0].IPPE.length)

            switch (data[0].IPPE[0].typeEvenement) {
                case 'Recherché':
                    dataippe = `
              <tr>
                  <td>Mandat:</td>
                  <td>${data[0].IPPE[0].mandat}</td>
              </tr>
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[0].cour}</td>
              </tr>
              <tr>
                  <td>Numero de mandat:</td>
                  <td>${data[0].IPPE[0].noMandat}</td>
              </tr>
              <tr>
                  <td>Nature du crime :</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement :</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <!--condtions-->
            ${formatterConditions()}
              `;

                    ippe.innerHTML = dataippe;
                    break;

                case 'Sous observation':
                    dataippe = `
              <tr>
                  <td>Motif:</td>
                  <td>${data[0].IPPE[0].motif}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <tr>
                  <td>Dossier :</td>
                  <td>${data[0].IPPE[0].dossierEnquete}</td>
              </tr>
              <!--condtions-->
            ${formatterConditions()}
              `;

                    ippe.innerHTML = dataippe;
                    break;

                case 'Accusé':
                    dataippe = `
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[0].cour}</td>
              </tr>
              <tr>
                  <td>Numero de cause:</td>
                  <td>${data[0].IPPE[0].noCause}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <!--condtions-->
            ${formatterConditions()}
            ${deuxiemeReponse()}
              `;

                    ippe.innerHTML = dataippe;
                    break;

                case 'Probation':
                    dataippe = `
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[0].cour}</td>
              </tr>
              <tr>
                  <td>Numero de cause:</td>
                  <td>${data[0].IPPE[0].noCause}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <tr>
                  <td>Fin de sentence:</td>
                  <td>${data[0].IPPE[0].finSentence.split('T')[0]}</td>
              </tr>
              <!--condtions-->
            ${formatterConditions()}
              <tr>
                  <td>Agent de probation:</td>
                  <td>${data[0].IPPE[0].agentProbation}</td>
              </tr>
              <tr>
                  <td>Telephone:</td>
                  <td>${data[0].IPPE[0].telephone} Poste: ${data[0].IPPE[0].poste}</td>
              </tr>
              `;

                    ippe.innerHTML = dataippe;
                    break;

                case 'Libération Conditionnelle':
                    dataippe = `
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[0].cour}</td>
              </tr>
              <tr>
                  <td>Numero de cause:</td>
                  <td>${data[0].IPPE[0].noCause}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[0].natureCrime}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <!--FPS-->
              ${formatterFPS()}
              <tr>
                  <td>Lieu de detention:</td>
                  <td>${data[0].IPPE[0].lieuDetention}</td>
              </tr>
              <tr>
                  <td>Fin de la sentence:</td>
                  <td>${data[0].IPPE[0].finSentence.split('T')[0]}</td>
              </tr>
            <!--condtions-->
            ${formatterConditions()}
            <tr>
                <td>Agent de libération conditionnelle à contacter :</td>
                <td>${data[0].IPPE[0].agentLiberation}</td>
            </tr>
            <tr>
                <td>Téléphone :</td>
                <td>${data[0].IPPE[0].telephone}</td>
            </tr>
              `;

                    ippe.innerHTML = dataippe;
                    break;

                case 'Disparu':
                    let disparuprob;
                    if (data[0].Depressif === true) {
                        disparuprob = "Depressif"
                    }
                    dataippe = `
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <tr>
                  <td>Nature:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Derniere fois vu::</td>
                  <td>${data[0].IPPE[0].vuDerniereFois}</td>
              </tr>
              <tr>
                <td><strong>Description physique</strong></td>
            </tr>
            <tr>
                <td>Race :</td>
                <td>${data[0].Race}</td>
            </tr>
            <tr>
                <td>Taille :</td>
                <td>${data[0].Taille}cm</td>
            </tr>
            <tr>
                <td>Poids :</td>
                <td>${data[0].Poids}kg</td>
            </tr>
            <tr>
                <td>Yeux :</td>
                <td>${data[0].Yeux}</td>
            </tr>
            <tr>
                <td>Cheveux :</td>
                <td>${data[0].Cheveux}</td>
            </tr>
            <tr>
                <td>Marques :</td>
                <td>${data[0].Marques}</td>
            </tr>
            <tr>
                <td><strong>Description vestimentaire</strong></td>
            </tr>
            <tr>
                <td>Gilet :</td>
                <td>${data[0].Gilet}</td>
            </tr>
            <tr>
                <td>Pantalon :</td>
                <td>${data[0].Pantalon}</td>
            </tr>
            <tr>
                <td>Autre(s) vêtement(s) :</td>
                <td>${data[0].AutreVetement}</td>
            </tr>
            <tr>
                <td>Problematique de sante connu:</td>
                <td>${disparuprob}</td>
            </tr>
            ${formatterConditions()}
              `;

                    ippe.innerHTML = dataippe;
                    break;

                case 'Interdit':
                    dataippe = `
              <tr>
                  <td>Nature:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Cour:</td>
                  <td>${data[0].IPPE[0].cour}</td>
              </tr>
              <tr>
                  <td>Numero de cause:</td>
                  <td>${data[0].IPPE[0].noCause}</td>
              </tr>
              <tr>
                  <td>Nature du crime:</td>
                  <td>${data[0].IPPE[0].nature}</td>
              </tr>
              <tr>
                  <td>Numéro d'événement:</td>
                  <td>${data[0].IPPE[0].noEvenement}</td>
              </tr>
              <tr>
                  <td>Expiration:</td>
                  <td>${data[0].IPPE[0].finSentence.split('T')[0]}</td>
              </tr>
              ${formatterConditions()}
              `;

                    ippe.innerHTML = dataippe;
                    break;
            }
        } else {
            reponse.innerHTML = `***Négatif***`;
        }

        infoippe.innerHTML = html;

        console.log(data);
    } else {
        alert("La personne n'existe pas, veuillez réessayer")
        window.location.href = "http://localhost:5000/Acceuil/Acceuil.html"
    }
});

function clickrightarrow() {
    document.getElementById("divPremiereRep").className = "column is-desktop is-hidden"
    document.getElementById("divDeuxiemeRep").className = "column is-desktop"
    rightarrow.className = "shadow zoom is-hidden"
    leftarrow.className = "shadow zoom"
}

function clickleftarrow() {
    document.getElementById("divPremiereRep").className = "column is-desktop"
    document.getElementById("divDeuxiemeRep").className = "column is-desktop is-hidden"
    rightarrow.className = "shadow zoom"
    leftarrow.className = "shadow zoom is-hidden"
}

rightarrow.addEventListener('click', clickrightarrow)
leftarrow.addEventListener('click', clickleftarrow)

document.getElementById("imgHome").addEventListener('click', () => {
    window.location.href = "http://localhost:5000/Acceuil/Acceuil.html"
})