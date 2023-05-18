<!-- eslint-disable max-len -->

<template>
    <div class="container mb-4 is-desktop">
      <form @submit.prevent="onSubmit">
        <h1 class="has-text-black " style="height:135px; text-align:center;font-size: 24px; padding-top: 5%;" >
            <b>
                <u v-if="isNaN(this.$route.params.idArme)">AJOUT D'UNE RÉPONSE ARME À FEU</u>
                <u v-else>MODIFICATION D'UNE RÉPONSE ARME À FEU</u>
            </b>
        </h1>
        <br>
        <br>
        <div class="box" v-if="arme">
                <div class="success" v-if="sucess">
                    <a class="closebtn" href="/armes">&times;</a>
                    {{sucess}}
                </div>
                <div class="error" v-if="error">
                    <a class="closebtn" :href="this.$route.path">&times;</a>
                    {{error}}
                </div>
            <div class="columns is-centered">
                <div class="column">
                    <div class="field" v-if="arme.idArme!==-1">
                            <label for="idArme" class="label is-hidden">idArme</label>
                            <div class="control">
                                <input id="idArme" class="input is-hidden" type="number"
                                       placeholder="idArme" name="idArme" v-model="arme.idArme" readonly>
                        </div>
                    </div>
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
                            placeholder="Marque" v-model="Marque"/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p v-if="MarqueValid" class="help is-danger">
                            {{MarqueValid}}</p>
                    </div>
                    <div class="field">
                        <label for="calibre" class="label">Calibre</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="calibre" class="input" type="text" name="calibre"
                            placeholder="Calibre" v-model="Calibre" required/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p v-if="CalibreValid" class="help is-danger">
                            {{CalibreValid}}</p>
                    </div>
                    <div class="field">
                        <label for="typeArme" class="label">Type d'arme</label>
                        <div class = "control">
                            <div class="select is-fullwidth">
                            <select id="typeArme" name="typeArme"
                            v-model="typeArme" required>
                            <option></option>
                            <option>Révolver</option>
                            <option>Pistolet</option>
                            <option>Carabine</option>
                            <option>Fusil</option>
                            </select>
                        </div></div>
                    </div>
                    <div class="field" style="padding-bottom: 20px">
                    <div id="NoEvenement" class="columns is-3-mobile is-multiline is-centered">
                        <div class="column is-3-desktop is-5-mobile">
                            <label class="has-text-black" for="NoEvent"><b>Numéro évenement</b>
                                <span style="color: red">*</span></label><br><br>
                                <div class="control"><div class="select is-fullwidth">
                            <select id="NoEvent" class="select" name="NoEvent"
                            v-model="NoEvent"  required>
                                <option></option>
                                <option>123</option>
                                <option>302</option>
                                <option>108</option>
                            </select>
                        </div></div></div>

                        <div class="column is-2-desktop is-4-mobile">
                            <label class="has-text-black" for="annee"><b>Année</b>
                                <span style="color: red">*</span></label><br><br>
                            <input id="annee" class="input" type="text" name="annee" placeholder="2022"
                            maxlength="4" v-model="annee" required/>
                            <label class="has-text-danger"  v-if="anneValid"
                            for="warning">
                            <b>{{anneValid}}</b></label>
                        </div>

                        <div class="column is-2-desktop is-4-mobile">
                            <label class="has-text-black" for="ddm"><b>Mois</b><span
                                style="color: red">*</span></label><br><br>
                            <input id="Mois" class="input" type="number" maxlength="2"
                            placeholder="02" min="1" max="12" v-model="mois" required>
                            <label class="has-text-danger is-hidden" v-if="moisValid"
                            for="warning">
                            <b>{{moisValid}}</b></label>
                        </div>
                        <div class="column is-2-desktop is-4-mobile">
                            <label class="has-text-black" for="ddm"><b>Jour</b><span
                                style="color: red">*</span></label><br><br>
                            <input id="jour" class="input" type="number" maxlength="2"
                            placeholder="25" min="1" max="31" v-model="jour" required>
                            <label class="has-text-danger is-hidden" v-if="jourValid"
                            for="warning">
                            <b>{{jourValid}}</b></label>
                        </div>
                        </div>

                        <div class=" is-3-desktop is-2-mobile">
                            <label class="has-text-black" for="NoSeq"><b>Numéro Séquentiel</b>
                                <span style="color: red">*</span></label><br><br>
                            <input maxlength="4" class="input" id="NoSeq" type="text" name="NoSeq"
                                placeholder="Numéro Séquentiel" v-model="NoSeq" required/>

                   </div></div>
            <div class="btn-block" >
                    <div class="columns is-mobile is-centered">
    <div class="column is-one-quarter" v-if="!isNaN(this.$route.params.idArme)">
                <button
                v-if="!isNaN(this.$route.params.idArme)"
                v-on:click="this.updateArme" class="button is-primary is-fullwidth">Modifier</button></div>&nbsp;&nbsp;&nbsp;
                <div class="column is-one-quarter" v-if="!isNaN(this.$route.params.idArme)">
                <button type="reset"
                v-if="!isNaN(this.$route.params.idArme)"
                v-on:click="showModal" class="button is-danger is-fullwidth">Supprimer</button></div>&nbsp;&nbsp;&nbsp;
                <div class="column is-one-quarter" v-if="isNaN(this.$route.params.idArme)">
                <button type="submit"
                v-if="isNaN(this.$route.params.idArme)"
                v-on:click="addArme" class="button is-primary is-fullwidth">Ajouter</button> </div>&nbsp;&nbsp;&nbsp;
                <div class="column is-one-quarter ">
                <button type="button" class="button is-danger is-fullwidth"
                    v-on:click="this.$router.push({ name: 'IBAF' })"
                    @click="annuler">Annuler</button></div>
            </div></div>
                <p style="margin-bottom: 50px;">&nbsp;</p>
                </div>
        </div>
        </div>
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
          <button class="button is-success" v-on:click="deleteArme" >Ok</button>
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
import 'mosha-vue-toastify/dist/style.css';
import {
    isJourValide, isMoisValide, isAnneeValide, isDateValide,
} from '../validations';

