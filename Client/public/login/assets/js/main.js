console.log('oakaika');

const id = document.getElementById('ID');
const mdp = document.getElementById('mdp');

const btnetudiant = document.getElementById('btnetudiant');
const btnprof = document.getElementById('btnprof');

// Here we take all the label that we need
const label_etudiant_ID = document.getElementById('nomLabel');
const label_etudiant_MDP = document.getElementById('mdpLabel');

// Here we take all the input that we need
const input_etudiant_ID = document.getElementById('ID');
const input_etudiant_MDP = document.getElementById('mdp');

function EtudiantAprof() {
  label_etudiant_ID.innerText = 'Identifiant du professeur';
  label_etudiant_MDP.innerText = 'Mot de passe du professeur';
  btnprof.className = 'button is-vcentered is-primary is-rounded';
  btnetudiant.className = 'button is-vcentered is-primary is-rounded is-outlined';
  id.value = '';
  mdp.value = '';
}

function profAetudiant() {
  label_etudiant_ID.innerText = "Identifiant de l'étudiant";
  label_etudiant_MDP.innerText = "Mot de passe de l'étudiant";
  btnprof.className = 'button is-vcentered is-primary is-rounded is-outlined';
  btnetudiant.className = 'button is-vcentered is-primary is-rounded';
  id.value = '';
  mdp.value = '';
}

btnetudiant.addEventListener('click', profAetudiant);
btnprof.addEventListener('click', EtudiantAprof);
