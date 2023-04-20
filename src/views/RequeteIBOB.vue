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
                       placeholder="Numero de serie" v-model="nom" required>
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

export default {
    name: 'RequeteIBOB',
    data() {
        return {
            noserie: '',
        };
    },

    methods: {
        // Fonction qui permet de vérifier si les champs sont valides

    },
};
</script>

  <style scoped>
  </style>
