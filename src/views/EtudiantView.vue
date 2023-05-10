<template>
    <h1 class="title is-1 has-text-centered">Bienvenue</h1>
    <div class="columns is-multiline is-mobile is-centered" >
        <div class="column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'requeteIPPE'}">
                <img src ="/images/ippe.png" alt="requeteIPPE">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'RequeteIBAFView'}">
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
            <router-link v-bind:to="{ name: 'RequeteIBVA'}">
                <img src ="/images/ibva.png" alt="RequeteIBVA">
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
    checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
    deco() {
      this.store.token = '';
    }
  },
  setup(){
 const store = connexion();
 //exposer l'objet store à la vue
 return { store };
 },
 mounted(){
    this.checkToken();
 }
};
</script>

<style scoped>
</style>
