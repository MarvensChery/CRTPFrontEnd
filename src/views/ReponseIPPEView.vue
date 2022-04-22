<template>
    <div v-if="reponseIPPE !== null">
    <section class="hero-body">
        <div class="container box is-size-3-touch has-text-weight-semibold">
            <div>
                <h2 class="title has-text-info-dark">IPPE Interrogation - Personne</h2>
            </div>
            <div class="my-6">
                <p>Demande de verification pour :</p>
                <table class="table is-fullwidth is-hoverable">
                    <tbody id="infoippe">
                        <tr>
                              <td>Nom:</td>
                              <td>{{ this.reponseIPPE[0].NomFamille }}</td>
                        </tr>
                        <tr>
                              <td>Prenom 1 :</td>
                              <td>{{ this.reponseIPPE[0].Prenom1 }}</td>
                              <td>Prenom 2 :</td>
                              <td>{{ this.reponseIPPE[0].Prenom2 }}</td>
                        </tr>
                        <tr>
                              <td>Sexe :</td>
                              <td>{{ this.reponseIPPE[0].Masculin === false ?
                                 "Féminin" : "Masculin" }}</td>
                              <td>Date de naissance :</td>
                              <td>{{ this.reponseIPPE[0].DateNaissance.split("T")[0] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                  <div style="margin-right: -20px; float: right; ">
                     <img class="shadow zoom"
                     src="https://cdn.discordapp.com/attachments/755238466618523729/966048980058378240/right-arrow4.png"
                     alt="right arrow"
                     id="rightarrow" style="position: fixed; height: 64px;width: 64px; top: 50%;">
                  </div>
                  <div style="float:left; margin-left: -80px;">
                     <img class="shadow zoom"
                     src="https://cdn.discordapp.com/attachments/755238466618523729/966048962480058458/left-arrow4.png"
                     alt="left arrow"
                     id="leftarrow" style="position: fixed;  height: 64px;width: 64px; top: 50%;">
                  </div>
            </div>
            <section>
                <div class="columns is-desktop">
                   <div id="divPremiereRep" class="column">
                      <div class="box">
                            <h2 id="reponse"
                            class="title has-text-info-dark">***{{this.reponseIPPE1type}}***</h2>
                            <table class="table is-hoverable is-fullwidth">
                               <tbody id="ippe">
                                 <div v-if="reponseIPPE1type === 'Disparu'">
                                    <tr>
                                          <td>Numéro d'événement:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].noEvenement}}</td>
                                    </tr>
                                    <tr>
                                          <td>Nature:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].nature}}</td>
                                    </tr>
                                    <tr>
                                          <td>Derniere fois vu::</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].vuDerniereFois}}</td>
                                    </tr>
                                    <tr>
                                       <td><strong>Description physique</strong></td>
                                    </tr>
                                    <tr>
                                       <td>Race :</td>
                                       <td>{{this.reponseIPPE[0].Race}}</td>
                                    </tr>
                                    <tr>
                                       <td>Taille :</td>
                                       <td>{{this.reponseIPPE[0].Taille}}</td>
                                    </tr>
                                    <tr>
                                       <td>Poids :</td>
                                       <td>{{this.reponseIPPE[0].Poids}}</td>
                                    </tr>
                                    <tr>
                                       <td>Yeux :</td>
                                       <td>{{this.reponseIPPE[0].Yeux}}</td>
                                    </tr>
                                    <tr>
                                       <td>Cheveux :</td>
                                       <td>{{this.reponseIPPE[0].Cheveux}}</td>
                                    </tr>
                                    <tr>
                                       <td>Marques :</td>
                                       <td>{{this.reponseIPPE[0].Marques}}</td>
                                    </tr>
                                    <tr>
                                       <td><strong>Description vestimentaire</strong></td>
                                    </tr>
                                    <tr>
                                       <td>Gilet :</td>
                                       <td>{{this.reponseIPPE[0].Gilet}}</td>
                                    </tr>
                                    <tr>
                                       <td>Pantalon :</td>
                                       <td>{{this.reponseIPPE[0].Pantalon}}</td>
                                    </tr>
                                    <tr>
                                       <td>Autre(s) vêtement(s) :</td>
                                       <td>{{this.reponseIPPE[0].AutreVetement}}</td>
                                    </tr>
                                    <tr>
                                       <td>Problematique de sante connu:</td>
                                       <td>{{ this.reponseIPPE[0].Depressif === true
                                       ? "Dépressif" : this.reponseIPPE[0].Suicidaire === true
                                       ? "Suicidaire" : this.reponseIPPE[0].Toxicomanie === true
                                       ? "Toxicomanie" : this.reponseIPPE[0].Desorganise === true
                                       ? "Desorganise" : this.reponseIPPE[0].Violent === true
                                       ? "Violent" : "Aucun"}}</td>
                                    </tr>
                                 </div>
                                 <div v-if="reponseIPPE1type === 'Recherché'">
                                    <tr>
                                          <td>Mandat:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].mandat}}</td>
                                    </tr>
                                    <tr>
                                          <td>Cour:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].cour}}</td>
                                    </tr>
                                    <tr>
                                          <td>Numero de mandat:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].noMandat}}</td>
                                    </tr>
                                    <tr>
                                          <td>Nature du crime :</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].nature}}</td>
                                    </tr>
                                    <tr>
                                          <td>Numéro d'événement :</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].noEvenement}}</td>
                                    </tr>
                                 </div>
                                 <div v-if="reponseIPPE1type === 'Sous observation'">
                                    <tr>
                                          <td>Motif:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].motif}}</td>
                                    </tr>
                                    <tr>
                                          <td>Nature du crime:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].nature}}</td>
                                    </tr>
                                    <tr>
                                          <td>Numéro d'événement:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].noEvenement}}</td>
                                    </tr>
                                    <tr>
                                          <td>Dossier :</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].dossierEnquete}}</td>
                                    </tr>
                                 </div>
                                 <div v-if="reponseIPPE1type === 'Accusé'">
                                    <tr>
                                          <td>Cour:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].cour}}</td>
                                    </tr>
                                    <tr>
                                          <td>Numero de cause:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].noCause}}</td>
                                    </tr>
                                    <tr>
                                          <td>Nature du crime:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].nature}}</td>
                                    </tr>
                                    <tr>
                                          <td>Numéro d'événement:</td>
                                          <td>{{this.reponseIPPE[0].IPPE[0].noEvenement}}</td>
                                    </tr>
                                 </div>
                               </tbody>
                            </table>
                      </div>
                   </div>
                   <!--Rep 2-->
                   <div id="divDeuxiemeRep" class="column is-hidden">
                      <div class="box">
                            <h2 id="reponse2" class="title has-text-info-dark">exemple:accuse</h2>
                            <table class="table is-hoverable is-fullwidth">
                               <tbody id="ippe2">
                               </tbody>
                            </table>
                      </div>
                  </div>
                </div>
             </section>
             </div>
       </section>
