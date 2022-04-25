import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '@/views/AccueilView.vue';
import ConnexionView from '@/views/ConnexionView.vue';
import RequeteIPPEView from '@/views/RequeteIPPEView.vue';
import PersonnesView from '@/views/PersonnesView.vue';
import ConditionView from '@/views/ConditionView.vue';
import PersonneView from '@/views/PersonneView.vue';
import ObjetsView from '@/views/ObjetsView.vue';
import ArmeView from '@/views/ArmeView.vue';
import ReponseIPPEView from '@/views/ReponseIPPEView.vue';
import testView from '@/views/testView.vue';

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
        path: '/condition/:Idcondition',
        name: 'conditionViewModif',
        component: ConditionView,
    },
    {
        path: '/condition/:Idpersonne',
        name: 'conditionViewAdd',
        component: ConditionView,
    },
    {
        path: '/personne',
        name: 'personneView',
        component: PersonneView,
    },
    {
        path: '/objets',
        name: 'objetsView',
        component: ObjetsView,
    },
    {
        path: '/arme',
        name: 'armeView',
        component: ArmeView,
    },
    {
        path: '/test',
        name: 'test',
        component: testView,
    },
    {
        path: '/reponseIPPE/:nomFamille/:prenom1/:prenom2/:masculin/:dateNaissance',
        name: 'reponseIPPEView',
        component: ReponseIPPEView,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
