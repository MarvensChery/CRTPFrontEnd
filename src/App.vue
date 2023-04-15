<template>
    <div>
        <MenuProfesseurView />
        <HeaderView/>
        <router-view/>
    </div>
</template>

<script>

import MenuProfesseurView from '@/components/MenuProfesseurView.vue';
// import EtudiantView from '@/views/EtudiantView.vue';
import HeaderView from '@/components/HeaderView.vue';

export default {
    name: 'App',
    components: { MenuProfesseurView, HeaderView },
    data() {
        return {
            Professeur: false,
            erreurIPPE: false,

        };
    },
};
</script>

<style>
</style>
