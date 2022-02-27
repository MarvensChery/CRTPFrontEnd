
console.log('oakaika')

let id = document.getElementById("ID")
let mdp = document.getElementById("mdp")

let btnetudiant = document.getElementById("btnetudiant")
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
  btnprof.className = "button is-vcentered is-primary is-rounded"
  btnetudiant.className = "button is-vcentered is-primary is-rounded is-outlined"
  id.value = ""
  mdp.value = ""
}

function profAetudiant(){
  label_etudiant_ID.innerText = "Identifiant de l'étudiant"
  label_etudiant_MDP.innerText = "Mot de passe de l'étudiant"
  btnprof.className = "button is-vcentered is-primary is-rounded is-outlined"
  btnetudiant.className = "button is-vcentered is-primary is-rounded"
  id.value = ""
  mdp.value = ""
}

btnetudiant.addEventListener("click", profAetudiant)
btnprof.addEventListener("click", EtudiantAprof)