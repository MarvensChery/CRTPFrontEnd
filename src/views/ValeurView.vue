<template>
<<<<<<< HEAD
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
                            <input maxlength="2" id="annee"
                            type="text" name="annee" placeholder="Année"
                            v-model="annee" required/>
                            <label class="has-text-danger"  v-if="anneValid"
                            for="warning">
                            <b>{{anneValid}}</b></label>
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
                            <label class="has-text-danger is-hidden" v-if="moisValid"
                            for="warning">
                            <b>{{moisValid}}</b></label>
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
                v-if="this.$route.name === 'MvaleurView'"
                v-on:click="this.updateValeur">Modifier</button>&nbsp;
                <button type="submit"
                v-if="this.$route.name === 'AvaleurView'"
                v-on:click="this.addValeur">Ajouter</button>&nbsp;
                <button type="reset"
                v-if="this.$route.name === 'MvaleurView'"
                v-on:click="confirmation">Supprimer</button>&nbsp;
                <button type="button"
                    v-on:click="this.$router.push({ name: 'valeursView' })">Annuler</button>
            </div>
            <p style="margin-bottom: 50px;">&nbsp;</p>
        </div>
      </form>
=======
    <div class="container mb-4 is-desktop" v-if="loaded===true">
        <form id="formulaireAjouter" @submit.prevent="handler($event)">
            <h1 class="has-text-black " style="height:135px; text-align:center;
        font-size: 24px; padding-top: 5%"><b>
                <u v-if="idValeur!==-1">MODIFICATION D'UNE RÉPONSE VALEUR</u>
                <u v-else>AJOUT D'UNE RÉPONSE VALEUR</u></b></h1>
            <div class="block has-text-centered has-background-danger" v-if="errorMessage!== ''">
                <p><strong class="has-text-white">{{ this.errorMessage }}</strong></p>
            </div>
            <div class="block has-text-centered has-background-success" v-if="successMessage!== ''">
                <p><strong class="has-text-white">{{ this.successMessage }}</strong></p>
            </div>
            <div class="box">
                <div class="columns is-centered">
                    <div class="column is-half">
                        <div class="field" v-if="idValeur!==-1">
                            <label for="idValeur" class="label is-hidden">idValeur</label>
                            <div class="control">
                                <input id="idValeur" class="input is-hidden" type="number"
                                       placeholder="idValeur" name="idValeur"
                                       v-model="idValeur" readonly>
                            </div>
                        </div>
                        <div class="field">
                            <label for="identifiant" class="label">Numéro de série,
                                Nom de l'oeuvre ou numéro de carte</label>
                            <div class="control has-icons-left has-icons-right">
                                <input id="identifiant" class="input" type="text" name="identifiant"
                                       placeholder="Identifiant" required
                                       v-model="valeur.identifiant"/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                            </div>
                            <p id="nomError" class="help is-danger is-hidden">
                                *Champ obligatoire : seulement des lettres et '-' sont valides</p>
                        </div>
                        <div class="field">
                            <label for="auteur" class="label">Auteur / Émetteur</label>
                            <div class="control has-icons-left has-icons-right">
                                <input id="auteur" class="input" type="text" name="auteur"
                                       placeholder="Auteur"
                                       v-model="valeur.auteur" required/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                            </div>
                            <p id="nomError" class="help is-danger is-hidden">
                                *Champ obligatoire : seulement des lettres et '-' sont valides</p>
                        </div>
                        <div class="field">
                            <label for="typeValeur" class="label">Type de valeur</label>
                            <div class="control">
                                <select id="typeValeur" class="select" name="typeValeur" required
                                        v-model="valeur.typeValeur">
                                    <option value="" disabled selected></option>
                                    <option>Devise</option>
                                    <option>Passeport</option>
                                    <option>Œuvre d'art</option>
                                    <option>Carte de crédit / débit</option>
                                </select>
                            </div>
                        </div>
                        <div class="field">
                            <label for="typeEvenement" class="label">Réponse IBVA</label>
                            <div class="control">
                                <select id="typeEvenement" class="select"
                                        name="typeEvenement" required
                                        v-model="valeur.typeEvenement">
                                    <option value="Négatif">***NÉGATIF***</option>
                                    <option value="Volé">***VOLÉ***</option>
                                    <option value="Perdu">***PERDU***</option>
                                </select>
                            </div>
                        </div>
                        <div class="field" style="padding-bottom: 20px">
                            <label for="NoEvenement" class="label">Numéro d'évenement</label>
                           <div id="NoEvenement" class="columns is-mobile is-multiline is-centered">
                                <div class="field has-addons">
                                    <div class="select">
                                        <select id="NoCours" name="NoCours" required
                                                v-model="noEvenement.NoCours">
                                            <option value="" disabled selected></option>
                                            <option id="123">123</option>
                                            <option id="302">302</option>
                                            <option id="108">108</option>
                                        </select>
                                    </div>
                                    <div class="control">
                                        <label for="AA">
                                            <input class="input" type="text" id="AA" name="AA"
                                                   maxlength="2" placeholder="AA"
                                                   v-model="noEvenement.AA">
                                        </label>
                                    </div>
                                    <div class="control">
                                        <label for="MM">
                                            <input class="input" type="text" id="MM" name="MM"
                                                   maxlength="2" placeholder="MM"
                                                   v-model="noEvenement.MM">
                                        </label>
                                    </div>
                                    <div class="control">
                                        <label for="JJ">
                                            <input class="input" type="text" id="JJ" name="JJ"
                                                   maxlength="2" placeholder="JJ"
                                                   v-model="noEvenement.JJ">
                                        </label>
                                    </div>
                                    <div class="control">
                                        <label for="sequenceChiffres">
                                            <input class="input" type="text" id="sequenceChiffres"
                                                   name="sequenceChiffres"
                                                   maxlength="4" placeholder="4 chiffres"
                                                   v-model="noEvenement.sequenceChiffres">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <input type="submit" class="button has-text-weight-bold is-link"
                                   id="retour" value="Retour"
                                   @click.prevent="this.$router.push('/valeurs')">
                            <input type="submit" class="button has-text-weight-bold is-primary"
                                   id="modifier"
                                   value="Modifier" @click="setEvent('modifier')"
                                   v-if="idValeur !==-1">
                            <input type="reset" class="button has-text-weight-bold is-warning"
                                   id="annuler" @click="resetVariable" value="Annuler">
                            <input class="button has-text-weight-bold is-primary" type="submit"
                                   id="ajouter" value="Ajouter" @click="setEvent('ajouter')"
                                   v-if="idValeur===-1">
                            <input class="js-modal-trigger button has-text-weight-bold is-danger"
                                   data-target="modal-js-example" @click.prevent="showModal = true"
                                   id="suppr"
                                   v-if="idValeur !==-1" value="Supprimer">
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="modal is-active" v-show="showModal" @close="showModal = false">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Confirmation de suppression</p>
                    <button class="delete" aria-label="close"
                            @click.prevent="showModal = false"></button>
                </header>
                <section class="modal-card-body">
                    Voulez-vous vraiment supprimer cette entrée?
                </section>
                <footer class="modal-card-foot">
                    <button class="button has-text-weight-bold is-danger" id="supprimer"
                            @click.prevent="handlerSupprimer">Supprimer
                    </button>
                    <button class="button" @click.prevent="showModal = false">Retour</button>
                </footer>
            </div>
        </div>
