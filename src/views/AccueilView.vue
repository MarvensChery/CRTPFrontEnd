<template>
    <div>
        <h1 class="title is-1 has-text-centered">CRTP</h1>
    </div>

    <router-link v-if="!this.$store.state.token" v-bind:to="{ name: 'connexion' }">
              <h1 class="has-text-centered">
                                  <div class="button  is-primary" style="margin-top: 15px;">
                                    Connection
                                </div>
              </h1>
            </router-link>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'AccueilView',
};
</script>

<style scoped>
</style>
