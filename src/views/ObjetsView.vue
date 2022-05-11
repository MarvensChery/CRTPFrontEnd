<template>
    <div v-if="this.$route.name === 'objetsView'">
        <h1 class="has-text-black " style="height:135px; text-align:center; font-size: 24px;">
        <b><u>LISTE D'OBJETS</u></b></h1>
        <div class="columns has-text-right has-text-black is-centered"
        style="padding-right: 5%; padding-bottom: 5%;">
            <div class="select">
                <select v-model="valeursFiltres">
                    <option></option>
                    <option v-for="i in optionsValeurs" :value="i" :key="i">{{i}}</option>
                </select>
            </div>
            <input id="type" style="height: 40px;" placeholder="Valeur du filtre"
                v-model="valValeurs">
        </div>
        <div class="columns">
                <div id="detail" class="column is-centered">
                    <a id="objets">
                    <div class="table-container">
                        <table class="table has-text-black is-fullwidth" style="text-align:center;
                        padding-bottom: 5%;">
                            <tr>
                                <th>Numéro de Série</th>
                                <th>Marque</th>
                                <th>Modèle</th>
                                <th>Type d'objet</th>
                                <th>Numéro d'évènement</th>
                            </tr>
                        <tr v-for="o in filtresValeurs" v-bind:key="o.idBOB">
                            <td>{{ o.NoSerie }}</td>
                            <td>{{ o.Marque }}</td>
                            <td>{{ o.Modele }}</td>
                            <td>{{ o.TypeObjet }}</td>
                            <td>{{ o.NoEvenement }}</td>
                            <td>
                                <router-link :to="{ name: 'modifObjetView',
                                            params: { idObjet: o.IdBOB } }">
                                <i class='fas fa-edit'></i>
                            </router-link>
                            </td>
                        </tr>
                    </table>
                </div>
                    </a>
                </div>
        </div>
    </div>
    <div v-if="this.$route.name === 'valeursView'">
        <h1 class="has-text-black " style="height:135px; text-align:center; font-size: 24px;">
        <b><u>LISTE DE VALEURS</u></b></h1>
        <div class="columns has-text-right has-text-black is-centered"
        style="padding-right: 5%;padding-bottom: 5%;">
            <div class="select">
                <select v-model="valeursFiltres">
                    <option></option>
                    <option v-for="i in optionsValeurs" :value="i" :key="i">{{i}}</option>
                </select>
            </div>
            <input id="type" style="height: 40px;"
            placeholder="Valeur du filtre" v-model="valValeurs">
        </div>
        <div class="columns">
            <div id="detail" class="column is-centered">
                <a id="valeurs">
                <div class="table-container">
                    <table class="table has-text-black is-fullwidth" style="text-align:center;">
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
                            <td>
                                <router-link :to="{ name: 'modifValeurView',
                                            params: { idValeur: v.IdIBVA } }">
                                    <i class='fas fa-edit'></i>
                                </router-link>
                            </td>
                        </tr>
                    </table>
                </div>
                </a>
        </div>
        </div>
    </div>
    <div v-if="this.$route.path === '/armes'">
        <h1 class="has-text-black " style="height:135px; text-align:center; font-size: 24px;">
        <b><u>LISTE D'ARMES</u></b></h1>
        <div class="columns has-text-right has-text-black is-centered"
        style="padding-right: 5%;padding-bottom: 5%;">
            <div class="select">
                <select v-model="valeursFiltres">
                    <option></option>
                    <option v-for="i in optionsValeurs" :value="i" :key="i">{{i}}</option>
                </select>
            </div>
            <input id="type" style="height: 40px;" placeholder="Valeur du filtre"
            v-model="valValeurs">
        </div>
        <div class="columns">
            <div id="detail" class="column is-centered">
                <a id="armes">
                <div class="table-container">
                    <table class="table has-text-black is-fullwidth" style="text-align:center;">
                        <tr>
                            <th>Numéro de Série</th>
                            <th>Marque</th>
                            <th>Calibre</th>
                            <th>Type d'armes</th>
                            <th>Numéro d'évènement</th>
                        </tr>
                        <tr v-for="a in filtresValeurs" v-bind:key="a.IdIBAF">
                            <td>{{ a.NoSerie }}</td>
                            <td>{{ a.Marque }}</td>
                            <td>{{ a.Calibre }}</td>
                            <td>{{ a.TypeArme }}</td>
                            <td>{{ a.NoEvenement }}</td>
                            <td>
                                <router-link :to="{ name: 'modifArmeView',
                                            params: { idArme: a.IdIBAF } }">
                                    <i class='fas fa-edit'></i>
                                </router-link>
                            </td>
                        </tr>
                    </table>
                </div>
                </a>
            </div>
        </div>
    </div>
    <div class="buttons is-centered" style="padding-top: 5%;padding-bottom: 5%;">
        <div>
            <button v-on:click="this.$router.push({ path: '/' })"
            class="button is-info" type="button"
            >Retour a l'accueil</button>
        </div>
        <div>
            <button v-if="this.$route.name === 'objetsView'"
            v-on:click="this.$router.push({ name: 'AobjetView' })"
            class="button is-info" type="sumbit">Ajouter</button>
            <button v-if="this.$route.name === 'armesView'"
            v-on:click="this.$router.push({ name: 'AarmeView' })"
            class="button is-info" type="sumbit">Ajouter</button>
            <button v-if="this.$route.name === 'valeursView'"
            v-on:click="this.$router.push({ name: 'AvaleurView' })"
            class="button is-info" type="sumbit">Ajouter</button>
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
            valeurs: [],
            optionsValeurs: [],
            valeursFiltres: '',
            valValeurs: '',
        };
    },
    computed: {
        filtresValeurs() { // Permet de filtré les données de facon reactif
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
    },
    mounted() {
        this.getAllObjets(); // Get les donnée au chargement de la page
        this.getAllOptions();
    },
    methods: {
        async getAllObjets() {
            const rep = await fetch(`${svrURL}${this.$route.path}`);
            const data = await rep.json();

            if (rep.ok) {
                this.valeurs = data;
            }
            console.log(this.valeurs);
        },
        async getAllOptions() { // get les options (colonne) des donnée
            const rep = await fetch(`${svrURL}${this.$route.path}`);
            const filtresListes = await rep.json();

            const filtres = Object.keys(filtresListes[0]);
            filtres.shift();
            this.optionsValeurs = filtres;
        },
    },

};
</script>

<style scoped>

</style>
