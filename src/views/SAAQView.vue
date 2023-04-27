<template>
    <h1 class="title is-1 has-text-centered">Page en construction</h1>
</template>

<script>
import { connexion } from '@/stores/connexionStore';
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'SAAQView',
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
    },
    mounted() {
        this.checkToken();
    },

};
</script>

<style scoped>
</style>
