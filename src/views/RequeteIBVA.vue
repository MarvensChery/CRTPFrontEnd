<template>
  <div class="hero-body ">
    <!--box gives it the shadow-->
    <article v-if="this.$root.$data.erreurIPPE === true" class="column is-full message is-danger">
          <div class="message-body">
            Erreur, la Valeur recherché(e) n'existe pas
          </div>
    </article>
    <div class="container box mt-6">
      <h2 class="title has-text-info-dark">Interrogation Valeur - IBVA</h2>
      <form class="row columns is-multiline">
        <!--noserie-->
        <div class="column is-12">
          <div class="field">
            <label for="noserie" class="label">Numero de série/Nom de l'oeuvre
              /Numéro de passeport/Nom de l'auteur</label>
            <div class="control">
              <input id="noserie" class="input" type="text"
                     placeholder="Bsc230087/ROMANTIQUE OUTREMONT
/GC872783/RICHARD SAVOIE" v-model="noserie" >
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
                  style="width: 25%;margin-left: 35%;"
                  v-on:keydown="this.isValid()">
            Recherche
          </button>
        </div>
      </form>

    </div>
    <div class="column is-12">
        <button id="annuler" class="button is-danger" style="margin-left: 37%;width: 20%;"
                type="button" value="Annuler" v-on:click="$router.go(-1) "
                v-on:keydown="$router.go(-1)">
          Annuler
        </button>
      </div>
  </div>
</template>

<script>
import { connexion } from '@/stores/connexionStore';
// import { capitalizeAllLetter } from '@/validations';

export default {
    name: 'RequeteIBVA',
    data() {
        return {
            noserie: '',
            auteur: '',
        };
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
        // Fonction qui permet de vérifier si les champs sont valides
        isValid() {
            this.$root.$data.erreurIBOB = false;
            let recherche = '';
            if (this.noserie !== '') {
                recherche = this.noserie;
            } else if (this.auteur !== '') {
                recherche = this.auteur;
            } else {
                console.log('vous devez selectioner au moin un des 2');
            }
            this.$router.push(`/reponseIBAV/${recherche}`);
        },
    },
    async mounted() {
        await this.checkToken();
    },

};

</script>

<style scoped>
</style>
