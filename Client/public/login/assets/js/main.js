
console.log('oakaika')



let btnprof = document.getElementById("btnprof")

// Here we take all the label that we need
let label_etudiant_ID = document.getElementById("nomLabel")
let label_etudiant_MDP = document.getElementById("mdpLabel") 

// Here we take all the input that we need
let input_etudiant_ID = document.getElementById("ID")
let input_etudiant_MDP = document.getElementById("mdp")

function EtudiantAprof(){
  label_etudiant_ID.innerText = 'Identifiant du professeur'
  label_etudiant_MDP.innerText = "Mot de passe du professeur"
}

function profAetudiant(){
  label_etudiant_ID.innerText = "Identifiant de l'étudiant"
  label_etudiant_MDP.innerText = "Mot de passe de l'étudiant"
}

let btnetudiant = document.getElementById("btnetudiant")
btnetudiant.addEventListener("click", profAetudiant)
btnprof.addEventListener("click", EtudiantAprof)