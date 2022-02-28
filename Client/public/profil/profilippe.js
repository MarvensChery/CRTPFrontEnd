window.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  // obtenir la valeur d'un paramètre
  const nomFamille = urlParams.get('nom');
  const prenom1 = urlParams.get('prenom1');
  const prenom2 = urlParams.get('prenom2');
  const sexe = urlParams.get('sexe');
  const year = urlParams.get('year');
  const mois = urlParams.get('mois');
  const jours = urlParams.get('jours');
  const infoippe = document.getElementById('infoippe');
  const reponse = document.getElementById('reponse');
  const ippe = document.getElementById('ippe');

  const resultat = await fetch(`http://localhost:5000/ippe/${nomFamille}/${prenom1}/${prenom2}/${sexe}/${year}/${mois}/${jours}`);
  if (resultat.ok) {
    const data = await resultat.json();

    const html = `
        <tr>
        <td>Nom:</td>
        <td>${data.nomFamille}</td>
    </tr>
    <tr>
        <td>Prenom 1 :</td>
        <td>${data.prenom1}</td>
        <td>Prenom 2 :</td>
        <td>${data.prenom2}</td>
    </tr>
    <tr>
        <td>Sexe :</td>
        <td>${data.sexe}</td>
        <td>Date de naissance :</td>
        <td>${data.dateNaissance}</td>
    </tr>
      `;
    reponse.innerHTML = `***${data.TypeEvenement}***`;

    let dataippe;

    console.log(typeof (data.TypeEvenement));
    switch (data.TypeEvenement) {
      case 'Recherché':
        dataippe = `
            <tr>
                <td>Mandat:</td>
                <td>${data.mandat}</td>
            </tr>
            <tr>
                <td>Cour:</td>
                <td>${data.cour}</td>
            </tr>
            <tr>
                <td>Numero de mandat:</td>
                <td>${data.noMandat}</td>
            </tr>
            <tr>
                <td>Nature du crime :</td>
                <td>${data.natureCrime}</td>
            </tr>
            <tr>
                <td>Numéro d'événement :</td>
                <td>${data.noEvenement}</td>
            </tr>
            `;

        ippe.innerHTML = dataippe;
        break;

      case 'Sous observation':
        dataippe = `
            <tr>
                <td>Motif:</td>
                <td>${data.mandat}</td>
            </tr>
            <tr>
                <td>Nature du crime:</td>
                <td>${data.natureCrime}</td>
            </tr>
            <tr>
                <td>Numéro d'événement:</td>
                <td>${data.noEvenement}</td>
            </tr>
            <tr>
                <td>Dossier :</td>
                <td>${data.DossierEnquete}</td>
            </tr>
            `;

        ippe.innerHTML = dataippe;
        break;

      case 'Accusé':
        dataippe = `
            <tr>
                <td>Cour:</td>
                <td>${data.cour}</td>
            </tr>
            <tr>
                <td>Numero de cause:</td>
                <td>${data.noMandat}</td>
            </tr>
            <tr>
                <td>Nature du crime:</td>
                <td>${data.natureCrime}</td>
            </tr>
            <tr>
                <td>Numéro d'événement:</td>
                <td>${data.noEvenement}</td>
            </tr>
            `;

        ippe.innerHTML = dataippe;
        break;

      case 'Probation':
        dataippe = `
            <tr>
                <td>Cour:</td>
                <td>${data.cour}</td>
            </tr>
            <tr>
                <td>Numero de cause:</td>
                <td>${data.noMandat}</td>
            </tr>
            <tr>
                <td>Nature du crime:</td>
                <td>${data.natureCrime}</td>
            </tr>
            <tr>
                <td>Numéro d'événement:</td>
                <td>${data.noEvenement}</td>
            </tr>
            <tr>
                <td>Fin de sentence:</td>
                <td>${data.FinSentence}</td>
            </tr>
            <tr>
                <td>Agent de probation:</td>
                <td>${data.Agent}</td>
            </tr>
            <tr>
                <td>Telephone:</td>
                <td>${data.Telephone} Poste: ${data.Poste}</td>
            </tr>
            `;

        ippe.innerHTML = dataippe;
        break;

      case 'Libération Conditionnelle':
        dataippe = `
            <tr>
                <td>Cour:</td>
                <td>${data.cour}</td>
            </tr>
            <tr>
                <td>Numero de cause:</td>
                <td>${data.noMandat}</td>
            </tr>
            <tr>
                <td>Nature du crime:</td>
                <td>${data.natureCrime}</td>
            </tr>
            <tr>
                <td>Numéro d'événement:</td>
                <td>${data.noEvenement}</td>
            </tr>
            <tr>
                <td>Lieu de detention:</td>
                <td>${data.LieuDetention}</td>
            </tr>
            <tr>
                <td>Fin de la sentence:</td>
                <td>${data.FinSentence}</td>
            </tr>
            <tr>
                <td>Agent:</td>
                <td>${data.Agent}</td>
            </tr>
            <tr>
                <td>Telephone:</td>
                <td>${data.Telephone}</td>
            </tr>
            `;

        ippe.innerHTML = dataippe;
        break;

      case 'Disparu':
        dataippe = `
            <tr>
                <td>Numéro d'événement:</td>
                <td>${data.noEvenement}</td>
            </tr>
            <tr>
                <td>Nature:</td>
                <td>${data.mandat}</td>
            </tr>
            <tr>
                <td>Derniere fois vu::</td>
                <td>${data.VuDerniereFois}</td>
            </tr>
            `;

        ippe.innerHTML = dataippe;
        break;

      case 'Interdit':
        dataippe = `
            <tr>
                <td>Nature:</td>
                <td>${data.mandat}</td>
            </tr>
            <tr>
                <td>Cour:</td>
                <td>${data.cour}</td>
            </tr>
            <tr>
                <td>Numero de cause:</td>
                <td>${data.noMandat}</td>
            </tr>
            <tr>
                <td>Nature du crime:</td>
                <td>${data.natureCrime}</td>
            </tr>
            <tr>
                <td>Numéro d'événement:</td>
                <td>${data.noEvenement}</td>
            </tr>
            <tr>
                <td>Expiration:</td>
                <td>${data.FinSentence}</td>
            </tr>
            `;

        ippe.innerHTML = dataippe;
        break;
    }

    infoippe.innerHTML = html;

    console.log(data);
  }
});
