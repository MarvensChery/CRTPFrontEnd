<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <div>
      <h1
        class="has-text-black"
        style="height: 135px; text-align: center; font-size: 24px"
      >
        <b><u>LISTE D'OBJETS</u></b>
      </h1>
      <div
        class="columns has-text-right has-text-black is-centered"
        style="padding-right: 5%; padding-bottom: 5%"
      >
        <label for="valeursFiltres">Filtrer par:</label>
        <div class="select">
          <select v-model="valeursFiltres">
            <option></option>
            <option v-for="i in optionsValeurs" :value="i" :key="i">
              {{ i }}
            </option>
          </select>
        </div>
        <input
          id="type"
          style="height: 40px"
          placeholder="Valeur du filtre"
          v-model="valValeurs"
        />
      </div>

      <div class="table-container">
        <table
          class="table is-striped is-fullwidth is-bordered is-centered my-5"
        >
          <thead>
            <tr>
              <th class="is-info">Numéro de Série</th>
              <th class="is-info">Marque</th>
              <th class="is-info">Modèle</th>
              <th class="is-info">Type d'objet</th>
              <th class="is-info">Numéro d'évènement</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="o in filtresValeurs" v-bind:key="o.idBOB">
              <td>{{ o.NoSerie }}</td>
              <td>{{ o.Marque }}</td>
              <td>{{ o.Modele }}</td>
              <td>{{ o.TypeObjet }}</td>
              <td>{{ o.NoEvenement }}</td>
              <td>
                <router-link
                  :to="{
                    name: 'modifObjetView',
                    params: { idObjet: o.IdIBOB },
                  }"
                >
                  <i class="fas fa-edit"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="buttons is-centered"
      style="padding-top: 5%; padding-bottom: 5%"
    >
      <div>
        <button
          v-if="this.store.Professeur"
          v-on:click="this.$router.push({ path: '/' })"
          class="button is-info"
          type="button"
          @click="success"
        >
          Retour a l'accueil
        </button>
        <button
          v-if="!this.store.Professeur"
          v-on:click="this.$router.push({ path: '/etudiant' })"
          class="button is-info"
          type="button"
          @click="success"
        >
          Retour a l'accueil
        </button>
      </div>
      <div>
        <button
          v-if="this.$route.name === 'objetsView'"
          v-on:click="this.$router.push({ name: 'objetView' })"
          class="button is-info"
          type="sumbit"
        >
          Ajouter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { connexion } from '@/stores/connexionStore';
import { createToast } from 'mosha-vue-toastify';
import { svrURL } from '../constantes';
import 'mosha-vue-toastify/dist/style.css';
// noinspection JSUnusedGlobalSymbols
export default {
    name: 'ObjetsView',
    data() {
        return {
            valeurs: [],
            optionsValeurs: [],
            valeursFiltres: '',
            valValeurs: '',
        };
    },
    computed: {
        filtresValeurs() {
            // Permet de filtré les données de facon reactif
            let filtresValeurs = this.valeurs;
            const ftr = this.valeursFiltres;
            if (this.valeursFiltres !== '' && this.valValeurs !== '') {
                filtresValeurs = filtresValeurs.filter((i) => i[ftr].toLowerCase()
                    .includes(this.valValeurs.toLowerCase()));
            }
            return filtresValeurs;
        },
    },
    setup() {
        const success = () => {
            createToast('success', {
                timeout: 2000,
                position: 'bottom-right',
                type: 'success',
                transition: 'slide',
            });
        };
        const store = connexion();
        // exposer l'objet store à la vue
        return {
            store,
            success,
        };
    },
    mounted() {
        this.checkToken();
        this.getAllObjets(); // Get les donnée au chargement de la page
        this.getAllOptions();
    },
    methods: {
        checkToken() {
            if (this.store.token === '') {
                this.$router.push('/connexion');
            }
        },
        async getAllObjets() {
            const rep = await fetch(`${svrURL}${this.$route.path}`, {
                headers: new Headers({
                    Authorization: this.store.token,
                }),
            });
            const data = await rep.json();

            if (rep.ok) {
                this.valeurs = data;
            }
        },
        async getAllOptions() {
            // get les options (colonne) des donnée
            const rep = await fetch(`${svrURL}${this.$route.path}`, {
                headers: new Headers({
                    Authorization: this.store.token,
                }),
            });
            const filtresListes = await rep.json();

            const filtres = Object.keys(filtresListes[0]);
            filtres.shift();
            this.optionsValeurs = filtres;
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
