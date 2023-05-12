<template>
    <div>
        <div v-if="this.$route.name === 'objetsView'">
            <h1 class="has-text-black " style="height:135px; text-align:center; font-size: 24px;">
            <b><u>LISTE D'OBJETS</u></b></h1>
            <div class="columns has-text-right has-text-black is-centered"
            style="padding-right: 5%; padding-bottom: 5%;">
                <div class="select">
                    <label for="valeursFiltres">Filtrer par:</label>
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
                            <table class="table has-text-black is-fullwidth"
                                        style="text-align:center;
                            padding-bottom: 5%;">
                                <tr>
                                    <th>Numéro de Série</th>
                                    <th>Marque</th>
                                    <th>Modèle</th>
                                    <th>Type d'objet</th>
                                    <th>Numéro d'évènement</th>
                                </tr>
                            <tr v-for="o in filtresValeurs" v-bind:key="o.idIBOB">
                                <td>{{ o.NoSerie }}</td>
                                <td>{{ o.Marque }}</td>
                                <td>{{ o.Modele }}</td>
                                <td>{{ o.TypeObjet }}</td>
                                <td>{{ o.NoEvenement }}</td>
                                <td>
                                    <router-link :to="{ name: 'modifObjetView',
                                                params: { idObjet: o.IdIBOB } }">
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
    </div><div>
        <button v-if="this.$route.name === 'objetsView'"
                v-on:click="this.$router.push({ name: 'objetView' })"
                class="button is-info" type="sumbit">Ajouter</button>
    </div>

</template>
<script>
import { connexion } from '@/stores/connexionStore';
import { svrURL } from '../constantes';
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'IBOB',
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
    setup() {
        const store = connexion();
        // exposer l'objet store à la vue
        return { store };
    },
    mounted() {
        this.checkToken();
        this.getAllObjets(); // Get les donnée au chargement de la page
        this.getAllOptions();
    },
    methods: {
        checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
        async getAllObjets() {
            const rep = await fetch(`${svrURL}${this.$route.path}`, {
                headers: new Headers({
                    Authorization: this.store.token,
                }),
            });
            const data = await rep.json();

            if (rep.ok) {
                this.valeurs = data;
            }
        },
        async getAllOptions() { // get les options (colonne) des donnée
            const rep = await fetch(`${svrURL}${this.$route.path}`, {
                headers: new Headers({
                    Authorization: this.store.token,
                }),
            });
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
