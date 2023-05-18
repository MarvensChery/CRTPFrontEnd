<template>
    <div class="hero-body ">
      <!--box gives it the shadow-->
      <article v-if="this.$root.$data.erreurIPPE === true" class="column is-full message is-danger">
            <div class="message-body">
              Erreur, la personne recherché(e) n'existe pas
            </div>
      </article>
      <div class="container box mt-6">
        <h2 class="title has-text-info-dark">Interrogation Objet - IBOB</h2>
        <form class="row columns is-multiline">
          <!--noserie-->
          <div class="column is-12">
            <div class="field">
              <label for="noserie" class="label">Numéro de Série</label>
              <div class="control">
                <input id="noserie" class="input" type="text"
                       placeholder="Numero de serie" v-model="noserie" required>
              </div>
            </div>
          </div>
          <!--VALIDATION ERREUR-->
          <article v-if="noerreur === true" class="column is-full message is-danger">
            <div class="message-body">
              Ce champ ne peut pas etre vide!
            </div>
          </article>
          <!--BOUTON-->
          <div class="column is-12">
            <button id="form" class="button is-info is-fullwidth"
                    type="button" value="Recherche" v-on:click="this.isValid()"
                   v-on:keydown="this.isValid()">
              Recherche
            </button>
          </div>
          <div class="column is-12">
        <button v-if="(this.store.Professeur)"
                v-on:click="this.$router.push({ path: '/' })"
                @click="annuler"
                id="annuler" class="button is-danger is-fullwidth"
                  type="button" value="Annuler"
                >Annuler</button>
                <button v-if="(!this.store.Professeur)"
                v-on:click="this.$router.push({ path: '/etudiant' })"
                @click="annuler"
                id="annuler" class="button is-danger is-fullwidth"
                  type="button" value="Annuler"
                >Annuler</button>
        </div>
        </form>

      </div>
    </div>
</template>

<script>
import { connexion } from '@/stores/connexionStore';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

export default {
    name: 'RequeteIBOB',
    data() {
        return {
            noserie: '',
            noerreur: false,
        };
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
        // Fonction qui permet de vérifier si les champs sont valides
        isValid() {
            if (this.noserie !== '') {
                this.$root.$data.erreurIBOB = false;
                this.$router.push(`/reponseIBOB/${this.noserie}`);
            } else {
                this.noerreur = true;
            }
        },
    },
    async mounted() {
        await this.checkToken();
    },

};

</script>

  <style scoped>
  </style>
