<template>
 <h2 class="title has-text-info-dark has-text-centered">Interrogation Valeur - IBVA</h2>
<h1 class="title is-6 has-text-centered">Identification de l’agent: {{ this.store.matricule }},
    Nom de famille</h1>

<div v-if="!infoObjet" class="my-6 has-text-centered">
  <h2 id="reponse" class="title has-text-info-dark">***Négatif***</h2>
  <p>Demande de verification pour : {{  this.$route.params.noserieorauteur }}</p>
  <p> Nous avons aucunes Info pour cet Valeur</p>
</div>
<div v-if="infoObjet">
        <div class="my-6 has-text-centered">
          <h2 id="reponse" class="title has-text-info-dark">*** {{ infoObjet[0].TypeEvenement }}
            ***</h2>
          <p>Demande de verification pour  : {{  this.$route.params.noserieorauteur }}</p>
          <table class="table is-hoverable is-fullwidth is-mobile">
            <tbody id="infoippe">
                <tr>
                <td>Identifiant</td>
                <td>{{ infoObjet[0].Identifiant }}</td>
              </tr>
                <tr>
                <td>Auteur</td>
                <td>{{ infoObjet[0].Auteur }}</td>
              </tr>
              <tr>
                <td>TypeValeur</td>
                <td>{{ infoObjet[0].TypeValeur }}</td>
              </tr>
              <tr>
                <td>TypeEvenement</td>
                <td>{{  infoObjet[0].TypeEvenement }}</td>
              </tr>
              <tr>
                <td>Numero devenement</td>
                <td>{{  infoObjet[0].NoEvenement }}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>
<script>
import { connexion } from '@/stores/connexionStore';
import { svrURL } from '@/constantes';

export default {
    name: 'ReponseIBAVView',
    data() {
        return {
            infoObjet: '',
            negatif: '',
            matricule: '',
        };
    },
    mounted() {
        this.checkToken();
        this.getIbvaReponse();
        this.getnomatricule();
    },
    setup() {
        const store = connexion();
        // exposer l'objet store à la vue
        return { store };
    },
    methods: {
        checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
        async getIbvaReponse() {
            let noserie = '';
            const auteur = await fetch(
                `${svrURL}/valeurs/numSerie/${this.$route.params.noserieorauteur}`, // ${this.$route.params.noserie}
                {
                    headers: {
                        Authorization: this.store.token,
                    },
                },
            );
            if (auteur.ok) {
                this.infoObjet = await auteur.json();
            } else if (!auteur.ok) {
                noserie = await fetch(
                    `${svrURL}/valeurs/auteur/${this.$route.params.noserieorauteur}`, // ${this.$route.params.noserie}
                    {
                        headers: {
                            Authorization: this.store.token,
                        },
                    },
                );
                this.infoObjet = await noserie.json();
            } else if (!noserie.ok) {
                this.negatif = this.$route.params.noserieorauteur;
            }
        },
        async getnomatricule() {
            const matriculeinfo = await fetch(
                `${svrURL}/utilisateurs/matricule/${this.store.matricule}`,
                {
                    headers: {
                        Authorization: this.store.token,
                    },
                },
            );
            if (matriculeinfo.ok) {
                this.matricule = await matriculeinfo.json();
            } else {
                this.$router.push('/requeteIBOB');
                console.error('erreur c produite');
            }
        },
    },
};
</script>
