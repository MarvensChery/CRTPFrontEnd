<template>
    <div class="columns is-vcentered">

        <div class="login column is-12">
            <section class="section">
                <div class="has-text-centered">
                    <img class="login-logo" id="img" src="/images/etudiant.png" alt="logo etudiant">
                    <h1 class="subtitle mb-3" ><strong>Lequel des deux êtes vous ?</strong> </h1>
                </div>
                <div class="switch-button" id="switch1">
                    <input id="toggle" class="switch-button-checkbox" type="checkbox"
                    @change="toggleCheckbox"/>
                    <label for="toggle" class="switch-button-label">
                        <span class="switch-button-label-span" id="btn">Étudiant</span>
                    </label>
                  </div>
                <div class="field " v-if="!this.store.Professeur">
                    <label for="ID" class="label mt-3" id="nomLabel" >
                        Identifiant de l'étudiant</label>
                    <div class="control has-icons-right">
                        <input class="input is-info " id="ID"
                        placeholder="00000" type="text" v-model="Identifiant">
                        <span class="icon is-small is-right">
                            <i class="fa fa-user"></i>
                        </span>
                    </div>
                </div>
                <div class="field " v-if="this.store.Professeur">
                    <label for="ID" class="label mt-3" id="nomLabel" >
                        Identifiant du Professeur</label>
                    <div class="control has-icons-right">
                        <input class="input is-info " id="ID"
                        placeholder="00000" type="text" v-model="Identifiant">
                        <span class="icon is-small is-right">
                            <i class="fa fa-user"></i>
                        </span>
                    </div>
                </div>
                <div ></div>
                <div class="field" v-if="!this.store.Professeur">
                    <p class="label" id="mdpLabel">Mot de passe de l'étudiant</p>
                    <div class="control has-icons-right">
                        <label for="mdp"></label>
                        <input class="input is-info" id="mdp" placeholder="•••••••"
                        type="password" v-model="mdp">
                        <span class="icon is-large is-right">
                            <i class="fa fa-key"></i>
                        </span>
                    </div>
                    <p id="error"></p>
                </div>
                <div class="field" v-if="this.store.Professeur">
                    <p class="label" id="mdpLabel">Mot de passe du Professeur</p>
                    <div class="control has-icons-right">
                        <label for="mdp"></label>
                        <input class="input is-info" id="mdp" placeholder="•••••••"
                        type="password" v-model="mdp">
                        <span class="icon is-large is-right">
                            <i class="fa fa-key"></i>
                        </span>
                    </div>
                    <p id="error"></p>
                </div>
                <div class="has-text-centered">
                  <div class="notification is-danger is-light" v-if="connectionFailed===true">
                    Connexion ratée
                  </div>
                    <button
                        class="button is-vcentered is-info is-outlined
                               is-medium is-rounded "
                        id="co" v-on:click="connect" >Se connecter</button><br>
                </div>
                <footer id="pied">
                    <article class="message is-info">
                        <div class="message-header">
                            <p><i class="fa-solid fa-circle-info"></i> À savoir  </p>
                        </div>
                        <div
                            class="message-body columns is-mobile ">
                            <p><strong>Les
                    informations accessibles par le CRTP sont
                    confidentielles.</strong> Le CRTP doit &ecirc;tre utilis&eacute;
                    par les &eacute;tudiants uniquement lors de
                    simulation et sous la supervision d'un enseignant. Tout &eacute;tudiant qui
                    d&eacute;roge &agrave; ces r&egrave;gles s'expose &agrave; un &eacute;chec
                    dans le cadre de ses cours. <br><br></p>
                        </div>
                    </article>

                </footer>

            </section>
        </div>
        <div id="particles-js" class="interactive-bg column is-8  is-hiden-tablet is-hiden-mobile ">
        </div>

    </div>
</template>

<script>/* eslint-disable */
import {connexion} from "@/stores/connexionStore"
export default {
    name: 'ConnexionView',
    data() {
        return {
          Identifiant: '',
            mdp: '',
            check: false,
            connectionFailed: false,

        };
    },
    setup(){
 const store = connexion();
 //exposer l'objet store à la vue
 return { store };
 },
    async mounted(){
      this.connectionFailed=false;
    },
    methods: {

        async connect() {
            const url = 'http://localhost:3000/connexion';
            const Identifiant = this.Identifiant;
            const MotDePasse = this.mdp;
            const body = { Identifiant, MotDePasse };

            // effectuer le fetch
            const response = await fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(body),
            });

            // traiter la réponse
            if (response.ok) {
              this.connectionFailed=false;
                const data = await response.json();
                this.store.Professeur = this.check;
                if (this.store.Professeur == !data.Etudiant) {
                  if (this.store.Professeur) { this.store.token = await data.token,
                    this.$router.push('/')}
                else {this.store.token = await data.token,this.$router.push('/etudiant')}}
                else {
              this.connectionFailed=true;
                console.error('une erreur sest produite');
            }

            } else {
              this.connectionFailed=true;
                console.error('une erreur sest produite');
            }

        },
        async toggleCheckbox() {
          this.check = !this.check
      this.$emit('setCheckboxVal', this.check)
      this.connectionFailed=false;
      this.store.Professeur = this.check;
    }
  },


};
</script>

<style scoped>


@media (max-width: 800px) {
  .interactive-bg {
    display: none;
  }
}

.input {
  border-radius: 50px;
}

.button {
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 150px;
}

.login-logo {
  margin: 0 auto;
  margin-bottom: 50px;
  max-height: 100px;
}

.columns {
  margin: 0px;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.switch-button {
  background: rgb(154, 204, 243);
  border-radius: 30px;
  overflow: hidden;
  width: 240px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  color: #ffffff;
  position: relative;
  padding-right: 120px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto
}
.switch-button:before {
  content: "Professeur";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  pointer-events: none;
}
.switch-button-checkbox {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
}
.switch-button-checkbox:checked + .switch-button-label:before {
  transform: translateX(120px);
  transition: transform 300ms linear;
}
.switch-button-checkbox + .switch-button-label {
  position: relative;
  padding: 15px 0;
  display: block;
  user-select: none;
  pointer-events: none;
}
.switch-button-checkbox + .switch-button-label:before {
  content: "";
  background: rgb(62,142,208);
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 30px;
  transform: translateX(0);
  transition: transform 300ms;
}
.switch-button-checkbox + .switch-button-label .switch-button-label-span {
  position: relative;
}
</style>
