<template>
    <h1 class="title is-6">Identification de l’agent: {{ this.store.matricule }},Nom de famille</h1>
           <div v-if="negatif" class="my-6">
             <h2 id="reponse" class="title has-text-info-dark">***Négatif***</h2>
             <p>Demande de verification pour No serie : {{  negatif }}</p>
             <p> Nous avons aucunes Info pour cet Arme</p>
           </div>
           <div v-if="infoObjet">
           <div class="my-6">
             <h2 id="reponse" class="title has-text-info-dark">*** Volée***</h2>
             <p>Demande de verification pour No serie : {{  infoObjet[0].NoSerie }}</p>
             <table class="table is-hoverable is-fullwidth is-mobile">
               <tbody id="infoippe">
                 <tr>
                   <td>Marque</td>
                   <td>{{ infoObjet[0].Marque }}</td>
                 </tr>
                 <tr>
                   <td>Type darme</td>
                   <td>{{ infoObjet[0].TypeArme }}</td>
                 </tr>
                 <tr>
                   <td>Calibre</td>
                   <td>{{  infoObjet[0].Calibre }}</td>
                 </tr>
                 <tr>
                   <td>Numero devenement</td>
                   <td>{{  infoObjet[0].NoEvenement }}</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
   </template>
   <script>
   import { connexion } from '@/stores/connexionStore';
   import { svrURL } from '@/constantes';

   export default {
       name: 'ReponseIBAFView',
       data() {
           return {
               infoObjet: '',
               negatif: '',
               matricule: '',
           };
       },
       mounted() {
           this.checkToken();
           this.getIbafReponse();
           this.getnomatricule();
       },
       setup() {
           const store = connexion();
           // exposer l'objet store à la vue
           return { store };
       },
       methods: {
           checkToken() {
               if (this.store.token === '') {
                   this.$router.push('/connexion');
               }
           },
           async getIbafReponse() {
               const personneInfo = await fetch(
                   `${svrURL}/armes/numSerie/${this.$route.params.noserie}`, // ${this.$route.params.noserie}
                   {
                       headers: {
                           Authorization: this.store.token,
                       },
                   },
               );
               if (personneInfo.ok) {
                   this.infoObjet = await personneInfo.json();
                   console.log(this.infoObjet);
               } else {
                   this.negatif = this.$route.params.noserie;
                   console.log(this.negatif);
               }
           },
           async getnomatricule() {
               const matriculeinfo = await fetch(
                   `${svrURL}/utilisateurs/matricule/${this.store.matricule}`,
                   {
                       headers: {
                           Authorization: this.store.token,
                       },
                   },
               );
               if (matriculeinfo.ok) {
                   this.matricule = await matriculeinfo.json();
                   console.log(this.matricule);
               } else {
                 this.$router.push('/requeteIBOB');
                   console.error('erreur c produite');
               }
           },
       },
       };
   </script>