</div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ReponseIPPEView',
    data() {
        return {
            reponseIPPE: null,
            reponseIPPElength: null,
            reponseIPPE1type: null,
            reponseIPPE2type: null,
            reponseIPPE1conditions: null,
        };
    },
    mounted() {
        this.getshows();
    },
    methods: {
        async getshows() {
            console.log('getIPPE');
            console.log(this.$route.params.nomFamille);
            console.log(this.$route.params.prenom1);
            const prenom2 = 'null' ? '' : this.$route.params.prenom2;
            console.log(prenom2);
            console.log(this.$route.params.masculin);
            console.log(this.$route.params.dateNaissance);
            // eslint-disable-next-line
            const rep = await fetch(
                `http://localhost:3000/ippes/info?nomFamille=${this.$route.params.nomFamille}&prenom1=${this.$route.params.prenom1}&prenom2=${prenom2}&masculin=${this.$route.params.masculin}&dateNaissance=${this.$route.params.dateNaissance}`,
            );
            if (rep.ok) {
                this.reponseIPPE = await rep.json();
                this.reponseIPPElength = this.reponseIPPE[0].IPPE.length;
                this.reponseIPPE1type = this.reponseIPPE[0].IPPE[0].typeEvenement;
                if (this.reponseIPPE[0].IPPE[1]) {
                    this.reponseIPPE2type = this.reponseIPPE[0].IPPE[1].typeEvenement;
                }
                if (this.reponseIPPE[0].IPPE[0].conditions[0].idCondition !== null) {
                    this.reponseIPPE1conditions = this.reponseIPPE[0].IPPE[0].conditions;
                }
                console.log(this.reponseIPPE1type);
                console.log(this.reponseIPPE2type);
                console.log(this.reponseIPPElength);
                console.log(this.reponseIPPE1conditions);
            }
        },
    },
};
</script>

<style scoped>
#date {
    border-radius: 5px;
    font: 15px Arial, sans-serif;
    height: 35px;
}
body {
   display: flex;
   min-height: 100vh;
   flex-direction: column;
}

#wrapper {
   flex: 1;
}

.zoom:hover {
   transform: scale(1.1);
}

.shadow:hover {
   -webkit-filter: drop-shadow(-5px 2px 5px #999999);
}
</style>
