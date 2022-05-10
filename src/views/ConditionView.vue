<template>
  <div class="container box my-6">
    <h2 class="title has-text-info-dark">{{title}}</h2>
    <span class="has-text-weight-bold is-6 has-text-success" v-if="message !== ''">
      <i class="fa-solid fa-circle-check"></i>&nbsp;{{message}}</span>
    <span class="has-text-weight-bold is-6 has-text-danger" v-if="messageError !== ''
    ">
      <i class="fa-solid fa-circle-xmark"></i>&nbsp;{{messageError}}</span>
      <span class="has-text-weight-bold is-6 has-text-danger" v-if="messageErrorFormulaire !== ''
    ">
      <i class="fa-solid fa-circle-xmark"></i>&nbsp;{{messageErrorFormulaire}}</span>
    <form class="row columns is-multiline">
      <!-- Html pour la page de modification condition -->
      <div class="column is-12 my-5">
        <div class="field" v-if="IdCondition !== undefined">
          <div class="columns" v-if="data !== ''">
            <label for="Condition" class="label column is-1">Condition :</label>
            <label for="Condition à modifier" class="column is-5">{{ Libelle }}
            </label>
            <input
              id="inputconditions"
              v-model="condition"
              :class="changerStyle"
              :placeholder="placeholderChange"
              class="column input"
              :maxlength="[Libelle === 'Doit demeurer à cet endroit entre' ? '5' : '']"
            />
            <label for="span1" :class="[
                Libelle === 'Doit demeurer à cet endroit entre' ? '' : 'is-hidden',
              ]"
            class="label has-text-centered column is-narrow is-size-6">Et</label>
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
              class="column input is-5"
              v-model="conditions1"
              type="text"
              :placeholder="placeholderChange"
              :class="[['2', '5', '6'].includes(option) ? '' : 'is-hidden']"
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
            <label for="inputconditions3" :class="[option === '7' ? '' : 'is-hidden']"
            class="label has-text-centered column is-narrow is-size-6">Et</label>
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
import { svrURL } from '@/constantes';
import {
  checkNomPrenomInput, validationHeure, verifieCodePostal,
  verifieVille, verifieProvince, verifieAdresse2,
  } from '@/validations';

