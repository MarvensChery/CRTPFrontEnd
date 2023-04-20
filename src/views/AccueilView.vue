<template>
    <div>
        <h1 class="title is-1 has-text-centered">CRTP</h1>
    </div>
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
