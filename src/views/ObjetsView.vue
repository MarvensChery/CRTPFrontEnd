<template>
    <section>
    <h1 class="has-text-black " style="height:135px; text-align:center; font-size: 24px;
    padding-top: 5%;">
    <b><u>LISTE D'OBJETS</u></b></h1>
    </section>
    <div class="columns has-text-right has-text-black is-centered"
    style="padding-top: 5%; padding-right: 5%;">
        <div class="select">
            <select v-model="objetsFiltres">
                <option></option>
                <option v-for="i in optionsObjets" :value="i" :key="i">{{i}}</option>
            </select>
        </div>
        <input id="type" style="height: 40px;" placeholder="Valeur du filtre" v-model="valObjets">
    </div>
    <div class="columns">
            <div id="detail" class="column is-centered">
                <a id="objets">
                <div class="table-container">
                    <table class="table has-text-black is-fullwidth" style="text-align:center">
                        <tr>
                            <th>Numéro de Série</th>
                            <th>Marque</th>
                            <th>Modèle</th>
                            <th>Type d'objet</th>
                            <th>Numéro d'évènement</th>
                        </tr>
                    <tr v-for="o in filtresObjets" v-bind:key="o.idBOB">
                        <td>{{ o.NoSerie }}</td>
                        <td>{{ o.Marque }}</td>
                        <td>{{ o.Modele }}</td>
                        <td>{{ o.TypeObjet }}</td>
                        <td>{{ o.NoEvenement }}</td>
                        <td><i class='fas fa-edit'></i></td>
                    </tr>
                </table>
            </div>
                </a>
            </div>
    </div>
    <h1 class="has-text-black " style="height:135px; text-align:center; font-size: 24px;
    padding-top: 5%;">
    <b><u>LISTE DE VALEURS</u></b></h1>
    <div class="columns has-text-right has-text-black is-centered"
    style="padding-top: 5%; padding-right: 5%;">
        <div class="select">
            <select v-model="valeursFiltres">
                <option></option>
                <option v-for="i in optionsValeurs" :value="i" :key="i">{{i}}</option>
            </select>
        </div>
        <input id="type" style="height: 40px;" placeholder="Valeur du filtre" v-model="valValeurs">
    </div>
    <div class="columns">
        <div id="detail" class="column is-centered">
            <a id="valeurs">
            <div class="table-container">
                <table class="table has-text-black is-fullwidth" style="text-align:center">
                    <tr>
                        <th>Identifiant</th>
                        <th>Auteur</th>
                        <th>Type de Valeur</th>
                        <th>Type d'évènement</th>
                        <th>Numéro d'évènement</th>
                    </tr>
                    <tr v-for="v in filtresValeurs" v-bind:key="v.IdIBVA">
                        <td>{{ v.Identifiant }}</td>
                        <td>{{ v.Auteur }}</td>
                        <td>{{ v.TypeValeur }}</td>
                        <td>{{ v.TypeEvenement }}</td>
                        <td>{{ v.NoEvenement }}</td>
                        <td><i class='fas fa-edit'></i></td>
                    </tr>
                </table>
            </div>
            </a>
       </div>
    </div>
    <h1 class="has-text-black " style="height:135px; text-align:center; font-size: 24px;
    padding-top: 5%;">
    <b><u>LISTE D'ARMES</u></b></h1>
    <div class="columns has-text-right has-text-black is-centered"
    style="padding-top: 5%; padding-right: 5%;">
        <div class="select">
            <select v-model="armesFiltres">
                <option></option>
                <option v-for="i in optionsArmes" :value="i" :key="i">{{i}}</option>
            </select>
        </div>
        <input id="type" style="height: 40px;" placeholder="Valeur du filtre" v-model="valArme">
    </div>
    <div class="columns">
        <div id="detail" class="column is-centered">
            <a id="armes">
            <div class="table-container">
                <table class="table has-text-black is-fullwidth" style="text-align:center">
                    <tr>
                        <th>Numéro de Série</th>
                        <th>Marque</th>
                        <th>Calibre</th>
                        <th>Type d'armes</th>
                        <th>Numéro d'évènement</th>
                    </tr>
                    <tr v-for="a in filtresArmes" v-bind:key="a.IdIBAF">
                        <td>{{ a.NoSerie }}</td>
                        <td>{{ a.Marque }}</td>
                        <td>{{ a.Calibre }}</td>
                        <td>{{ a.TypeArme }}</td>
                        <td>{{ a.NoEvenement }}</td>
                        <td><i class='fas fa-edit'></i></td>
                    </tr>
                </table>
            </div>
            </a>
       </div>
    </div>
    <div class="buttons is-centered" >
        <div>
            <button id="retour" onclick="window.location.href='http://localhost:5000/menuModifier'" class="button is-info" type="button">Retour au Menu Modification</button>
        </div>
        <div>
            <button id="ajouter" class="button is-info" type="sumbit">Ajouter</button>
        </div>
    </div>
