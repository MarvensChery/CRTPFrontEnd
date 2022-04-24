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
        path: '/',
        name: 'accueil',
        component: AccueilView,
    },
    {
        path: '/connexion',
        name: 'connexion',
        component: ConnexionView,
    },
    {
        path: '/requeteIPPE',
        name: 'requeteIPPE',
        component: RequeteIPPEView,
    },
    {
        path: '/personnes',
        name: 'personnesView',
        component: PersonnesView,
    },
    {
        path: '/condition',
        name: 'conditionView',
        component: ConditionView,
    },
    {
        path: '/personne',
        name: 'personneView',
        component: PersonneView,
    },
    {
        path: '/arme/:idArme',
        name: 'MarmeView',
        component: ArmeView,
    },
    {
        path: '/arme',
        name: 'AarmeView',
        component: ArmeView,
    },
    {
        path: '/objet/:idObjet',
        name: 'MobjetView',
        component: ObjetView,
    },
    {
        path: '/objet',
        name: 'AobjetView',
        component: ObjetView,
    },
    {
        path: '/valeur/:idValeur',
        name: 'MvaleurView',
        component: ValeurView,
    },
    {
        path: '/valeur',
        name: 'AvaleurView',
        component: ValeurView,
    },
    {
        path: '/objets',
        name: 'objetsView',
        component: ObjetsView,
    },
    {
        path: '/armes',
        name: 'armesView',
        component: ObjetsView,
    },
    {
        path: '/valeurs',
        name: 'valeursView',
        component: ObjetsView,
    },

    {
        path: '/reponseIPPE',
        name: 'reponseIPPEView',
        component: ReponseIPPEView,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
