<template>
  <div class="hero-body ">
    <!--box gives it the shadow-->
    <article v-if="this.$root.$data.erreurIPPE === true" class="column is-full message is-danger">
          <div class="message-body">
            Erreur, la personne recherché(e) n'existe pas
          </div>
    </article>
    <div class="container box mt-6">
      <h2 class="title has-text-info-dark">Interrogation personne - IPPE</h2>
      <form class="row columns is-multiline">
        <!--NOM-->
        <div class="column is-12">
          <div class="field">
            <label for="nom" class="label">Nom</label>
            <div class="control">
              <input id="nom" class="input" type="text"
                     placeholder="Nom" v-model="nom" required>
            </div>
          </div>
        </div>
        <!--VALIDATION ERREUR-->
        <article v-if="nomError === true" class="column is-full message is-danger">
          <div class="message-body">
            Ce champ ne peut pas etre vide!
          </div>
        </article>
        <!--P1-->
        <div class="column is-12">
          <div class="field">
            <label for="prenom1" class="label">Prenom 1</label>
            <div class="control">
              <input id="prenom1" class="input" type="text"
                     placeholder="Prenom 1" v-model="prenom1" required>
            </div>
          </div>
        </div>
        <!--VALIDATION ERREUR-->
        <article v-if="prenomError === true" class="column is-full message is-danger">
          <div class="message-body">
            Ce champ ne peut pas etre vide!
          </div>
        </article>
        <!--P2-->
        <div class="column is-12">
          <div class="field">
            <label for="prenom2" class="label">Prenom 2</label>
            <div class="control">
              <input id="prenom2" class="input" type="text"
                     placeholder="Prenom 2" v-model="prenom2" required>
            </div>
          </div>
        </div>
        <!--SEXE-->
        <div class="column is-12">
          <div class="field">
            <label for="sexe" class="label">Sexe</label>
            <div class="select is-fullwidth">
              <select id='sexe' name='sexe' v-model="sexe" required >
                <option value="" disabled></option>
                <option value="false">F</option>
                <option value="true">M</option>
              </select>
            </div>
          </div>
        </div>
        <!--VALIDATION ERREUR-->
        <article v-if="sexeError === true" class="column is-full message is-danger">
          <div class="message-body">
            Ce champ ne peut pas etre vide!
          </div>
        </article>

        <!--DDN-->
        <div class="column is-4">
          <label for="annee" class="label">Année</label>
          <div class="control">
            <input id="annee" class="input" type="number"
                   placeholder="1998" min="1910" max="2022" v-model="annee">
          </div>
        </div>

        <div class="column is-4">
          <label for="mois" class="label">Mois</label>
          <div class="control">
            <input id="mois" class="input" type="number"
                   placeholder="08" min="1" max="12" v-model="mois">
          </div>
        </div>
        <div class="column is-4">
          <label for="jour" class="label">Jours</label>
          <div class="control">
            <input id="jour" class="input" type="number"
                   placeholder="02" min="1" max="12" v-model="jour">
          </div>
        </div>
        <!--VALIDATION ERREUR-->
        <article v-if="anneError === true" class="column is-full message is-danger">
          <div class="message-body">
            Annee invalid
          </div>
        </article>
        <!--VALIDATION ERREUR-->
        <article v-if="moisError === true" class="column is-full message is-danger">
          <div class="message-body">
            Mois invalid
          </div>
        </article>
        <!--VALIDATION ERREUR-->
        <article v-if="jourError === true" class="column is-full message is-danger">
          <div class="message-body">
            jour invalid
          </div>
        </article>
        <!--BOUTON-->
        <div class="column is-12">
          <button id="form" class="button is-info is-fullwidth"
                  type="button" value="Recherche" v-on:click="this.isValid()"
                  v-on:keydown="this.isValid()">
            Recherche
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  isAnneeValide, isMoisValide, isJourValide, capitalizeFirstLetter,
} from '@/validations';

