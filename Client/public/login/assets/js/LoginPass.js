function login() {
    let username = document.getElementById("ID").value;
    let password = document.getElementById("mdp").value;
    let label_etudiant_ID = document.getElementById("nomLabel")
    let label_prof_id = document.getElementById("nomLabel")
    fetch("http://localhost:5000/login")
        .then(reponse => {
            return reponse.json()
        })
        .then(login => {
            login.forEach(login => {
                console.log("dans les if")
                if (label_etudiant_ID.innerText == "Identifiant de l'étudiant") {
                    console.log("dans etudiant")
                    if (login.Matricule == username && login.MotDePasse == password && login.Type == "etudiants") {
                        console.log("bon mdp")
                    } else {
                        console.log('mauvais mdp')
                    }
                } 
                
                else if (label_prof_id.innerText == "Identifiant du professeur") {
                    console.log("dans prof")
                    if (login.Matricule == username && login.MotDePasse == password && login.Type == "enseignant") {
                        console.log("bon mdp")
                    } else {
                        console.log("mauvais mdp")
                    }

                }
            });
        })
}