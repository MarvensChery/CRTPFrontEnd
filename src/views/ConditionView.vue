<template>
  <div class="container box my-6">
    <h2 class="title has-text-info-dark" v-if="IdCondition === undefined">
      AJOUT D'UNE CONDITION À RESPECTER
    </h2>
    <h2 class="title has-text-info-dark" v-if="IdCondition !== undefined">
      MODIFICATION D'UNE CONDITION À RESPECTER
    </h2>
    <span class="has-text-weight-bold is-6 has-text-success" v-if="message !== ''
    ">
      <i class="fa-solid fa-circle-check"></i>&nbsp;{{message}}</span>
    <span class="has-text-weight-bold is-6 has-text-danger" v-if="messageError !== ''
    ">
      <i class="fa-solid fa-circle-xmark"></i>&nbsp;{{messageError}}</span>
    <form class="row columns is-multiline">
      <!-- Html pour la page de modification condition -->
      <div class="column is-12 my-5">
        <div class="field" v-if="IdCondition !== undefined">
          <div class="columns" v-if="data !== ''">
            <label for="Condition" class="label column is-1">Condition :</label>
            <label for="Condition à modifier" class="column is-5"
              >{{ Libelle }}
            </label>
            <input
              id="inputconditions"
              v-model="condition"
              :class="changerStyle"
              :placeholder="placeholderChange"
              class="column input"
              :maxlength="[Libelle === 'Doit demeurer à cet endroit entre' ? '5' : '']"
            />
            <span
              id="span1"
              :class="[
                Libelle === 'Doit demeurer à cet endroit entre' ? '' : 'is-hidden',
              ]"
            >
              et
            </span>
            <input
              v-if="data[0].HeureFin !== null"
              class="column input is-2"
              :class="[
                Libelle === 'Doit demeurer à cet endroit entre' ? '' : 'is-hidden',
              ]"
              :maxlength="[Libelle === 'Doit demeurer à cet endroit entre' ? '5' : '']"
              :placeholder="placeholderChange"
              type="text"
              v-model="condition2"
            />
            <div></div>
          </div>
        </div>
        <!-- Html pour la page d'ajout condition -->
          <div class="columns" v-if="IdCondition === undefined">
            <label for="Condition" class="label column is-1">Condition :</label>
            <div class="select">
              <select
                id="Condition"
                name="Condition"
                v-model="option"
                @change="recuperationTextSelect"
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
              :placeholder="placeholderChange"
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
          </div>
        </div>
      <div class="columns" :class="[
                Libelle === 'Avoir comme adresse le' || option === '2' ? '' : 'is-hidden',
              ]">
              <div class="column is-3"></div>
          <div class="column is-6">
          <label for="Adresse2" class="label">Adresse2</label>
          <input
              class="column input"
              id="Adresse2"
              type="text"
              v-model="adresse2"
            /></div>
            <div class="column is-2">
            <label for="Ville" class="label">Ville</label>
          <input
              class="column input"
              id="Ville"
              type="text"
              v-model="ville"
            /></div>
            <div class="column is-1">
            <label for="Province" class="label">Province</label>
          <input
              class="column input"
              maxlength="2"
              id="Province"
              type="text"
              v-model="province"
            /></div>
            <div class="column is-2">
            <label for="Postal" class="label">Code Postal</label>
          <input
              class="column input"
              maxlength="7"
              id="Postal"
              type="text"
              v-model="codepostal"
            /></div>
        </div></form> <br>
      <!--BOUTONS-->
      <div class="columns">
      <div class="column is-3">
        <input
          class="button is-fullwidth is-info"
          type="button"
          value="Retour"
          v-on:click="retour()"
        />
      </div>
      <div class="column is-3" v-if="IdCondition === undefined">
        <input
          id="ajouter"
          class="button is-fullwidth is-info"
          type="button"
          value="Ajouter"
          v-on:click="ajouter()"
        />
      </div>
      <div class="column is-3" v-if="IdCondition !== undefined">
        <input
          id="modifier"
          class="button is-fullwidth is-info"
          type="button"
          value="Modifier"
          v-on:click="modifier()"
        />
      </div>
      <div class="column is-3" v-if="IdCondition !== undefined">
        <input
          class="button is-fullwidth is-info"
          type="button"
          value="Supprimer"
          v-on:click="supprimer()"
        />
      </div>
      <div class="column is-3">
        <input
          id="annuler"
          class="button is-fullwidth is-info"
          type="button"
          v-on:click="annuler()"
          value="Annuler"
        />
      </div></div>
  </div>
</template>

