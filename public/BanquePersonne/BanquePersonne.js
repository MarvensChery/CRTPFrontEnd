//filter + liste personne + href link

let BanquePersonne = document.getElementById("BanquePersonne")

let template = ``;

window.addEventListener('DOMContentLoaded', async () => {
    let reponse = await fetch(`http://localhost:3000/banquepersonne`)

    if (reponse.ok) {
        const data = await reponse.json();
        
        data.sort(function(a, b) {
            var textA = a.NomFamille.toUpperCase();
            var textB = b.NomFamille.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        data.forEach(element => {
            let link = "http://localhost:5000/LaRoutePourModificationDePersonne/" + element.Id;
            template += `
                        <tr>
                            <td>${element.NomFamille}</td>
                            <td>${element.Prenom1}</td>
                            <td>${(element.Prenom2 === null) ? "" :  element.Prenom2}</td>
                            <td>${element.Categorie}</td>
                            <td style="border:none; padding-right: 1000px;"><a href='${link}'><i class="fa-solid fa-pen"></a></i></td>
                        </tr>
        `
        console.log(element.Id)
        });
        
        BanquePersonne.innerHTML = template;
    }
})