export default {
    name: 'ConditionView',
    data() {
        return {
            data: '',
            option: '1',
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
            messageErrorFormulaire: '',
            Libelle: '',
            adresse2: '',
            ville: '',
            province: '',
            codepostal: '',
        };
    },
    computed: {
        title() {
          if (this.IdCondition !== undefined) {
            return "MODIFICATION D'UNE CONDITION À RESPECTER";
          }
          return "AJOUT D'UNE CONDITION À RESPECTER";
        },
        //  Change la class de l'input dépendemment des données reçus
        changerStyle() {
          const list2 = [
                'Doit garder la paix et avoir bonne conduite',
                'Aucune consommation d\'alcool ou de drogue non prescrite',
            ];
            if (list2.includes(this.Libelle)) {
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
                return 'Ex: Mario Ancelotti';
            }
            if (this.option === '6') {
                return 'Ex: Luigi Donnaruma';
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
      checkNomPrenom() {
        if (checkNomPrenomInput(this.condition) && (this.Libelle === 'Ne pas fréquenter'
        || this.Libelle === 'Ne pas entrer en contact avec')) {
          return true;
        }
        if (checkNomPrenomInput(this.conditions1) && (this.option === '5' || this.option === '6')) {
          return true;
        }
        if (this.option !== '5' && this.option !== '6' && this.Libelle !== 'Ne pas fréquenter'
        && this.Libelle !== 'Ne pas entrer en contact avec') {
          return true;
        }
        this.messageErrorFormulaire = 'Le nom et prénom doivent être sous la forme suivante : Vincent Leblanc';
        return false;
      },
      checkHeure() {
        if (validationHeure(this.conditions2) && validationHeure(this.conditions3) && this.option === '7') {
          return true;
        }
        if (validationHeure(this.condition) && validationHeure(this.condition2) && this.Libelle === 'Doit demeurer à cet endroit entre') {
          return true;
        }
        if (this.option !== '7' && this.Libelle !== 'Doit demeurer à cet endroit entre') {
          return true;
        }
        this.messageErrorFormulaire = 'Les heures doivent être sous la forme suivante : HH:MM';
        return false;
      },
      checkCodePostal() {
        if (verifieCodePostal(this.codepostal) && (this.option === '2' || this.Libelle === 'Avoir comme adresse le')) {
          return true;
        }
        if (this.option !== '2' && this.Libelle !== 'Avoir comme adresse le') {
          return true;
        }
        this.messageErrorFormulaire = 'Le code postal doivent être sous la forme suivante : A1A 1A1';
        return false;
      },
      checkVille() {
        if (verifieVille(this.ville) && (this.option === '2' || this.Libelle === 'Avoir comme adresse le')) {
          return true;
        }
        if (this.option !== '2' && this.Libelle !== 'Avoir comme adresse le') {
          return true;
        }
        this.messageErrorFormulaire = "Le champ entré pour la ville n'est pas approprié";
        return false;
      },
      checkProvince() {
        if (verifieProvince(this.province) && (this.option === '2' || this.Libelle === 'Avoir comme adresse le')) {
          return true;
        }
        if (this.option !== '2' && this.Libelle !== 'Avoir comme adresse le') {
          return true;
        }
        this.messageErrorFormulaire = "Le champ entré pour la ville n'est pas approprié";
        return false;
      },
      checkAdresse() {
        if (verifieAdresse2(this.conditions1) && this.option === '2') {
          return true;
        }
        if (verifieAdresse2(this.condition) && this.Libelle === 'Avoir comme adresse le') {
          return true;
        }
        if (this.option !== '2' && this.Libelle !== 'Avoir comme adresse le') {
          return true;
        }
        this.messageErrorFormulaire = "L'adresse doit commencer par un ou plusieurs chiffres, ex : 705 rue Notre-Dame";
        return false;
      },
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
            this.messageErrorFormulaire = '';
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
                            this.condition = data2[0].Adresse1.trim();
                            this.adresse2 = data2[0].Adresse2;
                            this.ville = data2[0].Ville.trim();
                            this.province = data2[0].Province.trim();
                            this.codepostal = data2[0].CodePostal.trim();
                        }
                    } else if (this.Libelle === 'Doit demeurer à cet endroit entre') {
                        const [, t2] = this.data[0].HeureDebut.split('T');
                        const [, e2] = this.data[0].HeureFin.split('T');
                        this.condition2 = e2.substring(0, 5);
                        this.condition = t2.substring(0, 5);
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
            if (this.checkNomPrenom() && this.checkHeure() && this.checkCodePostal()
            && this.checkVille() && this.checkProvince() && this.checkAdresse()) {
                const data = JSON.stringify({
                IdPersonne: this.IdPersonne,
                IdIppe: this.IdIppe,
                Libelle: this.sendDataNull(this.Libelle.trim()),
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
            } else {
              console.log('Erreur');
            }
        },
        // Fonction pour ajouter la condition
        async ajouter() {
            this.masquerMessage();
            if (this.checkNomPrenom() && this.checkHeure() && this.checkCodePostal()
            && this.checkVille() && this.checkProvince() && this.checkAdresse()) {
            const {
                option,
                text,
                conditions1,
                conditions2,
                conditions3,
                IdPersonne,
                IdIppe,
                adresse2,
                ville,
                province,
                codepostal,
            } = this;
            const data = JSON.stringify({
                IdPersonne,
                IdIppe,
                Libelle: this.sendDataNull(text.trim()),
                Champs1: this.sendDataNull(conditions1.trim()),
                Champs2: this.sendDataNull(conditions2.trim()),
                Champs3: this.sendDataNull(conditions3.trim()),
                Adresse2: this.sendDataNull(adresse2),
                Ville: this.sendDataNull(ville.trim()),
                Province: this.sendDataNull(province.trim()),
                CodePostal: this.sendDataNull(codepostal.trim()),
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

#inputconditions1 {
        margin-left:30px;
    }
#inputconditions2 {
        margin-left:30px;
    }

select option[value="1"] {
  color: #999999;
}
</style>
