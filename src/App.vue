<template>
    <div>
        <MenuProfesseurView/>
        <router-view/>
    </div>
</template>

<script>

import MenuProfesseurView from '@/components/MenuProfesseurView.vue';

export default {
    name: 'App',
    components: { MenuProfesseurView },
};
</script>

<style>
</style>