</template>

<script>
import { svrURL } from '../constantes';
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ObjetsView',
    data() {
        return {
            objets: [],
            valeurs: [],
            armes: [],
            optionsObjets: [],
            optionsValeurs: [],
            optionsArmes: [],
            objetsFiltres: '',
            valeursFiltres: '',
            armesFiltres: '',
            valArme: '',
            valObjets: '',
            valValeurs: '',
        };
    },
    computed: {
        filtresValeurs() {
            let filtresValeurs = this.valeurs;
            const ftr = this.valeursFiltres;
            if (this.valeursFiltres !== '' && this.valValeurs !== '') {
                filtresValeurs = filtresValeurs.filter(
                    (i) => i[ftr].toLowerCase()
                        .includes(this.valValeurs.toLowerCase()),
                );
            }
            return filtresValeurs;
        },
        filtresObjets() {
            let filtresObjets = this.objets;
            const ftr = this.objetsFiltres;
            if (this.objetsFiltres !== '' && this.valObjets !== '') {
                filtresObjets = filtresObjets.filter(
                    (i) => i[ftr].toLowerCase()
                        .includes(this.valObjets.toLowerCase()),
                );
            }
            return filtresObjets;
        },
        filtresArmes() {
            let filtresArmes = this.armes;
            const ftr = this.armesFiltres;
            if (this.armesFiltres !== '' && this.valArme !== '') {
                filtresArmes = filtresArmes.filter(
                    (i) => i[ftr].toLowerCase()
                        .includes(this.valArme.toLowerCase()),
                );
            }
            return filtresArmes;
        },
    },
    mounted() {
        this.getAllArmes();
        this.getAllObjets();
        this.getAllValeurs();
        this.getObjetsOptions();
        this.getValeursOptions();
        this.getArmesOptions();
    },
    methods: {
        async getAllObjets() {
            const rep = await fetch(`${svrURL}/objets`);
            const data = await rep.json();

            if (rep.ok) {
                console.log(data);
                this.objets = data;
            }
        },
        async getAllValeurs() {
            const rep = await fetch(`${svrURL}/valeurs`);
            const data = await rep.json();

            if (rep.ok) {
                console.log(data);
                this.valeurs = data;
            }
        },
        async getAllArmes() {
            const rep = await fetch(`${svrURL}/armes`);
            const data = await rep.json();

            if (rep.ok) {
                console.log(data);
                this.armes = data;
            }
        },
        async getObjetsOptions() {
            const rep = await fetch(`${svrURL}/objets`);
            const filtresListes = await rep.json();

            const filtres = Object.keys(filtresListes[0]);
            filtres.shift();
            this.optionsObjets = filtres;
        },
        async getValeursOptions() {
            const rep = await fetch(`${svrURL}/valeurs`);
            const filtresListes = await rep.json();

            const filtres = Object.keys(filtresListes[0]);
            filtres.shift();
            this.optionsValeurs = filtres;
        },
        async getArmesOptions() {
            const rep = await fetch(`${svrURL}/armes`);
            const filtresListes = await rep.json();

            const filtres = Object.keys(filtresListes[0]);
            filtres.shift();
            this.optionsArmes = filtres;
        },
    },

};
</script>

<style scoped>
</style>
