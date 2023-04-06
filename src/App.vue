<template>
    <div>
        <MenuProfesseurView v-if="Professeur === true"/>
        <EtudiantView v-else/>
        <HeaderView/>
        <router-view/>
    </div>
</template>

<script>

import MenuProfesseurView from '@/components/MenuProfesseurView.vue';
import EtudiantView from '@/views/EtudiantView.vue';
import HeaderView from '@/components/HeaderView.vue';

export default {
    name: 'App',
    components: { MenuProfesseurView, EtudiantView, HeaderView },
    data() {
        return {
            Professeur: true,
            erreurIPPE: false,
        };
    },
};
</script>

<style>
</style>
