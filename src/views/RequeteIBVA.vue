<template>
   <div class="container box mt-6">
      <h2 class="title has-text-info-dark">IBVA - Recherche de valeurs</h2>
      <form class="row columns is-multiline">

        <!--VALIDATION ERREUR-->
        <!--P1-->
        <div class="column is-12">
          <div class="field">
            <label for="prenom1" class="label">Numero de série</label>
            <div class="control">
              <input id="prenom1" class="input" type="text"
                     placeholder="Numéro de série"  required>
            </div>
          </div>
        </div>
        <!--P2-->
        <div class="column is-12">
          <div class="field">
            <label for="passeport" class="label">Numéro de passeport</label>
            <div class="control">
              <input id="passeport" class="input" type="text"
                     placeholder="Numero de passeport" required>
            </div>
          </div>
        </div>
         <!--P2-->
         <div class="column is-12">
          <div class="field">
            <label for="oeuvre" class="label">Titre de l’oeuvre d’art</label>
            <div class="control">
              <input id="oeuvre" class="input" type="text"
                     placeholder="Titre de l’oeuvre d’art" required>
            </div>
          </div>
        </div>
 <!--P2-->
     <div class="column is-12">
          <div class="field">
            <label for="auteur" class="label">Nom de l'auteur</label>
            <div class="control">
              <input id="auteur" class="input" type="text"
                     placeholder="Nom de l'auteur" required>
            </div>
          </div>
        </div>
        <div class="column is-12">
          <button id="form" class="button is-info is-fullwidth"
                  type="button" value="Recherche" >
            Recherche
          </button>
          <div class="column is-12">
          <button id="annuler" class="button is-danger " style="width: 30%; margin-left: 30%;"
                  type="button" value="Annuler" v-on:click="$router.go(-1) "
                  v-on:keydown="$router.go(-1)">
            Annuler
          </button>
        </div>
        </div>
    </form>
    </div>
</template>
