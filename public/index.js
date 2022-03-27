const switch1 = document.getElementById('switch1');
switch1.onclick = function(){
  switch1.classList.toggle('cliquer')
  professeurOUetudiant();
}

async function connexion() {
    const identifiant = document.getElementById('ID').value;
    const motDePasse = document.getElementById('mdp').value;

    const connection = { identifiant, motDePasse };

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(connection),
    });
    
    if (response.ok) {
        const data = await response.json();


        if (document.getElementById('switch1').className == "switch-button" && data.Etudiant === true) {
            sessionStorage.setItem('token', data.Etudiant);
            sessionStorage.setItem('Matricule', data.Matricule);
            sessionStorage.setItem('Nom', data.Nom);
            window.location.href = './Acceuil/Acceuil.html';

        } else if (document.getElementById('switch1').className == 'switch-button cliquer' && data.Etudiant === false) {
            sessionStorage.setItem('token', data.Etudiant);
            sessionStorage.setItem('Matricule', data.Matricule);
            sessionStorage.setItem('Nom', data.Nom);
            window.location.href = './Acceuil/Acceuil.html';
        } else {
            document.getElementById('error').innerText = 'Matricule ou mot de passe incorrect!';
        }
    
    } else {
        document.getElementById('error').innerText = 'Matricule ou mot de passe incorrect!';
    }
}

document.getElementById('co').addEventListener('click', connexion)


function professeurOUetudiant(){

    if(switch1.className === 'switch-button cliquer'){
        document.getElementById('nomLabel').innerText = 'Identifiant du professeur'
        document.getElementById('mdpLabel').innerText = 'Mot de passe du professeur'
        document.getElementById('img').src = './image/logoSansText.png'
    }else{
        document.getElementById('nomLabel').innerText = "Identifiant de l'étudiant"
        document.getElementById('mdpLabel').innerText = "Mot de passe du l'étudiant"
        document.getElementById('img').src = './image/etudiant.png'
    }
}