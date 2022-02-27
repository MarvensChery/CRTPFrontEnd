function login() {
    let username = document.getElementById("ID").value;
    let password = document.getElementById("mdp").value;
    let label_etudiant_ID = document.getElementById("nomLabel")
    let label_prof_id = document.getElementById("nomLabel")
    let count = 0
    
    fetch("http://localhost:5000/utilisateurs")
        .then(reponse => {
            return reponse.json()
        })
        .then(login => {
            console.log(login.length)
            let loginlength = login.length
            login.forEach(login => {
                if (label_etudiant_ID.innerText == "Identifiant de l'étudiant") {
                    console.log("dans etudiant")
                    console.log(count)
                    if (login.Identifiant == username && login.MotDePasse == password && login.Etudiant == true) {
                        window.location.href = "http://localhost:2000/menu"
                    }
                    else if(count === loginlength-1) {
                        alert("Vous n'avez pas réussi a vous connecté, réessayer")
                        document.getElementById("ID").value = ""
                        document.getElementById("mdp").value = ""
                    } else {count++}
                }
                
                else if (label_prof_id.innerText == "Identifiant du professeur") {
                    console.log("dans prof")
                    if (login.Identifiant == username && login.MotDePasse == password && login.Etudiant == false) {
                        window.location.href = "http://localhost:2000/menu"
                    }
                    else if(count === loginlength-1) {
                        alert("Vous n'avez pas réussi a vous connecté, réessayer")
                        username = ""
                        password = ""
                    } else {count++}
                }
            });
        })
}