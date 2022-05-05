<template>
<div calss="section">
        <div v-if="this.$route.params.Idpersonne" class="container box my-6">
        <h2 class="title has-text-info-dark">AJOUT D'UNE CONDITION À RESPECTER</h2>
        <form class="row columns is-multiline">
            <!--Condition-->
            <div class="column is-12 my-6">
                <div class="field">
                    <div class="columns">
                        <label for="Condition" class="label column is-1">Condition :</label>
                        <div class="select">
                        <select v-model="key"
                        id='Condition' name='Condition'>
                                <option disabled value=''
                                selected>Choisissez une des conditions</option>
                                <option value='Avoir comme adresse le'>
                                    Avoir comme adresse le</option>
                                <option value='Doit garder la paix et avoir bonne conduite'>
                                    Doit garder la paix et avoir bonne conduite</option>
                                <option value=
                                "Aucune consommation d'alcool ou de drogue non prescrite">
                                    Aucune consommation d'alcool ou de drogue non prescrite</option>
                                <option value='Ne pas entrer en contact avec'>
                                    Ne pas entrer en contact avec </option>
                                <option value='Ne pas fréquenter'>Ne pas fréquenter </option>
                                <option value='Doit demeurer à cet endroit entre'>
                                    Doit demeurer à cet endroit entre</option>
                            </select>
                        </div>
                        <input v-model="this.input1"
                        v-if="this.key.replace(/\s/g,'') == 'Avoircommeadressele'
                        || this.key.replace(/\s/g,'') == 'Nepasentrerencontactavec' ||
                        this.key.replace(/\s/g,'') == 'Nepasfréquenter'"
                        id="inputconditions1" class="column input is-4"
                        type="text" placeholder="Remplissez la case">
                        <input v-model="this.input2"
                        v-if="this.key.replace(/\s/g,'') == 'Doitdemeureràcetendroitentre'"
                        id="inputconditions2" class="column input is-2"
                        type="text" placeholder="HH:MM:SS">
                        <span id="span1" class="is-hidden"> et </span>
                        <input v-model="this.input3"
                        v-if="this.key.replace(/\s/g,'') == 'Doitdemeureràcetendroitentre'"
                        id="inputconditions3" class="column input is-2"
                        type="text" placeholder="HH:MM:SS">
                    </div>
                </div>
            </div>

            <!--BOUTONS-->
            <div class="column is-3 ">
                <input id="retour" class="button is-fullwidth is-info" type="button" value="Retour">
            </div>
            <div class="column is-3 ">
                <input v-on:click="boutonajouter()" id="ajouter" class="button is-fullwidth is-info"
                type="button"
                value="Ajouter">
            </div>
            <div class="column is-3 ">
                <input id="annuler" class="button is-fullwidth is-info" type="button"
                value="Annuler">
            </div>
        </form>
    </div>
    <div v-if="this.$route.params.Idcondition" class="container box my-6">
        <h2 class="title has-text-info-dark">MODIFICATION D'UNE CONDITION</h2>
        <form class="row columns is-multiline">
            <!--Condition-->
            <div v-if="this.Condition.length > 0" class="column is-12 my-6">
                <div class="field">
                    <div class="columns">
                        <label for="Condition" id="condi"
                        class="label column is-1">Condition: </label>
                            <span id="span"> {{ this.Condition[0].Libelle }} : </span>
                            <input v-model="this.input1"
                            v-if="this.Condition[0].Libelle.replace(/\s/g,'') ==
                            'Nepasentrerencontactavec' ||
                            this.Condition[0].Libelle.replace(/\s/g,'') == 'Nepasfréquenter' ||
                            this.Condition[0].Libelle.replace(/\s/g,'') ==
                            'Avoircommeadressele'"
                        id="inputconditions1" class="column input is-4"
                        type="text" placeholder="Remplissez la case">
                        <input v-model="this.input2"
                        v-if="this.Condition[0].Libelle.replace(/\s/g,'') ==
                        'Doitdemeureràcetendroitentre'"
                        id="inputconditions2" class="column input is-2"
                        type="text" placeholder="HH:MM:SS">
                        <span id="span1" class="is-hidden"> et </span>
                        <input v-model="this.input3"
                        v-if="this.Condition[0].Libelle.replace(/\s/g,'') ==
                        'Doitdemeureràcetendroitentre'"
                        id="inputconditions3" class="column input is-2"
                        type="text" placeholder="HH:MM:SS">
                    </div>
                </div>
            </div>

            <!--BOUTONS-->
            <div class="column is-3 ">
                <input id="retour" class="button is-fullwidth is-info" type="button" value="Retour">
            </div>
            <div class="column is-3 ">
        <input v-on:click="boutonmodifier()" id="modifier" class="button is-fullwidth is-info"
        type="button"
                value="Modifier">
            </div>
            <div class="column is-3 ">
                <input v-on:click="boutonsupprimer()"
                id="supprimer" class="button is-fullwidth is-info" type="button"
                value="Supprimer">
            </div>
        </form>
    </div>
