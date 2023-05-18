<template>
    <div class="container mb-4 is-desktop">
      <form @submit.prevent="onSubmit">
        <h1 class="has-text-black " style="height:135px; text-align:center;
        font-size: 24px; padding-top: 5%;" >
            <b>
                <u v-if="isNaN(this.$route.params.idValeur)">AJOUT D'UNE RÉPONSE VALEUR</u>
                <u v-else>MODIFICATION D'UNE RÉPONSE VALEUR</u>
            </b>
        </h1>
        <br>
        <br>
        <div class='dialog-ovelay' v-if="confimation">
            <div class='dialog'>
                <header>
                    <h3> Confirmation </h3>
                    <i class='fa fa-close'></i>
                </header>
                <div class='dialog-msg'>
                    <p> Voulez-vous supprimer? </p>
                </div>
                <footer>
                    <div class='controls'>
                        <button class='button button-danger doAction'
                                v-on:click="deleteValeur"> Oui  </button>
                        <button class='button button-default cancelAction'
                                v-on:click="confimation=''"> Non  </button>
                    </div>
                </footer>
            </div>
        </div>
        <div class="box" v-if="valeur">
                <div class="success" v-if="sucess">
                    <a class="closebtn" href="/valeurs">&times;</a>
                    {{sucess}}
                </div>
                <div class="error" v-if="error">
                    <a class="closebtn" :href="this.$route.path">&times;</a>
                    {{error}}
                </div>
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="field">
                        <label for="noSerie" class="label">Numéro de série/
                            Nom de l'oeuvre/ Numéro de cart</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="noSerie" class="input" type="text" name="noSerie"
                            placeholder="Numéro de série" v-model="Identifiant" required/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p class="help is-danger" v-if="NoSerieValid">
                            {{NoSerieValid}}</p>
                    </div>
                    <div class="field">
                        <label for="auteur" class="label">Auteur/Emetteur</label>
                        <div class="control has-icons-left has-icons-right" >
                            <input id="auteur" class="input" type="text" name="auteur"
                            placeholder="Auteur / Emetteur" v-model="auteur" required/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p v-if="auteurValid" class="help is-danger">
                            {{auteurValid}}</p>
                    </div>
                    <div class="field">
                        <label for="typeValeur" class="label">Type de valeur</label>
                        <div class = "control">
                            <select id="typeValeur" class="select" name="typeValeur"
                            v-model="TypeValeur" required>
                            <option></option>
                            <option value="Devise">Devise</option>
                            <option value="Passeport">Passeport</option>
                            <option value="Œuvre d'art">Œuvre d'art</option>
                            <option value="Carte de crédit / débit">Carte de crédit / débit</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <label for="resIBVA" class="label">Type d'événement valeur</label>
                        <div class = "control">
                            <select id="resIBVA" class="select" name="resIBVA"
                            v-model="TypeEvenement" required>
                            <option></option>
                            <option value="Volé">Volé</option>
                            <option value="Perdu">Perdu</option></select>
                        </div>
                    </div>
                    <div id="NoEvenement" class="columns is-mobile is-multiline is-centered">
                        <div class="column is-3-desktop is-2-mobile">
                            <label class="has-text-black" for="NoEvent"><b>Numéro évenement</b>
                                <span style="color: red">*</span></label><br><br>
                            <select id="NoEvent" class="select" name="NoEvent"
                            v-model="NoEvent"  required>
                                <option></option>
                                <option>123</option>
                                <option>302</option>
                                <option>108</option>
                            </select>
                        </div>

                        <div class="column is-2-desktop is-2-mobile">
                            <label class="has-text-black" for="annee"><b>Année</b>
                                <span style="color: red">*</span></label><br><br>
                            <input maxlength="4" id="annee"
                            type="text" name="annee" placeholder="2022"
                            v-model="annee" required/>
                            <label class="has-text-danger"  v-if="anneValid"
                            for="warning">
                            <b>{{anneValid}}</b></label>
                        </div>

                        <div class="column is-1-desktop is-2-mobile">
                            <label class="has-text-black" for="ddm"><b>Mois</b><span
                                style="color: red">*</span></label><br><br>
                            <input id="Mois" class="input" type="number" maxlength="2"
                            placeholder="02" min="1" max="12" v-model="mois" required>
                            <label class="has-text-danger is-hidden" v-if="moisValid"
                            for="warning">
                            <b>{{moisValid}}</b></label>
                        </div>
                        <div class="column is-1-desktop is-2-mobile">
                            <label class="has-text-black" for="ddm"><b>Jour</b><span
                                style="color: red">*</span></label><br><br>
                            <input id="jour" class="input" type="number" maxlength="2"
                            placeholder="25" min="1" max="31" v-model="jour" required>
                            <label class="has-text-danger is-hidden" v-if="jourValid"
                            for="warning">
                            <b>{{jourValid}}</b></label>
                        </div>

                        <div class=" is-3-desktop is-2-mobile">
                            <label class="has-text-black" for="NoSeq"><b>Numéro Séquentiel</b>
                                <span style="color: red">*</span></label><br><br>
                            <input maxlength="4" id="NoSeq" type="text" name="NoSeq"
                                placeholder="Numéro Séquentiel" v-model="NoSeq" required/>
                        </div>
                   </div>
                </div>
            </div>
            <div class="btn-block" >
                <button
                v-if="!isNaN(this.$route.params.idValeur)"
                v-on:click="this.updateValeur">Modifier</button>&nbsp;
                <button type="submit"
                v-if="isNaN(this.$route.params.idValeur)"
                v-on:click="this.addValeur">Ajouter</button>&nbsp;
                <button type="reset"
                v-if="!isNaN(this.$route.params.idValeur)"
                v-on:click="confirmation">Supprimer</button>&nbsp;
                <button type="button"
                    v-on:click="this.$router.push({ name: 'IBVA' })"
                    @click="annuler">Annuler</button>
            </div>
            <p style="margin-bottom: 50px;">&nbsp;</p>
        </div>
      </form>
      <div class="modal" :class="{'is-active': showModalFlag}">
            <div class="modal-background"></div>
            <div class="modal-card">
            <header class="modal-card-head">
          <p class="modal-card-title">Confirmation Modal</p>
          <button class="delete" aria-label="close" @click="cancelModal"></button>
            </header>
            <section class="modal-card-body">
          <p>{{ message }}</p>
            </section>
        <footer class="modal-card-foot">
          <button class="button is-success" v-on:click="deleteValeur" >Ok</button>
          <button class="button" @click="cancelModal">Cancel</button>
        </footer>
        </div>
      </div>
    </div>
