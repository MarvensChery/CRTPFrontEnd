//filter + liste personne + href link
let personne = null;
let BanquePersonne = document.getElementById("BanquePersonne")

const filtrer = function(e) {
  let template = ``;

  let data = personne;

  data = data.filter((a) => a.NomFamille.toUpperCase().includes(e.target.value.toUpperCase()));
      
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
                      <td style="border:none;"><a href='${link}'><i class="fa-solid fa-pen"></a></i></td>
                  </tr>
  `
  console.log(element.Id)
  });
  
  BanquePersonne.innerHTML = template;
}


async function tous() {
    document.getElementById("votre-nom").value = ''

    let template = ``;

    let data = personne;
        
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
                        <td style="border:none;"><a href='${link}'><i class="fa-solid fa-pen"></a></i></td>
                    </tr>
    `
    console.log(element.Id)
    });
    
    BanquePersonne.innerHTML = template;
}

let nom = document.getElementById("votre-nom");
nom.addEventListener("input",filtrer)
nom.addEventListener("propertychange",filtrer)
async function getPersonnes() {
    let reponse = await fetch(`http://localhost:3000/banquepersonne`)
    
    if (reponse.ok) {
        personne = await reponse.json();
        console.log(personne)
        tous();
    }
}

document.getElementById("boutonretour").addEventListener('click', () => {
    window.location.href = "http://localhost:5000/Acceuil/Acceuil.html"
})

getPersonnes()

