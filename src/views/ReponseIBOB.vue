<template>
 <h1 class="title is-6">Identification de l’agent: {{ this.store.matricule }}, Nom de famille</h1>
 <section class="hero-body">
      <div class="container is-size-5-mobile box has-text-weight-semibold">
        <div>
          <h2 class="title has-text-info-dark">IBOB Interrogation - Objet</h2>
        </div>
        <div v-if="negatif" class="my-6">
          <h2 id="reponse" class="title has-text-info-dark">***Négatif***</h2>
          <br>
          <p>Demande de verification pour No serie : {{  negatif }}</p>
          <br>
          <p> !!! Nous avons aucune Info pour cet Objet !!!</p>
        </div>
        <div v-if="infoObjet">
        <div class="my-6">
          <h2 id="reponse" class="title has-text-info-dark">*** Volée***</h2>
          <p>Demande de verification pour No serie : {{  infoObjet[0].NoSerie }}</p>
          <table class="table is-hoverable is-fullwidth is-mobile">
            <tbody id="infoippe">
              <tr>
                <td>Marque</td>
                <td>{{ infoObjet[0].Marque }}</td>
              </tr>
              <tr>
                <td>Modele</td>
                <td>{{ infoObjet[0].Modele }}</td>
              </tr>
              <tr>
                <td>Type dObjet</td>
                <td>{{  infoObjet[0].TypeObjet }}</td>
              </tr>
              <tr>
                <td>Numero devenement</td>
                <td>{{  infoObjet[0].NoEvenement }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </section>
      <div class="column is-12">
                <button type="button" class="button is-danger is-fullwidth"
                    v-on:click="this.$router.push({ path: '/RequeteIBOB' })"
                    @click="annuler">Annuler</button>

      </div>
</template>
<script>
import { connexion } from '@/stores/connexionStore';
import { createToast } from 'mosha-vue-toastify';
import { svrURL } from '../constantes';
import 'mosha-vue-toastify/dist/style.css';

export default {
    name: 'ReponseIBOBView',
    data() {
        return {
            infoObjet: '',
            negatif: '',
            matricule: '',
        };
    },
    mounted() {
        this.checkToken();
        this.getIbobReponse();
        this.getnomatricule();
    },
    setup() {
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
        const store = connexion();
        // exposer l'objet store à la vue
        return {
            store, annuler,
        };
    },
    methods: {
        checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
        async getIbobReponse() {
            const personneInfo = await fetch(
                `${svrURL}/objets/numSerie/${this.$route.params.noserie}`, // ${this.$route.params.noserie}
                {
                    headers: {
                        Authorization: this.store.token,
                    },
                },
            );
            if (personneInfo.ok) {
                this.infoObjet = await personneInfo.json();
            } else {
                this.negatif = this.$route.params.noserie;
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
