<template>
    <div class="container mb-4 is-desktop">
        <div class="box">
            <!--Dynamisation de la page selon si ya un paramètre
                dans l'url -->
            <h1 v-if="this.$route.query.idFps"
                class="title is-1-touch is-full my-6 has-text-centered">
                MODIFICATION RÉPONSE FPS
            </h1>
            <h1 v-else class="title is-1-touch is-full my-6 has-text-centered">
                AJOUT RÉPONSE FPS
            </h1>
            <div class="box">
                <div class="columns is-centered">
                    <div class="column is-half">
                        <span class="has-text-weight-bold is-6 has-text-success"
                        v-if="message !== ''">
                            <i class="fa-solid fa-circle-check"></i>&nbsp;{{message}}
                        </span>
                        <span class="has-text-weight-bold is-6 has-text-danger"
                        v-if="messagerr !== ''">
                            <i class="fa-solid fa-circle-xmark"></i>&nbsp;{{messagerr}}
                        </span>
                        <div class="field">
                            <label for="numeroFPS" class="label">Numéro FPS: </label>
                            <br />
                            <div class="columns is-gapless">
                                <div class="column is-11">
                                    <div class="control has-icons-left has-icons-right">
                                        <input v-model="numeroFPS" id="inputFPS"
                                        class="input" type="text" placeholder="Numéro FPS"/>
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="column is-1">
                                    <div class="control">
                                        <input class="input" type="text" value="H" readonly />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div class="field">
                            <label for="comportement" class="label">Comportement(s): </label>

                            <div class="columns is-multiline">
                                <div class="column is-one-third">
                                    <label for="comportement1" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Violent" />
                                        Violent
                                    </label>
                                </div>
                                <div class="column is-two-thirds">
                                    <label for="comportement2" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="EchappeG" />
                                        Échappe à ses gardiens légaux
                                    </label>
                                </div>
                                <div class="column is-one-third">
                                    <label for="comportement3" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Suicidaire" />
                                        Suicidaire
                                    </label>
                                </div>
                                <div class="column is-one-third">
                                    <label for="comportement4" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Desequilibre" />
                                        Déséquilibré
                                    </label>
                                </div>
                                <div class="column is-one-third"></div>
                                <div class="column is-one-third">
                                    <label for="comportement5" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Contagieux" />
                                        Contagieux
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br />

                        <label for="description" class="label">Description: </label>
                        <div class="field">
                            <label for="race">Race: </label>
                            <div class="control">
                                <select v-model="Race" id="choixRace" class="select"
                                name="choixRace" required>
                                    <option></option>
                                    <option value="blanc">Blanc</option>
                                    <option value="latino">Latino</option>
                                    <option value="asiatique">Asiatique</option>
                                    <option value="noir">Noir</option>
                                </select>
                            </div>
                        </div>
                        <label for="taille">Taille: </label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="inputTaille" class="input" type="text"
                            placeholder="Taille" v-model="Taille" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <br />

                        <label for="poids">Poids: </label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="inputPoids" class="input" type="text"
                            placeholder="Poids" v-model="Poids" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <br />

                        <div class="field">
                            <label for="yeux">Yeux: </label>
                            <div class="control">
                                <select id="choixYeux" class="select"
                                name="choixYeux" required v-model="Yeux">
                                    <option></option>
                                    <option value="brun">Brun</option>
                                    <option value="vert">Vert</option>
                                    <option value="blue">Bleu</option>
                                    <option value="noir">Noir</option>
                                </select>
                            </div>
                        </div>

                        <label for="marques">Marques: </label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="inputMarques" class="input" type="text"
                            placeholder="Marques" v-model="Marques" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <br /><br />

                        <div class="field">
                            <label for="antécédant" class="label">Antécédant(s): </label>

                            <div class="columns is-multiline">
                                <div class="column is-one-third">
                                    <label for="antécédant1" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Violence" />
                                        Violence
                                    </label>
                                </div>
                                <div class="column is-one-third">
                                    <label for="antécédant2" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Fraude" />
                                        Fraude
                                    </label>
                                </div>
                                <div class="column is-one-third"></div>
                                <div class="column is-one-third">
                                    <label for="antécédant3" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="ConduiteVehicule" />
                                        Conduite véh.
                                    </label>
                                </div>
                                <div class="column is-one-third">
                                    <label for="antécédant4" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="IntroEffraction" />
                                        Intro. par eff.
                                    </label>
                                </div>
                                <div class="column is-one-third"></div>
                                <div class="column is-one-third">
                                    <label for="antécédant5" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Sexe" />
                                        Sexe
                                    </label>
                                </div>
                                <div class="column is-one-third">
                                    <label for="antécédant6" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="ArmeOffensive" />
                                        Arme Offensive
                                    </label>
                                </div>
                                <div class="column is-one-third"></div>
                                <div class="column is-one-third">
                                    <label for="antécédant7" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Vol" />
                                        Vol
                                    </label>
                                </div>
                                <div class="column is-one-third">
                                    <label for="antécédant8" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Drogue" />
                                        Drogue
                                    </label>
                                </div>
                                <div class="column is-one-third"></div>
                                <div class="column is-one-third">
                                    <label for="antécédant9" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Mefait" />
                                        Méfait
                                    </label>
                                </div>
                                <div class="column is-one-third">
                                    <label for="antécédant10" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="Incendie" />
                                        Incendie
                                    </label>
                                </div>
                                <div class="column is-one-third"></div>
                                <div class="column is-one-third">
                                    <label for="antécédant11" class="checkbox">
                                        <input type="checkbox" value="true"
                                        v-model="AutreInfraction" />
                                        Autre infraction
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div class="columns">
                            <router-link v-bind:to="{path: '/'}">
                                <div class="column is-one-third">
                                    <div class="buttons is-right">
                                        <button class="button is-info is-default">Retour</button>
                                    </div>
                                </div>
                            </router-link>

                            <div v-if="this.$route.query.idFps" class="column is-one-third">
                                <div class="buttons is-centered">
                                    <button class="button is-info is-default"
                                    v-on:click="putFps">Modifier</button>
                                </div>
                            </div>

                            <div v-else class="column is-one-third">
                                <div class="buttons is-centered">
                                    <button class="button is-info is-default"
                                    v-on:click="postFps">Ajouter</button>
                                </div>
                            </div>

                            <div v-if="this.$route.query.idFps" class="column is-one-third">
                                <div class="buttons">
                                    <button class="button is-info is-default"
                                    v-on:click="delFps">Supprimer</button>
                                </div>
                            </div>

                            <div v-else class="column is-one-third">
                                <div class="buttons">
                                    <button class="button is-info is-default"
                                    v-on:click="clear">Supprimer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Lien de l'url du bakckend
