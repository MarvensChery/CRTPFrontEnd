<template>
    <div class="container mb-4 is-desktop">
      <form @submit.prevent="onSubmit">
        <h1 class="has-text-black " style="height:135px; text-align:center;
        font-size: 24px; padding-top: 5%;" >
            <b>
                <u>MODIFICATION D'UNE RÉPONSE VALEUR</u>
            </b>
        </h1>
        <br>
        <br>
        <div class="box" v-if="valeur">
                <div class="success" v-if="sucess">
                    <a class="closebtn" href="/valeurs">&times;</a>
                    {{sucess}}
                </div>
                <div class="error" v-if="error">
                    <a class="closebtn" href="/valeurs">&times;</a>
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
                        <p id="nomError" class="help is-danger is-hidden">
                            *Champ obligatoire : seulement des lettres et '-' sont valides</p>
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
                        <p id="nomError" class="help is-danger is-hidden">
                            *Champ obligatoire : seulement des lettres et '-' sont valides</p>
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
                            <input id="annee" type="text" name="annee" placeholder="Année"
                            v-model="annee" required/>
                            <label class="is-warning is-hidden" id="anneevalid"
                            for="warning">
                            <b>l'année entrée est invalide</b></label>
                        </div>

                        <div class="column is-1-desktop is-2-mobile">
                            <label class="has-text-black" for="ddm"><b>Mois</b><span
                                style="color: red">*</span></label><br><br>
                            <select id="Mois" class="select" name="mois"
                            v-model="mois" required>
                            <option></option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            </select>
                            <label class="is-warning is-hidden" id="moisvalid"
                            for="warning">
                            <b>le mois entré est invalide</b></label>
                        </div>
                        <div class="column is-1-desktop is-2-mobile">
                            <label class="has-text-black" for="ddm"><b>Jour</b><span
                                style="color: red">*</span></label><br><br>
                            <select id="Jour" class="select" name="jour"
                            v-model="jour" required>
                            <option></option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                            </select>
                            <label class="is-warning is-hidden" id="jourvalid"
                            for="warning">
                            <b>le jour entré est invalide</b></label>
                        </div>

                        <div class=" is-3-desktop is-2-mobile">
                            <label class="has-text-black" for="NoSeq"><b>Numéro Séquentiel</b>
                                <span style="color: red">*</span></label><br><br>
                            <input id="NoSeq" type="text" name="NoSeq"
                                placeholder="Numéro Séquentiel" v-model="NoSeq" required/>
                        </div>
                   </div>
                </div>
            </div>
            <div class="btn-block" >
                <button
                v-if="this.$route.name === 'MvaleurView'"
                v-on:click="this.updateValeur">Modifier</button>&nbsp;
                <button type="submit"
                v-if="this.$route.name === 'AvaleurView'"
                v-on:click="this.addValeur">Ajouter</button>&nbsp;
                <button type="reset"
                v-if="this.$route.name === 'MvaleurView'"
                v-on:click="deleteValeur">Supprimer</button>&nbsp;
                <button type="button"
                    v-on:click="this.$router.push({ name: 'valeursView' })">Annuler</button>
            </div>
            <p style="margin-bottom: 50px;">&nbsp;</p>
        </div>
      </form>
    </div>
</template>

<script>
import { svrURL } from '../constantes';
import {
    capitalize, isJourValide, isMoisValide, isAnneeValide, isDateValide,
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
        };
    },
    mounted() {
        if (this.$route.path !== '/valeur') {
            this.getValeur(); // get les info d'une valeur au chargement de la page
        }
    },
    methods: {
        async deleteValeur() { // delete une valeur de la liste
            const api = await fetch(`${svrURL}/valeurs/${this.$route.params.idValeur}`, { method: 'DELETE' });
            const res = await api.json();
            if (res.success) this.sucess = res.message;
            else this.error = res.message;
        },
        async addValeur() { // ajouter une valeur à la liste
            if (!isJourValide(this.jour)) {
                document.getElementById('jourvalid').classList.remove('is-hidden');
                return;
            }
            if (!isMoisValide(this.mois)) {
                document.getElementById('moisvalid').classList.remove('is-hidden');
                return;
            }
            if (!isAnneeValide(this.annee)) {
                document.getElementById('anneevalid').classList.remove('is-hidden');
                return;
            }
            if (!isDateValide(this.annee, this.mois, this.jour)) {
                this.error = 'la date entrée est invalide';
                return;
            }
            const formData = {
                auteur: capitalize(this.auteur),
                NoSerie: capitalize(this.Identifiant),
                typeVa: capitalize(this.TypeValeur),
                resIBVA: capitalize(this.TypeEvenement),
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/valeurs`, {
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
        async updateValeur() { // modifier une valeur de la liste
            if (!isJourValide(this.jour)) {
                document.getElementById('jourvalid').classList.remove('is-hidden');
                return;
            }
            if (!isMoisValide(this.mois)) {
                document.getElementById('moisvalid').classList.remove('is-hidden');
                return;
            }
            if (!isAnneeValide(this.annee)) {
                document.getElementById('anneevalid').classList.remove('is-hidden');
                return;
            }
            if (!isDateValide(this.annee, this.mois, this.jour)) {
                this.error = 'la date entrée est invalide';
                return;
            }
            const formData = {
                auteur: capitalize(this.auteur),
                NoSerie: capitalize(this.Identifiant),
                typeVa: capitalize(this.TypeValeur),
                resIBVA: capitalize(this.TypeEvenement),
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/valeurs/${this.$route.params.idValeur}`, {
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
        async getValeur() { // recuperer les données d'une valeur
            const rep = await fetch(`${svrURL}/valeurs/${this.$route.params.idValeur}`, { method: 'GET' });
            const data = await rep.json();

            if (rep.ok) this.valeur = data;

            this.auteur = capitalize(data[0].Auteur);
            this.Identifiant = capitalize(data[0].Identifiant);
            this.Auteur = capitalize(data[0].Auteur);
            this.TypeValeur = capitalize(data[0].TypeValeur);
            this.TypeEvenement = capitalize(data[0].TypeEvenement);
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
