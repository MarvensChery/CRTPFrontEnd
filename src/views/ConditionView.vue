<template>
<div calss="section">
        <div v-if="this.$route.params.idPersonne" class="container box my-6">
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
    <div v-if="this.$route.params.idCondition" class="container box my-6">
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
                            this.Condition[0].Libelle.replace(/\s/g,'') == 'Nepasfréquenter'"
                        id="inputconditions1" class="column input is-4"
                        type="text" placeholder="Remplissez la case">
                        <div v-if="this.Condition[0].Libelle.replace(/\s/g,'') ==
                            'Avoircommeadressele'">
                        <input v-model="this.input1"
                        id="inputconditions1" class="column input is-4"
                        type="text" placeholder="Remplissez la case">
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
                        </div>
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
        <input v-on:click="modifier()" id="modifier" class="button is-fullwidth is-info"
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
import { svrURL } from '@/constantes';
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ConditionView',
    data() {
        return {
            key: '',
            Condition: [],
            input1: '',
            input2: '',
            input3: '',
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
                const reponse = await fetch(`${svrURL}/conditions/${this.$route.params.idCondition}`);
                if (reponse.ok) {
                    this.Condition = await reponse.json();
                }
            }
        },
        async modifier() {
            const data = JSON.stringify({
                IdPersonne: this.Condition[0].IdPersonne,
                IdIppe: this.Condition[0].IdIppe,
                Libelle: this.sendDataNull(this.Condition[0].Libelle),
                input1: this.sendDataNull(this.input1.trim()),
                input2: this.sendDataNull(this.input2.trim()),
                input3: this.sendDataNull(this.input3.trim()),
            });
            const response = await fetch(`${svrURL}/conditions/${this.Condition[0].IdCondition}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data,
            });
            await response.json();
            if (response.ok) {
                alert('oui');
            } else {
                alert('non');
            }
        },
        async boutonajouter() {
            const data = JSON.stringify({
                IdPersonne: this.$route.params.idPersonne,
                IdIppe: this.$route.params.idIppe,
                Libelle: this.sendDataNull(this.key),
                input1: this.sendDataNull(this.input1.trim()),
                input2: this.sendDataNull(this.input2.trim()),
                input3: this.sendDataNull(this.input3.trim()),
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
                alert('oui');
            } else {
                alert('non');
            }
        },
        async boutonsupprimer() {
            const settings = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            };
            const reponse = await fetch(`${svrURL}/conditions/${this.$route.params.idCondition}`, settings);

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
    #inputconditions1 {
        margin-top:1px;
        margin-left:30px;
    }
    #inputconditions2 {
        margin-top:1px;
        margin-left:30px;
    }
    #inputconditions3 {
        margin-top:1px;
        margin-left:30px;
    }
    #span {
        margin-left:16px;
        padding-top: 5px;
    }
    select option[value="1"]
    {
        color: #999999;
    }
</style>