>>>>>>> dev_Vue
    </div>
</template>

<script>
<<<<<<< HEAD
import { svrURL } from '../constantes';
import {
    capitalize, isJourValide, isMoisValide, isAnneeValide, isDateValide,
} from '../validations';

// noinspection JSUnusedGlobalSymbols
=======

// noinspection JSUnusedGlobalSymbols
import { svrURL } from '@/constantes';

>>>>>>> dev_Vue
export default {
    name: 'ValeurView',
    data() {
        return {
<<<<<<< HEAD
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
        };
    },
    mounted() {
        if (this.$route.path !== '/valeur') {
            this.getValeur(); // get les info d'une valeur au chargement de la page
        }
    },
    methods: {
        confirmation() {
            this.confimation = 'validation';
        },
        async deleteValeur() { // delete une valeur de la liste
            const api = await fetch(`${svrURL}/valeurs/${this.$route.params.idValeur}`, { method: 'DELETE' });
            const res = await api.json();
            if (res.success) {
                this.sucess = res.message;
                this.confimation = '';
            } else this.error = res.message;
        },
        async addValeur() { // ajouter une valeur à la liste
            if (this.Identifiant === '') {
                this.NoSerieValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.auteur === '') {
                this.auteurValid = '*Champ obligatoire : seulement des lettres et - sont valides';
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
            if (this.Identifiant === '') {
                this.NoSerieValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.auteur === '') {
                this.auteurValid = '*Champ obligatoire : seulement des lettres et - sont valides';
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
=======
            idValeur: -1,
            btnCliquee: null,
            loaded: false,
            errorMessage: '',
            successMessage: '',
            valeur: {
                identifiant: '',
                auteur: '',
                typeValeur: '',
                typeEvenement: '',
            },
            noEvenement: {
                NoCours: '',
                AA: '',
                MM: '',
                JJ: '',
                sequenceChiffres: '',
            },
            showModal: false,
        };
    },
    methods: {
        handler(event) {
            const {
                AA,
                MM,
                JJ,
                sequenceChiffres,
            } = this.noEvenement;
            const regexJJ = /^0[1-9]|[12]\d|3[01]$/;
            const regexMM = /^0[1-9]|1[0-2]$/;
            const regexAA = /^\d{2}$/;
            const regexSChiffres = /^\d{4}$/;
            const validationEvent = (
                regexJJ.test(JJ)
                && regexMM.test(MM)
                && regexAA.test(AA)
                && regexSChiffres.test(sequenceChiffres)
            );
            if (validationEvent === true) {
                const formData = new URLSearchParams(new FormData(event.target));
                let method;
                if (this.btnCliquee === 'ajouter') {
                    method = 'POST';
                } else if (this.btnCliquee === 'modifier') {
                    method = 'PUT';
                }
                fetch(`${svrURL}/valeurs`, {
                    method,
                    body: formData,
                })
                    .then((res) => res.json())
                    .then((resJson) => {
                        if (resJson.success) {
                            this.successMessage = resJson.message;
                        } else {
                            this.errorMessage = resJson.message;
                        }
                        const sleep = (ms) => new Promise((resolve) => {
                            setTimeout(resolve, ms);
                        });
                        sleep(2000)
                            .then(() => {
                                this.successMessage = '';
                                this.errorMessage = '';
                            });
                    })
                    .catch((resJson) => {
                        this.errorMessage = resJson.message;
                    });
            } else {
                this.errorMessage = 'Opération échouée, veuillez vérifier le numéro d\'événement';
            }
        },
        setEvent(msg) {
            this.btnCliquee = msg;
        },
        resetVariable() {
            this.btnCliquee = null;
            this.errorMessage = '';
            this.successMessage = '';
            this.getValeur();
        },
        setId() {
            if (this.$route.params.idValeur !== undefined) {
                this.idValeur = this.$route.params.idValeur;
            }
            this.loaded = true;
        },
        getValeur() {
            this.setId();
            if (this.idValeur !== -1) {
                fetch(`${svrURL}/valeurs/${this.idValeur}`)
                    .then((res) => res.json())
                    .then((resJson) => {
                        this.errorMessage = resJson.message;
                        this.valeur.identifiant = resJson[0].Identifiant;
                        this.valeur.auteur = resJson[0].Auteur;
                        this.valeur.typeValeur = resJson[0].TypeValeur;
                        this.valeur.typeEvenement = resJson[0].TypeEvenement;
                        const noEvenement = resJson[0].NoEvenement.split('-');
                        const AAMMJJ = [];
                        AAMMJJ.push(noEvenement[1].slice(0, 2));
                        AAMMJJ.push(noEvenement[1].slice(2, 4));
                        AAMMJJ.push(noEvenement[1].slice(4, 6));
                        noEvenement[1] = AAMMJJ;
                        [this.noEvenement.NoCours,
                            [this.noEvenement.AA, this.noEvenement.MM,
                                this.noEvenement.JJ],
                            this.noEvenement.sequenceChiffres] = noEvenement;
                    })
                    .catch(() => {
                        this.errorMessage = 'Cette valeur n\'est pas répertoriée';
                    });
            }
        },
        handlerSupprimer() {
            fetch(`${svrURL}/valeurs/${this.idValeur}`, { method: 'DELETE' })
                .then((res) => res.json())
                .then((resJson) => {
                    if (resJson.success) {
                        this.successMessage = resJson.message;
                    } else {
                        this.errorMessage = resJson.message;
                    }
                })
                .catch((resJson) => {
                    this.errorMessage = resJson.message;
                });
            this.showModal = false;
        },
    },
    mounted() {
        this.getValeur();
>>>>>>> dev_Vue
    },
};
</script>

<style scoped>
<<<<<<< HEAD

html, body {
    min-height: 100%;
    }
    body, div, form, input, select, textarea, label {
=======
html, body {
    min-height: 100%;
}

body, div, form, input, select, textarea, label {
>>>>>>> dev_Vue
    padding: 0;
    margin: 0;
    outline: none;
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    color: #666;
    line-height: 22px;
<<<<<<< HEAD
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
=======
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;

}

.testbox {
>>>>>>> dev_Vue
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    padding: 20px;
<<<<<<< HEAD
    }
    form {
=======
}

form {
>>>>>>> dev_Vue
    width: 100%;
    padding: 20px;
    border-radius: 6px;
    background: #fff;
<<<<<<< HEAD
    }
    .banner {
=======
}

.banner {
>>>>>>> dev_Vue
    position: relative;
    height: 135px;
    width: 135px;
    background-image: url("/public/images/LogoMaisonneuve.jpg");
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
<<<<<<< HEAD
    float:left;
    }
    .banner::after {
=======
    float: left;
}

.banner::after {
>>>>>>> dev_Vue
    content: "";
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
<<<<<<< HEAD
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
=======
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
input:hover::placeholder select:hover::placeholder {
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
>>>>>>> dev_Vue
    right: 1%;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
<<<<<<< HEAD
    }
    input[type=radio], input[type=checkbox]  {
    display: none;
    }
    label.radio {
=======
}

input[type=radio], input[type=checkbox] {
    display: none;
}

label.radio {
>>>>>>> dev_Vue
    position: relative;
    display: inline-block;
    margin: 5px 20px 15px 0;
    cursor: pointer;
<<<<<<< HEAD
    }
    .question span {
    margin-left: 30px;
    }
    .question-answer label {
    display: block;
    }
    label.radio:before {
=======
}

.question span {
    margin-left: 30px;
}

.question-answer label {
    display: block;
}

label.radio:before {
>>>>>>> dev_Vue
    content: "";
    position: absolute;
    left: 0;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 2px solid #ccc;
<<<<<<< HEAD
    }
    input[type=radio]:checked + label:before, label.radio:hover:before {
    border: 2px solid #008bcc;
    }
    label.radio:after {
=======
}

input[type=radio]:checked + label:before, label.radio:hover:before {
    border: 2px solid #008bcc;
}

label.radio:after {
>>>>>>> dev_Vue
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
<<<<<<< HEAD
    }
    input[type=radio]:checked + label:after {
    opacity: 1;
    }
    .btn-block {
    margin-top: 10px;
    text-align: center;
    }
    button {
=======
}

input[type=radio]:checked + label:after {
    opacity: 1;
}

.btn-block {
    margin-top: 10px;
    text-align: center;
}

button {
>>>>>>> dev_Vue
    width: 130px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #008bcc;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
<<<<<<< HEAD
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
=======
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
        width: 97%;
    }

    .name-item div label {
        display: block;
        padding-bottom: 5px;
    }
}
>>>>>>> dev_Vue
</style>
