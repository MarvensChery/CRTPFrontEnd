<template>
  <div class="container box my-6">
    <h2 class="title has-text-info-dark" v-if="IDCONDITION === undefined">
      AJOUT D'UNE CONDITION À RESPECTER
    </h2>
    <h2 class="title has-text-info-dark" v-if="IDCONDITION !== undefined">
      MODIFICATION D'UNE CONDITION À RESPECTER
    </h2>
    <span class="has-text-weight-bold is-6 has-text-success" v-if="message !== ''
    ">
      <i class="fa-solid fa-circle-check"></i>&nbsp;{{message}}</span>
    <span class="has-text-weight-bold is-6 has-text-danger" v-if="messagerr !== ''
    ">
      <i class="fa-solid fa-circle-xmark"></i>&nbsp;{{messagerr}}</span>
    <form class="row columns is-multiline">
      <!-- Html pour la page de modification condition -->
      <div class="column is-12 my-6">
        <div class="field" v-if="IDCONDITION !== undefined">
          <div class="columns" v-if="data !== ''">
            <label for="Condition" class="label column is-1">Condition :</label>
            <label for="Condition à modifier" class="column is-4"
              >{{ data[0].Libelle }}
            </label>
            <input
              id="inputconditions1"
              v-model="condition"
              :class="ChangerStyle"
              :placeholder="PlaceholderChange"
              class="column input"
              :maxlength="[data[0].Libelle === 'Doit demeurer à cet endroit entre' ? '5' : '']"
            />
            <span
              id="span1"
              :class="[
                data[0].Libelle === 'Doit demeurer à cet endroit entre' ? '' : 'is-hidden',
              ]"
            >
              et
            </span>
            <input
              v-if="data[0].HeureFin !== null"
              class="column input is-2"
              :class="[
                data[0].Libelle === 'Doit demeurer à cet endroit entre' ? '' : 'is-hidden',
              ]"
              :maxlength="[data[0].Libelle === 'Doit demeurer à cet endroit entre' ? '5' : '']"
              :placeholder="PlaceholderChange"
              type="text"
              v-model="condition2"
            />
            <div></div>
          </div>
        </div>
        <!-- Html pour la page d'ajout condition -->
        <div class="field" v-if="IDCONDITION === undefined">
          <div class="columns">
            <label for="Condition" class="label column is-1">Condition :</label>
            <div class="select">
              <select
                id="Condition"
                name="Condition"
                v-model="option"
                v-if="IDCONDITION === undefined"
                @change="RecuperationTextSelect"
              >
                <option value="1" selected>
                  Choisissez une des conditions
                </option>
                <option value="2">Avoir comme adresse le</option>
                <option value="3">
                  Doit garder la paix et avoir bonne conduite
                </option>
                <option value="4">
                  Aucune consommation d'alcool ou de drogue non prescrite
                </option>
                <option value="5">Ne pas entrer en contact avec</option>
                <option value="6">Ne pas fréquenter</option>
                <option value="7">Doit demeurer à cet endroit entre</option>
              </select>
            </div>
            <input
              id="inputconditions1"
              class="column input is-6"
              v-model="conditions1"
              type="text"
              :placeholder="PlaceholderChange"
              :class="[list1.includes(option) ? '' : 'is-hidden']"
            />
            <input
              id="inputconditions2"
              class="column input is-2 has-text-centered"
              v-model="conditions2"
              type="text"
              placeholder="HH:MM"
              maxlength="5"
              :class="[option === '7' ? '' : 'is-hidden']"
              @click="masquerMessage"
            />
            <span id="span1" :class="[option === '7' ? '' : 'is-hidden']"
              >&nbsp;ET&nbsp;
            </span>
            <input
              id="inputconditions3"
              class="column input is-2 has-text-centered"
              v-model="conditions3"
              type="text"
              maxlength="5"
              placeholder="HH:MM"
              :class="[option === '7' ? '' : 'is-hidden']"
              @click="masquerMessage"
            />
            <div></div>
          </div>
        </div>
      </div>

      <!--BOUTONS-->
      <div class="column is-3">
        <input
          class="button is-fullwidth is-info"
          type="button"
          value="Retour"
          v-on:click="Retour()"
        />
      </div>
      <div class="column is-3" v-if="IDCONDITION === undefined">
        <input
          id="ajouter"
          class="button is-fullwidth is-info"
          type="button"
          value="Ajouter"
          v-on:click="Ajouter()"
        />
      </div>
      <div class="column is-3" v-if="IDCONDITION !== undefined">
        <input
          id="modifier"
          class="button is-fullwidth is-info"
          type="button"
          value="Modifier"
          v-on:click="Modifier()"
        />
      </div>
      <div class="column is-3" v-if="IDCONDITION !== undefined">
        <input
          class="button is-fullwidth is-info"
          type="button"
          value="Supprimer"
          v-on:click="Supprimer()"
        />
      </div>
      <div class="column is-3">
        <input
          id="annuler"
          class="button is-fullwidth is-info"
          type="button"
          v-on:click="Annuler()"
          value="Annuler"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { validationHeure } from '@/validations';

