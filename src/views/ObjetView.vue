<template>
    <div class="container mb-4 is-desktop">
  <form @submit.prevent="onSubmit">
    <h1 class="has-text-black" style="height: 135px; text-align: center;
        font-size: 24px; padding-top: 5%;">
      <b>
        <u v-if="isNaN(this.$route.params.idObjet)">AJOUT D'UNE RÉPONSE OBJET</u>
        <u v-else>MODIFICATION D'UNE RÉPONSE OBJET</u>
      </b>
    </h1>
    <br>
    <br>
    <div class="box" v-if="objet">
      <div class="success" v-if="sucess">
        <a class="closebtn" href="/objets">&times;</a>
        {{ sucess }}
      </div>
      <div class="error" v-if="error">
        <a class="closebtn" :href="this.$route.path">&times;</a>
        {{ error }}
      </div>
      <div class="columns is-centered">
        <div class="column ">
          <div class="field">
            <label for="noSerie" class="label">Numéro de série</label>
            <div class="control has-icons-left has-icons-right">
              <input id="noSerie" class="input" type="text" name="noSerie"
                placeholder="Numéro de série" v-model="NoSerie" required/>
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <p class="help is-danger" v-if="NoSerieValid">{{ NoSerieValid }}</p>
          </div>
          <div class="field">
            <label for="marque" class="label">Marque</label>
            <div class="control has-icons-left has-icons-right">
              <input id="marque" class="input" type="text" name="marque"
                placeholder="Marque" v-model="marque" required/>
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <p v-if="MarqueValid" class="help is-danger">{{ MarqueValid }}</p>
          </div>
          <div class="field">
            <label for="modele" class="label">Modèle</label>
            <div class="control has-icons-left has-icons-right">
              <input id="modele" class="input" type="text" name="modele"
                placeholder="Modèle" v-model="modele" required/>
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <p v-if="modeleValid" class="help is-danger">{{ modeleValid }}</p>
          </div>
          <div class="field">
            <label for="typeObjet" class="label">Type d'objet</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select id="typeObjet" name="typeObjet" v-model="typeObjet" required>
                  <option></option>
                  <option value="RA">RA - Appareil de son / radio / haut-parleur</option>
                  <option value="BI">BI - Bicyclette</option>
                  <option value="EB">EB - Équipement de bureau</option>
                  <option value="EP">EP - Équipement photo / vidéo</option>
                  <option value="MO">MO - Machinerie / outils</option>
                  <option value="OR">OR - Ordinateur / Équipement informatique</option>
                  <option value="TA">TA - Tablette informatique (Ipad et autres)</option>
                  <option value="TL">TL - Téléphone cellulaire</option>
                  <option value="AU">AU - Autres articles</option>
                </select>
              </div>
            </div>
          </div>
        <div class="field">
            <div id="NoEvenement" class="columns is-3-mobile is-multiline is-centered">

                <div class="column is-3-desktop is-5-mobile">
                    <label class="has-text-black" for="NoEvent"><b>Numéro évenement</b>
                    <span style="color: red">*</span></label><br><br>
                    <div class="control"><div class="select is-fullwidth">
                        <select id="NoEvent" name="NoEvent" v-model="NoEvent" required>
                            <option></option>
                            <option value="123">123</option>
                            <option value="302">302</option>
                            <option value="108">108</option>
                        </select>
                    </div></div>
                </div>

  <div class="column is-2-desktop is-4-mobile">
    <label class="has-text-black" for="annee"><b>Année</b>
      <span style="color: red">*</span></label><br><br>
      <div class="control">
    <input class="input" maxlength="4" id="annee" type="text" name="annee" placeholder="2022"
      v-model="annee" required/></div>
    <label class="has-text-danger" v-if="anneValid" for="warning">
      <b>{{ anneValid }}</b>
    </label>
  </div>

  <div class="column is-2-desktop is-4-mobile">
    <label class="has-text-black" for="ddm"><b>Mois</b><span
        style="color: red">*</span></label><br><br>
    <input id="mois" class="input" type="number" maxlength="2"
      placeholder="02" min="1" max="12" v-model="mois" required>
    <label class="has-text-danger is-hidden" v-if="moisValid" for="warning">
      <b>{{ moisValid }}</b>
    </label>
  </div>

  <div class="column is-2-desktop is-4-mobile">
    <label class="has-text-black" for="ddm"><b>Jour</b><span
        style="color: red">*</span></label><br><br>
        <div class="control">
    <input id="jour" class="input" type="number" maxlength="2"
      placeholder="25" min="1" max="31" v-model="jour" required></div>
    <label class="has-text-danger is-hidden" v-if="jourValid" for="warning">
      <b>{{ jourValid }}</b>
    </label></div>

