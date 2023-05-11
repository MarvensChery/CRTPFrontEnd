<template>
  <div class="hero-body ">
    <!--box gives it the shadow-->
    <article v-if="this.$root.$data.NSerieError === true" class="column is-full message is-danger">
          <div class="message-body">
            Erreur, l'arme n'existe pas
          </div>
    </article>
    <div class="container box mt-6">
      <h2 class="title has-text-info-dark">Recherche IBAF</h2>
      <form class="row columns is-multiline">
        <!--NSerie-->
        <div class="column is-12">
          <div class="field">
            <label for="NSerie" class="label">Numéro de série</label>
            <div class="control">
              <input id="NSerie" class="input" type="text"
                     placeholder="NSerie" v-model="NSerie" required>
            </div>
          </div>
        </div>
        <!--VALIDATION ERREUR-->
        <article v-if="nomError === true" class="column is-full message is-danger">
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
          <button id="annuler" class="button is-danger " style="width: 30%; margin-left: 35%;"
                  type="button" value="Annuler" v-on:click="$router.go(-1) "
                  v-on:keydown="$router.go(-1)">
            Annuler
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import { connexion } from '@/stores/connexionStore';

export default {
    name: 'RequeteIBAFView',
    data() {
        return {
            NSerie: '',
            NSerieError: false,
        };
    },
    setup() {
        const store = connexion();
        // exposer l'objet store à la vue
        return { store };
    },

    methods: {
    // Fonction qui permet de vérifier si les champs sont valides
        isValid() {
            if (this.NSerieNSerie !== '') {
                this.$root.$data.erreurIPPE = false;
                this.$router.push(`/reponseIBAF/${this.NSerie}`);
            }
        },
        checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
    },
    mounted() {
        this.checkToken();
    },
};
</script>

<style scoped>
</style>
