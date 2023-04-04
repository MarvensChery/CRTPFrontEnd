<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <div class="notification is-info is-light">
      <div class="container is-2by1">
        <div class="notification is-info is-light">
          <div class="column"></div>
          <header>
            <p
              class="
                is-size-5
                card-content
                has-text-centered has-text-weight-bold
              "
              v-if="!this.$route.params.idIppe"
            >
              AJOUT D'UNE RÉPONSE IPPE
            </p>
            <p
              class="
                is-size-5
                card-content
                has-text-centered has-text-weight-bold
              "
              v-if="this.$route.params.idIppe"
            >
              MODIFICATION D'UNE RÉPONSE IPPE
            </p>
          </header>
          <div v-if="this.infoPersonne">
            <div class="has-text-centered card-content">
              <div class="box has-background-info-light">
                <div class="columns is-10 content has-text-link is-outlined">
                  <table>
                    <tr>
                      <th>Nom de Famille:</th>
                      <td id="nom">{{ this.infoPersonne.data.NomFamille }}</td>
                      <th>Prénom 1:</th>
                      <td id="prenom1">{{ this.infoPersonne.data.Prenom1 }}</td>
                      <th>Prénom 2:</th>
                      <td id="prenom2">{{ this.infoPersonne.data.Prenom2 }}</td>
                    </tr>
                    <tr>
                      <th>Sexe:</th>
                      <td
                        v-if="this.infoPersonne.data.Masculin === true"
                        id="sexe"
                      >
                        M
                      </td>
                      <td v-else id="sexe">F</td>
                      <th>Date de naissance:</th>
                      <td id="dateDeNaissance">
                        {{ this.infoPersonne.data.DateNaissance.substr(0, 10) }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div class="field is-horizontal" style="padding-right: 150px">
              <div class="field-label is-normal">
                <label class="label" for="reponseType">Réponse - IPPE</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control" style="min-width: 200px">
                    <div class="select is-fullwidth">
                      <select
                        class="select"
                        id="reponseType"
                        v-model="visiblecomponent"
                      >
                        <option
                          value="Négatif"
                          v-bind:selected="
                            infoPersonne.data.TypeEvenement == 'Négatif'
                              ? (this.visiblecomponent = 'Négatif')
                              : this.visiblecomponent
                          "
                        >
                          *** Négatif ***
                        </option>
                        <option
                          value="Recherché"
                          v-bind:selected="
                            infoPersonne.data.TypeEvenement == 'Recherché'
                              ? (this.visiblecomponent = 'Recherché')
                              : this.visiblecomponent
                          "
                        >
                          *** Recherché ***
                        </option>
                        <option
                          value="Sous observation"
                          v-bind:selected="
                            infoPersonne.data.TypeEvenement ==
                            'Sous observation'
                              ? (this.visiblecomponent = 'Sous observation')
                              : this.visiblecomponent
                          "
                        >
                          *** Sous-observation ***
                        </option>
                        <option
                          value="Accusé"
                          v-bind:selected="
                            infoPersonne.data.TypeEvenement == 'Accusé'
                              ? (this.visiblecomponent = 'Accusé')
                              : this.visiblecomponent
                          "
                        >
                          *** Accusé ***
                        </option>
                        <option
                          value="Probation"
                          v-bind:selected="
                            infoPersonne.data.TypeEvenement == 'Probation'
                              ? (this.visiblecomponent = 'Probation')
                              : this.visiblecomponent
                          "
                        >
                          *** Probation ***
                        </option>
                        <option
                          value="Libération Conditionnelle"
                          v-bind:selected="
                            infoPersonne.data.TypeEvenement ==
                            'Libération Conditionnelle'
                              ? (this.visiblecomponent =
                                  'Libération Conditionnelle')
                              : this.visiblecomponent
                          "
                        >
                          *** Lib. Conditionnelle ***
                        </option>
                        <option
                          value="Disparu"
                          v-bind:selected="
                            infoPersonne.data.TypeEvenement == 'Disparu'
                              ? (this.visiblecomponent = 'Disparu')
                              : this.visiblecomponent
                          "
                        >
                          *** Disparu ***
                        </option>
                        <option
                          value="Interdit"
                          v-bind:selected="
                            infoPersonne.data.TypeEvenement == 'Interdit'
                              ? (this.visiblecomponent = 'Interdit')
                              : this.visiblecomponent
                          "
                        >
                          *** Interdit ***
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="visiblecomponent === 'Accusé'">
          <div class="card-content has-text-black" id="resultatAccuse">
            <div class="columns">
              <div class="column">
                <p>
                  <label for="cour"><strong>Cour de justice:</strong> </label>
                </p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select
                      class="select"
                      name="cour"
                      id="cour"
                      ref="cour"
                      @change="this.onChangeCour"
                      v-bind:value="this.IPPE.cour"
                    >
                      <option id="null"></option>
                      <option id="courQuebec" value="Cour du Québec">
                        Cour du Québec
                      </option>
                      <option
                        id="courMunicipalMontreal"
                        value="Cour Municipale de Montréal"
                      >
                        Cour Municipale de Montréal
                      </option>
                      <option
                        id="courMunicipalLaval"
                        value="Cour Municipale de Laval"
                      >
                        Cour Municipale de Laval
                      </option>
                      <option
                        id="courMunicipalLongueuil"
                        value="Cour Municipale de Longeuil"
                      >
                        Cour Municipale de Longeuil
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p>
                  <label for="numCause:"
                    ><strong>Numéro de cause:</strong></label
                  >
                </p>
              </div>
              <div class="column is-7">
                <div class="field has-addons">
                  <div class="control is-black">
                    <input
                      class="input"
                      id="autoNumCause"
                      ref="auto"
                      type="text"
                      size="7"
                      disabled
                      aria-labelledby="numCause1"
                      v-bind:value="this.IPPE.noCause"
                    />
                  </div>
                  <div class="control is-black">
                    <input
                      class="input"
                      id="numCause"
                      ref="numCause"
                      type="text"
                      aria-labelledby="numCause2"
                      v-bind:value="this.IPPE.noCause1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div class="columns">
              <div class="column">
                <p>
                  <label for="natureCrime:"
                    ><strong>Nature du crime:</strong></label
                  >
                </p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select
                      class="select"
                      name="NatureCrime"
                      id="natureCrime"
                      ref="natureCrime"
                      :required="true"
                    >
                      <option selected></option>
                      <option
                        v-for="crime in crimes"
                        v-bind:key="crime.IdCrime"
                        :selected="
                          this.infoPersonne.data.IdNatureCrime == crime.IdCrime
                        "
                      >
                        {{ crime.IdCrime }}-{{ crime.Nature }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <p>
                  <label for="numEvenement"
                    ><strong>Numéro d'événement:</strong></label
                  >
                </p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      id="numEvenement"
                      ref="numEvenement"
                      required
                      v-bind:value="this.IPPE.noEvenement"
                      type="text"
                      aria-labelledby="numEvenement"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div>
              <div class="has-text-centered">
                <div class="box">
                  <div class="content">
                    <div class="content">
                      <h3><strong>Conditions</strong></h3>
                      <div
                        class="columns"
                        v-for="condition in this.infoPersonne.libelleList"
                        v-bind:key="condition"
                      >
                        <div class="column">
                          <input
                            class="input"
                            ref="condition"
                            type="text "
                            v-bind:value="condition"
                            aria-labelledby="Conditions"
                          />
                        </div>
                        <div class="buttons">
                          <button
                            class="button"
                            @click="
                              this.$router.push(
                                `/condition/${this.idCondition}`
                              )
                            "
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                        </div>
                      </div>
                      <div class="buttons is-centered">
                        <button
                          id="condition"
                          class="button has-text-centered is-info-light"
                          @click="this.$router.push(`/condition`)"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div v-if="visiblecomponent === 'Disparu'">
          <div class="card-content has-text-black">
            <div class="columns">
              <div class="column">
                <label for="nature"><strong>Nature:</strong> </label>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select class="select" name="Nature" ref="nature">
                      <option ref="NULL">
                        {{ this.IPPE.nature }}
                      </option>
                      <option ref="Arme à feu" value="Arme à feu">
                        Arme à feu
                      </option>
                      <option
                        ref="Conduite de véhicule"
                        value="Conduite de véhicule"
                      >
                        Conduite de véhicule
                      </option>
                      <option ref="Fréquentation" value="Fréquentation">
                        Fréquentation
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p>
                  <label for="numEvenement"
                    ><strong>Numéro d'événement: </strong></label
                  >
                </p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      ref="numEvenement"
                      type="text"
                      aria-labelledby="numEvenement"
                      required
                      v-bind:value="this.IPPE.noEvenement"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <label for="derniereVu"
                  ><strong>Dernière fois vu:</strong>
                </label>
              </div>
              <div class="column is-7">
                <input
                  class="input"
                  ref="derniereVu"
                  type="text"
                  placeholder=""
                  aria-labelledby="derniereVu"
                  v-bind:value="this.IPPE.VuDerniereFois"
                />
              </div>
            </div>
            <div class="column is-7 is-left">
              <p class="control">
                <button
                  class="button is-link"
                  @click="
                    this.$router.push(
                      `/descriptionPersonne/${this.$route.params.idPersonne}`
                    )
                  "
                >
                  Ajouter une description
                </button>
              </p>
            </div>
          </div>
          <br />
          <p></p>
        </div>
        <div v-if="visiblecomponent === 'Recherché'">
          <div class="card-content has-text-black" id="resultatrecherche">
            <div class="columns">
              <div class="column">
                <p><label for="numEvenement">Numéro d'événement: </label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <input
                    class="input"
                    name="NoinfoPersonne"
                    ref="numEvenement"
                    type="text"
                    aria-labelledby="numEvenement"
                    required
                    v-bind:value="this.IPPE.noEvenement"
                  />
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p><label for="mandat">Mandat: </label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select
                      class="select"
                      name="mandat"
                      ref="mandat"
                      @change="onChangeMandat"
                      v-bind:value="this.IPPE.mandat"
                    >
                      <option ref="null" disabled>{{this.IPPE.mandat}}</option>
                      <option ref="Arrestation" value="Arrestation">
                        Arrestation
                      </option>
                      <option ref="Amene" value="Amené">Amené</option>
                      <option ref="Percepteur" value="Percepteur">
                        Percepteur
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <p><label for="cour">Cour:</label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select
                      class="select"
                      name="cour"
                      id="cour"
                      ref="cour"
                      @change="this.onChangeCour"
                      v-bind:value="this.IPPE.cour"
                    >
                      <option id="null" disabled>{{ this.IPPE.cour }}</option>
                      <option id="courQuebec" value="Cour du Québec">
                        Cour du Québec
                      </option>
                      <option
                        id="courMunicipalMontreal"
                        value="Cour Municipale de Montréal"
                      >
                        Cour Municipale de Montréal
                      </option>
                      <option
                        id="courMunicipalLaval"
                        value="Cour Municipale de Laval"
                      >
                        Cour Municipale de Laval
                      </option>
                      <option
                        id="courMunicipalLongueuil"
                        value="Cour Municipale de Longeuil"
                      >
                        Cour Municipale de Longeuil
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <p><label for="numMandat:">Numéro de mandat:</label></p>
              </div>
              <div class="column is-7">
                <div class="field has-addons">
                  <div class="control">
                    <input
                      class="input is-black"
                      ref="auto"
                      type="text"
                      size="7"
                      disabled
                      aria-labelledby="numMandat"
                      v-bind:value="this.IPPE.noMandat"
                    />
                  </div>
                  <div class="control">
                    <input
                      class="input is-black"
                      ref="autoTypeMandat"
                      type="text"
                      size="1"
                      disabled
                      aria-labelledby="numMandat"
                      v-bind:value="this.IPPE.noMandat1"
                    />
                  </div>
                  <div class="control">
                    <input
                      class="input is-black"
                      ref="numMandat"
                      type="text"
                      aria-labelledby="numMandat"
                      maxlength="5"
                      v-bind:value="this.IPPE.noMandat2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div class="columns">
              <div class="column">
                <p><label for="natureCrime:">Nature du crime:</label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select
                      class="select"
                      name="NatureCrime"
                      id="natureCrime"
                      ref="natureCrime"
                      required="true"
                    >
                      <option selected></option>
                      <option
                        v-for="crime in crimes"
                        v-bind:key="crime.IdCdrime"
                        v-bind:value="crime.IdCdrime"
                        :selected="
                          this.infoPersonne.data.IdNatureCrime == crime.IdCrime
                        "
                      >
                        {{ crime.IdCrime }}-{{ crime.Nature }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="visiblecomponent === 'Probation'">
          <div class="card-content has-text-black">
            <div class="columns">
              <div class="column">
                <p><label for="cour">Cour</label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select
                      class="select"
                      name="cour"
                      ref="cour"
                      @change="this.onChangeCour"
                      v-bind:value="this.IPPE.cour"
                    >
                      <option></option>
                      <option ref="courQuebec" value="Cour du Québec">
                        Cour du Québec
                      </option>
                      <option
                        ref="courMunicipalMontreal"
                        value="Cour Municipale de Montréal"
                      >
                        Cour Municipale de Montréal
                      </option>
                      <option
                        ref="courMunicipalLaval"
                        value="Cour Municipale de Laval"
                      >
                        Cour Municipale de Laval
                      </option>
                      <option
                        ref="courMunicipalLongueuil"
                        value="Cour Municipale de Longeuil"
                      >
                        Cour Municipale de Longeuil
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <p><label for="numCause">Numéro de cause: </label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="field has-addons">
                    <div class="control">
                      <input
                        class="input"
                        ref="auto"
                        type="text"
                        size="7"
                        disabled
                        aria-labelledby="numCause"
                        v-bind:value="this.IPPE.noCause"
                      />
                    </div>
                    <div class="control">
                      <input
                        class="input"
                        ref="numCauseAcc"
                        type="text"
                        pattern="/^[\d]{5}[-][\d]{3}$/"
                        maxlength="9"
                        aria-labelledby="numCause"
                        v-bind:value="this.IPPE.noCause1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <p><label for="natureCrime:">Nature du crime:</label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select
                      class="select"
                      name="NatureCrime"
                      id="natureCrime"
                      ref="natureCrime"
                      required="true"
                    >
                      <option selected></option>
                      <option
                        v-for="crime in crimes"
                        v-bind:key="crime.IdCdrime"
                        v-bind:value="crime.IdCdrime"
                        :selected="
                          this.infoPersonne.data.IdNatureCrime == crime.IdCrime
                        "
                      >
                        {{ crime.IdCrime }}-{{ crime.Nature }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <p><label for="numEvenement">Numéro d'événement: </label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      ref="numEvenement"
                      type="text"
                      aria-labelledby="numEvenement"
                      required
                      v-bind:value="this.IPPE.noEvenement"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <p>
                  <label for="finSentence">Fin de la sentence prévue:</label>
                </p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      ref="finSentence"
                      type="date"
                      aria-labelledby="finSentence"
                      v-bind:value="this.IPPE.finSentence"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="notification is-success is-light">
              <div class="column">
                <p class="has-text-centered">
                  <label for="agentProbation"
                    ><strong>Agent de probation</strong>
                  </label>
                </p>
              </div>
              <div class="columns">
                <div class="column">
                  <p><label for="nom">Nom:</label></p>
                </div>
                <div class="column is-3">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        ref="Nom"
                        type="text"
                        aria-labelledby="agentProbation"
                        v-bind:value="this.IPPE.agentProbation"
                      />
                    </div>
                  </div>
                </div>
                <div class="column">
                  <p><label for="telephone">Téléphone:</label></p>
                </div>
                <div class="column is-3">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        ref="telephone"
                        type="tel"
                        maxlength="10"
                        pattern="[0-9]{10}"
                        aria-labelledby="telephone"
                        v-bind:value="this.IPPE.telephone"
                      />
                    </div>
                  </div>
                </div>
                <div class="column">
                  <p><label for="poste">Poste:</label></p>
                </div>
                <div class="column is-3">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        ref="poste"
                        type="text"
                        maxlength="6"
                        pattern="[0-9]*"
                        aria-labelledby="poste"
                        v-bind:value="this.IPPE.poste"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="has-text-centered">
                <div class="box">
                  <div class="content">
                    <div class="content">
                      <h3><strong>Conditions</strong></h3>
                      <div
                        class="columns"
                        v-for="condition in this.infoPersonne.libelleList"
                        v-bind:key="condition"
                      >
                        <div class="column">
                          <input
                            class="input"
                            ref="condition"
                            type="text "
                            v-bind:value="condition"
                            aria-labelledby="Conditions"
                          />
                        </div>
                        <div class="buttons">
                          <button
                            class="button"
                            @click="
                              this.$router.push(
                                `/condition/${this.idCondition}`
                              )
                            "
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                        </div>
                      </div>
                      <div class="buttons is-centered">
                        <button
                          id="condition"
                          class="button has-text-centered is-info-light"
                          @click="this.$router.push(`/condition`)"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div v-if="visiblecomponent === 'Sous observation'">
          <div class="card-content has-text-black">
            <div class="columns">
              <div class="column">
                <p><label for="motif">Motif: </label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select
                      class="select"
                      name="motif"
                      ref="motif"
                      v-bind:value="this.IPPE.motif"
                    >
                      <option ref="null" value=""></option>
                      <option value="Sous-enquête">Sous-enquête</option>
                      <option value="Fréquentation criminelle">
                        Fréquentation criminelle
                      </option>
                      <option value="Confirmation des coordonnées">
                        Confirmation des coordonnées
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <p><label for="natureCrime:">Nature du crime: </label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="select">
                    <select
                      class="select"
                      name="NatureCrime"
                      id="natureCrime"
                      ref="natureCrime"
                      :required="true"
                    >
                      <option selected></option>
                      <option
                        v-for="crime in crimes"
                        v-bind:key="crime.IdCdrime"
                        v-bind:value="crime.IdCdrime"
                        :selected="
                          this.infoPersonne.data.IdNatureCrime == crime.IdCrime
                        "
                      >
                        {{ crime.IdCrime }}-{{ crime.Nature }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <p><label for="numEvenement">Numéro d'événement: </label></p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      ref="numEvenement"
                      type="text"
                      aria-labelledby="numEvenement"
                      pattern="/^[\d]{3}[-][\d]{6}[-][\d]{4}$/"
                      required
                      v-bind:value="this.IPPE.noEvenement"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div class="columns">
              <div class="column">
                <p><label for="dossierEnquete:">Dossier d'enquête:</label></p>
              </div>
              <div class="column is-7">
                <div class="field has-addons">
                  <div class="select">
                    <select
                      class="select"
                      ref="dossierEnqueteSvrPol"
                      type="text"
                      v-bind:value="this.IPPE.dossierEnquete"
                    >
                      <option ref="NULL"></option>
                      <option ref="NULL" value="MTL">MTL</option>
                      <option ref="NULL" value="LGL">LGL</option>
                      <option ref="NULL" value="LVL">LVL</option>
                    </select>
                  </div>
                  <div class="control">
                    <input
                      class="input"
                      ref="dossierEnqueteRENS"
                      type="text"
                      value="-RENS-"
                      size="2"
                      placeholder="RENS"
                      disabled
                      aria-labelledby="dossierEnquete"
                    />
                  </div>
                  <div class="control">
                    <input
                      class="input"
                      ref="dossierEnquete"
                      type="text"
                      placeholder="124041"
                      maxlength="6"
                      aria-labelledby="dossierEnquete"
                      v-bind:value="this.IPPE.dossierEnquete1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="visiblecomponent === 'Libération Conditionnelle'">
          <div class="card-content has-text-black">
            <div class="column">
              <div class="column">
                <p>
                  <label for="courQuebec"
                    >Cour du Québec - Chambre criminelle et pénale</label
                  >
                </p>
              </div>
              <div class="column is-7">
                <div class="field">
                  <div class="control"></div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <p>
                    <label for="numEvenement">Numéro d'événement: </label>
                  </p>
                </div>
                <div class="column is-7">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        ref="numEvenement"
                        type="text"
                        aria-labelledby="numEvenement"
                        required
                        v-bind:value="this.IPPE.noEvenement"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <p><label for="numCause">Numéro de cause: </label></p>
                </div>
                <div class="column is-7">
                  <div class="field has-addons">
                    <div class="control is-black">
                      <input
                        class="input"
                        name="NoCause1"
                        ref="auto"
                        type="text"
                        value="500-01-310-"
                        size="7"
                        disabled
                        aria-labelledby="numCause"
                      />
                    </div>
                    <div class="control is-black">
                      <input
                        class="input"
                        name="NoCause2"
                        ref="numCause"
                        type="text"
                        maxlength="9"
                        aria-labelledby="numCause"
                        v-bind:value="this.IPPE.noCause1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div class="columns">
                <div class="column">
                  <p><label for="natureCrime:">Nature du crime:</label></p>
                </div>
                <div class="column is-7">
                  <div class="field">
                    <div class="select">
                      <select
                        class="select"
                        name="NatureCrime"
                        id="natureCrime"
                        ref="natureCrime"
                        :required="true"
                      >
                        <option selected></option>
                        <option
                          v-for="crime in crimes"
                          v-bind:key="crime.IdCdrime"
                          v-bind:value="crime.IdCdrime"
                          :selected="
                            this.infoPersonne.data.IdNatureCrime ==
                            crime.IdCrime
                          "
                        >
                          {{ crime.IdCrime }}-{{ crime.Nature }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p><label for="lieuDetention">Lieu de détention:</label></p>
                </div>
                <div class="column is-7">
                  <div class="field">
                    <div class="select">
                      <select
                        class="select"
                        name="lieuDetention"
                        ref="lieuDetention"
                        v-bind:value="this.IPPE.lieuDetention"
                      >
                        <option ref="null" value=""></option>
                        <option ref="prisonPortCartier">
                          Prison de Port-Cartier
                        </option>
                        <option ref="prisonSainte-AnneDesPlaines">
                          Prison de Sainte-Anne des Plaines
                        </option>
                        <option ref="prisonLaMacaza">
                          Prison de La Macaza
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <p>
                    <label for="finSentence">Fin de la sentence prévue:</label>
                  </p>
                </div>
                <div class="column is-7">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        ref="finSentence"
                        type="date"
                        aria-labelledby="finSentence"
                        v-bind:value="this.IPPE.finSentence"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="notification is-success is-light">
                <div class="column">
                  <p class="has-text-centered">
                    <label for="agentLibConditionnelle"
                      ><strong>Agent de libération conditionnelle </strong>
                    </label>
                  </p>
                </div>
                <div class="columns">
                  <div class="column">
                    <p>
                      <label for="nomAgentLibConditionnelle"
                        >Agent de libération conditionnelle à contacter:</label
                      >
                    </p>
                  </div>
                  <div class="column is-3">
                    <div class="field">
                      <div class="control">
                        <input
                          class="input"
                          ref="nomAgentLibConditionnelle"
                          type="text"
                          size="3"
                          aria-labelledby="nomAgentLibConditionnelle"
                          v-bind:value="this.IPPE.agentLiberation"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="column">
                    <p>
                      <label for="telephoneAgentLibConditionnelle"
                        >Téléphone:</label
                      >
                    </p>
                  </div>
                  <div class="column is-3">
                    <div class="field">
                      <div class="control">
                        <input
                          class="input"
                          ref="telephoneAgentLibConditionnelle"
                          type="tel"
                          maxlength="10"
                          pattern="[0-9]{10}"
                          aria-labelledby="telephoneAgentLibConditionnelle"
                          v-bind:value="this.IPPE.telephone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="has-text-centered">
                  <div class="box">
                    <div class="content">
                      <div class="content">
                        <h3><strong>Conditions</strong></h3>
                        <div
                          class="columns"
                          v-for="condition in this.infoPersonne.libelleList"
                          v-bind:key="condition"
                        >
                          <div class="column">
                            <input
                              class="input"
                              ref="condition"
                              type="text "
                              v-bind:value="condition"
                              aria-labelledby="Conditions"
                            />
                          </div>
                          <div class="buttons">
                            <button
                              class="button"
                              @click="
                                this.$router.push(
                                  `/condition/${this.idCondition}`
                                )
                              "
                            >
                              <i class="fas fa-edit"></i>
                            </button>
                          </div>
                        </div>
                        <div class="buttons is-centered">
                          <button
                            id="condition"
                            class="button has-text-centered is-info-light"
                            @click="this.$router.push(`/condition`)"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div v-if="visiblecomponent === 'Interdit'">
          <div class="card-content has-text-black">
            <div class="card-content has-text-black" ref="resultatinterdit">
              <div class="columns">
                <div class="column">
                  <p><label for="nature">Nature: </label></p>
                </div>
                <div class="column is-7">
                  <div class="field">
                    <div class="select">
                      <select
                        class="select"
                        name="Cour"
                        ref="nature"
                        v-bind:value="this.IPPE.nature"
                      >
                        <option ref="null" value=""></option>
                        <option ref="courQuebec" value="Arme à feu">
                          Arme à feu
                        </option>
                        <option
                          ref="courMunicipalMontreal"
                          value="Conduite de véhicule"
                        >
                          Conduite de véhicule
                        </option>
                        <option ref="courMunicipalLaval" value="Fréquentation">
                          Fréquentation
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <p><label for="cour">Cour de justice: </label></p>
                </div>
                <div class="column is-7">
                  <div class="field">
                    <div class="select">
                      <select
                        class="select"
                        name="Cour"
                        ref="cour"
                        @change="this.onChangeCour"
                        v-bind:value="this.IPPE.cour"
                      >
                        <option ref="null" value=""></option>
                        <option ref="courQuebec" value="Cour du Québec">
                          Cour du Québec
                        </option>
                        <option
                          ref="courMunicipalMontreal"
                          value="Cour Municipale de Montréal"
                        >
                          Cour Municipale de Montréal
                        </option>
                        <option
                          ref="courMunicipalLaval"
                          value="Cour Municipale de Laval"
                        >
                          Cour Municipale de Laval
                        </option>
                        <option
                          ref="courMunicipalLongueuil"
                          value="Cour Municipale de Longueuil"
                        >
                          Cour Municipale de Longueuil
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <p><label for="numCause">Numéro de cause: </label></p>
                </div>
                <div class="column is-7">
                  <div class="field has-addons">
                    <div class="control is-black">
                      <input
                        class="input"
                        id="autoNumCause"
                        ref="auto"
                        type="text"
                        size="7"
                        disabled
                        aria-labelledby="numCause"
                        v-bind:value="this.IPPE.noCause"
                      />
                    </div>
                    <div class="control is-black">
                      <input
                        class="input"
                        id="numCause"
                        ref="NumCauseInterdit"
                        type="text"
                        maxlength="9"
                        aria-labelledby="numCause"
                        v-bind:value="this.IPPE.noCause1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div class="columns">
                <div class="column">
                  <p><label for="nature">Nature du crime:</label></p>
                </div>
                <div class="column is-7">
                  <div class="field">
                    <div class="select">
                      <select
                        class="select"
                        name="NatureCrime"
                        id="natureCrime"
                        ref="natureCrime"
                        :required="true"
                      >
                        <option selected></option>
                        <option
                          v-for="crime in crimes"
                          v-bind:key="crime.IdCdrime"
                          v-bind:value="crime.IdCdrime"
                          :selected="
                            this.infoPersonne.data.IdNatureCrime ==
                            crime.IdCrime
                          "
                        >
                          {{ crime.IdCrime }}-{{ crime.Nature }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <p><label for="expiration">Expiration:</label></p>
                </div>
                <div class="column is-7">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        name="FinSentence"
                        ref="expiration"
                        type="date"
                        aria-labelledby="expiration"
                        v-bind:value="this.IPPE.finSentence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p>
                    <label for="numEvenement">Numéro d'événement: </label>
                  </p>
                </div>
                <div class="column is-7">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        ref="numEvenement"
                        type="text"
                        aria-labelledby="numEvenement"
                        required
                        v-bind:value="this.IPPE.noEvenement"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-centered">
            <button
              class="button is-danger is-outlined is-small has-text-centered"
               @click="this.$router.push(`/personne/${this.$route.params.idPersonne}`)"
            >
              <span class="icon"> <i class="fas fa-arrow-left"></i> </span>
              <center>Retour</center>
            </button>
          </div>
          <div class="column">
            <div class="buttons">
              <button
                ref="Éditer"
                class="button is-primary is-outlined is-small"
                v-if="visiblecomponent === 'Accusé'"
                v-on:click="this.éditerAccuse()"
              >
                <center>{{ this.typeBouton }}</center>
              </button>
              <button
                ref="Éditer"
                class="button is-primary is-outlined is-small"
                v-if="visiblecomponent === 'Recherché'"
                v-on:click="this.éditerRecherche()"
              >
                <center>{{ this.typeBouton }}</center>
              </button>
              <button
                ref="Éditer"
                class="button is-primary is-outlined is-small"
                v-if="visiblecomponent === 'Disparu'"
                v-on:click="this.éditerDisparu()"
              >
                <center>{{ this.typeBouton }}</center>
              </button>
              <button
                ref="Éditer"
                class="button is-primary is-outlined is-small"
                v-if="visiblecomponent === 'Sous observation'"
                v-on:click="this.éditerSousObservation()"
              >
                <center>{{ this.typeBouton }}</center>
              </button>
              <button
                ref="Éditer"
                class="button is-primary is-outlined is-small"
                v-if="visiblecomponent === 'Interdit'"
                v-on:click="this.éditerInterdit()"
              >
                <center>{{ this.typeBouton }}</center>
              </button>
              <button
                ref="Éditer"
                class="button is-primary is-outlined is-small"
                v-if="visiblecomponent === 'Probation'"
                v-on:click="this.éditerProbation()"
              >
                <center>{{ this.typeBouton }}</center>
              </button>
              <button
                ref="Éditer"
                class="button is-primary is-outlined is-small"
                v-if="visiblecomponent === 'Libération Conditionnelle'"
                v-on:click="éditerLibConditionnelle()"
              >
                <center>{{ this.typeBouton }}</center>
              </button>
              <button
                ref="Éditer"
                class="button is-primary is-outlined is-small"
                v-if="visiblecomponent === 'Négatif'"
                v-on:click="this.ModifierNégatif()"
              >
                <center>{{ this.typeBouton }}</center>
              </button>
              <button
                id="Supprimer"
                class="button is-danger is-outlined is-small"
                v-if="this.$route.params.idIppe"
                v-on:click="this.supprimerIPPE()"
              >
                <center>Supprimer</center>
                <span class="icon is-small">
                  <i class="fas fa-times"></i>
                </span>
              </button>
              <button
                id="annuler"
                class="button is-danger is-outlined is-small"
                v-if="visiblecomponent !== ''"
                @click="this.$router.push(`/personne/${this.$route.params.idPersonne}`)"
              >
                <center>Annuler</center>
                <span class="icon is-small">
                  <i class="fas fa-times"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'IPPEView',
    /* eslint-disable vue/no-unused-components */
    /* eslint dot-notation: 2 */
    props: ['this.$route.params.idPersonne', 'this.$route.params.idIppe'],
    data() {
        return {
            crimes: [],
            infoPersonne: '',
            visiblecomponent: '',
            date: '',
            dataIPPE: [],
            IPPE: {
                noEvenement: '',
                typeEvenement: '',
                mandat: '',
                motif: '',
                nature: '',
                dossierEnquete: '',
                dossierEnquete1: '',
                cour: '',
                natureCrime: null,
                noMandat: '',
                noMandat1: '',
                noMandat2: '',
                noCause: '',
                noCause1: '',
                lieuDetention: '',
                finSentence: '',
                vuDerniereFois: '',
                agentProbation: '',
                agentLiberation: '',
                telephone: '',
                poste: '',
                idCondition: '',
            },
            regexNumTrait: /^(?=.*\d)(?=.*[-])[\d-]{2,15}$/,
            regexNumero: /^(?=.*\d)[\d]{3,20}$/,
            regexLettre: /^(?=.*[a-zA-Z])[A-Za-z]{5,20}$/,
            regexLettreTrait: /^(?=.*[a-zA-Z])(?=.*[-])[A-Za-z-]{4,20}$/,
            regexPoste: /^(?=.*\d)[\d]{4}$/,
        };
    },
    mounted() {
        this.getCrime();
        this.affichageInfoPersonne();
    },
    computed: {
        typeBouton() {
            let button = '';
            if (this.$route.params.idIppe) {
                button = 'Modifier';
            } else {
                button = 'Ajouter';
            }
            return button;
        },
    },
    methods: {
        onChangeCour(e) {
            if (e.target.value === 'Cour du Québec') {
                this.$refs.auto.value = '500-01-310-';
            } else if (e.target.value === 'Cour Municipale de Montréal') {
                this.$refs.auto.value = 'CM-MTL-';
            } else if (e.target.value === 'Cour Municipale de Laval') {
                this.$refs.auto.value = 'CM-LVL-';
            } else if (e.target.value === '') {
                this.$refs.auto.value = '';
            } else if (e.target.value === 'Cour Municipale de Longeuil') {
                this.$refs.auto.value = 'CM-LGL-';
            }
        },
        onChangeMandat(e) {
            if (e.target.value === 'Amené') {
                this.$refs.autoTypeMandat.value = 'M-';
            } else if (e.target.value === 'Arrestation') {
                this.$refs.autoTypeMandat.value = 'A-';
            } else if (e.target.value === '') {
                this.$refs.autoTypeMandat.value = '';
            } else {
                this.$refs.autoTypeMandat.value = 'P-';
            }
        },
        async getCrime() {
            const response = await fetch('http://localhost:3000/crimes');
            const data = await response.json();
            this.crimes = data;
            console.log(data);
        },
        async affichageInfoPersonne() {
            if (this.$route.params.idIppe) {
                const response = await fetch(
                    `http://localhost:3000/ippes/infoPersonne/${this.$route.params.idPersonne}/${this.$route.params.idIppe}`,
                );
                if (response.ok) {
                    this.infoPersonne = await response.json();
                    console.log(this.infoPersonne);
                    this.IPPE.noEvenement = this.infoPersonne.data.NoEvenement;
                    this.IPPE.typeEvenement = this.infoPersonne.data.TypeEvenement;
                    this.IPPE.mandat = this.infoPersonne.data.Mandat;
                    this.IPPE.motif = this.infoPersonne.data.Motif;
                    this.IPPE.nature = this.infoPersonne.data.Nature;
                    if (this.infoPersonne.data.DossierEnquete) {
                        this.IPPE.dossierEnquete = this.infoPersonne.data.DossierEnquete
                            .substr(0, 3);
                        this.IPPE.dossierEnquete1 = this.infoPersonne.data
                            .DossierEnquete
                            .substr(-6);
                    }
                    this.IPPE.cour = this.infoPersonne.data.Cour;
                    this.IPPE.IdnatureCrime = this.infoPersonne.data.IdNatureCrime;
                    this.IPPE.natureCrime = this.infoPersonne.data.NatureCrime;
                    if (this.infoPersonne.data.NoMandat) {
                        this.IPPE.noMandat = this.infoPersonne.data.NoMandat.replace(
                            this.infoPersonne.data.NoMandat.substr(-7),
                            '',
                        );
                        this.IPPE.noMandat1 = this.infoPersonne.data.NoMandat.substr(
                            -7,
                        ).replace(this.infoPersonne.data.NoMandat.substr(-5), '');
                        this.IPPE.noMandat2 = this.infoPersonne.data.NoMandat.substr(-5);
                    }
                    this.IPPE.noCause1 = this.infoPersonne.data.NoCause.substr(-9);
                    this.IPPE.noCause = this.infoPersonne.data.NoCause.replace(
                        this.infoPersonne.data.NoCause.substr(-9),
                        '',
                    );
                    console.log(this.IPPE.noCause1, this.IPPE.noCause);
                    this.IPPE.lieuDetention = this.infoPersonne.data.LieuDetention;
                    this.IPPE.finSentence = this.infoPersonne.data.DateNaissance.substr(
                        0,
                        10,
                    );
                    this.IPPE.vuDerniereFois = this.infoPersonne.data.VuDernierefois;
                    this.IPPE.agentProbation = this.infoPersonne.data.AgentProbation;
                    this.IPPE.agentLiberation = this.infoPersonne.data.AgentLiberation;
                    this.IPPE.telephone = this.infoPersonne.data.Telephone;
                    this.IPPE.poste = this.infoPersonne.data.Poste;
                }
            } else {
                const response = await fetch(
                    `http://localhost:3000/personnes/${this.$route.params.idPersonne}`,
                );
                if (response.ok) {
                    this.infoPersonne = await response.json();
                    console.log(this.infoPersonne);
                }
            }
        },
        async modifierIPPE(element) {
            const response = await fetch(
                `http://localhost:3000/ippes/${this.$route.params.idPersonne}/${this.$route.params.idIppe}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ element }),
                },
            );
            const data = await response.json();
            if (data.success === true) {
                console.log(data);
                alert(data.message);
                this.$router.push(`/personne/${this.$route.params.idPersonne}`);
            } else {
                alert(
                    `Oups quelque chose n'a pas fonctionné, Le serveur indique: ${data.message}`,
                );
            }
        },
        async supprimerIPPE() {
            const resultat = window.confirm('Voulez-vous continuer la suppression ?');
            if (resultat === true) {
                const response = await fetch(
                    `http://localhost:3000/ippes/${this.$route.params.idPersonne}/${this.$route.params.idIppe}`,
                    {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                    },
                );
                const data = await response.json();
                if (data.success === true) {
                    alert(data.message);
                    this.$router.push(`/personne/${this.$route.params.idPersonne}`);
                } else {
                    alert(
                        `Oups quelque chose n'a pas fonctionné, Le serveur indique:${data.message}`,
                    );
                }
            }
        },
        async ajoutIPPE(element) {
            const response = await fetch(
                `http://localhost:3000/ippes/${this.$route.params.idPersonne}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ element }),
                },
            );
            const data = await response.json();
            if (data.success === true) {
                alert(data.message);
                this.$router.push(`/personne/${this.$route.params.idPersonne}`);
            } else {
                alert(
                    `Oups quelque chose n'a pas fonctionné, Le serveur indique:${data.message}`,
                );
            }
        },
        testNumeroTrait(value) {
            return this.regexNumTrait.test(value);
        },
        testNumero(value) {
            return this.regexNumero.test(value);
        },
        testLettre(value) {
            return this.regexLettre.test(value);
        },
        testPoste(value) {
            return this.regexPoste.test(value);
        },
        async éditerAccuse() {
            const NatureCrime = this.$refs.natureCrime.value.split('-');
            const tableIPPE = {
                TypeEvenement: 'Accusé',
                Cour: this.$refs.cour.value,
                NoCause: this.$refs.auto.value + this.$refs.numCause.value,
                NoEvenement: this.$refs.numEvenement.value,
                IdNatureCrime: NatureCrime[0],
            };
            const accuse = {
                tableIPPE,
            };
            console.log(accuse);
            if (this.$route.params.idIppe) await this.modifierIPPE(accuse);
            else await this.ajoutIPPE(accuse);
        },
        async éditerDisparu() {
            const tableIPPE = {
                TypeEvenement: 'Disparu',
                NoEvenement: this.$refs.numEvenement.value,
                Nature: this.$refs.nature.value,
                VuDerniereFois: this.$refs.derniereVu.value,
            };

            const disparu = { tableIPPE };
            console.log(disparu);
            if (this.$route.params.idIppe) await this.modifierIPPE(disparu);
            else await this.ajoutIPPE(disparu);
        },
        async éditerRecherche() {
            const NatureCrime = this.$refs.natureCrime.value.split('-');
            const tableIPPE = {
                TypeEvenement: 'Recherché',
                Mandat: this.$refs.cour.value,
                NoMandat:
          this.$refs.auto.value
          + this.$refs.autoTypeMandat.value
          + this.$refs.numMandat.value,
                IdNatureCrime: NatureCrime[0],
                NoEvenement: this.$refs.numEvenement.value,
            };
            const recherche = { tableIPPE };
            console.log(recherche);
            if (this.$route.params.idIppe) await this.modifierIPPE(recherche);
            else await this.ajoutIPPE(recherche);
        },
        async éditerProbation() {
            const NatureCrime = this.$refs.natureCrime.value.split('-');
            const tableIPPE = {
                TypeEvenement: 'Probation',
                Cour: this.$refs.cour.value,
                NoCause: this.$refs.auto.value + this.$refs.numCauseAcc.value,
                AgentProbation: this.$refs.Nom.value,
                Telephone: this.$refs.telephone.value,
                Poste: this.$refs.poste.value,
                FinSentence: this.$refs.finSentence.value,
                NoEvenement: this.$refs.numEvenement.value,
                IdNatureCrime: NatureCrime[0],
            };
            const probation = { tableIPPE };
            console.log(probation);
            if (this.$route.params.idIppe) await this.modifierIPPE(probation);
            else await this.ajoutIPPE(probation);
        },
        async éditerInterdit() {
            const NatureCrime = this.$refs.natureCrime.value.split('-');
            const tableIPPE = {
                TypeEvenement: 'Interdit',
                Nature: this.$refs.nature.value,
                NoCause: this.$refs.auto.value + this.$refs.NumCauseInterdit.value,
                Cour: this.$refs.cour.value,
                FinSentence: this.$refs.expiration.value,
                NoEvenement: this.$refs.numEvenement.value,
                IdNatureCrime: NatureCrime[0],
            };
            const Interdit = { tableIPPE };
            console.log(Interdit);
            if (this.$route.params.idIppe) await this.modifierIPPE(Interdit);
            else await this.ajoutIPPE(Interdit);
        },
        async éditerSousObservation() {
            const NatureCrime = this.$refs.natureCrime.value.split('-');
            const tableIPPE = {
                TypeEvenement: 'Sous observation',
                Motif: this.$refs.motif.value,
                DossierEnquete:
          this.$refs.dossierEnqueteSvrPol.value
          + this.$refs.dossierEnqueteRENS.value
          + this.$refs.dossierEnquete.value,
                NoEvenement: this.$refs.numEvenement.value,
                IdNatureCrime: NatureCrime[0],
            };
            const SousObservation = { tableIPPE };
            console.log(SousObservation);
            if (this.$route.params.idIppe) await this.modifierIPPE(SousObservation);
            else await this.ajoutIPPE(SousObservation);
        },
        async éditerLibConditionnelle() {
            const NatureCrime = this.$refs.natureCrime.value.split('-');
            const tableIPPE = {
                TypeEvenement: 'Libération Conditionnelle',
                NoCause: this.$refs.auto.value + this.$refs.numCause.value,
                LieuDetention: this.$refs.lieuDetention.value,
                AgentLiberation: this.$refs.nomAgentLibConditionnelle.value,
                Telephone: this.$refs.telephoneAgentLibConditionnelle.value,
                NoEvenement: this.$refs.numEvenement.value,
                IdNatureCrime: NatureCrime[0],
                FinSentence: this.$refs.finSentence.value,
            };
            const LibConditionnelle = { tableIPPE };
            console.log(LibConditionnelle);
            if (this.$route.params.idIppe) await this.modifierIPPE(LibConditionnelle);
            else await this.ajoutIPPE(LibConditionnelle);
        },
    },
};
</script>

<style scoped></style>
