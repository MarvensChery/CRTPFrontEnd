<template>
    <div class="columns is-multiline is-size-3-touch">
    <!--box gives it the shadow-->
    <div class="column is-10 is-12-touch is-offset-1-desktop box pb-5">
        <form class="has-text-centered">
            <div class='is-centered'>
                <h1 class='title is-1-touch is-full my-6'>Table IPPE Alimentation</h1>
                <div class="columns is-multiline">
                    <label class="column is-3-desktop is-offset-1-desktop is-6-touch"
                    for="votre-nom">Filtrer par
                        nom de famille:</label>
                    <!--Récupération du filtre de l'utilisateur-->
                    <input v-model="filtrePersonnes"
                           class="column input is-hovered is-size-6 is-size-4-touch is-4-desktop
                    is-5-touch mr-6" id="votre-nom" name="votre-nom" type="text">
                </div>
                <div>
                    <hr>
                </div>
                <div class="column is-10 is-offset-1-desktop">
                    <table class='table is-striped is-fullwidth is-bordered is-centered my-5'>
                        <thead>
                        <tr>
                            <th class="is-info">Nom</th>
                            <th class="is-info">Prenom1</th>
                            <th class="is-info">Prenom2</th>
                            <th class="is-info">Categorie</th>
                            <th style="border:none;">
                                <!--Redirection vers la page Ajout personne-->
                                <router-link v-bind:to="{path: '/personne'}">
                                    <i class="fas fa-user-plus"></i>
                                </router-link>
                            </th>
                        </tr>
                        </thead>
                        <tbody id="BanquePersonne">
                        <!--
                            Boucle sur tous les personnes dans le JSON(personnesFiltre),
                            pour créer un tr pour chaque personne
                        -->
                        <tr v-for="p in personnesFiltre" v-bind:key="p.IdPersonne">
                            <!--Création dynamique des td selon chaque personnes-->
                            <td>{{p.NomFamille}}</td>
                            <td>{{p.Prenom1}}</td>
                            <td>{{p.Prenom2}}</td>
                            <td>{{p.TypePersonne}}</td>
                            <td style="border:none; background-color: transparent">
                                <!--
                                    Redirection vers /personne/id
                                    selon la rangé que l'utilisateur clique
                                -->
                                <router-link :to="{ path: '/personne/',
                                query: { idPersonne: p.IdPersonne }}">
                                    <i class="fas fa-pen"></i>
                                </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </form>
    <!--BUTTON HOME-->
        <div>
            <!-- Redirection vers l'accueil lorsque nous cliquons sur l'image home-->
            <router-link v-bind:to="{path: '/'}">
                <img id="imgHome" class="shadow zoom" src="/images/home.png" alt="Accueil"
                     style="height: 64px;width: 64px; float:left; margin-top: -50px;
                     margin-bottom: -100px;">
            </router-link>
        </div>
    </div>
    </div>
</template>

<script>
// Fichier avec tous les constantes ex: l'url du backend
import { svrURL } from '@/constantes';
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'PersonnesView',
    data() {
        return {
            // JSON de tous les personnes dans la table Personnes dans la BD
            listePersonnes: [],
            // String du filtre que l'utilisateur entre dans le champ de texte
            filtrePersonnes: '',
            id: '',
        };
    },
    mounted() {
        this.getPersonnes();
    },
    methods: {
        // Récupération de la liste des personnes enregistrées dans la table Personnes dans la BD
        async getPersonnes() {
            // Fetch sur le serveur localhost:3000/personnes
            const rep = await fetch(`${svrURL}/personnes`);
            if (rep.ok) {
                // Si il y a aucune erreur lors du fetch, convertion en JSON
                this.listePersonnes = await rep.json();
            }
        },
    },
    computed: {
        // Filtration du JSON selon ce que l'utilisateur entre dans le champ de texte
        personnesFiltre() {
            // Chercher le JSON de tous les personnes
            let personneFiltre = this.listePersonnes;
            // IF pour vérifier si le champ de texte est n'est pas vide
            if (this.filtrePersonnes !== '') {
                // Filtration selon le nom de famille
                personneFiltre = personneFiltre.filter(
                    (personne) => personne.NomFamille.toLowerCase().includes(
                        this.filtrePersonnes.toLowerCase(),
                    ),
                );
            }
            /* Ajout d'un if ici lorsque d'un nouveau nouveau filtre pour une future MÀJ
            * Ex:
            * if (this.filtreX !== '' {
            * personneFiltre = personneFiltre.filter(
            *     (personne) => personne.X.includes(
            *         this.filtrePersonnes,
            *      ),
            * };
            *
            * */
            // Retour dans du nouveau JSON filtré
            return personneFiltre;
        },
    },
};
</script>

<style scoped>
        body {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
        }

        #wrapper {
            flex: 1;
        }
        .zoom:hover {
            transform: scale(1.1);
        }

        .shadow:hover {
            -webkit-filter: drop-shadow(-5px 2px 5px #999999);
        }
</style>
