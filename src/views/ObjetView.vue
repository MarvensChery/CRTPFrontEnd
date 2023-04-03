<template>
    <div class="container mb-4 is-desktop">
      <form @submit.prevent="onSubmit">
        <h1 class="has-text-black " style="height:135px; text-align:center;
        font-size: 24px; padding-top: 5%;" >
            <b>
                <u v-if="isNaN(this.$route.params.idObjet)">AJOUT D'UNE RÉPONSE OBJET</u>
                <u v-else>MODIFICATION D'UNE RÉPONSE OBJET</u>
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
                                v-on:click="deleteObjet"> Oui  </button>
                        <button class='button button-default cancelAction'
                                v-on:click="confimation=''"> Non  </button>
                    </div>
                </footer>
            </div>
        </div>
        <div class="box" v-if="objet">
                <div class="success" v-if="sucess">
                    <a class="closebtn" href="/objets">&times;</a>
                    {{sucess}}
                </div>
                <div class="error" v-if="error">
                    <a class="closebtn" :href="this.$route.path">&times;</a>
                    {{error}}
                </div>
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="field">
                        <label for="noSerie" class="label">Numéro de série</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="noSerie" class="input" type="text" name="noSerie"
                            placeholder="Numéro de série" v-model="NoSerie" required/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p class="help is-danger" v-if="NoSerieValid">
                            {{NoSerieValid}}</p>
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
                        <p v-if="MarqueValid" class="help is-danger">
                            {{MarqueValid}}</p>
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
                        <p v-if="modeleValid" class="help is-danger">
                            {{modeleValid}}</p>
                    </div>
                    <div class="field">
                        <label for="typeObjet" class="label">Type d'objet</label>
                        <div class = "control">
                            <select id="typeObjet" class="select" name="typeObjet"
                                v-model="typeObjet" required>
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

                    <div id="NoEvenement" class="columns is-mobile is-multiline is-centered">
                        <div class="column is-3-desktop is-2-mobile">
                            <label class="has-text-black" for="NoEvent"><b>Numéro évenement</b>
                                <span style="color: red">*</span></label><br><br>
                            <select id="NoEvent" class="select" name="NoEvent"
                            v-model="NoEvent"  required>
                                <option></option>
                                <option value="123">123</option>
                                <option value="302">302</option>
                                <option value="108">108</option>
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
                            <input id="mois" class="input" type="number" maxlength="2"
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
                            <div class="btn-block" >
                <button
                v-if="!isNaN(this.$route.params.idObjet)"
                v-on:click="this.updateObjet">Modifier</button>&nbsp;
                <button type="submit"
                v-if="isNaN(this.$route.params.idObjet)"
                v-on:click="this.addObjet">Ajouter</button>&nbsp;
                <button type="reset"
                v-if="!isNaN(this.$route.params.idObjet)"
                v-on:click="confirmation">Supprimer</button>&nbsp;
                <button type="button"
                    v-on:click="this.$router.push({ name: 'objetsView' })">Annuler</button>
            </div>
                   </div>
                <p style="margin-bottom: 50px;">&nbsp;</p>
                </div>
            </div>
        </div>
      </form>
    </div>
</template>

<script>
import { svrURL } from '../constantes';
import {
    capitalizeFirstLetter, isJourValide, isMoisValide, isAnneeValide, isDateValide,
} from '../validations';

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
        };
    },
    mounted() {
        if (this.$route.path !== '/objet') {
            this.getObjet(); // get les fino d'un objet au chargement de la page
        }
    },
    methods: {
        confirmation() {
            this.confimation = 'validation';
        },
        async deleteObjet() {
            const api = await fetch(`${svrURL}/objets/${this.$route.params.idObjet}`, { method: 'DELETE' }); // delete un objet
            const res = await api.json();
            if (res.success) {
                this.sucess = res.message;
                this.confimation = '';
            } else this.error = res.message;
        },
        async addObjet() { // add un objet
            if (this.NoSerie === '') {
                this.NoSerieValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.marque === '') {
                this.MarqueValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.modele === '') {
                this.modeleValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (!isJourValide(this.jour)) {
                this.jourValid = 'le jour entré est invalide';
                return;
            }
            if (!isMoisValide(this.mois)) {
                this.moisValid = 'le mois entré est invalide';
                return;
            }
            if (!isAnneeValide(this.annee)) {
                this.anneValid = "l'année entrée est invalide";
                return;
            }
            if (!isDateValide(this.annee, this.mois, this.jour)) {
                this.error = 'la date entrée est invalide';
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
                },
                method: 'POST',
                body: JSON.stringify(formData),
            });
            const res = await api.json();
            if (res.success) this.sucess = res.message;
            else this.error = res.message;
        },
        async updateObjet() { // modifier les info d'un objet
            if (this.NoSerie === '') {
                this.NoSerieValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.marque === '') {
                this.MarqueValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.modele === '') {
                this.modeleValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (!isJourValide(this.jour)) {
                this.jourValid = 'le jour entré est invalide';
                return;
            }
            if (!isMoisValide(this.mois)) {
                this.moisValid = 'le mois entré est invalide';
                return;
            }
            if (!isAnneeValide(this.annee)) {
                this.anneValid = "l'année entrée est invalide";
                return;
            }
            if (!isDateValide(this.annee, this.mois, this.jour)) {
                this.error = 'la date entrée est invalide';
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
                },
                method: 'PUT',
                body: JSON.stringify(formData),
            });
            const res = await api.json();
            if (res.success) this.sucess = res.message;
            else this.error = res.message;
        },
        async getObjet() { // get les info d'un objet
            const rep = await fetch(`${svrURL}/objets/${this.$route.params.idObjet}`, { method: 'GET' }); // get les info d'un objet
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
