<template>
    <div class="column is-3-desktop is-4-tablet is-12-mobile">
        <router-link
            v-bind:to="{ name: 'conditionView',
                    params: { idCondition: parseInt(37) }}">
                    modif </router-link>
        <router-link
            v-bind:to="{ name: 'ajoutConditionView',
                    params: { idPersonne: parseInt(3), idIppe: parseInt(8) }}"> add </router-link>
    </div>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'testView',
};
</script>

<style scoped>
</style>
