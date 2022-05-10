<template>
<<<<<<< HEAD
    <div class="container mb-4 is-desktop">
      <form @submit.prevent="onSubmit">
        <h1 class="has-text-black " style="height:135px; text-align:center;
        font-size: 24px; padding-top: 5%;" >
            <b>
                <u v-if="isNaN(this.$route.params.idArme)">AJOUT D'UNE RÉPONSE ARME À FEU</u>
                <u v-else>MODIFICATION D'UNE RÉPONSE ARME À FEU</u>
            </b>
        </h1>
        <br>
        <br>
        <div class='dialog-ovelay' v-if="confimation">
            <div class='dialog'>
                <header>
                    <h3> Confirmation </h3>
                    <i class='fa fa-close'></i>
                </header>
                <div class='dialog-msg'>
                    <p> Voulez-vous supprimer? </p>
                </div>
                <footer>
                    <div class='controls'>
                        <button class='button button-danger doAction'
                                v-on:click="deleteArme"> Oui  </button>
                        <button class='button button-default cancelAction'
                                v-on:click="confimation=''"> Non  </button>
                    </div>
                </footer>
            </div>
        </div>
        <div class="box" v-if="arme">
                <div class="success" v-if="sucess">
                    <a class="closebtn" href="/armes">&times;</a>
                    {{sucess}}
                </div>
                <div class="error" v-if="error">
                    <a class="closebtn" :href="this.$route.path">&times;</a>
                    {{error}}
                </div>
=======
    <div class="container mb-4 is-desktop" v-if="loaded===true">
      <form id="formulaireAjouter" @submit.prevent="handler($event)">
        <h1 class="has-text-black " style="height:135px; text-align:center;
        font-size: 24px; padding-top: 5%"><b>
            <u v-if="idArme!==-1">MODIFICATION D'UNE RÉPONSE ARME À FEU</u>
            <u v-else>AJOUT D'UNE RÉPONSE ARME À FEU</u></b></h1>
          <div class="block has-text-centered has-background-danger" v-if="errorMessage!== ''">
              <p><strong class="has-text-white">{{ this.errorMessage }}</strong></p>
          </div>
          <div class="block has-text-centered has-background-success" v-if="successMessage!== ''">
              <p><strong class="has-text-white">{{ this.successMessage }}</strong></p>
          </div>
        <div class="box">
>>>>>>> dev_Vue
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="field" v-if="idArme!==-1">
                            <label for="idArme" class="label is-hidden">idArme</label>
                            <div class="control">
                                <input id="idArme" class="input is-hidden" type="number"
                                       placeholder="idArme" name="idArme" v-model="idArme" readonly>
                        </div>
                    </div>
                    <div class="field">
                        <label for="noSerie" class="label">Numéro de série</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="noSerie" class="input" type="text" name="noSerie"
<<<<<<< HEAD
                            placeholder="Numéro de série" v-model="NoSerie" required/>
=======
                            placeholder="Numéro de série" required
                            v-model="arme.noSerie"/>
>>>>>>> dev_Vue
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p class="help is-danger" v-if="NoSerieValid">
                            {{NoSerieValid}}</p>
                    </div>
                    <div class="field">
                        <label for="marque" class="label">Marque</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="marque" class="input" type="text" name="marque"
<<<<<<< HEAD
                            placeholder="Marque" v-model="Marque"/>
=======
                            placeholder="Marque"
                            v-model="arme.marque" required/>
>>>>>>> dev_Vue
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p v-if="MarqueValid" class="help is-danger">
                            {{MarqueValid}}</p>
                    </div>
                    <div class="field">
                        <label for="calibre" class="label">Calibre</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="calibre" class="input" type="text" name="calibre"
<<<<<<< HEAD
                            placeholder="Calibre" v-model="Calibre" required/>
=======
                            placeholder="Calibre" required
                            v-model="arme.calibre"/>
>>>>>>> dev_Vue
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <p v-if="CalibreValid" class="help is-danger">
                            {{CalibreValid}}</p>
                    </div>
                    <div class="field">
                        <label for="typeArme" class="label">Type d'arme</label>
                        <div class = "control">
