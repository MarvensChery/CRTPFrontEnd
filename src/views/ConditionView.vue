<template>
  <div class="section">
    <div v-if="this.$route.params.idPersonne" class="container box my-6">
      <h2 class="title has-text-info-dark">
        AJOUT D'UNE CONDITION À RESPECTER
      </h2>
      <form class="row columns is-multiline">
        <!--Condition-->
        <div class="column is-12 my-6">
            <div class="section" style="padding-top: 0px;padding-bottom: 0px;">
              <label for="Condition" class="label column is-1"
                >Condition:</label
              >
              <div class="select">
                <select v-model="key" id="Condition" name="Condition">
                  <option disabled value="" selected>
                    Choisissez une des conditions
                  </option>
                  <option value="Avoir comme adresse le">
                    Avoir comme adresse le
                  </option>
                  <option value="Doit garder la paix et avoir bonne conduite">
                    Doit garder la paix et avoir bonne conduite
                  </option>
                  <option
                    value="Aucune consommation d'alcool ou de drogue non prescrite"
                  >
                    Aucune consommation d'alcool ou de drogue non prescrite
                  </option>
                  <option value="Ne pas entrer en contact avec">
                    Ne pas entrer en contact avec
                  </option>
                  <option value="Ne pas fréquenter">Ne pas fréquenter</option>
                  <option value="Doit demeurer à cet endroit entre">
                    Doit demeurer à cet endroit entre
                  </option>
                </select>
              </div>
              <div>
                  <br>
                  <br>
              <input
              v-model="this.input1"
              v-if="
                this.key.replace(/\s/g, '') ==
                  'Nepasentrerencontactavec' ||
                this.key.replace(/\s/g, '') ==
                  'Nepasfréquenter'
              "
              id="un"
              class="column input is-4"
              type="text"
              placeholder="Remplissez la case"
            />
            <article v-if="input1Error === true" class="column is-full message is-danger">
          <div class="message-body">
            Contact invalid
          </div>
        </article>
            <div
              v-if="
                this.key.replace(/\s/g, '') ==
                'Avoircommeadressele'
              "
            >
            <div id="div2">
              <input
                v-model="this.inputAdresse"
                id="deux"
                class="column input is-15"
                type="text"
                placeholder="Remplissez la case"
              />
            </div>
            <article v-if="inputAdresseError === true" class="column is-full message is-danger">
          <div class="message-body">
            Adresse invalid
          </div>
        </article>
              <div class="column is-3" style= "right : 500px">
                <label for="Adresse2" class="label">Adresse2</label>
              </div>
              <div id="div3" class="column is-10">
                <input
                  class="column input is-10"
                  id="trois"
                  type="text"
                  placeholder="Remplissez la case"
                  v-model="this.adresse2"
                />
              </div>
              <article v-if="adresse2Error === true" class="column is-full message is-danger">
          <div class="message-body">
            Adresse2 invalid
          </div>
        </article>
              <div id="div4" class="column is-10">
                <label for="Ville" class="label">Ville</label>
                <input
                  class="column input"
                  id="quatre"
                  type="text"
                  placeholder="Montréal"
                  v-model="this.ville"
                />
              </div>
              <article v-if="villeError === true" class="column is-full message is-danger">
          <div class="message-body">
            Ville invalid
          </div>
        </article>
              <div class="column is-10">
                <label for="Province" class="label">Province</label>
                <input
                  class="column input"
                  maxlength="2"
                  id="cinque"
                  type="text"
                  placeholder="QC"
                  v-model="this.province"
                />
              </div>
              <article v-if="provinceError === true" class="column is-full message is-danger">
          <div class="message-body">
            Province invalid
          </div>
        </article>
              <div class="column is-10">
                <label for="Postal" class="label">Code Postal</label>
                <input
                  class="column input"
                  maxlength="7"
                  id="six"
                  type="text"
                  placeholder="H1H 3R2"
                  v-model="this.codepostal"
                />
              </div>
              <article v-if="codepostalError === true" class="column is-full message is-danger">
          <div class="message-body">
            Code Postal invalid
          </div>
        </article>
            </div>
            <div id="div1">
            <input
              v-model="this.input2"
              v-if="
                this.key.replace(/\s/g, '') ==
                'Doitdemeureràcetendroitentre'
              "
              id="inputconditions2"
              class="column input is-2"
              type="text"
              placeholder="HH:MM"
            />
            <span id="span1" class="is-hidden"> et </span>
            <input
              v-model="this.input3"
              v-if="
                this.key.replace(/\s/g, '') ==
                'Doitdemeureràcetendroitentre'
              "
              id="inputconditions3"
              class="column input is-2"
              type="text"
              placeholder="HH:MM"
            />
            </div>
            <article v-if="input2Error === true || input3Error === true"
            class="column is-full message is-danger">
          <div class="message-body">
            Heure invalid
          </div>
        </article>
              </div>
          </div>
        </div>

        <!--BOUTONS-->
        <div class="column is-3">
          <input
            id="retour"
            class="button is-fullwidth is-info"
            type="button"
            value="Retour"
          />
        </div>
        <div class="column is-3">
          <input
            v-on:click="boutonajouter()"
            id="ajouter"
            class="button is-fullwidth is-info"
            type="button"
            value="Ajouter"
          />
        </div>
        <div class="column is-3">
          <input
            id="annuler"
            class="button is-fullwidth is-info"
            type="button"
            value="Annuler"
          />
        </div>
      </form>
    </div>
    <article
      v-if="sucessAjout === true"
      class="column is-full message is-success"
    >
      <div class="message-body">Condition Ajouter</div>
    </article>
    <article
      v-if="sucessAjout === false"
      class="column is-full message is-danger"
    >
      <div class="message-body">Cette condition peut seulement etre supprimer</div>
    </article>
    <div v-if="this.$route.params.idCondition" class="container box my-18" >
      <h2 class="title has-text-info-dark">MODIFICATION D'UNE CONDITION</h2>
      <form class="row columns is-multiline">
        <!--Condition-->
        <div v-if="this.Condition.length > 0" class="column is-12 my-6">
          <div class="section"  style="padding-top: 1px;padding-bottom: 1px;">
            <label for="Condition" id="condi" class="label column is-1"
              >Condition:
            </label>
            <span id="span1"> {{ this.Condition[0].Libelle }} : </span>
            <input
              v-model="this.input1"
              v-if="
                this.Condition[0].Libelle.replace(/\s/g, '') ==
                  'Nepasentrerencontactavec' ||
                this.Condition[0].Libelle.replace(/\s/g, '') ==
                  'Nepasfréquenter'
              "
              id="inputconditions1"
              class="column input is-4"
              type="text"
              placeholder="Remplissez la case"
            />
            <article v-if="input1Error === true" class="column is-full message is-danger">
          <div class="message-body">
            Contact invalid
          </div>
        </article>
            <div
              v-if="
                this.Condition[0].Libelle.replace(/\s/g, '') ==
                'Avoircommeadressele'
              "
            >
            <div id="div2">
              <input
                v-model="this.inputAdresse"
                id="inputAdresse"
                class="column input is-15"
                type="text"
                placeholder="Remplissez la case"
              />
            </div>
            <article v-if="inputAdresseError === true" class="column is-full message is-danger">
          <div class="message-body">
            Adresse invalid
          </div>
        </article>
              <div class="column is-3">
                <label for="Adresse2" class="label">Adresse2</label>
              </div>
              <div id="div3" class="column is-10">
                <input
                  class="column input is-10"
                  id="Adresse2"
                  type="text"
                  placeholder="Remplissez la case"
                  v-model="this.adresse2"
                />
              </div>
              <article v-if="adresse2Error === true" class="column is-full message is-danger">
          <div class="message-body">
            Adresse2 invalid
          </div>
        </article>
              <div id="div4" class="column is-10">
                <label for="Ville" class="label">Ville</label>
                <input
                  class="column input"
                  id="Ville"
                  type="text"
                  placeholder="Montréal"
                  v-model="this.ville"
                />
              </div>
              <article v-if="villeError === true" class="column is-full message is-danger">
          <div class="message-body">
            Ville invalid
          </div>
        </article>
              <div class="column is-10">
                <label for="Province" class="label">Province</label>
                <input
                  class="column input"
                  maxlength="2"
                  id="Province"
                  type="text"
                  placeholder="QC"
                  v-model="this.province"
                />
              </div>
              <article v-if="provinceError === true" class="column is-full message is-danger">
          <div class="message-body">
            Province invalid
          </div>
        </article>
              <div class="column is-10">
                <label for="Postal" class="label">Code Postal</label>
                <input
                  class="column input"
                  maxlength="7"
                  id="Postal"
                  type="text"
                  placeholder="H1H 3R2"
                  v-model="this.codepostal"
                />
              </div>
              <article v-if="codepostalError === true" class="column is-full message is-danger">
          <div class="message-body">
            Code Postal invalid
          </div>
        </article>
            </div>
            <div id="div1">
            <input
              v-model="this.input2"
              v-if="
                this.Condition[0].Libelle.replace(/\s/g, '') ==
                'Doitdemeureràcetendroitentre'
              "
              id="inputconditions2"
              class="column input is-2"
              type="text"
              placeholder="HH:MM"
            />
            <span id="span1" class="is-hidden"> et </span>
            <input
              v-model="this.input3"
              v-if="
                this.Condition[0].Libelle.replace(/\s/g, '') ==
                'Doitdemeureràcetendroitentre'
              "
              id="inputconditions3"
              class="column input is-2"
              type="text"
              placeholder="HH:MM"
            />
            </div>
            <article v-if="input2Error === true || input3Error === true"
            class="column is-full message is-danger">
          <div class="message-body">
            Heure invalid
          </div>
        </article>

          </div>
        </div>

        <!--BOUTONS-->
        <div class="column is-3">
          <input
            id="retour"
            class="button is-fullwidth is-info"
            type="button"
            value="Retour"
          />
        </div>
        <div class="column is-3">
          <input
            v-on:click="modifier()"
            id="modifier"
            class="button is-fullwidth is-info"
            type="button"
            value="Modifier"
          />
        </div>
        <div class="column is-3">
          <input
            v-on:click="boutonsupprimer()"
            id="supprimer"
            class="button is-fullwidth is-info"
            type="button"
            value="Supprimer"
          />
        </div>
      </form>
    </div>
    <article
      v-if="sucessModif === true"
      class="column is-full message is-success"
    >
      <div class="message-body">Condition Modifier</div>
    </article>
    <article
      v-if="sucessModif === false"
      class="column is-full message is-danger"
    >
      <div class="message-body">Cette condition peut seulement etre supprimer</div>
    </article>
  </div>