<script>
//  import { validationHeure } from '@/validations';
import { svrURL } from '@/constantes';

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
            IdPersonne: '',
            IdIppe: '',
            IdCondition: '',
            message: '',
            messageError: '',
            Libelle: '',
            adresse2: '',
            ville: '',
            province: '',
            codepostal: '',
        };
    },
    computed: {
        //  Change la class de l'input dépendemment des données reçus
        changerStyle() {
            if (this.list2.includes(this.Libelle)) {
                return 'is-hidden';
            }
            if (this.data[0].HeureDebut !== null) {
                return 'is-2';
            }
            return 'is-5';
        },
        //  modifier le placeholder de l'input dépendemment de l'option choisie
        placeholderChange() {
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
                if (this.Libelle === 'Doit demeurer à cet endroit entre') {
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
        this.IdPersonne = this.$route.params.idPersonne;
        this.IdIppe = this.$route.params.idIppe;
        this.IdCondition = this.$route.params.idCondition;
        this.returnCondition();
    },
    methods: {
        // Si les données sont '' retourne null pour la base de donnée
        sendDataNull(str) {
            if (str === '') {
                return null;
            }
            return str;
        },
        // Fonction pour masquer le message d'erreur après l'appel d'une autre fonction
        masquerMessage() {
            this.message = '';
            this.messageError = '';
        },
        // Fonction pour récupérer le texte de l'option choisie
        recuperationTextSelect(event) {
            const Text = event.target[this.option - 1].textContent;
            this.text = Text;
        },
        // Fonction qui supprime la condition
        async supprimer() {
            this.masquerMessage();
            const { IdCondition } = this;
            const settings = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            const reponse = await fetch(
                `${svrURL}/conditions/${IdCondition}`,
                settings,
            );
            const rep = await reponse.json();
            if (reponse.ok) {
                this.message = rep.message;
                setTimeout(() => this.$router.push({ name: 'modifIPPEView' }), 2000);
            } else {
                this.messageError = rep.message;
            }
        },
        // Fonction pour le bouton annuler
        annuler() {
            this.$router.go(0);
        },
        // Fonction pour le bouton retour
        retour() {
            this.$router.push({ name: 'modifIPPEView' });
        },
        // Fonction pour récupérer la condition
        async returnCondition() {
            const { IdCondition } = this;
            if (IdCondition !== undefined) {
                const reponse = await fetch(
                    `${svrURL}/conditions/${IdCondition}`,
                );
                if (reponse.ok) {
                    this.data = await reponse.json();
                    this.Libelle = this.data[0].Libelle.trim();
                    this.IdPersonne = this.data[0].IdPersonne;
                    if (this.Libelle === 'Ne pas entrer en contact avec') {
                        this.condition = this.data[0].Victime;
                    }
                    if (this.Libelle === 'Ne pas fréquenter') {
                        this.condition = this.data[0].Frequentation;
                    }
                    if (this.Libelle === 'Avoir comme adresse le') {
                        const reponse2 = await fetch(
                            `${svrURL}/personnes/${this.IdPersonne}`,
                        );
                        if (reponse2.ok) {
                            const data2 = await reponse2.json();
                            this.condition = data2[0].Adresse1;
                            this.adresse2 = data2[0].Adresse2;
                            this.ville = data2[0].Ville;
                            this.province = data2[0].Province;
                            this.codepostal = data2[0].CodePostal;
                        }
                    } else if (this.Libelle === 'Doit demeurer à cet endroit entre') {
                        const [, t2] = this.data[0].HeureDebut.split('T');
                        const [, e2] = this.data[0].HeureFin.split('T');
                        this.condition2 = e2.substring(0, 6);
                        this.condition = t2.substring(0, 6);
                    }
                } else {
                    const rep = await reponse.json();
                    this.messageError = rep.message;
                }
            }
        },
        // Fonction pour modifier la condition
        async modifier() {
            this.masquerMessage();
            const data = JSON.stringify({
                IdPersonne: this.IdPersonne,
                IdIppe: this.IdIppe,
                Libelle: this.sendDataNull(this.Libelle),
                Champs1: this.sendDataNull(this.condition.trim()),
                Champs2: this.sendDataNull(this.condition2.trim()),
                Adresse2: this.sendDataNull(this.adresse2),
                Ville: this.sendDataNull(this.ville.trim()),
                Province: this.sendDataNull(this.province.trim()),
                CodePostal: this.sendDataNull(this.codepostal.trim()),
            });
            const response = await fetch(`${svrURL}/conditions/${this.IdCondition}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data,
            });
            const rep = await response.json();
            if (response.ok) {
                this.message = rep.message;
            } else {
                this.messageError = rep.message;
            }
        },
        // Fonction pour ajouter la condition
        async ajouter() {
            this.masquerMessage();
            const {
                option,
                text,
                conditions1,
                conditions2,
                conditions3,
                IdPersonne,
                IdIppe,
            } = this;
            const data = JSON.stringify({
                IdPersonne,
                IdIppe,
                Libelle: this.sendDataNull(text.trim()),
                Champs1: this.sendDataNull(conditions1.trim()),
                Champs2: this.sendDataNull(conditions2.trim()),
                Champs3: this.sendDataNull(conditions3.trim()),
                Adresse2: this.sendDataNull(this.adresse2),
                Ville: this.sendDataNull(this.ville.trim()),
                Province: this.sendDataNull(this.province.trim()),
                CodePostal: this.sendDataNull(this.codepostal.trim()),
                Option: option,
            });
            const response = await fetch(`${svrURL}/conditions`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data,
            });
            const rep = await response.json();
            if (response.ok) {
                this.message = rep.message;
            } else {
                this.messageError = rep.message;
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
