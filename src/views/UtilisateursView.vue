<template>
  <div v-if="this.tableauPersonne.length != 0">
    <div class="columns is-multiline is-size-3-touch">
      <!--box gives it the shadow-->
      <div class="column is-10 is-12-touch is-offset-1-desktop box pb-5">
        <form class="has-text-centered">
          <div class="is-centered">
            <h1 class="title is-1-touch is-full my-6">Table d'utilisateurs</h1>
            <div class="columns is-multiline">
              <label
              style=" margin-left: 30%;"
              class="column is-3-desktop is-offset-1-desktop is-6-touch"
                for="votre-nom"
                >Filtrer par nom de famille:</label
              >
              <input
              style=" margin-left: 30%;"
              class="column input is-hovered is-size-6 is-size-4-touch
                 is-4-desktop is-5-touch mr-6"
                v-model="nom"
                id="votre-nom"
                name="votre-nom"
                type="text"
              />
            </div>
            <div>
              <hr />
            </div>
            <div class="table-container">
              <table class="table is-striped is-fullwidth is-bordered is-centered my-5">
                <thead>
                  <tr>
                    <th class="is-info">Id utilisateur</th>
                    <th class="is-info">Id personne</th>
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
                    <td>{{ personne.IdUtilisateur }}</td>
                    <td>{{ personne.IdPersonne }}</td>
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
        <!--BUTTON HOME-->
        <div class="column is-12">
          <button id="annuler" class="button is-danger " style="width: 30%; margin-left: 30%;"
                  type="button" value="Annuler" v-on:click="$router.go(-1) "
                  v-on:keydown="$router.go(-1)">
            Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
import { connexion } from '@/stores/connexionStore';
import { svrURL } from '@/constantes';

export default {
    name: 'UtilisateursView',
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
    setup() {
        const store = connexion();
        // exposer l'objet store à la vue
        return { store };
    },
    mounted() {
        this.checkToken();
        this.getPersonnes();
    },
    methods: {
        checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
        goPageModifierPersonnes(id) {
            this.$router.push(`/personne/${id}`);
        },
        async avoirPIPPE(i) {
            const a = await fetch(`${svrURL}/personnes/${i}`, {
                headers: new Headers({
                    Authorization: this.store.token,
                }),
            });
            if (a.ok) {
                const b = await a.json();
                return b[0];
            }
            return null;
        },
        async getPersonnes() {
            const users = await fetch(`${svrURL}/utilisateurs`, {
                headers: new Headers({
                    Authorization: this.store.token,
                }),
            });
            if (users.ok) {
                const json = await users.json();
                console.log(json);
                const promises = json.map((item) => this.avoirPIPPE(item.IdPersonne));
                const results = await Promise.all(promises);
                for (let i = 0; i < json.length; i++) {
                    results[i].IdUtilisateur = json[i].IdUtilisateur;
                }
                this.tableauPersonne = results;
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
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#wrapper {
  flex: 1;
}

.zoom:hover {
  transform: scale(1.1);
}

.shadow:hover {
  -webkit-filter: drop-shadow(-5px 2px 5px #999999);
}

#imgHome {
  height: 64px;
  width: 64px;
  float: left;
  margin-top: -50px;
  margin-bottom: -100px;
}

#borderNone {
  border: none;
}
</style>