</template>

<script>
import { svrURL } from '@/constantes';
import {
    checkNomInput,
    verifieAdresse,
    chekHour,
    verifieVille,
    verifieProvince,
    verifieCodePostal,
} from '@/validations';
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ConditionView',
    data() {
        return {
            key: '',
            Condition: [],
            input1: '',
            inputAdresse: '',
            input2: '',
            input3: '',
            adresse2: '',
            ville: '',
            province: '',
            codepostal: '',
            isinput1: '',
            isinputAdresse: '',
            isinput2: '',
            isinput3: '',
            isadresse2: '',
            isville: '',
            isprovince: '',
            iscodepostal: '',
            input1Error: false,
            inputAdresseError: false,
            input2Error: false,
            input3Error: false,
            adresse2Error: false,
            villeError: false,
            provinceError: false,
            codepostalError: false,
            sucessModif: null,
            sucessAjout: null,
        };
    },
    mounted() {
        this.ReturnCondition();
    },
    methods: {
        sendDataNull(str) {
            if (str === '') {
                return null;
            }
            return str;
        },
        async ReturnCondition() {
            if (this.$route.params.idCondition) {
                const reponse = await fetch(
                    `${svrURL}/conditions/${this.$route.params.idCondition}`,
                );
                if (reponse.ok) {
                    this.Condition = await reponse.json();
                }
            }
        },
        async modifier() {
            if (this.input1 !== '') {
                this.isinput1 = checkNomInput(this.input1);
                if (this.isinput1 === false) {
                    this.input1Error = true;
                } else {
                    this.input1Error = false;
                }
            }
            if (this.inputAdresse !== '') {
                this.isinputAdresse = verifieAdresse(this.inputAdresse);
                if (this.isinputAdresse === false) {
                    this.inputAdresseError = true;
                } else {
                    this.inputAdresseError = false;
                }
            }
            if (this.input2 !== '') {
                this.isinput2 = chekHour(this.input2);
                if (this.isinput2 === false) {
                    this.input2Error = true;
                } else {
                    this.input2Error = false;
                }
            }
            if (this.input3 !== '') {
                this.isinput3 = chekHour(this.input3);
                if (this.isinput3 === false) {
                    this.input3Error = true;
                } else {
                    this.input3Error = false;
                }
            }
            if (this.adresse2 !== '') {
                this.isadresse2 = verifieAdresse(this.adresse2);
                if (this.isadresse2 === false) {
                    this.adresse2Error = true;
                } else {
                    this.adresse2Error = false;
                }
            }
            if (this.ville !== '') {
                this.isville = verifieVille(this.ville);
                if (this.isville === false) {
                    this.villeError = true;
                } else {
                    this.villeError = false;
                }
            }
            if (this.province !== '') {
                this.isprovince = verifieProvince(this.province);
                if (this.isprovince === false) {
                    this.provinceError = true;
                } else {
                    this.provinceError = false;
                }
            }
            if (this.codepostal !== '') {
                this.iscodepostal = verifieCodePostal(this.codepostal);
                if (this.iscodepostal === false) {
                    this.codepostalError = true;
                } else {
                    this.codepostalError = false;
                }
            }
            if (
                this.input1Error === false
        && this.inputAdresseError === false
        && this.input2Error === false
        && this.input3Error === false
        && this.adresse2Error === false
        && this.villeError === false
        && this.provinceError === false
        && this.codepostalError === false
            ) {
                const data = JSON.stringify({
                    IdPersonne: this.Condition[0].IdPersonne,
                    IdIppe: this.Condition[0].IdIppe,
                    Libelle: this.sendDataNull(this.Condition[0].Libelle),
                    input1: this.sendDataNull(this.input1.trim()),
                    Adresse1: this.sendDataNull(this.inputAdresse.trim()),
                    input2: this.sendDataNull(this.input2.trim()),
                    input3: this.sendDataNull(this.input3.trim()),
                    Adresse2: this.sendDataNull(this.adresse2),
                    Ville: this.sendDataNull(this.ville.trim()),
                    Province: this.sendDataNull(this.province.trim()),
                    CodePostal: this.sendDataNull(this.codepostal.trim()),
                });
                const response = await fetch(
                    `${svrURL}/conditions/${this.Condition[0].IdCondition}`,
                    {
                        method: 'PUT',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: data,
                    },
                );
                await response.json();
                if (response.ok) {
                    this.sucessModif = true;
                } else {
                    this.sucessModif = false;
                }
            }
        },
        async boutonajouter() {
            if (this.input1 !== '') {
                this.isinput1 = checkNomInput(this.input1);
                if (this.isinput1 === false) {
                    this.input1Error = true;
                } else {
                    this.input1Error = false;
                }
            }
            if (this.inputAdresse !== '') {
                this.isinputAdresse = verifieAdresse(this.inputAdresse);
                if (this.isinputAdresse === false) {
                    this.inputAdresseError = true;
                } else {
                    this.inputAdresseError = false;
                }
            }
            if (this.input2 !== '') {
                this.isinput2 = chekHour(this.input2);
                if (this.isinput2 === false) {
                    this.input2Error = true;
                } else {
                    this.input2Error = false;
                }
            }
            if (this.input3 !== '') {
                this.isinput3 = chekHour(this.input3);
                if (this.isinput3 === false) {
                    this.input3Error = true;
                } else {
                    this.input3Error = false;
                }
            }
            if (this.adresse2 !== '') {
                this.isadresse2 = verifieAdresse(this.adresse2);
                if (this.isadresse2 === false) {
                    this.adresse2Error = true;
                } else {
                    this.adresse2Error = false;
                }
            }
            if (this.ville !== '') {
                this.isville = verifieVille(this.ville);
                if (this.isville === false) {
                    this.villeError = true;
                } else {
                    this.villeError = false;
                }
            }
            if (this.province !== '') {
                this.isprovince = verifieProvince(this.province);
                if (this.isprovince === false) {
                    this.provinceError = true;
                } else {
                    this.provinceError = false;
                }
            }
            if (this.codepostal !== '') {
                this.iscodepostal = verifieCodePostal(this.codepostal);
                if (this.iscodepostal === false) {
                    this.codepostalError = true;
                } else {
                    this.codepostalError = false;
                }
            }
            if (
                this.input1Error === false
        && this.inputAdresseError === false
        && this.input2Error === false
        && this.input3Error === false
        && this.adresse2Error === false
        && this.villeError === false
        && this.provinceError === false
        && this.codepostalError === false
            ) {
                const data = JSON.stringify({
                    IdPersonne: this.$route.params.idPersonne,
                    IdIppe: this.$route.params.idIppe,
                    Libelle: this.sendDataNull(this.key),
                    input1: this.sendDataNull(this.input1.trim()),
                    Adresse1: this.sendDataNull(this.inputAdresse.trim()),
                    input2: this.sendDataNull(this.input2.trim()),
                    input3: this.sendDataNull(this.input3.trim()),
                    Adresse2: this.sendDataNull(this.adresse2),
                    Ville: this.sendDataNull(this.ville.trim()),
                    Province: this.sendDataNull(this.province.trim()),
                    CodePostal: this.sendDataNull(this.codepostal.trim()),
                    Option: this.sendDataNull(this.key.trim()),
                });
                const response = await fetch(`${svrURL}/conditions`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: data,
                });
                await response.json();
                if (response.ok) {
                    this.sucessAjout = true;
                } else {
                    this.sucessAjout = false;
                }

                const response2 = await fetch(`${svrURL}/conditions/1`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: data,
                });
                await response2.json();
                if (response2.ok) {
                    this.sucessAjout = true;
                } else {
                    this.sucessAjout = false;
                }
            }
        },
        async boutonsupprimer() {
            const settings = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            const reponse = await fetch(
                `${svrURL}/conditions/${this.$route.params.idCondition}`,
                settings,
            );

            if (reponse.ok) {
                setTimeout(() => this.$router.push({ name: 'modifIPPEView' }), 2000);
            } else {
                alert('error');
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
#div1 {
  display: inline;
  margin-left: 10px;
}
#inputAdresse {
  width: 630px;
  margin-left: 12px;
}
#Adresse2 {
  width: 630px;
}
#Ville {
  width: 630px;
}
#Province {
  display: inline;
  width: 630px;
}
#Postal {
  display: inline;
  width: 630px;
}
#inputconditions1 {
  display: inline;
  margin-right: 25px;
}
#inputconditions2 {
  display: inline;
  margin-right: 25px;
}
#inputconditions3 {
  display: inline;
}
#condi {
  display: inline;
}
select option[value="1"] {
  color: #999999;
}
#deux {
  display: inline;
  width: 630px;
}
#trois {
  display: inline;
  width: 630px;
}
#quatre {
  display: inline;
  width: 630px;
}
#cinque {
  display: inline;
  width: 630px;
}
#six {
  display: inline;
  width: 630px;
}

</style>