// noinspection JSUnusedGlobalSymbols

export default {
    name: 'ArmeView',
    data() {
        return {
            arme: [],
            NoSerie: '',
            Marque: '',
            Calibre: '',
            typeArme: '',
            NoEvent: '',
            annee: '',
            mois: '',
            jour: '',
            NoSeq: '',
            sucess: '',
            error: '',
            anneValid: '',
            moisValid: '',
            jourValid: '',
            NoSerieValid: '',
            MarqueValid: '',
            CalibreValid: '',
            confimation: '',
            PUTenvoyé: false,
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
        if (this.$route.path !== '/arme') {
            this.getArme(); // Get les info d'une arme précise
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
        async deleteArme() {
            const api = await fetch(`${svrURL}/armes/${this.$route.params.idArme}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: this.store.token,
                },
                method: 'DELETE',
            }); // Permet de delete une arme
            const res = await api.json();
            if (api.ok) {
                this.sucess = res.message;
                setTimeout(() => {
                    this.$router.push('/armes');
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
        async addArme() { // Permet de add une arme
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
            if (this.Marque === '') {
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
            if (this.Calibre === '') {
                this.CalibreValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.CalibreValid,
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
                NoSerie: (this.NoSerie),
                Marque: (this.Marque),
                Calibre: this.Calibre,
                TypeArme: (this.typeArme),
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/armes`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: this.store.token,
                },
                method: 'POST',
                body: JSON.stringify(formData),
            });
            const res = await api.json();
            if (api.ok) {
                this.sucess = res.message;
                setTimeout(() => {
                    this.$router.push('/armes');
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
        async updateArme() { // Permet de Update une arme
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
            if (this.Marque === '') {
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
            if (this.Calibre === '') {
                this.CalibreValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                createToast(
                    {
                        title: this.CalibreValid,
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
            const body = {
                NoSerie: (this.NoSerie),
                Marque: (this.Marque),
                Calibre: this.Calibre,
                TypeArme: (this.typeArme),
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/armes/${this.$route.params.idArme}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json', Authorization: this.store.token },
                body: JSON.stringify(body),
            });
            const res = await api.json();
            if (api.ok) {
                this.sucess = res.message;
                setTimeout(() => {
                    this.$router.push('/armes');
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
        async getArme() { // Get les info d'une arme
            const rep = await fetch(`${svrURL}/armes/${this.$route.params.idArme}`, {
                headers: {
                    Authorization: this.store.token,
                },
                method: 'GET',
            });
            const data = await rep.json();

            if (rep.ok) this.arme = data;
            this.NoSerie = data.NoSerie;
            this.Marque = data.Marque;
            this.Calibre = data.Calibre;
            this.typeArme = data.TypeArme;
            const no = data.NoEvenement.split('-');
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
