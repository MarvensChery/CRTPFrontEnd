import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '@/views/AccueilView.vue';
import ConnexionView from '@/views/ConnexionView.vue';
import RequeteIPPEView from '@/views/RequeteIPPEView.vue';
import PersonnesView from '@/views/PersonnesView.vue';
import ConditionView from '@/views/ConditionView.vue';
import PersonneView from '@/views/PersonneView.vue';
import ObjetView from '@/views/ObjetView.vue';
import ArmeView from '@/views/ArmeView.vue';
import ReponseIPPEView from '@/views/ReponseIPPEView.vue';
import FormulaireFPSView from '@/views/FormulaireFPSView.vue';
import ValeurView from '@/views/ValeurView.vue';
import EtudiantView from '@/views/EtudiantView.vue';
import SAAQView from '@/views/SAAQView.vue';
import ArmesView from '@/views/ArmesView.vue';
import ValeursView from '@/views/ValeursView.vue';
import ObjetsView from '@/views/ObjetsView.vue';
import testView from '@/views/testView.vue';
import DescriptionPersonneView from '@/views/DescriptionPersonneView.vue';
import IPPEView from '@/views/IPPEView.vue';

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
        path: '/personne/:idPersonne/ippe/:idIppe/condition',
        name: 'ajoutConditionView',
        component: ConditionView,
    },
    {
        path: '/condition/:idCondition',
        name: 'conditionView',
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
        path: '/personne',
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
        name: 'FormulaireFPSView',
        component: FormulaireFPSView,
        children: [
            {
                path: '/personne/:idPersonne/fps/:idFPS',
                name: 'ajoutFormulaireFPSView',
                component: FormulaireFPSView,
            },
        ],
    },
    {
        path: '/objets',
        name: 'objetsView',
        component: ObjetsView,
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
        alias: '/arme/:idArme',
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
    {
        path: '/valeur',
        alias: '/valeur/:idValeur',
        name: 'valeurView',
        component: ValeurView,
    },
    {
        path: '/objet',
        alias: '/objet/:idObjet',
        name: 'objetView',
        component: ObjetView,
    },
    {
        path: '/armes',
        name: 'armesView',
        component: ArmesView,
    },
    {
        path: '/valeurs',
        name: 'valeursView',
        component: ValeursView,
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