</template>

<script>
import { connexion } from '@/stores/connexionStore';
import { createToast } from 'mosha-vue-toastify';
import { svrURL } from '../constantes';
import 'mosha-vue-toastify/dist/style.css';
import {
    capitalizeFirstLetter, isJourValide, isMoisValide, isAnneeValide, isDateValide,
} from '../validations';

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ValeurView',
    data() {
        return {
            valeur: [],
            auteur: '',
            Identifiant: '',
            TypeValeur: '',
            TypeEvenement: '',
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
            NoSerieValid: '',
            auteurValid: '',
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
        if (this.$route.path !== '/valeur') {
            this.getValeur(); // get les info d'une valeur au chargement de la page
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
        },
        checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
        confirmation() {
            this.confimation = 'validation';
        },
        async deleteValeur() { // delete une valeur de la liste
            const api = await fetch(`${svrURL}/valeurs/${this.$route.params.idValeur}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: this.store.token,
                },
                method: 'DELETE',
            });
            const res = await api.json();
            if (api.ok) {
                this.sucess = res.message;
                setTimeout(() => {
                    this.$router.push('/valeurs');
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
        async addValeur() { // ajouter une valeur à la liste
            if (this.Identifiant === '') {
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
            if (this.auteur === '') {
                this.auteurValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.auteurValid,
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
            if (!this.TypeValeur) {
                this.error = 'Manque le type de valeur';
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
                Auteur: capitalizeFirstLetter(this.auteur),
                Identifiant: capitalizeFirstLetter(this.Identifiant),
                TypeValeur: capitalizeFirstLetter(this.TypeValeur),
                TypeEvenement: capitalizeFirstLetter(this.TypeEvenement),
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/valeurs`, {
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
                    this.$router.push('/valeurs');
                }, 2000);
                this.enregistrer();
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
        async updateValeur() { // modifier une valeur de la liste
            if (this.Identifiant === '') {
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
            if (this.auteur === '') {
                this.auteurValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.auteurValid,
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
                Auteur: capitalizeFirstLetter(this.auteur),
                Identifiant: capitalizeFirstLetter(this.Identifiant),
                TypeValeur: capitalizeFirstLetter(this.TypeValeur),
                TypeEvenement: capitalizeFirstLetter(this.TypeEvenement),
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/valeurs/${this.$route.params.idValeur}`, {
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
                    this.$router.push('/valeurs');
                }, 2000);
                this.enregistrer();
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
        async getValeur() { // recuperer les données d'une valeur
            const rep = await fetch(`${svrURL}/valeurs/${this.$route.params.idValeur}`, {
                headers: {
                    Authorization: this.store.token,
                },
                method: 'GET',
            });
            const data = await rep.json();

            if (rep.ok) this.valeur = data;

            this.auteur = capitalizeFirstLetter(data[0].Auteur);
            this.Identifiant = capitalizeFirstLetter(data[0].Identifiant);
            this.Auteur = capitalizeFirstLetter(data[0].Auteur);
            this.TypeValeur = capitalizeFirstLetter(data[0].TypeValeur);
            this.TypeEvenement = capitalizeFirstLetter(data[0].TypeEvenement);
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

html, body {
    min-height: 100%;
    }
    body, div, form, input, select, textarea, label {
    padding: 0;
    margin: 0;
    outline: none;
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    color: #666;
    line-height: 22px;
    }
        .dialog-ovelay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.50);
    z-index: 999999
    }
    .dialog-ovelay .dialog {
        width: 400px;
        margin: 100px auto 0;
        background-color: #fff;
        box-shadow: 0 0 20px rgba(0,0,0,.2);
        border-radius: 3px;
        overflow: hidden
    }
    .dialog-ovelay .dialog header {
        padding: 10px 8px;
        background-color: #f6f7f9;
        border-bottom: 1px solid #e5e5e5
    }
    .dialog-ovelay .dialog header h3 {
        font-size: 14px;
        margin: 0;
        color: #555;
        display: inline-block
    }
    .dialog-ovelay .dialog header .fa-close {
        float: right;
        color: #c4c5c7;
        cursor: pointer;
        transition: all .5s ease;
        padding: 0 2px;
        border-radius: 1px
    }
    .dialog-ovelay .dialog header .fa-close:hover {
        color: #b9b9b9
    }
    .dialog-ovelay .dialog header .fa-close:active {
        box-shadow: 0 0 5px #673AB7;
        color: #a2a2a2
    }
    .dialog-ovelay .dialog .dialog-msg {
        padding: 12px 10px
    }
    .dialog-ovelay .dialog .dialog-msg p{
        margin: 0;
        font-size: 15px;
        color: #333
    }
    .dialog-ovelay .dialog footer {
        border-top: 1px solid #e5e5e5;
        padding: 8px 10px
    }
    .dialog-ovelay .dialog footer .controls {
        direction: rtl
    }
    .dialog-ovelay .dialog footer .controls .button {
        padding: 5px 15px;
        border-radius: 3px
    }
    .button {
    cursor: pointer
    }
    .button-default {
        background-color: rgb(248, 248, 248);
        border: 1px solid rgba(204, 204, 204, 0.5);
        color: #5D5D5D;
    }
    .button-danger {
        background-color: #f44336;
        border: 1px solid #d32f2f;
        color: #f5f5f5
    }
    .link {
    padding: 5px 10px;
    cursor: pointer
    }
    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }

    .closebtn:hover {
        color: black;
    }
    .error, .success {
        border: 1px solid;
        margin: 10px 0px;
        padding: 15px 10px 15px 50px;
        background-repeat: no-repeat;
        background-position: 10px center;
        }
    .success {
        color: #4F8A10;
        background-color: #DFF2BF;
        background-image: url('https://i.imgur.com/Q9BGTuy.png');
    }
    .error{
        color: #D8000C;
        background-color: #FFBABA;
        background-image: url('https://i.imgur.com/GnyDvKN.png');
    }

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;

      }

    .testbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    padding: 20px;
    }
    form {
    width: 100%;
    padding: 20px;
    border-radius: 6px;
    background: #fff;
    }
    .banner {
    position: relative;
    height: 135px;
    width: 135px;
    background-image: url("/public/images/LogoMaisonneuve.jpg");
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    float:left;
    }
    .banner::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    }
    input, select, textarea {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    }
    input {
    width: calc(100% - 10px);
    padding: 5px;
    }
    textarea {
    width: calc(100% - 12px);
    padding: 5px;
    }
    .item:hover p,
    .item:hover i,
    .question:hover p,
    .question label:hover,
    input:hover::placeholder {
    color: #008bcc;
    }
    .item input:hover, .item select:hover, .item textarea:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 3px 0 #008bcc;
    color: #008bcc;
    }
    .item {
    position: relative;
    margin: 10px 0;
    }
    .item span {
    color: red;
    }
    input[type="date"]::-webkit-inner-spin-button {
    display: none;
    }
    .item i, input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    font-size: 20px;
    color: #008bcc;
    }
    .item i {
    right: 1%;
    top: 30px;
    z-index: 1;
    }
    [type="date"]::-webkit-calendar-picker-indicator {
    right: 1%;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
    }
    input[type=radio], input[type=checkbox]  {
    display: none;
    }
    label.radio {
    position: relative;
    display: inline-block;
    margin: 5px 20px 15px 0;
    cursor: pointer;
    }
    .question span {
    margin-left: 30px;
    }
    .question-answer label {
    display: block;
    }
    label.radio:before {
    content: "";
    position: absolute;
    left: 0;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 2px solid #ccc;
    }
    input[type=radio]:checked + label:before, label.radio:hover:before {
    border: 2px solid #008bcc;
    }
    label.radio:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 5px;
    width: 8px;
    height: 4px;
    border: 3px solid #008bcc;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    opacity: 0;
    }
    input[type=radio]:checked + label:after {
    opacity: 1;
    }
    .btn-block {
    margin-top: 10px;
    text-align: center;
    }
    button {
    width: 130px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #008bcc;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    }
    button:hover {
    background: #008bcc;
    }
    @media (min-width: 568px) {
    .name-item, .city-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    }
    .name-item input, .name-item div {
    width: calc(50% - 20px);
    }
    .name-item div input {
    width:97%;}
    .name-item div label {
    display:block;
    padding-bottom:5px;
    }
    }
</style>
