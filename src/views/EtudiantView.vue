<template>
    <h1 class="title is-1 has-text-centered">Bienvenue</h1>
    <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'requeteIPPE'}">
                <img src ="/images/ippe.png" alt="requeteIPPE">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'IBAF'}">
                <img src ="/images/ibaf.png" alt="armesView">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'RequeteIBOB'}">
                <img src ="/images/ibob.png" alt="RequeteIBOB">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2  is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'IBVA'}">
                <img src ="/images/ibva.png" alt="valeursView">
            </router-link>
        </div>
    </div>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
import { connexion } from '@/stores/connexionStore';

export default {
    name: 'EtudiantView',
    /* eslint-disable */
  methods: {
    deco() {
      this.store.token = '';
    }
  },
  setup(){
 const store = connexion();
 //exposer l'objet store à la vue
 return { store };
 },
};
</script>

<style scoped>
</style>
