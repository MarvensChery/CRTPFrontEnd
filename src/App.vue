<template>
    <div>
        <MenuProfesseurView />
        <HeaderView/>
        <router-view/>
    </div>
</template>

<script>

import MenuProfesseurView from '@/components/MenuProfesseurView.vue';
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