export default {
  name: 'RequeteIPPEView',
  data() {
    return {
      nom: '',
      prenom1: '',
      prenom2: '',
      sexe: '',
      annee: '',
      mois: '',
      jour: '',
      isMoisValide1: '',
      isJourValide1: '',
      isAnneeValide1: '',
      IsPrenom1Valide1: '',
      IsPrenom2Valide1: '',
      IsNomValide1: '',
      anneError: false,
      moisError: false,
      jourError: false,
      nomError: false,
      prenomError: false,
      prenomError2: false,
      sexeError: false,
    };
  },

  methods: {
    // Fonction qui permet de vérifier si les champs sont valides
    isValid() {
      this.isAnneeValide1 = isAnneeValide(this.annee);
      if (this.isAnneeValide1 === false) {
        this.anneError = true;
      } else {
        this.anneError = false;
      }
      this.isMoisValide1 = isMoisValide(this.mois);
      if (this.isMoisValide1 === false) {
        this.moisError = true;
      } else {
        this.moisError = false;
      }
      this.isJourValide1 = isJourValide(this.jour);
      if (this.isJourValide1 === false) {
        this.jourError = true;
      } else {
        this.jourError = false;
      }
      if (this.sexe === '') {
        this.sexeError = true;
      } else {
        this.sexeError = false;
      }
      this.IsNomValide1 = capitalizeFirstLetter(this.nom);
      if (this.IsNomValide1 === '') {
        this.nomError = true;
      } else {
        this.nomError = false;
      }
      this.IsPrenom1Valide1 = capitalizeFirstLetter(this.prenom1);
      if (this.IsPrenom1Valide1 === '') {
        this.prenomError = true;
      } else {
        this.prenomError = false;
      }
      this.IsPrenom1Valide2 = capitalizeFirstLetter(this.prenom2);
      if (this.IsPrenom1Valide2 === '') {
        this.prenom2 = null;
      }
      if (this.anneError === false && this.moisError === false
        && this.jourError === false && this.nomError === false
        && this.prenomError === false && this.sexeError === false) {
        console.log('yo');
        this.$root.$data.erreurIPPE = false;
        this.$router.push(`/reponseIPPE/${this.nom}/${this.prenom1}/${this.prenom2}/${this.sexe}/${this.annee}-${this.mois}-${this.jour}`);
      }
    },

    // // S'occupe de l'affichage des messages d'erreur
    // checkMandatoryInput(nom, prenom1, annee, mois, jour) {
    //     // Identification de l'emplacement des messages
    //     const msgNom = document.getElementById('nomError');
    //     const msgPrenomUn = document.getElementById('prenom1Error');
    //     const msgJour = document.getElementById('jourError');
    //     const msgMois = document.getElementById('moisError');
    //     const msgAnnee = document.getElementById('anneeError');
    //     // Check la validité des champs
    //     const anneeValid = isAnneeValide(annee);
    //     const moisValid = isMoisValide(mois);
    //     const jourValid = isJourValide(jour);
    //     // Retourne true s'il n'y a pas d'erreur
    //     let errorFalse = true;
    //     // Condition champs vides
    //     if (nom === '') {
    //         msgNom.classList.remove('is-hidden');
    //         errorFalse = false;
    //     } else { msgNom.classList.add('is-hidden'); }

    //     if (prenom1 === '') {
    //         msgPrenomUn.classList.remove('is-hidden');
    //         errorFalse = false;
    //     } else { msgPrenomUn.classList.add('is-hidden'); }

    //     // s'assure que les dates entrees sont conforme
    //     if (jour === '' || !jourValid) {
    //         msgJour.classList.remove('is-hidden');
    //         errorFalse = false;
    //     } else { msgJour.classList.add('is-hidden'); }

    //     if (mois === '' || !moisValid) {
    //         msgMois.classList.remove('is-hidden');
    //         errorFalse = false;
    //     } else { msgMois.classList.add('is-hidden'); }

    //     if (annee === '' || !anneeValid) {
    //         msgAnnee.classList.remove('is-hidden');
    //         errorFalse = false;
    //     } else {
    //         msgAnnee.classList.add('is-hidden');
    //     }
    //     return errorFalse;
    // },
  },
};
</script>

<style scoped>
</style>