</div>

  <div class="is-2-desktop is-2-mobile">
    <label class="has-text-black" for="NoSeq"><b>Numéro Séquentiel</b>
      <span style="color: red">*</span></label><br><br>
    <input class="input" maxlength="4" id="NoSeq" type="text" name="NoSeq"
      placeholder="Numéro Séquentiel" v-model="NoSeq" required/>
</div></div>

<div class="btn-block ">
    <div class="columns is-mobile is-centered">
    <div class="column is-one-quarter">
  <button v-if="!isNaN(this.$route.params.idObjet)"
  v-on:click="this.updateObjet" class="button is-primary is-fullwidth" >
  Modifier</button></div>&nbsp;
  <div class="column is-one-quarter" v-if="isNaN(this.$route.params.idObjet)">
  <button type="submit" v-if="isNaN(this.$route.params.idObjet)"
   v-on:click="addObjet" class="button is-primary is-fullwidth">Ajouter</button></div>&nbsp;
   <div class="column is-one-quarter" v-if="!isNaN(this.$route.params.idObjet)">
  <button type="reset" v-if="!isNaN(this.$route.params.idObjet)"
  @click="showModal" class="button is-danger is-fullwidth" >Supprimer</button></div>&nbsp;
  <div class="column is-one-quarter">
  <button type="submit" v-on:click="this.$router.push({ name: 'objetsView' })"
  @click="annuler" class="button is-danger is-fullwidth" >Annuler</button></div>&nbsp;
          </div>
          <p style="margin-bottom: 50px;">&nbsp;</p>
        </div>
    </div></div></div>
  </form>
  <div class="modal" :class="{'is-active': showModalFlag}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">ETES VOUS SUR QUE VOUS VOULEZ SUPPRIMER!!!</p>
        <button class="delete" aria-label="close" @click="cancelModal"></button>
      </header>
      <section class="modal-card-body">
        <p>{{ message }}</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" v-on:click="deleteObjet">Ok</button>
        <button class="button" @click="cancelModal">Annuler</button>
      </footer>
    </div>
  </div>
</div>

</template>