export default {
    name: 'ConditionView',
    data() {
        return {
            data: '',
            option: '1',
            list1: ['2', '5', '6'],
            list2: [
                'Doit garder la paix et avoir bonne conduite',
                'Aucune consommation d\'alcool ou de drogue non prescrite',
            ],
            text: '',
            condition: '',
            condition2: '',
            conditions1: '',
            conditions2: '',
            conditions3: '',
            IDPERSONNE: '',
            IDIPPE: '',
            IDCONDITION: '',
            message: '',
            messagerr: '',
        };
    },
    computed: {
        //  Change la class de l'input dépendemment des données reçus
        ChangerStyle() {
            if (this.list2.includes(this.data[0].Libelle.trim())) {
                return 'is-hidden';
            }
            if (this.data[0].HeureDebut !== null) {
                return 'is-2';
            }
            return 'is-4';
        },
        //  Modifier le placeholder de l'input dépendemment de l'option choisie
        PlaceholderChange() {
            if (this.option === '2') {
                return 'Ex: 1090 Rue Deschamp';
            }
            if (this.option === '5') {
                return 'Ex: Mario';
            }
            if (this.option === '6') {
                return 'Ex: Luigi';
            }
            if (this.data !== '') {
                if (this.data[0].Libelle.trim() === 'Doit demeurer à cet endroit entre') {
                    return 'HH:MM';
                }
            }
            return '';
        },
    },
    // la fonction mounted appel au script pour l'icon,
    //  récupère les paramètres de la route et récupère les données
    mounted() {
        const recaptchaScript = document.createElement('script');
        recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/abf3ec30d1.js');
        document.head.appendChild(recaptchaScript);
        this.IDPERSONNE = this.$route.query.IdPersonne;
        this.IDIPPE = this.$route.query.IdIPPE;
        this.IDCONDITION = this.$route.query.IdCondition;
        this.ReturnCondition();
    },
    methods: {
        masquerMessage() {
            this.message = '';
            this.messagerr = '';
        },
        // Fonction pour récupérer le texte de l'option choisie
        RecuperationTextSelect(event) {
            const Text = event.target[this.option - 1].textContent;
            this.text = Text;
        },
        // Fonction qui supprime la condition
        async Supprimer() {
            this.masquerMessage();
            const { IDCONDITION } = this;
            const settings = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            const reponse = await fetch(
                `http://localhost:3000/conditions/${IDCONDITION}`,
                settings,
            );

            if (reponse.ok) {
                this.message = reponse.message;
            }
        },
        // Fonction pour le bouton annuler
        Annuler() {
            this.option = '1';
            this.condition = '';
            this.condition2 = '';
        },
        // Fonction pour le bouton retour
        Retour() {
            window.location.href = '/personne';
        },
        // Fonction pour récupérer la condition
        async ReturnCondition() {
            const { IDCONDITION } = this;
            if (IDCONDITION !== undefined) {
                const reponse = await fetch(
                    `http://localhost:3000/conditions/${IDCONDITION}`,
                );

                if (reponse.ok) {
                    this.data = await reponse.json();
                    if (this.data[0].Libelle.trim() === 'Ne pas entrer en contact avec') {
                        this.condition = this.data[0].Victime;
                    }
                    if (this.data[0].Libelle.trim() === 'Ne pas fréquenter') {
                        this.condition = this.data[0].Frequentation;
                    }
                    if (this.data[0].Libelle.trim() === 'Avoir comme adresse le') {
                        const reponse2 = await fetch(
                            `http://localhost:3000/personnes/${this.data[0].IdPersonne}`,
                        );
                        if (reponse2.ok) {
                            const data2 = await reponse2.json();
                            this.condition = data2[0].Adresse1;
                        }
                    } else if (this.data[0].Libelle.trim() === 'Doit demeurer à cet endroit entre') {
                        const [, t2] = this.data[0].HeureDebut.split('T');
                        const [, e2] = this.data[0].HeureFin.split('T');
                        this.condition2 = e2.substring(0, 6);
                        this.condition = t2.substring(0, 6);
                    }
                }
            }
        },
        // Fonction pour modifier la condition
        async Modifier() {
            this.masquerMessage();
            const reponse = await fetch(
                `http://localhost:3000/conditions/returncondition/${this.IDCONDITION}`,
            );

            if (reponse.ok) {
                const data = await reponse.json();
                const conditions = this.data[0].Libelle;
                const input1 = this.condition;
                const input2 = this.condition2;
                const settings = {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                    },
                };
                if (conditions.trim() === 'Ne pas entrer en contact avec') {
                    await fetch(
                        `http://localhost:3000/conditions/updatevictime/${data[0].Id}/${input1}`,
                        settings,
                    );
                    this.message = 'La modification de la condition est réussi !';
                } else if (conditions.trim() === 'Ne pas fréquenter') {
                    await fetch(
                        `http://localhost:3000/conditions/updatefrequentation/${data[0].Id}/${input1}`,
                        settings,
                    );
                    this.message = 'La modification de la condition est réussi !';
                } else if (conditions.trim() === 'Avoir comme adresse le') {
                    await fetch(
                        `http://localhost:3000/conditions/updateadresse/${data[0].IdPersonne}/${input1}`,
                        settings,
                    );
                    this.message = 'La modification de la condition est réussi !';
                } else if (conditions.trim() === 'Doit demeurer à cet endroit entre') {
                    if (validationHeure(input1) && validationHeure(input2)) {
                        await fetch(
                            `http://localhost:3000/conditions/updateheure/${data[0].Id}/${input1}/${input2}`,
                            settings,
                        );
                        this.message = 'La modification de la condition est réussi !';
                    } else {
                        this.messagerr = 'Veuillez écrire les heures selon le format suivant HH:MM !';
                    }
                } else {
                    this.messagerr = 'cette condition peut seulement etre supprimer';
                }
            }
        },
        // Fonction pour ajouter la condition
        async Ajouter() {
            this.masquerMessage();
            const {
                option,
                text,
                conditions1,
                conditions2,
                conditions3,
                IDPERSONNE,
                IDIPPE,
            } = this;
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
            };
            let ajoutms;
            if (option === '3' || option === '4') {
                const ajout = await fetch(
                    `http://localhost:3000/conditions/ajoutercondition/${IDPERSONNE}/${IDIPPE}/${text}`,
                    settings,
                );
                ajoutms = await ajout.json();
                if (ajout.ok) {
                    this.message = ajoutms.message;
                }
            } else if (option === '2') {
                const ajout = await fetch(
                    `http://localhost:3000/conditions/ajouterconditionadresse/${IDIPPE}/${`${text} `}/${IDPERSONNE}/${conditions1}`,
                    settings,
                );
                ajoutms = await ajout.json();
                if (ajout.ok) {
                    this.message = ajoutms.message;
                } else {
                    this.messagerr = ajoutms.message;
                }
            } else if (option === '5') {
                const ajout = await fetch(
                    `http://localhost:3000/conditions/ajouterconditionvictime/${IDPERSONNE}/${IDIPPE}/${`${text} `}/${conditions1}`,
                    settings,
                );
                ajoutms = await ajout.json();
                if (ajout.ok) {
                    this.message = ajoutms.message;
                } else {
                    this.messagerr = ajoutms.message;
                }
            } else if (option === '6') {
                const ajout = await fetch(
                    `http://localhost:3000/conditions/ajouterconditionfrequentation/${IDPERSONNE}/${IDIPPE}/${`${text} `}/${conditions1}`,
                    settings,
                );
                ajoutms = await ajout.json();
                if (ajout.ok) {
                    this.message = ajoutms.message;
                } else {
                    this.messagerr = ajoutms.message;
                }
            } else if (option === '7') {
                if (validationHeure(conditions2) && validationHeure(conditions3)) {
                    const ajout = await fetch(
                        `http://localhost:3000/conditions/ajouterconditionheure/${IDPERSONNE}/${IDIPPE}/${text}/${conditions2}/${conditions3}`,
                        settings,
                    );
                    ajoutms = await ajout.json();
                    if (ajout.ok) {
                        this.message = ajoutms.message;
                    } else {
                        this.messagerr = ajoutms.message;
                    }
                    this.message = 'La modification de la condition est réussi !';
                } else {
                    this.messagerr = 'Veuillez écrire les heures selon le format suivant HH:MM !';
                }
            } else {
                this.messagerr = 'Veuillez séléctionner une condition';
            }
        },
    },
};
</script>
<style scoped>
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#wrapper {
  flex: 1;
}

select option[value="1"] {
  color: #999999;
}
</style>