<<<<<<< HEAD
                            <select id="typeArme" class="select" name="typeArme"
                            v-model="typeArme" required>
=======
                            <select id="typeArme" class="select" name="typeArme" required
                                    v-model="arme.typeArme">
>>>>>>> dev_Vue
                            <option></option>
                            <option>Révolver</option>
                            <option>Pistolet</option>
                            <option>Carabine</option>
                            <option>Fusil</option>
                            </select>
                        </div>
                    </div>
                    <div class="field" style="padding-bottom: 20px">
                    <label for="NoEvenement" class="label">Numéro d'évenement</label>
                    <div id="NoEvenement" class="columns is-mobile is-multiline is-centered">
<<<<<<< HEAD
                        <div class="column is-3-desktop is-2-mobile">
                            <label class="has-text-black" for="NoEvent"><b>Numéro évenement</b>
                                <span style="color: red">*</span></label><br><br>
                            <select id="NoEvent" class="select" name="NoEvent"
                            v-model="NoEvent"  required>
                                <option></option>
                                <option>123</option>
                                <option>302</option>
                                <option>108</option>
                            </select>
                        </div>

                        <div class="column is-2-desktop is-2-mobile">
                            <label class="has-text-black" for="annee"><b>Année</b>
                                <span style="color: red">*</span></label><br><br>
                            <input id="annee" type="text" name="annee" placeholder="Année"
                            v-model="annee" required/>
                            <label class="has-text-danger"  v-if="anneValid"
                            for="warning">
                            <b>{{anneValid}}</b></label>
                        </div>

                        <div class="column is-1-desktop is-2-mobile">
                            <label class="has-text-black" for="ddm"><b>Mois</b><span
                                style="color: red">*</span></label><br><br>
                            <select id="Mois" class="select" name="mois"
                            v-model="mois" required>
                            <option></option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>

                            </select>
                            <label class="has-text-danger is-hidden" v-if="moisValid"
                            for="warning">
                            <b>{{moisValid}}</b></label>
                        </div>
                        <div class="column is-1-desktop is-2-mobile">
                            <label class="has-text-black" for="ddm"><b>Jour</b><span
                                style="color: red">*</span></label><br><br>
                            <select id="Jour" class="select" name="jour"
                            v-model="jour" required>
                            <option></option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                            </select>
                            <label class="has-text-danger is-hidden" v-if="jourValid"
                            for="warning">
                            <b>{{jourValid}}</b></label>
                        </div>
                        <div class=" is-3-desktop is-2-mobile">
                            <label class="has-text-black" for="NoSeq"><b>Numéro Séquentiel</b>
                                <span style="color: red">*</span></label><br><br>
                            <input maxlength="4" id="NoSeq" type="text" name="NoSeq"
                                placeholder="Numéro Séquentiel" v-model="NoSeq" required/>
                        </div>
                   </div>
                   <div class="btn-block" >
                <button
                v-if="this.$route.name === 'MarmeView'"
                v-on:click="this.updateArme">Modifier</button>&nbsp;
                <button type="submit"
                v-if="this.$route.name === 'AarmeView'"
                v-on:click="this.addArme">Ajouter</button>&nbsp;
                <button type="reset"
                v-if="this.$route.name === 'MarmeView'"
                v-on:click="confirmation">Supprimer</button>&nbsp;
                <button type="button"
                    v-on:click="this.$router.push({ name: 'armesView' })">Annuler</button>
            </div>
                <p style="margin-bottom: 50px;">&nbsp;</p>
