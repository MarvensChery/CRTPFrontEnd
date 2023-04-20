<template>
    <div>
        <h1 class="title is-1 has-text-centered">CRTP</h1>
    </div>
    <h1 class="title is-1 has-text-centered">Bienvenue</h1>
    <div v-if="this.Professeur &&
    this.store.token " class="columns is-multiline is-mobile is-centered">
        <div class="column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'requeteIPPE'}">
                <img src ="/images/ippe.png" alt="requeteIPPE">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'armesView'}">
                <img src ="/images/ibaf.png" alt="armesView">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'objetsView'}">
                <img src ="/images/ibob.png" alt="objetsView">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2  is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'valeursView'}">
                <img src ="/images/ibva.png" alt="valeursView">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2  is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'personnesView'}">
                <img src ="/images/fps.png" alt="personnesView">
            </router-link>
        </div>
    </div>
    <router-link v-if="!this.store.token" v-bind:to="{ name: 'connexion' }">
              <h1 class="has-text-centered">
                                  <div class="button  is-primary" style="margin-top: 15px;">
                                    Connection
                                </div>
              </h1>
            </router-link>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
import { connexion } from '@/stores/connexionStore';

export default {
    name: 'AccueilView',
    setup() {
        const store = connexion();
        // exposer l'objet store à la vue
        return { store };
    },
};
</script>

<style scoped>
</style>
