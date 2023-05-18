<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <div class="notification is-info is-light">
      <div class="container is-2by1">
        <div class="notification is-info is-light">
          <div class="column" v-if="!this.$route.params.idIppe">
            <div class="columns is-centered">
                <div class="column is-half">
                  <div class="column  has-text-centered">
                            <label for="categorie" class="label">Type Evenement</label>
                            <div class="select">
                                <select id= "evenement" v-model="typeEvenement">
                                    <option id="Négatif">Négatif</option>
                                    <option id="Recherché">Recherché</option>
                                    <option id="Sous observation">Sous observation</option>
                                    <option id="Probation">Probation</option>
                                    <option id="Libération conditionnelle">
                                      Libération conditionnelle</option>
                                    <option id="Disparu">Disparu</option>
                                    <option id="Interdit">Interdit</option>
                                </select>
                            </div>
                            <p v-if="categorieError === true"
                            class="help is-danger has-text-centered">
                            *Champ obligatoire.
                            </p>
                        </div>
                    <div class="field">
                        <label for="prenom1" class="label">Mandat</label>
                        <div class="control ">
                            <input id = "prenom1" class="input" type="text"
                            placeholder="Mandat"
                            v-model="Mandat">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom1Error === true" class="help is-danger">
                            *Champ obligatoire : seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom1" class="label">NoEvenement</label>
                        <div class="control ">
                            <input id = "prenom1" class="input" type="text"
                            placeholder="NoEvenement"
                            v-model=" NoEvenement">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom1Error === true" class="help is-danger">
                            *Champ obligatoire : seulement des lettres sont valides</p>
                    </div>

                    <div class="field">
                        <label for="prenom2" class="label">Motif</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="Motif"
                            v-model="Motif">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">Nature</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="Nature"
                            v-model="Nature">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>

                    <div class="field">
                        <label for="prenom2" class="label">DossierEnquete</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="DossierEnquete"
                            v-model="DossierEnquete">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">Cour</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="Cour"
                            v-model="Cour">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">NoMandat</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="NoMandat"
                            v-model="NoMandat">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">NoCause</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="NoCause"
                            v-model="NoCause">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">Lieu Detention</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="Lieu Detention"
                            v-model="LieuDetention">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">Fin de la sentence</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="date"
                            placeholder="Fin de sentence"
                            v-model="FinSentence">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">Vu la Derniere Fois</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="Vu la Derniere Fois"
                            v-model="dernierefois">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">Agent Probation</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="Agent Probation"
                            v-model="AgentProbation">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">Agent Liberation</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="Agent Liberation"
                            v-model="AgentLiberation">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">Telephone</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="tel"
                            placeholder="Telephone"
                            v-model="Telephone">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="field">
                        <label for="prenom2" class="label">Poste</label>
                        <div class="control ">
                            <input id = "prenom2" class="input" type="text"
                            placeholder="Poste"
                            v-model="Poste">
                            <span>
                            <i class=""></i>
                            </span>
                        </div>
                        <p v-if="prenom2Error === true" class="help is-danger">
                            Seulement des lettres sont valides</p>
                    </div>
                    <div class="has-text-centered">
                        <button class="button is-info is-rounded"
                        v-if="this.personne !== null"
                        v-on:click="ajoutIPPE()">
                            Ajout IPPE
                        </button>
                    </div>
                </div>
            </div>
            </div>
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
          <div v-if="this.infoPersonne">

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
                      disabled>
                        <option
                          value="Négatif"
                          v-bind:selected="
                            infoPersonne.TypeEvenement == 'Négatif'
                              ? (this.visiblecomponent = 'Négatif')
                              : this.visiblecomponent
                          "
                        >
                          *** Négatif ***
                        </option>
                        <option
                          value="Recherché"
                          v-bind:selected="
                            infoPersonne.TypeEvenement == 'Recherché'
                              ? (this.visiblecomponent = 'Recherché')
                              : this.visiblecomponent
                          "
                        >
                          *** Recherché ***
                        </option>
                        <option
                          value="Sous observation"
                          v-bind:selected="
                            infoPersonne.TypeEvenement ==
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
                            infoPersonne.TypeEvenement == 'Accusé'
                              ? (this.visiblecomponent = 'Accusé')
                              : this.visiblecomponent
                          "
                        >
                          *** Accusé ***
                        </option>
                        <option
                          value="Probation"
                          v-bind:selected="
                            infoPersonne.TypeEvenement == 'Probation'
                              ? (this.visiblecomponent = 'Probation')
                              : this.visiblecomponent
                          "
                        >
                          *** Probation ***
                        </option>
                        <option
                          value="Libération Conditionnelle"
                          v-bind:selected="
                            infoPersonne.TypeEvenement ==
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
                            infoPersonne.TypeEvenement == 'Disparu'
                              ? (this.visiblecomponent = 'Disparu')
                              : this.visiblecomponent
                          "
                        >
                          *** Disparu ***
                        </option>
                        <option
                          value="Interdit"
                          v-bind:selected="
                            infoPersonne.TypeEvenement == 'Interdit'
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
                      v-bind:value="this.IPPE.Cour"
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
                      v-bind:value="this.IPPE.NoCause"
                    />
                  </div>
                  <div class="control is-black">
                    <input
                      class="input"
                      id="numCause"
                      ref="numCause"
                      type="text"
                      aria-labelledby="numCause2"
                      v-bind:value="this.IPPE.NoCause1"
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
                          this.infoPersonne.IdNatureCrime == crime.IdCrime
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
                      v-bind:value="this.IPPE.NoEvenement"
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
                        {{ this.IPPE.Nature }}
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
                      v-bind:value="this.IPPE.NoEvenement"
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
                  aria-labelledby="derniereVu"
                  v-bind:value="this.IPPE.dernierefois"
                />
              </div>
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
                    v-bind:value="this.IPPE.NoEvenement"
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
                      v-bind:value="this.IPPE.Mandat"
                    >
                      <option ref="null" disabled>{{this.IPPE.Mandat}}</option>
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
                      v-bind:value="this.IPPE.Cour"
                    >
                      <option id="null" disabled>{{ this.IPPE.Cour }}</option>
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
                      v-bind:value="this.IPPE.NoMandat"
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
                      v-bind:value="this.IPPE.NoMandat1"
                    />
                  </div>
                  <div class="control">
                    <input
                      class="input is-black"
                      ref="numMandat"
                      type="text"
                      aria-labelledby="numMandat"
                      maxlength="5"
                      v-bind:value="this.IPPE.NoMandat2"
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
                          this.infoPersonne.IdNatureCrime == crime.IdCrime
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
                      v-bind:value="this.IPPE.Cour"
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
                        v-bind:value="this.IPPE.NoCause"
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
                        v-bind:value="this.IPPE.NoCause1"
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
                          this.infoPersonne.IdNatureCrime == crime.IdCrime
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
                      v-bind:value="this.IPPE.NoEvenement"
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
                      v-bind:value="this.IPPE.FinSentence"
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
                        v-bind:value="this.IPPE.AgentProbation"
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
                        v-bind:value="this.IPPE.Telephone"
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
                        v-bind:value="this.IPPE.oste"
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
                      v-bind:value="this.IPPE.Motif"
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
                          this.infoPersonne.IdNatureCrime == crime.IdCrime
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
                      v-bind:value="this.IPPE.NoEvenement"
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
                      v-bind:value="this.IPPE.DossierEnquete"
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
                        v-bind:value="this.IPPE.NoEvenement"
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
                        v-bind:value="this.IPPE.NoCause1"
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
                            this.infoPersonne.IdNatureCrime ==
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
                        v-bind:value="this.IPPE.LieuDetention"
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
                        v-bind:value="this.IPPE.FinSentence"
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
                          v-bind:value="this.IPPE.AgentLiberation"
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
                          v-bind:value="this.IPPE.Telephone"
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
                        v-bind:value="this.IPPE.Nature"
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
                        v-bind:value="this.IPPE.Cour"
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
                        v-bind:value="this.IPPE.NoCause"
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
                        v-bind:value="this.IPPE.NoCause1"
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
                            this.infoPersonne.IdNatureCrime ==
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
                        v-bind:value="this.IPPE.NoEvenement"
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
import { connexion } from '@/stores/connexionStore';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

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
                NoEvenement: '',
                TypeEvenement: '',
                Mandat: '',
                Motif: '',
                Nature: '',
                DossierEnquete: '',
                DossierEnquete1: '',
                cour: '',
                NatureCrime: null,
                NoMandat: '',
                NoMandat1: '',
                NoMandat2: '',
                NoCause: '',
                NoCause1: '',
                lieuDetention: '',
                FinSentence: '',
                dernierefois: '',
                AgentProbation: '',
                AgentLiberation: '',
                Telephone: '',
                Poste: '',
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
        this.checkToken();
        if (this.store.token === '') { this.$route.push('/connexion'); }
        this.getCrime();
        this.affichageInfoPersonne();
    },
    setup() {
        const annuler = () => {
            createToast(
                'IPPE Supprimer',
                {
                    position: 'bottom-right',
                    type: 'success',
                    transition: 'slide',
                    timeout: 2000,
                },
            );
        };
        const creer = () => {
            createToast(
                'IPPE creer',
                {
                    position: 'bottom-right',
                    type: 'success',
                    transition: 'slide',
                    timeout: 2000,
                },
            );
        };
        const store = connexion();
        // exposer l'objet store à la vue
        return { store, annuler, creer };
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
        checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
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
            const response = await fetch('http://localhost:3000/crimes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: this.store.token,
                },
            });
            const data = await response.json();
            this.crimes = data;
        },
        async affichageInfoPersonne() {
            if (this.$route.params.idIppe) {
                const response = await fetch(`http://localhost:3000/ippes/${this.$route.params.idIppe}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: this.store.token,
                    },
                });
                if (response.ok) {
                    this.infoPersonne = await response.json();
                    console.log(this.infoPersonne);
                    this.IPPE.NoEvenement = this.infoPersonne.NoEvenement;
                    this.IPPE.TypeEvenement = this.infoPersonne.TypeEvenement;
                    this.IPPE.Mandat = this.infoPersonne.Mandat;
                    this.IPPE.Motif = this.infoPersonne.Motif;
                    this.IPPE.Nature = this.infoPersonne.Nature;
                    if (this.infoPersonne.DossierEnquete) {
                        this.IPPE.DossierEnquete = this.infoPersonne.DossierEnquete
                            .substr(0, 3);
                        this.IPPE.DossierEnquete1 = this.infoPersonne
                            .DossierEnquete
                            .substr(-6);
                    }
                    this.IPPE.Cour = this.infoPersonne.Cour;
                    this.IPPE.IdNatureCrime = this.infoPersonne.IdNatureCrime;
                    this.IPPE.NatureCrime = this.infoPersonne.NatureCrime;
                    if (this.infoPersonne.NoMandat) {
                        this.IPPE.NoMandat = this.infoPersonne.NoMandat.replace(
                            this.infoPersonne.NoMandat.substr(-7),
                            '',
                        );
                        this.IPPE.NoMandat1 = this.infoPersonne.NoMandat.substr(
                            -7,
                        ).replace(this.infoPersonne.NoMandat.substr(-5), '');
                        this.IPPE.NoMandat2 = this.infoPersonne.NoMandat.substr(-5);
                    }
                    if (this.infoPersonne.NoCause) {
                        this.IPPE.NoCause1 = this.infoPersonne.NoCause.substr(-9);
                        this.IPPE.NoCause = this.infoPersonne.NoCause.replace(
                            this.infoPersonne.NoCause.substr(-9),
                            '',
                        );
                    }
                    if (this.infoPersonne.LieuDetention) {
                        this.IPPE.LieuDetention = this.infoPersonne.LieuDetention;
                        this.IPPE.FinSentence = this.infoPersonne.DateNaissance.substr(
                            0,
                            10,
                        );
                    }
                    this.IPPE.VuDerniereFois = this.infoPersonne.VuDernierefois;
                    this.IPPE.AgentProbation = this.infoPersonne.AgentProbation;
                    this.IPPE.AgentLiberation = this.infoPersonne.AgentLiberation;
                    this.IPPE.Telephone = this.infoPersonne.Telephone;
                    this.IPPE.Poste = this.infoPersonne.Poste;
                }
            } else {
                const response = await fetch(
                    `http://localhost:3000/ippes/${this.$route.params.idIppe}`,
                );
                if (response.ok) {
                    this.infoPersonne = await response.json();
                }
            }
        },
        async modifierIPPE(element) {
            const response = await fetch(
                `http://localhost:3000/ippes/${this.$route.params.idIppe}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', Authorization: this.store.token },
                    body: JSON.stringify({ element }),

                },
            );
            const data = await response.json();
            if (data.success === true) {
                alert(data.message);
                this.$router.push(`/personne/${this.$route.params.idPersonne}`);
            } else {
                alert(
                    `Oups quelque chose n'a pas fonctionné, Le serveur indique: ${data.message}`,
                );
            }
        },
        async supprimerIPPE() {
            const token = (sessionStorage.getItem('token'));
            const response = await fetch(
                `http://localhost:3000/ippes/${this.$route.params.idIppe}`,
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json', Authorization: this.store.token },
                    Authorization: token,
                },
            );
            const data = await response.json();
            if (data.success === true) {
                this.$router.push(`/personne/${this.$route.params.idPersonne}`);
            } else {
                this.annuler();
                this.$router.push(`/personne/${this.$route.params.idPersonne}`);
            }
        },
        async ajoutIPPE() {
            const boy = {
                TypeEvenement: this.typeEvenement,
                NoEvenement: this.NoEvenement,
                Mandat: this.Mandat,
                Motif: this.Motif,
                Nature: this.Nature,
                DossierEnquete: this.DossierEnquete,
                Cour: this.Cour,
                NoMandat: this.NoMandat,
                NoCause: this.NoCause,
                LieuDetention: this.LieuDetention,
                FinSentence: this.FinSentence,
                VuDerniereFois: this.dernierefois,
                AgentProbation: this.AgentProbation,
                AgentLiberation: this.AgentLiberation,
                Telephone: this.Telephone,
                Poste: this.Poste,
            };
            console.log(boy);
            const response = await fetch(
                `http://localhost:3000/ippes/insertIppePersonne/${this.$route.params.idPersonne}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: this.store.token },
                    body: JSON.stringify(boy),
                },
            );
            this.creer();
            this.$router.push(`/personne/${this.$route.params.idPersonne}`);
            const data = await response.json();
            if (data.success === true) {
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
            if (this.$route.params.idIppe) await this.modifierIPPE(LibConditionnelle);
            else await this.ajoutIPPE(LibConditionnelle);
        },
    },
};
</script>

<style scoped></style>