=======
                        <div class="field has-addons">
                            <div class="select">
                                <select id="NoCours" name="NoCours" required
                                        v-model="noEvenement.NoCours">
                                    <option value="" disabled selected></option>
                                    <option id="123">123</option>
                                    <option id="302">302</option>
                                    <option id="108">108</option>
                                </select>
                            </div>
                            <div class="control">
                                <label for="AA">
                                    <input class="input" type="text" id="AA" name="AA"
                                           maxlength="2" placeholder="AA"
                                           v-model="noEvenement.AA">
                                </label>
                            </div>
                            <div class="control">
                                <label for="MM">
                                    <input class="input" type="text" id="MM" name="MM"
                                           maxlength="2" placeholder="MM"
                                           v-model="noEvenement.MM">
                                </label>
                            </div>
                            <div class="control">
                                <label for="JJ">
                                    <input class="input" type="text" id="JJ" name="JJ"
                                           maxlength="2" placeholder="JJ"
                                           v-model="noEvenement.JJ">
                                </label>
                            </div>
                            <div class="control">
                                <label for="sequenceChiffres">
                                    <input class="input" type="text" id="sequenceChiffres"
                                           name="sequenceChiffres"
                                           maxlength="4" placeholder="4 chiffres"
                                           v-model="noEvenement.sequenceChiffres">
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="buttons">
                        <input type="submit" class="button has-text-weight-bold is-link"
                               id="retour" value="Retour"
                               @click.prevent="this.$router.push('/armes')">
                        <input  type="submit" class="button has-text-weight-bold is-primary"
                                id="modifier"
                                value="Modifier" @click="setEvent('modifier')"
                                v-if="idArme !==-1">
                        <input type="reset" class="button has-text-weight-bold is-warning"
                                id="annuler" @click="resetVariable" value="Annuler">
                        <input class="button has-text-weight-bold is-primary" type="submit"
                               id="ajouter" value="Ajouter" @click="setEvent('ajouter')"
                               v-if="idArme===-1">
                        <input class="js-modal-trigger button has-text-weight-bold is-danger"
                                data-target="modal-js-example" @click.prevent="showModal = true"
                                id="suppr"
                                v-if="idArme !==-1" value="Supprimer">
                    </div>
>>>>>>> dev_Vue
                </div>
            </div>
        </div>
      </form>
        <div class="modal is-active" v-show="showModal" @close="showModal = false">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Confirmation de suppression</p>
                    <button class="delete" aria-label="close"
                            @click.prevent="showModal = false"></button>
                </header>
                <section class="modal-card-body">
                    Voulez-vous vraiment supprimer cette entrée?
                </section>
                <footer class="modal-card-foot">
                    <input class="button has-text-weight-bold is-danger" id="supprimer"
                            @click.prevent="handlerSupprimer" value="Supprimer">
                    <input class="button" @click.prevent="showModal = false" value="Retour">
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import { svrURL } from '../constantes';
import {
    capitalize, isJourValide, isMoisValide, isAnneeValide, isDateValide,
} from '../validations';

// noinspection JSUnusedGlobalSymbols
import { svrURL } from '@/constantes';

