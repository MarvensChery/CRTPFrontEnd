<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link v-bind:to="{ name: 'accueil' } " @click="closeMenu">
      <a class="navbar-item ">
        <img
          src="https://media.discordapp.net/attachments/927002688888131606/956803614402297866/logom9.png?width=512&height=128"
          id="logo" class="zoom" alt="Logo m9" width="112" height="40">
      </a>
    </router-link>
      <!-- Responsive navbar burger -->
      <div class="navbar-burger"  id="nav" data-target="navmnenu1" >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navmnenu1" class="navbar-menu">
      <div class="navbar-start" v-if="this.store.Professeur">
        <div class="navbar-item has-dropdown is-hoverable is-mega">
          <div class="navbar-link flex">
            <span>Type de Recherche et plus</span>
          </div>
          <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
            <div class="container is-fluid">
              <div class="columns">
                <div class="column">
                  <h1 class="title is-6 is-mega-menu-title">
                    Les recherches mise a votre disposition</h1>
                  <router-link v-bind:to="{ name: 'requeteIPPE' }" @click="closeMenu">
                    <a class="navbar-item">
                      <div class="navbar-content" id="ippe">
                        <p>
                          <strong>IPPE</strong>
                          <br>
                          <small>Recherche de personnes</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'objetsView' }">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>IBOB</strong>
                          <br>
                          <small>Recherche d'objets</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'armesView' }" @click="closeMenu">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>IBAF</strong>
                          <br>
                          <small>Recherche d'armes a feu</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'valeursView' }" @click="closeMenu">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>IBVA</strong>
                          <br>
                          <small>Recherche de valeurs</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                </div>
                <div class="column " id="menuP">
                  <h1 class="title is-6 is-mega-menu-title">Menu prof</h1>
                  <router-link v-bind:to="{ name: 'personnesView' }" @click="closeMenu">
                    <a class="navbar-item " id="banqueP">
                      <strong>Banque de personne</strong>
                    </a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <router-link v-if="!this.store.Professeur" v-bind:to="{ name: 'etudiant' }">
          <a class="navbar-item " id="accueil">
            Accueil
          </a>
        </router-link>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
            </p>
            <router-link v-if="this.store.token" v-on:click="deco"
            class="button is-light is-danger" v-bind:to="{ name: 'accueil' }">
              deconnection
            </router-link>

            <router-link v-else v-bind:to="{ name: 'connexion' }" @click="closeMenu">
              <div class="button is-light is-primary">
                Connection
              </div>

            </router-link>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import { connexion } from '@/stores/connexionStore';

export default {
    name: 'MenuProfesseurView',
    /* eslint-disable */
  methods: {
    deco() {
      this.store.token = '';
    }
  },
  setup(){
 const store = connexion();
 //exposer l'objet store à la vue
 return { store };
 },

};
</script>

<style scoped>

</style>
