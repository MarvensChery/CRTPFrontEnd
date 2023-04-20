import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '@/views/AccueilView.vue';
import ConnexionView from '@/views/ConnexionView.vue';
import RequeteIPPEView from '@/views/RequeteIPPEView.vue';
import RequeteIBAFView from '@/views/RequeteIBAFView.vue';
import PersonnesView from '@/views/PersonnesView.vue';
import ConditionView from '@/views/ConditionView.vue';
import PersonneView from '@/views/PersonneView.vue';
import ObjetView from '@/views/ObjetView.vue';
import ArmeView from '@/views/ArmeView.vue';
import IBAF from '@/views/IBAF.vue';
import IBVA from '@/views/IBVA.vue';
import RequeteIBOB from '@/views/RequeteIBOB.vue';
import ReponseIPPEView from '@/views/ReponseIPPEView.vue';
import FpsView from '@/views/FpsView.vue';
import ValeurView from '@/views/ValeurView.vue';
import EtudiantView from '@/views/EtudiantView.vue';
import SAAQView from '@/views/SAAQView.vue';
import ObjetsView from '@/views/ObjetsView.vue';
import DescriptionPersonneView from '@/views/DescriptionPersonneView.vue';
import IPPEView from '@/views/IPPEView.vue';

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
        path: '/RequeteIBOB', // Route pour faire une interrogation personne
        name: 'RequeteIBOB',
        component: RequeteIBOB,
    },
    {
        path: '/requeteIBAF', // Route pour faire une interrogation personne
        name: 'RequeteIBAFView',
        component: RequeteIBAFView,
    },
    {
        path: '/personnes', // Route pour la liste des personne de la table IPPE
        name: 'personnesView',
        component: PersonnesView,
    },
    {
        path: '/personne/:idPersonne/ippe/:idIppe/condition',
        name: 'ajoutConditionView',
        component: ConditionView,
        children: [
            {
                path: '/personne/:idPersonne/ippe/:idIppe/condition/:idCondition',
                name: 'conditionView',
                component: ConditionView,
            },
        ],
    },
    {
        path: '/personne/:idPersonne/ippe',
        name: 'IPPEView',
        component: IPPEView,
        children: [
            {
                path: '/personne/:idPersonne/ippe/:idIppe',
                name: 'modifIPPEView',
                component: IPPEView,
            },
        ],
    },
    {
        path: '/personne', // Route pour une personne
        name: 'personneView',
        component: PersonneView,
        children: [
            {
                path: '/personne/:idPersonne',
                name: 'modifPersonneView',
                component: PersonneView,
            },
        ],
    },
    {
        path: '/personne/:idPersonne/fps',
        name: 'FpsView',
        component: FpsView,
        children: [
            {
                path: '/personne/:idPersonne/fps/:idFPS',
                name: 'ajoutFpsView',
                component: FpsView,
            },
        ],
    },
    {
        path: '/objets',
        name: 'objetsView',
        component: ObjetsView,
    },
    {
        path: '/reponseIPPE',
        name: 'reponseIPPEView',
        component: ReponseIPPEView,
    },
    {
        path: '/etudiant',
        name: 'etudiant',
        component: EtudiantView,
    },
    {
        path: '/arme',
        name: 'ArmeView',
        component: ArmeView,
        children: [
            {
                path: '/arme/:idArme',
                name: 'modifArmeView',
                component: ArmeView,
            },
        ],
    },
    {
        path: '/reponseIPPE/:nomFamille/:prenom1/:prenom2/:masculin/:dateNaissance',
        name: 'reponseIPPEView',
        component: ReponseIPPEView,
    },
    {
        path: '/valeur',
        name: 'valeurView',
        component: ValeurView,
        children: [
            {
                path: '/valeur/:idValeur',
                name: 'modifValeurView',
                component: ValeurView,
            },
        ],
    },
    {
        path: '/objet',
        name: 'objetView',
        component: ObjetView,
        children: [
            {
                path: '/objet/:idObjet',
                name: 'modifObjetView',
                component: ObjetView,
            },
        ],
    },
    {
        path: '/armes',
        name: 'IBAF',
        component: IBAF,
        // children: [
        //    {
        //         path: '/armes/:idArme',
        //        name: 'ArmeView',
        //        component: ArmeView,
        //   },
        // ],
    },
    {
        path: '/valeurs',
        name: 'IBVA',
        component: IBVA,
    },
    {
        path: '/objets',
        name: 'objetsView',
        component: ObjetsView,
    },
    {
        path: '/SAAQ',
        name: 'SAAQView',
        component: SAAQView,
    },
    {
        path: '/personne/:idPersonne/description',
        name: 'descriptionPersonneView',
        component: DescriptionPersonneView,
    },
    {
        path: '/personne/:idPersonne/ippe',
        name: 'IPPEView',
        component: IPPEView,
        children: [
            {
                path: '/personne/:idPersonne/ippe/:idIppe',
                name: 'modifIPPEView',
                component: IPPEView,
            },
        ],
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