export default {
    name: 'ArmeView',
    data() {
        return {
<<<<<<< HEAD
            arme: [],
            NoSerie: '',
            Marque: '',
            Calibre: '',
            typeArme: '',
            NoEvent: '',
            annee: '',
            mois: '',
            jour: '',
            NoSeq: '',
            sucess: '',
            error: '',
            anneValid: '',
            moisValid: '',
            jourValid: '',
            NoSerieValid: '',
            MarqueValid: '',
            CalibreValid: '',
            confimation: '',
        };
    },
    mounted() {
        if (this.$route.path !== '/arme') {
            this.getArme(); // Get les info d'une arme précise
        }
    },
    methods: {
        confirmation() {
            this.confimation = 'validation';
        },
        async deleteArme() {
            const api = await fetch(`${svrURL}/armes/${this.$route.params.idArme}`, { method: 'DELETE' }); // Permet de delete une arme
            const res = await api.json();
            if (res.success) {
                this.sucess = res.message;
                this.confimation = '';
            } else this.error = res.message;
        },
        async addArme() { // Permet de add une arme
            if (this.NoSerie === '') {
                this.NoSerieValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.Marque === '') {
                this.MarqueValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.Calibre === '') {
                this.CalibreValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (!isJourValide(this.jour)) {
                this.jourValid = 'le jour entré est invalide';
                return;
            }
            if (!isMoisValide(this.mois)) {
                this.moisValid = 'le mois entré est invalide';
                return;
            }
            if (!isAnneeValide(this.annee)) {
                this.anneValid = "l'année entrée est invalide";
                return;
            }
            if (!isDateValide(this.annee, this.mois, this.jour)) {
                this.error = 'la date entrée est invalide';
                return;
            }
            const formData = {
                NoSerie: capitalize(this.NoSerie),
                marque: capitalize(this.Marque),
                calibre: this.Calibre,
                typeAr: capitalize(this.typeArme),
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/armes`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(formData),
            });
            const res = await api.json();
            if (res.success) this.sucess = res.message;
            else this.error = res.message;
        },
        async updateArme() { // Permet de Update une arme
            if (this.NoSerie === '') {
                this.NoSerieValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.Marque === '') {
                this.MarqueValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (this.Calibre === '') {
                this.CalibreValid = '*Champ obligatoire : seulement des lettres et - sont valides';
                return;
            }
            if (!isJourValide(this.jour)) {
                this.jourValid = 'le jour entré est invalide';
                return;
            }
            if (!isMoisValide(this.mois)) {
                this.moisValid = 'le mois entré est invalide';
                return;
            }
            if (!isAnneeValide(this.annee)) {
                this.anneValid = "l'année entrée est invalide";
                return;
            }
            if (!isDateValide(this.annee, this.mois, this.jour)) {
                this.error = 'la date entrée est invalide';
                return;
            }
            const formData = {
                NoSerie: capitalize(this.NoSerie),
                marque: capitalize(this.Marque),
                calibre: this.Calibre,
                typeAr: capitalize(this.typeArme),
                NoEvenement: `${this.NoEvent}-${this.annee.substring(2)}${this.mois}${this.jour}-${this.NoSeq}`,
            };

            const api = await fetch(`${svrURL}/armes/${this.$route.params.idArme}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                method: 'PUT',
                body: JSON.stringify(formData),
            });
            const res = await api.json();
            if (res.success) this.sucess = res.message;
            else this.error = res.message;
        },
        async getArme() { // Get les info d'une arme
            const rep = await fetch(`${svrURL}/armes/${this.$route.params.idArme}`, { method: 'GET' });
            const data = await rep.json();

            if (rep.ok) this.arme = data;

            this.NoSerie = data[0].NoSerie;
            this.Marque = data[0].Marque;
            this.Calibre = data[0].Calibre;
            this.typeArme = data[0].TypeArme;
            const no = data[0].NoEvenement.split('-');
            [this.NoEvent, this.NoSeq] = [no[0], no[2]];
            [this.mois, this.jour] = [
                no[1].substring(2, 4),
                no[1].substring(4, 6),
            ];
            if (no[1].substring(0, 2) >= 0 && no[1].substring(0, 2) <= 22) {
                this.annee = `20${no[1].substring(0, 2)}`;
            } else {
                this.annee = `19${no[1].substring(0, 2)}`;
            }
        },
=======
            idArme: -1,
            btnCliquee: null,
            loaded: false,
            errorMessage: '',
            successMessage: '',
            arme: {
                noSerie: '',
                marque: '',
                calibre: '',
                typeArme: '',
            },
            noEvenement: {
                NoCours: '',
                AA: '',
                MM: '',
                JJ: '',
                sequenceChiffres: '',
            },
            showModal: false,
        };
    },
    methods: {
        handler(event) {
            const {
                AA, MM, JJ, sequenceChiffres,
            } = this.noEvenement;
            const regexJJ = /^0[1-9]|[12]\d|3[01]$/;
            const regexMM = /^0[1-9]|1[0-2]$/;
            const regexAA = /^\d{2}$/;
            const regexSChiffres = /^\d{4}$/;
            const validationEvent = (
                regexJJ.test(JJ)
                && regexMM.test(MM)
                && regexAA.test(AA)
                && regexSChiffres.test(sequenceChiffres)
            );
            if (validationEvent === true) {
                const formData = new URLSearchParams(new FormData(event.target));
                let method;
                if (this.btnCliquee === 'ajouter') {
                    method = 'POST';
                } else if (this.btnCliquee === 'modifier') {
                    method = 'PUT';
                }
                fetch(`${svrURL}/armes`, { method, body: formData })
                    .then((res) => res.json())
                    .then((resJson) => {
                        if (resJson.success) {
                            this.successMessage = resJson.message;
                        } else {
                            this.errorMessage = resJson.message;
                        }

                        const sleep = (ms) => new Promise((resolve) => {
                            setTimeout(resolve, ms);
                        });

                        sleep(2000).then(() => {
                            this.successMessage = '';
                            this.errorMessage = '';
                        });
                    })
                    .catch((resJson) => {
                        this.errorMessage = resJson.message;
                    });
            } else {
                this.errorMessage = 'Opération échouée, veuillez vérifier le numéro d\'événement';
            }
        },
        setEvent(msg) {
            this.btnCliquee = msg;
        },
        resetVariable() {
            this.btnCliquee = null;
            this.errorMessage = '';
            this.successMessage = '';
            this.getArme();
        },
        setId() {
            if (this.$route.params.idArme !== undefined) {
                this.idArme = this.$route.params.idArme;
            }
            this.loaded = true;
        },
        getArme() {
            this.setId();
            if (this.idArme !== -1) {
                fetch(`${svrURL}/armes/${this.idArme}`)
                    .then((res) => res.json())
                    .then((resJson) => {
                        this.errorMessage = resJson.message;
                        this.arme.noSerie = resJson[0].NoSerie;
                        this.arme.calibre = resJson[0].Calibre;
                        this.arme.marque = resJson[0].Marque;
                        this.arme.typeArme = resJson[0].TypeArme;
                        const noEvenement = resJson[0].NoEvenement.split('-');
                        const AAMMJJ = [];
                        AAMMJJ.push(noEvenement[1].slice(0, 2));
                        AAMMJJ.push(noEvenement[1].slice(2, 4));
                        AAMMJJ.push(noEvenement[1].slice(4, 6));
                        noEvenement[1] = AAMMJJ;
                        [this.noEvenement.NoCours,
                            [this.noEvenement.AA, this.noEvenement.MM,
                                this.noEvenement.JJ],
                            this.noEvenement.sequenceChiffres] = noEvenement;
                    })
                    .catch(() => {
                        this.errorMessage = 'Cette arme n\'est pas répertoriée';
                    });
            }
        },
        handlerSupprimer() {
            fetch(`${svrURL}/armes/${this.idArme}`, { method: 'DELETE' })
                .then((res) => res.json())
                .then((resJson) => {
                    if (resJson.success) {
                        this.successMessage = resJson.message;
                    } else {
                        this.errorMessage = resJson.message;
                    }
                })
                .catch((resJson) => {
                    this.errorMessage = resJson.message;
                });
            this.showModal = false;
        },
    },
    mounted() {
        this.getArme();
>>>>>>> dev_Vue
    },
};
</script>

