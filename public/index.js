async function connexion() {
    const identifiant = document.getElementById('username').value;
    const motDePasse = document.getElementById('password').value;

    const connection = { identifiant, motDePasse };

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(connection),
    });

    if (response.ok) {
        const data = await response.json();

        console.log("data good")
        console.log(document.getElementById('id').innerText)
        console.log(data.Etudiant)

        if (document.getElementById('id').innerText == 'Identification étudiant' && data.Etudiant === true) {
            console.log("data good")
            sessionStorage.setItem('token', data.Etudiant);
            sessionStorage.setItem('Matricule', data.Matricule);
            sessionStorage.setItem('Nom', data.Nom);
            window.location.href = './Acceuil/Acceuil.html';

        } else if (document.getElementById('id').innerText == 'Identification enseignant' && data.Etudiant === false) {
            console.log("data good")
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

window.onload = function bouton() {
    const BtnEt = document.getElementById('BtnEtudiant');
    const BtnEn = document.getElementById('BtnEnseignant');

    BtnEt.addEventListener('click', () => { document.getElementById('id').innerText = 'Identification étudiant'; });
    BtnEn.addEventListener('click', () => { document.getElementById('id').innerText = 'Identification enseignant'; });
    document.getElementById('connection').addEventListener('click', async () => { await connexion(); });
};
