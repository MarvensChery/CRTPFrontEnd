/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';

export const connexion = defineStore('connexion', {
    state: () => ({
        token: sessionStorage.getItem('token') || '',
        Professeur: sessionStorage.getItem('Professeur') === 'true',
        matricule: sessionStorage.getItem('matricule') || '',
    }),

    getters: {},

    actions: {
    },
});