<style scoped>

html, body {
    min-height: 100%;
    }
    body, div, form, input, select, textarea, label {
    padding: 0;
    margin: 0;
    outline: none;
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    color: #666;
    line-height: 22px;
    }
    .dialog-ovelay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.50);
    z-index: 999999
}
.dialog-ovelay .dialog {
    width: 400px;
    margin: 100px auto 0;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
    border-radius: 3px;
    overflow: hidden
}
.dialog-ovelay .dialog header {
    padding: 10px 8px;
    background-color: #f6f7f9;
    border-bottom: 1px solid #e5e5e5
}
.dialog-ovelay .dialog header h3 {
    font-size: 14px;
    margin: 0;
    color: #555;
    display: inline-block
}
.dialog-ovelay .dialog header .fa-close {
    float: right;
    color: #c4c5c7;
    cursor: pointer;
    transition: all .5s ease;
    padding: 0 2px;
    border-radius: 1px
}
.dialog-ovelay .dialog header .fa-close:hover {
    color: #b9b9b9
}
.dialog-ovelay .dialog header .fa-close:active {
    box-shadow: 0 0 5px #673AB7;
    color: #a2a2a2
}
.dialog-ovelay .dialog .dialog-msg {
    padding: 12px 10px
}
.dialog-ovelay .dialog .dialog-msg p{
    margin: 0;
    font-size: 15px;
    color: #333
}
.dialog-ovelay .dialog footer {
    border-top: 1px solid #e5e5e5;
    padding: 8px 10px
}
.dialog-ovelay .dialog footer .controls {
    direction: rtl
}
.dialog-ovelay .dialog footer .controls .button {
    padding: 5px 15px;
    border-radius: 3px
}
.button {
  cursor: pointer
}
.button-default {
    background-color: rgb(248, 248, 248);
    border: 1px solid rgba(204, 204, 204, 0.5);
    color: #5D5D5D;
}
.button-danger {
    background-color: #f44336;
    border: 1px solid #d32f2f;
    color: #f5f5f5
}
.link {
  padding: 5px 10px;
  cursor: pointer
}
    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }

    .closebtn:hover {
        color: black;
    }
    .error, .success {
        border: 1px solid;
        margin: 10px 0px;
        padding: 15px 10px 15px 50px;
        background-repeat: no-repeat;
        background-position: 10px center;
        }
    .success {
        color: #4F8A10;
        background-color: #DFF2BF;
        background-image: url('https://i.imgur.com/Q9BGTuy.png');
    }
    .error{
        color: #D8000C;
        background-color: #FFBABA;
        background-image: url('https://i.imgur.com/GnyDvKN.png');
    }

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;

      }

    .testbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    padding: 20px;
    }
    form {
    width: 100%;
    padding: 20px;
    border-radius: 6px;
    background: #fff;
    }
    .banner {
    position: relative;
    height: 135px;
    width: 135px;
    background-image: url("/public/images/LogoMaisonneuve.jpg");
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    float:left;
    }
    .banner::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    }
    input, select, textarea {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    }
    input {
    width: calc(100% - 10px);
    padding: 5px;
    }
    textarea {
    width: calc(100% - 12px);
    padding: 5px;
    }
    .item:hover p,
    .item:hover i,
    .question:hover p,
    .question label:hover,
    input:hover::placeholder select:hover::placeholder {
    color: #008bcc;
    }
    .item input:hover, .item select:hover, .item textarea:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 3px 0 #008bcc;
    color: #008bcc;
    }
    .item {
    position: relative;
    margin: 10px 0;
    }
    .item span {
    color: red;
    }
    input[type="date"]::-webkit-inner-spin-button {
    display: none;
    }
    .item i, input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    font-size: 20px;
    color: #008bcc;
    }
    .item i {
    right: 1%;
    top: 30px;
    z-index: 1;
    }
    [type="date"]::-webkit-calendar-picker-indicator {
    right: 1%;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
    }
    input[type=radio], input[type=checkbox]  {
    display: none;
    }
    label.radio {
    position: relative;
    display: inline-block;
    margin: 5px 20px 15px 0;
    cursor: pointer;
    }
    .question span {
    margin-left: 30px;
    }
    .question-answer label {
    display: block;
    }
    label.radio:before {
    content: "";
    position: absolute;
    left: 0;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 2px solid #ccc;
    }
    input[type=radio]:checked + label:before, label.radio:hover:before {
    border: 2px solid #008bcc;
    }
    label.radio:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 5px;
    width: 8px;
    height: 4px;
    border: 3px solid #008bcc;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    opacity: 0;
    }
    input[type=radio]:checked + label:after {
    opacity: 1;
    }
    .btn-block {
    margin-top: 10px;
    text-align: center;
    }
    button {
    width: 130px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #008bcc;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    }
    button:hover {
    background: #008bcc;
    }
    @media (min-width: 568px) {
    .name-item, .city-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    }
    .name-item input, .name-item div {
    width: calc(50% - 20px);
    }
    .name-item div input {
    width:97%;}
    .name-item div label {
    display:block;
    padding-bottom:5px;
    }
    }
</style>
