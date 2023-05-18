<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link v-bind:to="{ name: 'accueil' } " >
      <a class="navbar-item ">
        <img
          src="https://media.discordapp.net/attachments/927002688888131606/956803614402297866/logom9.png?width=512&height=128"
          id="logo" class="zoom" alt="Logo m9" width="112" height="40">
      </a>
    </router-link>
      <!-- Responsive navbar burger -->
      <button class="navbar-burger"
      :class="{ 'is-active': isActive }"
      @click="toggleNavbar" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </button>
    </div>
    <div id="navmnenu1" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable is-mega" v-if="this.store.token">
          <div class="navbar-link flex">
            <span>Type de Recherche et plus</span>
          </div>
          <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
            <div class="container is-fluid">
              <div class="columns">
                <div class="column">
                  <h1 class="title is-6 is-mega-menu-title">
                    Les recherches mise à votre disposition</h1>
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
                  <router-link v-bind:to="{ name: 'RequeteIBOB' }" @click="closeMenu">
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
                  <router-link v-bind:to="{ name: 'RequeteIBAFView' }" @click="closeMenu">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>IBAF</strong>
                          <br>
                          <small>Recherche d'armes à feu</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'RequeteIBVA' }" @click="closeMenu">
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
                <div class="column " id="menuP" v-if="this.store.Professeur">
                  <h1 class="title is-6 is-mega-menu-title">Menu prof</h1>
                  <router-link v-bind:to="{ name: 'personnesView' }" >
                    <a class="navbar-item " id="banqueP">
                      <strong>Banque de personnes</strong>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'objetsView' }">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>Banque d'objets</strong>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'IBAF' }" >
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>Banque d'armes</strong>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'IBVA' }">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>Banque de valeurs</strong>
                        </p>
                      </div>
                    </a>
                  </router-link>
                </div>
                <div class="column " id="menuP" v-if="this.store.Professeur">
                  <h1 class="title is-6 is-mega-menu-title">Utilisateurs</h1>
                  <router-link v-bind:to="{ name: 'UtilisateursView' }">
                  <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>Banque d'utilisateurs</strong>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
        <router-link v-if="!this.store.Professeur && this.store.token"
        @click="closeMenu"
          v-bind:to="{ name: 'etudiant' }">
            <div class="button is-light" style="margin-right: 20px;">
                Accueil
              </div>
        </router-link>

            <router-link v-if="this.store.token" v-bind:to="{ name: 'accueil' }"
            @click="closeMenu"
            v-on:click="deco"
              class="button is-light is-danger"  >
              Déconnexion
            </router-link>

            <router-link v-else v-bind:to="{ name: 'connexion' }" @click="closeMenu">
              <div class="button is-light is-primary">
                Connexion
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
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        deco() {
            this.store.token = '';
            sessionStorage.clear();
        },
        closeMenu() {
            this.isActive = false;
        },
        toggleNavbar() {
            this.isActive = !this.isActive;
        },
    },
    setup() {
        const store = connexion();
        // exposer l'objet store à la vue
        return { store };
    },

};
</script>

<style scoped>

</style>
