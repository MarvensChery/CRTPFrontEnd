import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '@/views/AccueilView.vue';
import ConnexionView from '@/views/ConnexionView.vue';
import RequeteIPPEView from '@/views/RequeteIPPEView.vue';
import PersonnesView from '@/views/PersonnesView.vue';
import ConditionView from '@/views/ConditionView.vue';
import PersonneView from '@/views/PersonneView.vue';
import ObjetsView from '@/views/ObjetsView.vue';
import ArmeView from '@/views/ArmeView.vue';
import ObjetView from '@/views/ObjetView.vue';
import ValeurView from '@/views/ValeurView.vue';

import ReponseIPPEView from '@/views/ReponseIPPEView.vue';

const routes = [
    {
        path: '/', // Route pour le menu
        name: 'accueil',
        component: AccueilView,
    },
    {
        path: '/connexion', // Route pour le menu connexion
        name: 'connexion',
        component: ConnexionView,
    },
    {
        path: '/requeteIPPE', // Route pour faire une interrogation personne
        name: 'requeteIPPE',
        component: RequeteIPPEView,
    },
    {
        path: '/personnes', // Route pour la liste des personne de la table IPPE
        name: 'personnesView',
        component: PersonnesView,
    },
    {
        path: '/condition', // Route l'ajout d'une condition à respecter
        name: 'conditionView',
        component: ConditionView,
    },
    {
        path: '/personne', // Route pour une personne
        name: 'personneView',
        component: PersonneView,
    },
    {
        path: '/arme/:idArme', // Route pour modifier ou supprimer une arme
        name: 'MarmeView',
        component: ArmeView,
    },
    {
        path: '/arme',
        name: 'AarmeView', // route ajouter une arme
        component: ArmeView,
    },
    {
        path: '/objet/:idObjet', // Route pour modifier ou supprimer un objet
        name: 'MobjetView',
        component: ObjetView,
    },
    {
        path: '/objet', // route ajouter un objet
        name: 'AobjetView',
        component: ObjetView,
    },
    {
        path: '/valeur/:idValeur', // Route pour modifier ou supprimer une valeur
        name: 'MvaleurView',
        component: ValeurView,
    },
    {
        path: '/valeur', // route ajouter une valeur
        name: 'AvaleurView',
        component: ValeurView,
    },
    {
        path: '/objets', // route pour la liste des objets
        name: 'objetsView',
        component: ObjetsView,
    },
    {
        path: '/armes', // route pour la liste des armes
        name: 'armesView',
        component: ObjetsView,
    },
    {
        path: '/valeurs', // route pour la liste des valeurs
        name: 'valeursView',
        component: ObjetsView,
    },

    {
        path: '/reponseIPPE', // route pour la réponse d'une interrogation
        name: 'reponseIPPEView',
        component: ReponseIPPEView,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
