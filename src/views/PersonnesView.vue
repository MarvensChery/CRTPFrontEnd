<template>
  <div v-if="this.tableauPersonne.length != 0">
    <div class="columns is-multiline is-size-3-touch">
      <!--box gives it the shadow-->
      <div class="column is-10 is-12-touch is-offset-1-desktop box pb-5">
        <form class="has-text-centered">
          <div class="is-centered">
            <h1 class="title is-1-touch is-full my-6">Table IPPE Alimentation</h1>

              <label
                for="votre-nom"
                ><b>Filtrer par nom de famille:</b></label
              >
              <input class="input is-link is-size-8"
                v-model="nom"
                id="votre-nom"
                name="votre-nom"
                type="text"
              />
            <div>
              <hr />
            </div>
            <div class="table-container">
              <table class="table is-striped is-fullwidth is-bordered is-centered my-5">
                <thead>
                  <tr>
                    <th class="is-info">Nom</th>
                    <th class="is-info">Prenom1</th>
                    <th class="is-info">Prenom2</th>
                    <th class="is-info">Categorie</th>
                    <th class="borderNone">
                        <router-link to="/personne">
                            <i class="fas fa-user-plus"></i>
                        </router-link>
                    </th>
                  </tr>
                </thead>
                <tbody
                  v-for="personne in tableauPersonneFiltrer"
                  v-bind:key="personne.IdPersonne"
                >
                  <tr>
                    <td>{{ personne.NomFamille }}</td>
                    <td>{{ personne.Prenom1 }}</td>
                    <td v-if="personne.Prenom2 !== null">{{ personne.Prenom2 }}</td>
                    <td v-else></td>
                    <td>{{ personne.TypePersonne }}</td>
                    <td class="borderNone" >
                      <i class="fas fa-pen"
                      v-on:click="goPageModifierPersonnes(personne.IdPersonne)"
                      v-on:keydown="goPageModifierPersonnes(personne.IdPersonne)"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols

import { svrURL } from '@/constantes';

export default {
    name: 'PersonnesView',
    data() {
        return {
            nom: '',
            tableauPersonne: [],
        };
    },
    computed: {
        tableauPersonneFiltrer() {
            let personneFiltrer = this.tableauPersonne;
            if (this.nom !== '') {
                personneFiltrer = personneFiltrer.filter((personne) => personne.NomFamille
                    .toLowerCase()
                    .includes(this.nom.toLowerCase()));
            }
            return personneFiltrer;
        },
    },
    mounted() {
        this.getPersonnes();
    },
    methods: {
        goPageModifierPersonnes(id) {
            this.$router.push(`/personne/${id}`);
        },
        async getPersonnes() {
            const rep = await fetch(`${svrURL}/personnes`, {
                headers: new Headers({
                    Authorization: this.$store.state.token,
                }),
            });
            if (rep.ok) {
                const json = await rep.json();
                this.tableauPersonne = json;
                this.tableauPersonne.sort((a, b) => {
                    if (a.NomFamille < b.NomFamille) {
                        return -1;
                    }
                    if (a.NomFamille > b.NomFamille) {
                        return 1;
                    }
                    return 0;
                });
            }
        },

    },
};
</script>

<style scoped>

</style>
