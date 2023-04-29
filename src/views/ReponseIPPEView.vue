<template>
  <div v-if="reponseIPPE !== null">
    <section class="hero-body">
      <div class="container is-size-5-mobile box has-text-weight-semibold">
        <div>
          <h2 class="title has-text-info-dark">IPPE Interrogation - Personne</h2>
        </div>
        <div class="my-6">
          <p>Demande de verification pour :</p>
          <table class="table is-hoverable is-fullwidth is-mobile">
            <tbody id="infoippe">
              <tr>
                <td>Nom:</td>
                <td>{{ reponseIPPE[0].NomFamille }}</td>
              </tr>
              <tr>
                <td>Prenom 1 :</td>
                <td>{{ reponseIPPE[0].Prenom1 }}</td>
              </tr>
              <tr>
                <td>Prenom 2 :</td>
                <td>{{ reponseIPPE[0].Prenom2 }}</td>
              </tr>
              <tr>
                <td>Sexe :</td>
                <td>{{ reponseIPPE[0].Masculin === false ? "Féminin" : "Masculin" }}</td>
              </tr>
              <tr>
                <td>Date de naissance :</td>
                <td>{{ reponseIPPE[0].DateNaissance.split("T")[0] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      <div>
        <div v-if="reponseIPPE1type !== 'Négatif'">
           <div v-if="pageactuelle < reponseIPPE[0].IPPE.length"
            v-on:click="pageactuelle += 1"
            v-on:keydown="pageactuelle = 2" style="margin-right: -5px; float: right">
            <img class="shadow zoom"
              src="https://cdn.discordapp.com/attachments/755238466618523729/966048980058378240/right-arrow4.png"
              alt="right arrow" id="rightarrow" />
           </div>
        </div>
        <div v-if="reponseIPPE1type === 'Négatif'">
          <div v-if="pageactuelle < 1"
            v-on:click="pageactuelle += 1"
            v-on:keydown="pageactuelle = 2" style="margin-right: -5px; float: right">
            <img class="shadow zoom"
              src="https://cdn.discordapp.com/attachments/755238466618523729/966048980058378240/right-arrow4.png"
              alt="right arrow" id="rightarrow" />
          </div>
        </div>
          <div v-if="pageactuelle > 1"
            v-on:click="pageactuelle -= 1" v-on:keydown="pageactuelle = 3"
            style="float: left; margin-left: -65px">
            <img class="shadow zoom"
              src="https://cdn.discordapp.com/attachments/755238466618523729/966048962480058458/left-arrow4.png"
              alt="left arrow" id="leftarrow" />
          </div>
      </div>
        <section>
          <div class="columns is-desktop">
            <div v-if="pageactuelle === pageactuelle">
              <div v-if="reponseIPPE1type === 'Négatif'" class="column">
                <h2 id="reponse" class="title has-text-info-dark">
                  ***{{ reponseIPPE1type }}***</h2>
              </div>
              <a v-if="reponseIPPE1type !== 'Négatif'">
                <div id="divPremiereRep" class="column is-12"
                v-for="(ippe, key) in reponseIPPE[0].IPPE" :key="key">
                  <div v-if="pageactuelle === key + 1">
                    <h2 id="reponse" class="title has-text-info-dark">
                      ***{{ ippe.TypeEvenement }}***</h2>
                    <table class="table is-hoverable is-fullwidth">
                      <tbody id="ippe">
                        <div v-if="ippe.TypeEvenement === 'Disparu'">
                          <tr>
                            <td>Numéro d'événement:</td>
                            <td>{{ ippe.NoEvenement }}</td>
                          </tr>
                          <tr>
                            <td>Nature:</td>
                            <td>{{ ippe.Nature }}</td>
                          </tr>
                          <tr>
                            <td>Derniere fois vu::</td>
                            <td>{{ ippe.VuDerniereFois }}</td>
                          </tr>
                          <tr>
                            <td><strong>Description physique</strong></td>
                          </tr>
                          <tr>
                            <td>Race :</td>
                            <td>{{ reponseIPPE[0].Race }}</td>
                          </tr>
                          <tr>
                            <td>Taille :</td>
                            <td>{{ reponseIPPE[0].Taille }}</td>
                          </tr>
                          <tr>
                            <td>Poids :</td>
                            <td>{{ reponseIPPE[0].Poids }}</td>
                          </tr>
                          <tr>
                            <td>Yeux :</td>
                            <td>{{ reponseIPPE[0].Yeux }}</td>
                          </tr>
                          <tr>
                            <td>Cheveux :</td>
                            <td>{{ reponseIPPE[0].Cheveux }}</td>
                          </tr>
                          <tr>
                            <td>Marques :</td>
                            <td>{{ reponseIPPE[0].Marques }}</td>
                          </tr>
                          <tr>
                            <td><strong>Description vestimentaire</strong></td>
                          </tr>
                          <tr>
                            <td>Gilet :</td>
                            <td>{{ reponseIPPE[0].Gilet }}</td>
                          </tr>
                          <tr>
                            <td>Pantalon :</td>
                            <td>{{ reponseIPPE[0].Pantalon }}</td>
                          </tr>
                          <tr>
                            <td>Autre(s) vêtement(s) :</td>
                            <td>{{ reponseIPPE[0].AutreVetement }}</td>
                          </tr>
                          <tr>
                            <td>Problematique de sante connu:</td>
                            <td>
                              <!--A CHANGER vif reponseippe not null or suicide not null ...
                              moustache reponse-->
                              {{
                                reponseIPPE[0].Depressif === true
                                ? "Dépressif"
                                : reponseIPPE[0].Suicidaire === true
                                  ? "Suicidaire"
                                  : reponseIPPE[0].Toxicomanie === true
                                    ? "Toxicomanie"
                                    : reponseIPPE[0].Desorganise === true
                                      ? "Desorganise"
                                      : reponseIPPE[0].Violent === true
                                        ? "Violent"
                                        : "Aucun"
                              }}
                            </td>
                          </tr>
                          <table class="table is-fullwidth" v-html="formatterConditions()"></table>
                        </div>
                        <div v-if="ippe.TypeEvenement === 'Recherché'">
                          <tr>
                            <td>Mandat:</td>
                            <td>{{ ippe.Mandat }}</td>
                          </tr>
                          <tr>
                            <td>Cour:</td>
                            <td>{{ ippe.Cour }}</td>
                          </tr>
                          <tr>
                            <td>Numero de mandat:</td>
                            <td>{{ ippe.NoMandat }}</td>
                          </tr>
                          <tr>
                            <td>Nature du crime :</td>
                            <td>{{ ippe.Nature }}</td>
                          </tr>
                          <tr>
                            <td>Numéro d'événement :</td>
                            <td>{{ ippe.NoEvenement }}</td>
                          </tr>
                          <table class="table is-fullwidth" v-html="formatterConditions()"></table>
                        </div>
                        <div v-if="ippe.TypeEvenement === 'Sous observation'">
                          <tr>
                            <td>Motif:</td>
                            <td>{{ ippe.Motif }}</td>
                          </tr>
                          <tr>
                            <td>Nature du crime:</td>
                            <td>{{ ippe.Nature }}</td>
                          </tr>
                          <tr>
                            <td>Numéro d'événement:</td>
                            <td>{{ ippe.NoEvenement }}</td>
                          </tr>
                          <tr>
                            <td>Dossier d'enquête:</td>
                            <td>{{ ippe.DossierEnquete }}</td>
                          </tr>
                          <tr>
                            <span>-</span>
                          </tr>
                          <tr>
                            <td>Compléter ficher d'interpellation</td>
                          </tr>
                          <tr>
                            <td>Acheminer à l'unité des Renseignements criminels</td>
                          </tr>
                          <table class="table is-fullwidth" v-html="formatterConditions()"></table>
                        </div>
                        <table v-if="ippe.TypeEvenement === 'Accusé'">
                          <tr>
                            <td>Cour:</td>
                            <td>{{ ippe.Cour }}</td>
                          </tr>
                          <tr>
                            <td>Numero de cause:</td>
                            <td>{{ ippe.NoCause }}</td>
                          </tr>
                          <tr>
                            <td>Nature du crime:</td>
                            <td>{{ ippe.Nature }}</td>
                          </tr>
                          <tr>
                            <td>Numéro d'événement:</td>
                            <td>{{ ippe.NoEvenement }}</td>
                          </tr>
                          <table class="table is-fullwidth" v-html="formatterConditions()"></table>
                        </table>
                        <div v-if="ippe.TypeEvenement === 'Interdit'">
                          <tr>
                            <td>Nature:</td>
                            <td>{{ ippe.Nature }}</td>
                          </tr>
                          <tr>
                            <td>Cour:</td>
                            <td>{{ ippe.Cour }}</td>
                          </tr>
                          <tr>
                            <td>Numero de cause:</td>
                            <td>{{ ippe.NoCause }}</td>
                          </tr>
                          <tr>
                            <td>Nature du crime:</td>
                            <td>{{ ippe.Nature }}</td>
                          </tr>
                          <tr>
                            <td>Numéro d'événement:</td>
                            <td>{{ ippe.NoEvenement }}</td>
                          </tr>
                          <tr>
                            <td>Expiration:</td>
                            <td>
                              {{ ippe.FinSentence.split("T")[0] }}
                            </td>
                          </tr>
                          <table class="table is-fullwidth" v-html="formatterConditions()"></table>
                        </div>
                        <div v-if="ippe.TypeEvenement === 'Probation'">
                          <tr>
                            <td>Cour:</td>
                            <td>{{ ippe.Cour }}</td>
                          </tr>
                          <tr>
                            <td>Numero de cause:</td>
                            <td>{{ ippe.NoCause }}</td>
                          </tr>
                          <tr>
                            <td>Nature du crime:</td>
                            <td>{{ ippe.Nature }}</td>
                          </tr>
                          <tr>
                            <td>Numéro d'événement:</td>
                            <td>{{ ippe.NoEvenement }}</td>
                          </tr>
                          <tr>
                            <td>Fin de sentence:</td>
                            <td>{{ ippe.FinSentence.split("T")[0] }}</td>
                          </tr>
                          <table class="table is-fullwidth" v-html="formatterConditions()"></table>
                          <tr>
                            <td>Agent de probation:</td>
                            <td>{{ ippe.AgentProbation }}</td>
                          </tr>
                          <tr>
                            <td>Telephone:</td>
                            <td>{{ ippe.Telephone }}
                              Poste: {{ ippe.Poste }}</td>
                          </tr>
                        </div>
                        <div v-if="ippe.TypeEvenement === 'Libération Conditionnelle'">
                          <tr>
                            <td>Cour:</td>
                            <td>{{ ippe.Cour }}</td>
                          </tr>
                          <tr>
                            <td>Numero de cause:</td>
                            <td>{{ ippe.NoCause }}</td>
                          </tr>
                          <tr>
                            <td>Nature du crime:</td>
                            <td>{{ ippe.NatureCrime }}</td>
                          </tr>
                          <tr>
                            <td>Numéro d'événement:</td>
                            <td>{{ ippe.NoEvenement }}</td>
                          </tr>
                          <tr>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>FPS:</td>
                            <td>438761F</td>
                          </tr>
                          <tr>
                            <td>Lieu de detention:</td>
                            <td>{{ ippe.LieuDetention }}</td>
                          </tr>
                          <tr>
                            <td>Fin de la sentence:</td>
                            <td>{{ ippe.FinSentence.split("T")[0] }}</td>
                          </tr>
                          <table class="table is-fullwidth" v-html="formatterConditions()"></table>
                          <tr>
                            <td>Agent de libération conditionnelle à contacter :</td>
                            <td>{{ ippe.AgentLiberation }}</td>
                          </tr>
                          <tr>
                            <td>Téléphone :</td>
                            <td>{{ ippe.Telephone }}</td>
                          </tr>
                        </div>
                      </tbody>
                    </table>
                  </div>
                </div>
              </a>
              <!--Rep 2
              <div id="divDeuxiemeRep" class="column is-full" v-if="pageactuelle === 2">
              <h2 id="reponse2" class="title has-text-info-dark">
                ***{{ this.reponseIPPE2type }}***</h2>
              <table class="table is-hoverable is-fullwidth">
                <tbody id="ippe2">
                  <div v-if="reponseIPPE2type === 'Interdit'">
                    <tr>
                      <td>Nature:</td>
                      <td>{{ this.reponseIPPE[0].IPPE[1].Nature }}</td>
                    </tr>
                    <tr>
                      <td>Cour:</td>
                      <td>{{ this.reponseIPPE[0].IPPE[1].Cour }}</td>
                    </tr>
                    <tr>
                      <td>Numero de cause:</td>
                      <td>{{ this.reponseIPPE[0].IPPE[1].NoCause }}</td>
                    </tr>
                    <tr>
                      <td>Nature du crime:</td>
                      <td>{{ this.reponseIPPE[0].IPPE[1].Nature }}</td>
                    </tr>
                    <tr>
                      <td>Numéro d'événement:</td>
                      <td>{{ this.reponseIPPE[0].IPPE[1].NoEvenement }}</td>
                    </tr>
                    <tr>
                      <td>Expiration:</td>
                      <td>
                        {{ this.reponseIPPE[0].IPPE[1].FinSentence.split("T")[0] }}
                      </td>
                    </tr>
                  </div>
                </tbody>
              </table>
              </div>
              -->
            </div>
          </div>
          <!--Rep 2
          <div class="columns is-desktop">
          <div id="divFPS1" class="column is-full" v-if="pageactuelle === 1">

<h2 id="reponse1"
    class="title has-text-info-dark">***{{ this.reponseFPStype }}***</h2>
<table class="table is-hoverable is-fullwidth">
  <tbody id="fps">
  <div v-if="reponseFPStype === 'Bertionné'">
    <tr>
      <td>Nature:</td>
      <td>{{ this.reponsefps[0].FPS[0].Nature }}</td>
    </tr>
    <tr>
      <td>Cour:</td>
      <td>{{ this.reponsefps[0].FPS[0].Cour }}</td>
    </tr>
    <tr>
      <td>Numero de cause:</td>
      <td>{{ this.reponsefps[0].FPS[0].NoCause }}</td>
    </tr>
    <tr>
      <td>Nature du crime:</td>
      <td>{{ this.reponsefps[0].FPS[0].Nature }}</td>
    </tr>
    <tr>
      <td>Numéro d'événement:</td>
      <td>{{ this.reponsefps[0].FPS[0].NoEvenement }}</td>
    </tr>
    <tr>
      <td>Expiration:</td>
      <td>
        {{ this.reponsefps[0].FPS[0].FinSentence.split('T')[0] }}
      </td>
    </tr>
  </div>
  <div v-if="reponseFPStype === 'Negatif'">
    <tr>
      <td>Nature:</td>
      <td>{{ this.reponsefps[0].FPS[0].Nature }}</td>
    </tr>
    <tr>
      <td>Cour:</td>
      <td>{{ this.reponsefps[0].FPS[0].Cour }}</td>
    </tr>
    <tr>
      <td>Numero de cause:</td>
      <td>{{ this.reponsefps[0].FPS[0].NoCause }}</td>
    </tr>
    <tr>
      <td>Nature du crime:</td>
      <td>{{ this.reponsefps[0].FPS[0].Nature }}</td>
    </tr>
    <tr>
      <td>Numéro d'événement:</td>
      <td>{{ this.reponsefps[0].FPS[0].NoEvenement }}</td>
    </tr>
    <tr>
      <td>Expiration:</td>
      <td>
        {{ this.reponsefps[0].FPS[0].FinSentence.split('T')[0] }}
      </td>
    </tr>
  </div>
  </tbody>
</table>
</div>
</div>-->
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { connexion } from '@/stores/connexionStore';
import { svrURL } from '@/constantes';

export default {
    name: 'ReponseIPPEView',
    data() {
        return {
            reponseIPPE: null,
            reponsefps: null,
            reponseIPPElength: null,
            reponseFPStype: null,
            reponseIPPE1type: null,
            reponseIPPE2type: null,
            reponseIPPE1conditions: null,
            pageactuelle: 1,
            key: 0,
        };
    },
    mounted() {
        this.checkToken();
        this.getIppeReponse();
        this.pluspage();
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
        async pluspage() {
            this.pageDepart += 1;
        },
        async getIppeReponse() {
            const prenom2 = this.$route.params.prenom2 === 'null' ? '' : this.$route.params.prenom2;
            const personneInfo = await fetch(
                `${svrURL}/personnes/info?nomFamille=${this.$route.params.nomFamille}&prenom1=${this.$route.params.prenom1}&prenom2=${prenom2}&masculin=${this.$route.params.masculin}&dateNaissance=${this.$route.params.dateNaissance}`,
                {
                    headers: {
                        Authorization: this.store.token,
                    },
                },
            );
            if (personneInfo.ok) {
                this.reponseIPPE = await personneInfo.json();
                const pIPPE = await fetch(
                    `${svrURL}/personnes/${this.reponseIPPE[0].IdPersonne}/ippes`,
                    {
                        headers: {
                            Authorization: this.store.token,
                        },
                    },
                );

                // console.log(repi[0].TypeEvenement);

                //  console.log(repi.length);
                if (!pIPPE.ok) {
                    this.reponseIPPE1type = 'Négatif';
                } else {
                    this.reponseIPPE[0].IPPE = await pIPPE.json();

                    this.reponseIPPElength = this.reponseIPPE[0].IPPE.length;
                    this.reponseIPPE1type = this.reponseIPPE[0].IPPE[0].TypeEvenement;

                    if (this.reponseIPPE[0].IPPE[1]) {
                        this.reponseIPPE2type = this.reponseIPPE[0].IPPE[1].TypeEvenement;
                    }
                    console.log('nooooooooo');
                }
            } else {
                this.$root.$data.erreurIPPE = true;
                this.$router.push('/requeteIPPE');
            }
        },
        formatterConditions() {
            let returneddata = `<tr>
        <td><strong>Condition(s) :</strong></td>
    </tr>`;
            if (this.reponseIPPE1conditions === null || this.reponseIPPE1conditions.length === 0
        || this.reponseIPPE1conditions.idCondition === null) {
                return '';
            }
            if (this.reponseIPPE1conditions.length > 0) {
                this.reponseIPPE1conditions.forEach((element) => {
                    if (element.frequentation === null && element.victime === null && element.libelle.indexOf('adresse') === -1) {
                        returneddata += `<tr>
                                <td>${element.libelle}</td>
                            </tr>`;
                    } else if (element.frequentation === null && element.victime !== null && element.libelle.indexOf('adresse') === -1) {
                        returneddata += `<tr>
                                <td>${element.libelle} ${element.victime}</td>
                            </tr>`;
                    } else if (element.frequentation !== null && element.victime === null && element.libelle.indexOf('adresse') === -1) {
                        returneddata += `<tr>
                                <td>${element.libelle} ${element.frequentation}</td>
                            </tr>`;
                    } else if (element.frequentation === null && element.victime === null && element.libelle.indexOf('adresse') !== -1) {
                        if (this.reponseIPPE[0].Adresse2 === null || this.reponseIPPE[0].Adresse2 === 'null') {
                            returneddata += `<tr>
                                <td>${element.libelle} ${this.reponseIPPE[0].Adresse1}</td>
                            </tr>`;
                        } else if (this.reponseIPPE[0].Adresse2 !== null) {
                            returneddata += `<tr>
                                <td>${element.libelle} ${this.reponseIPPE[0].Adresse1} & ${this.reponseIPPE[0].Adresse2}</td>
                            </tr>`;
                        }
                    }
                });
            }
            return returneddata;
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
  filter: drop-shadow(-5px 2px 5px #999999);
}

#rightarrow {
  position: fixed;
  height: 64px;
  width: 64px;
  top: 50%;
}

#leftarrow {
  position: fixed;
  height: 64px;
  width: 64px;
  top: 50%;
}
</style>