import { svrURL } from '@/constantes';
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'FormulaireFPSView',
    data() {
        return {
            // Lien de chaque input avec un v-model
            numeroFPS: '',
            Violent: '',
            EchappeG: '',
            Suicidaire: '',
            Desequilibre: '',
            Contagieux: '',
            Race: '',
            Taille: '',
            Poids: '',
            Yeux: '',
            Marques: '',
            Violence: '',
            Fraude: '',
            ConduiteVehicule: '',
            IntroEffraction: '',
            Sexe: '',
            ArmeOffensive: '',
            Vol: '',
            Drogue: '',
            Mefait: '',
            Incendie: '',
            AutreInfraction: '',
            idPersonne: '',
            CD: '',
            IdFPS: '',
            message: '',
            messagerr: '',
        };
    },
    methods: {
        // Récupération des données FPS selon l'idFPS dans l'url
        async getFps() {
            if (this.$route.query.idFps !== undefined) {
                const rep = await fetch(`${svrURL}/fps/${this.$route.query.idFps}`);
                if (rep.ok) {
                    const data = await rep.json();
                    // Remplissage des input avec les données récupérer
                    this.numeroFPS = (data[0].NoFPS).substring(0, 6);
                    this.Violent = data[0].Violent;
                    this.EchappeG = data[0].Echappe;
                    this.Suicidaire = data[0].Suicidaire;
                    this.Desequilibre = data[0].Desequilibre;
                    this.Contagieux = data[0].Contagieux;
                    this.idPersonne = data[0].IdPersonne;
                    this.Race = data[0].Race;
                    this.Taille = data[0].Taille;
                    this.Poids = data[0].Poids;
                    this.Yeux = data[0].Yeux;
                    this.Marques = data[0].Marques;
                    this.Violence = data[0].Violence;
                    this.Fraude = data[0].Fraude;
                    this.ConduiteVehicule = data[0].ConduiteVehicule;
                    this.IntroEffraction = data[0].IntroEffraction;
                    this.Sexe = data[0].Sexe;
                    this.ArmeOffensive = data[0].ArmeOffensive;
                    this.Vol = data[0].Vol;
                    this.Drogue = data[0].Drogue;
                    this.Mefait = data[0].Mefait;
                    this.Incendie = data[0].Incendie;
                    this.AutreInfraction = data[0].AutreInfraction;
                    this.CD = data[0].CD;
                    this.IdFPS = data[0].IdFPS;
                }
            }
        },
        // Function pour le post FPS
        async postFps() {
            // constantes temporaires pour les tests de POST
            const testID = 5;
            // Création d'un JSON que va envoyer au backend
            const data = JSON.stringify({
                IdPersonne: testID,
                NoFPS: `${this.numeroFPS}H`,
                Violent: this.Violent,
                Echappe: this.EchappeG,
                Suicidaire: this.Suicidaire,
                Desequilibre: this.Desequilibre,
                Contagieux: this.Contagieux,
                Violence: this.Violence,
                Fraude: this.Fraude,
                ConduiteVehicule: this.ConduiteVehicule,
                IntroEffraction: this.IntroEffraction,
                Sexe: this.Sexe,
                ArmeOffensive: this.ArmeOffensive,
                Vol: this.Vol,
                Drogue: this.Drogue,
                Mefait: this.Mefait,
                Incendie: this.Incendie,
                AutreInfraction: this.AutreInfraction,
                Race: this.Race,
                Taille: this.Taille,
                Poids: this.Poids,
                Yeux: this.Yeux,
                Marques: this.Marques,
                CD: this.CD,
            });
            console.log(data);
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: data,
            };
            try {
                const rep = await fetch(`${svrURL}/fps`, requestOptions);
                if (rep.ok) {
                    if (rep.ok) {
                        this.message = rep.message;
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        // Function pour effacer le formulaire lorsque nous
        // sommes en mode ajout FPS
        clear() {
            this.numeroFPS = '';
            this.Violent = false;
            this.EchappeG = false;
            this.Suicidaire = false;
            this.Desequilibre = false;
            this.Contagieux = false;
            this.Violence = false;
            this.ConduiteVehicule = false;
            this.IntroEffraction = false;
            this.Sexe = false;
            this.ArmeOffensive = false;
            this.Drogue = false;
            this.Mefait = false;
            this.Incendie = false;
            this.AutreInfraction = false;
            this.Race = '';
            this.Taille = '';
            this.Poids = '';
            this.Yeux = '';
            this.Marques = '';
        },
        // Fonction pour supprimer une FPS de la base
        // de données avec l'id dans l'url
        async delFps() {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            const requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
            };
            try {
                const rep = await fetch(`${svrURL}/fps/${this.IdFPS}`, requestOptions);
                if (rep.ok) {
                    this.message = rep.message;
                }
            } catch (error) {
                console.log(error);
            }
        },
        // Fonction Pour modifier les donnés de la base de
        // de données avec un idFPS
        async putFps() {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            const data = JSON.stringify({
                IdPersonne: 5,
                NoFPS: `${this.numeroFPS}H`,
                Violent: this.Violent,
                Echappe: this.EchappeG,
                Suicidaire: this.Suicidaire,
                Desequilibre: this.Desequilibre,
                Contagieux: this.Contagieux,
                Violence: this.Violence,
                Fraude: this.Fraude,
                ConduiteVehicule: this.ConduiteVehicule,
                IntroEffraction: this.IntroEffraction,
                Sexe: this.Sexe,
                ArmeOffensive: this.ArmeOffensive,
                Vol: this.Vol,
                Drogue: this.Drogue,
                Mefait: this.Mefait,
                Incendie: this.Incendie,
                AutreInfraction: this.AutreInfraction,
                Race: this.Race,
                Taille: this.Taille,
                Poids: this.Poids,
                Yeux: this.Yeux,
                Marques: this.Marques,
                CD: this.CD,
            });

            const requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: data,
            };

            try {
                const rep = await fetch(`${svrURL}/fps/${this.$route.query.idFps}`, requestOptions);
                if (rep.ok) {
                    this.message = rep.message;
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getFps();
    },
};
</script>

<style scoped></style>