<script>
import { connexion } from '@/stores/connexionStore';
import { createToast } from 'mosha-vue-toastify';
import { svrURL } from '../constantes';
import {
    capitalizeFirstLetter, isJourValide, isMoisValide, isAnneeValide, isDateValide,
} from '../validations';
import 'mosha-vue-toastify/dist/style.css';

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ObjetView',
    data() {
        return {
            objet: [],
            NoSerie: '',
            marque: '',
            modele: '',
            typeObjet: '',
            annee: '',
            mois: '',
            jour: '',
            NoSeq: '',
            NoEvent: '',
            sucess: '',
            error: '',
            anneValid: '',
            moisValid: '',
            jourValid: '',
            MarqueValid: '',
            modeleValid: '',
            NoSerieValid: '',
            confimation: '',
            showModalFlag: false,
            okPressed: false,
            message: "Press 'Ok' or 'Cancel'.",
        };
    },
    setup() {
        const enregistrer = () => {
            createToast(
                'enregistrer',
                {
                    timeout: 2000,
                    position: 'bottom-right',
                    type: 'success',
                    transition: 'slide',
                },
            );
        };
        const Suppression = () => {
            createToast(
                'Suppression',
                {
                    position: 'bottom-right',
                    type: 'success',
                    transition: 'slide',
                    timeout: 2000,
                },
            );
        };
        const annuler = () => {
            createToast(
                'annuler',
                {
                    position: 'bottom-right',
                    type: 'success',
                    transition: 'slide',
                    timeout: 2000,
                },
            );
        };
        const creation = () => {
            createToast(
                'creation',
                {
                    position: 'bottom-right',
                    type: 'success',
                    transition: 'slide',
                    timeout: 2000,
                },
            );
        };
        const store = connexion();
        // exposer l'objet store à la vue
        return {
            store, Suppression, enregistrer, creation, annuler,
        };
    },
    mounted() {
        this.checkToken();
        if (this.$route.path !== '/objet') {
            this.getObjet(); // get les fino d'un objet au chargement de la page
        }
    },
    methods: {
        showModal() {
            this.okPressed = false;
            this.showModalFlag = true;
        },
        okModal() {
            this.okPressed = true;
            this.showModalFlag = false;
            this.Suppression();
        },
        cancelModal() {
            this.okPressed = false;
            this.showModalFlag = false;
            this.annuler();
        },
        checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
        confirmation() {
            this.confimation = 'validation';
        },
        async deleteObjet() {
            const api = await fetch(`${svrURL}/objets/${this.$route.params.idObjet}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: this.store.token,
                },
                method: 'DELETE',

            }); // delete un objet @click="okModal"
            const res = await api.json();
            if (api.ok) {
                this.sucess = res.message;
                setTimeout(() => {
                    this.$router.push('/objets');
                }, 2000);
                this.okModal();
                // this.Suppression();
            } else {
                this.error = res.message;
                createToast(
                    {
                        title: this.error,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
            }
        },
        async addObjet() { // add un objet
            if (this.NoSerie === '') {
                this.NoSerieValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.NoSerieValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (this.marque === '') {
                this.MarqueValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.MarqueValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (this.modele === '') {
                this.modeleValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.modeleValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (!isJourValide(this.jour)) {
                this.jourValid = 'le jour entré est invalide';
                createToast(
                    {
                        title: this.jourValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (!isMoisValide(this.mois)) {
                this.moisValid = 'le mois entré est invalide';
                createToast(
                    {
                        title: this.moisValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (!isAnneeValide(this.annee)) {
                this.anneValid = "l'année entrée est invalide";
                createToast(
                    {
                        title: this.anneValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (!isDateValide(this.annee, this.mois, this.jour)) {
                this.error = 'la date entrée est invalide';
                createToast(
                    {
                        title: this.error,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            this.jour = this.jour.toString().length === 1 ? `0${this.jour}` : this.jour;
            this.mois = this.mois.toString().length === 1 ? `0${this.mois}` : this.mois;
            const formData = {
                NoSerie: capitalizeFirstLetter(this.NoSerie),
                marque: capitalizeFirstLetter(this.marque),
                modele: capitalizeFirstLetter(this.modele),
                typeOb: this.typeObjet,
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/objets`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: this.store.token,
                },
                method: 'POST',
                body: JSON.stringify(formData),
            });
            const res = await api.json();
            if (api.ok) {
                this.sucess = res.message;
                setTimeout(() => {
                    this.$router.push('/objets');
                }, 2000);
                this.enregistrer();
            } else {
                this.error = res.message;
                createToast(
                    {
                        title: this.error,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
            }
        },
        async updateObjet() { // modifier les info d'un objet
            if (this.NoSerie === '') {
                this.NoSerieValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.NoSerieValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (this.marque === '') {
                this.MarqueValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.MarqueValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (this.modele === '') {
                this.modeleValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.modeleValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (!isJourValide(this.jour)) {
                this.jourValid = 'le jour entré est invalide';
                createToast(
                    {
                        title: this.jourValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (!isMoisValide(this.mois)) {
                this.moisValid = 'le mois entré est invalide';
                createToast(
                    {
                        title: this.moisValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (!isAnneeValide(this.annee)) {
                this.anneValid = "l'année entrée est invalide";
                createToast(
                    {
                        title: this.anneValid,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            if (!isDateValide(this.annee, this.mois, this.jour)) {
                this.error = 'la date entrée est invalide';
                createToast(
                    {
                        title: this.error,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
                return;
            }
            this.jour = this.jour.toString().length === 1 ? `0${this.jour}` : this.jour;
            this.mois = this.mois.toString().length === 1 ? `0${this.mois}` : this.mois;
            const formData = {
                NoSerie: capitalizeFirstLetter(this.NoSerie),
                marque: capitalizeFirstLetter(this.marque),
                modele: capitalizeFirstLetter(this.modele),
                typeOb: this.typeObjet,
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/objets/${this.$route.params.idObjet}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: this.store.token,
                },
                method: 'PUT',
                body: JSON.stringify(formData),
            });
            const res = await api.json();
            if (api.ok) {
                this.sucess = res.message;
                setTimeout(() => {
                    this.$router.push('/objets');
                }, 2000);
                this.enregistrer();
            } else {
                this.error = res.message;
                createToast(
                    {
                        title: this.error,
                    },
                    {
                        position: 'bottom-right',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 2000,
                    },
                );
            }
        },
        async getObjet() { // get les info d'un objet
            const rep = await fetch(`${svrURL}/objets/${this.$route.params.idObjet}`, {
                headers: {
                    Authorization: this.store.token,
                },
                method: 'GET',
            }); // get les info d'un objet
            const data = await rep.json();
            if (rep.ok) this.objet = data;

            this.NoSerie = data[0].NoSerie;
            this.marque = data[0].Marque;
            this.modele = data[0].Modele;
            this.typeObjet = data[0].TypeObjet;
            const no = data[0].NoEvenement.split('-');
            [this.NoEvent, this.NoSeq] = [no[0], no[2]];
            [this.mois, this.jour] = [
                no[1].substring(2, 4),
                no[1].substring(4, 6),
            ];
            if (no[1].substring(0, 2) >= 0 && no[1].substring(0, 2) <= 22) {
                this.annee = `20${no[1].substring(0, 2)}`;
            } else {
                this.annee = `19${no[1].substring(0, 2)}`;
            }
        },
    },
};
</script>

<style scoped>
</style>
