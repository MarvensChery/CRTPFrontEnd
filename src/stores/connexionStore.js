import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const connexion = defineStore('connexion', {
    state: () => ({
        token: '',
        Professeur: false,
    }),

    getters: {},

    actions: {},
});
