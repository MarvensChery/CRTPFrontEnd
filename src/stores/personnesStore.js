import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const usePersonnesStore = defineStore('personnes', {
    state: () => ({
        // Personne sélectionnée
        selPersonne: {},
        idPersonne: 0,
    }),

    getters: {},

    actions: {},
});