</div>

</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ConditionView',
    data() {
        return {
            key: '',
            Condition: [],
            info: [],
            input1: '',
            input2: '',
            input3: '',
        };
    },
    mounted() {
        this.ReturnCondition();
    },
    methods: {
        async ReturnCondition() {
            if (this.$route.params.Idcondition) {
                const reponse = await fetch(`http://localhost:3000/conditions/${this.$route.params.Idcondition}`);
                if (reponse.ok) {
                    this.Condition = await reponse.json();
                }
            } else {
                const reponse = await fetch(`http://localhost:3000/conditions/returnidippe/${this.$route.params.Idpersonne}`);
                if (reponse.ok) {
                    this.Condition = await reponse.json();
                }
            }
        },
        async boutonmodifier() {
            const settings = {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                },
            };
            if (this.Condition[0].Libelle.replace(/\s/g, '') === 'Avoircommeadressele') {
                await fetch(`http://localhost:3000/conditions/updateconditionadresse/${this.Condition[0].IdPersonne}/${this.input1}`, settings);
                alert('condition modifier');
            } else if (this.Condition[0].Libelle.replace(/\s/g, '') === 'Nepasentrerencontactavec') {
                await fetch(`http://localhost:3000/conditions/updateconditionvictime/${this.$route.params.Idcondition}/${this.input1}`, settings);
                alert('condition modifier');
            } else if (this.Condition[0].Libelle.replace(/\s/g, '') === 'Nepasfréquenter') {
                await fetch(`http://localhost:3000/conditions/updatefrequentation/${this.$route.params.Idcondition}/${this.input1}`, settings);
                alert('condition modifier');
            } else if (this.Condition[0].Libelle.replace(/\s/g, '') === 'Doitdemeureràcetendroitentre') {
                await fetch(`http://localhost:3000/conditions/updateheure/${this.$route.params.Idcondition}/${this.input2}/${this.input3}`, settings);
                alert('condition modifier');
            } else {
                alert('cette condition peut seulement etre supprimer');
            }
        },
        async boutonajouter() {
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
            };
            if (this.key.replace(/\s/g, '') === 'Doitgarderlapaixetavoirbonneconduite' || this.key.replace(/\s/g, '') === "Aucuneconsommationd'alcooloudedroguenonprescrite") {
                const ajout = await fetch(`http://localhost:3000/conditions/ajoutercondition/${this.$route.params.Idpersonne}/${this.Condition[0].IdIPPE}/${this.key}`, settings);
                if (ajout.ok) {
                    alert('Condition Ajouter');
                } else {
                    console.error('ERROR');
                }
            } else if (this.key.replace(/\s/g, '') === 'Avoircommeadressele') {
                const ajout = await fetch(`http://localhost:3000/conditions/ajouterconditionadresse/${this.Condition[0].IdIPPE}/${this.key}/${this.$route.params.Idpersonne}/${this.input1}`, settings);
                if (ajout.ok) {
                    alert('Condition Ajouter');
                } else {
                    console.error('ERROR');
                }
            } else if (this.key.replace(/\s/g, '') === 'Nepasentrerencontactavec') {
                const ajout = await fetch(`http://localhost:3000/conditions/ajouterconditionvictime/${this.$route.params.Idpersonne}/${this.Condition[0].IdIPPE}/${this.key}/${this.input1}`, settings);
                if (ajout.ok) {
                    alert('Condition Ajouter');
                } else {
                    console.error('ERROR');
                }
            } else if (this.key.replace(/\s/g, '') === 'Nepasfréquenter') {
                const ajout = await fetch(`http://localhost:3000/conditions/ajouterconditionfrequentation/${this.$route.params.Idpersonne}/${this.Condition[0].IdIPPE}/${this.key}/${this.input1}`, settings);
                if (ajout.ok) {
                    alert('Condition Ajouter');
                } else {
                    console.error('ERROR');
                }
            } else if (this.key.replace(/\s/g, '') === 'Doitdemeureràcetendroitentre') {
                const ajout = await fetch(`http://localhost:3000/conditions/ajouterconditionheure/${this.$route.params.Idpersonne}/${this.Condition[0].IdIPPE}/${this.key}/${this.input2}/${this.input3}`, settings);
                if (ajout.ok) {
                    alert('Condition Ajouter');
                } else {
                    console.error('ERROR');
                }
            } else {
                alert('cette condition peut seulement etre supprimer');
            }
        },

        async boutonsupprimer() {
            const settings = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            const reponse = await fetch(`http://localhost:3000/conditions/deletecondition/${this.$route.params.Idcondition}`, settings);

            if (reponse.ok) {
                alert('condition supprimer');
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
        margin-top:8px;
        margin-left:30px;
    }

    #inputconditions2 {
        margin-top:5px;
        margin-left:30px;
    }

    #inputconditions3 {
        margin-top:5px;
        margin-left:30px;
    }

    #span {
        margin-left:16px;
        padding-top: 13px;
    }

    select option[value="1"]
    {
        color: #999999;
    }
</style>
