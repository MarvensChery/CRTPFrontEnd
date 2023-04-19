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
      <div class="navbar-burger" id="nav" data-target="navmnenu1" >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navmnenu1" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable is-mega" v-if="this.$store.state.token">
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
                  <router-link v-bind:to="{ name: 'personnesView' }" @click="closeMenu">
                    <a class="navbar-item" v-if="this.$root.$data.Professeur">
                      <div class="navbar-content">
                        <p>
                          <strong>FPS</strong>
                          <br>
                          <small>Recherche de personnes bertillones</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'objetsView' }" @click="closeMenu">
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
                <div class="column" v-if="this.$root.$data.Professeur">
                  <h1 class="title is-6 is-mega-menu-title">Autres recherches</h1>
                  <router-link v-bind:to="{ name: 'SAAQView' }" @click="closeMenu">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>SAAQ</strong>
                          <br>
                          <small>Recherche de personnes par plaque d'immatriculation</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'SAAQView' }" @click="closeMenu">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>SAAQ</strong>
                          <br>
                          <small>Recherche Par nom,prenoms et date de naissance</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'SAAQView' }" @click="closeMenu">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>SAAQ</strong>
                          <br>
                          <small>Recherche Par numero de dossier (permis de conduire)</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'SAAQView' }" @click="closeMenu">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>SAAQ</strong>
                          <br>
                          <small>Recherche de vehicule</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                  <router-link v-bind:to="{ name: 'SAAQView' }" @click="closeMenu">
                    <a class="navbar-item">
                      <div class="navbar-content">
                        <p>
                          <strong>SAAQ</strong>
                          <br>
                          <small>Recherche par adresse</small>
                        </p>
                      </div>
                    </a>
                  </router-link>
                </div>
                <div class="column" id="menuP" v-if="this.$root.$data.Professeur">
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
        <div class="navbar-item">
        <router-link v-if="!this.$root.$data.Professeur && this.$store.state.token"
        @click="closeMenu"
          v-bind:to="{ name: 'etudiant' }">
            <div class="button is-light" style="margin-right: 20px;">
                Acceuil
              </div>
        </router-link>

            <router-link v-if="this.$store.state.token" v-bind:to="{ name: 'accueil' }"
            @click="closeMenu"
            v-on:click="deco"
              class="button is-light is-danger"  >
              Déconnection
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
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const { target } = el.dataset;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

export default {
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleMenu() {
            const burger = document.querySelector('.navbar-burger');
            const menu = document.querySelector('.navbar-menu');
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        },
        closeMenu() {
            const burger = document.querySelector('.navbar-burger');
            const menu = document.querySelector('.navbar-menu');
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
        },
        deco() {
            this.$store.state.token = '';
        },
        toggleNavbar() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style scoped>

</style>
