<template>
    <div class="column is-3-desktop is-4-tablet is-12-mobile">
        <router-link
            v-bind:to="{ name: 'conditionViewModif',
                    params: { Idcondition: parseInt(29) }}"> modif </router-link>
        <router-link
            v-bind:to="{ name: 'conditionViewAdd',
                    params: { Idpersonne: parseInt(3) }}"> add </router-link>
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
