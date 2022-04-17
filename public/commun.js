import {
  menuIPPE
} from './IPPE/ippe_Build.js';



const token = sessionStorage.getItem('token');

function connection() {
  if (token === null) {
      window.location.href = 'http://localhost:5000/';
  }
}

function IPPE(){
  menuIPPE()
}





function accueil(){
function returnAccueil(){
    document.getElementById('enTete').className = ''
    document.getElementById('nav').className ='navbar-burger burger'
    document.getElementById('navmnenu1').className='navbar-menu'
    document.getElementById('texteChangeant').innerHTML = `Bienvenue dans notre systeme de recherche`
    document.getElementById('contenueChangeable').innerHTML =
`<section class="hero-body">
    <!--box gives it the shadow-->
    <div class="container box mt-6">
        <form class="row columns is-multiline">
            <!--NOM-->
            <div class="column is-12">
                <div class="field">
                    <div class="control">
                    <p style="text-align: center;">Cette application a &eacute;tait con&ccedil;ue pour aider la technique polici&egrave;re lors de ces simulations.Nous offrons actuellement les recherches que vous pouvez voir dans nos menus.
                    <br></br><img style="margin: 0 auto; text-align: center; display: block; " src='https://spvm.qc.ca/upload/Fiches/RIC/FormationRIC_bandeau.jpg'></p>
                    </div> 
                </div>
            </div>
            
        </form>
    </div>
</section>`
}
document.getElementById('accueil').addEventListener('click', returnAccueil)
document.getElementById('logo').addEventListener('click', returnAccueil)
}
function menuON(){  //Fonction qui fait apparaitre le menu

  document.getElementById('menuNav').innerHTML = `<nav class="navbar ">
  <div class="navbar-brand">
    <a class="navbar-item" >
      <img src="https://media.discordapp.net/attachments/927002688888131606/956803614402297866/logom9.png?width=512&height=128" id="logo" class="zoom" alt="Logo m9" width="112" height="40">
    </a>

    <div class="navbar-burger burger" id="nav" data-target="navmnenu1">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navmnenu1" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable is-mega">
        <div class="navbar-link flex">
          Type de Recherche et plus <span>
        </div>
        <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
          <div class="container is-fluid">
            <div class="columns">
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Les recherches mise a votre disposition</h1>
                <a class="navbar-item" >
                  <div class="navbar-content" id="ippe">
                    <p>
                      <strong>IPPE</strong>
                      <br>
                      <small>Recherche de personnes</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>FPS</strong>
                      <br>
                      <small>Recherche de personnes bertillones</small> 
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>IBOB</strong>
                      <br>
                      <small>Recherche d'objets</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>IBAF</strong>
                      <br>
                      <small>Recherche d'armes a feu</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>IBVA</strong>
                      <br>
                      <small>Recherche de valeurs</small>
                    </p>
                  </div>
                </a>
              </div>
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Autres recherches</h1>
                <a class="navbar-item">
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche de personnes par plaque d'immatriculation</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche Par nom,prenoms et date de naissance</small> 
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche Par numero de dossier (permis de conduire)</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche de vehicule</small>
                    </p>
                  </div>
                </a>
                <a class="navbar-item" >
                  <div class="navbar-content">
                    <p>
                      <strong>SAAQ</strong>
                      <br>
                      <small>Recherche par adresse</small>
                    </p>
                  </div>
                </a>
              </div>
              <div class="column " id="menuP">
                <h1 class="title is-6 is-mega-menu-title"  >Menu prof</h1>
                <a class="navbar-item " id="banqueP" >
                <strong>Banque de personne</strong>
                </a>
              </div>
            </div>
          </div>

          <!-- <hr class="navbar-divider">
          <div class="navbar-item">
            <div class="navbar-content">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <strong>xxxxxxxxxxxx</strong>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <a class="button bd-is-rss is-small">
                      <span class="icon is-small">
                        <i class="fa fa-rss"></i>
                      </span>
                      <span>xxxxxxxxxx</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <a class="navbar-item " id="accueil">
    Accueil
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
          

          </p>
          <p class="control" id="deco">
            <a class="button " ">
              <span class="icon">
              <i class="fas fa-sign-out-alt"></i></i></span>
              <span>Deconnexion</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>`

console.log(sessionStorage.getItem('token'))
if(sessionStorage.getItem('token') == 'true'){
  document.getElementById('menuP').className = 'is-hidden'
  
}else{
  document.getElementById('banqueP').addEventListener('click',() => {
    window.location.href = '../BanquePersonne/BanquePersonne.html'
  })
}
}



function piedPage() {
  document.getElementById('pied').innerHTML =   `<div class="content has-text-centered">
  <p>
    <strong>Equipe 6</strong> by <a>Salah , Johnny , Nathan et Kassem</a>
   
  </p>
  <p> Usager connecter   <br> ${Matricule}/
  ${Nom}</p>
</div>`

}



const Matricule = sessionStorage.getItem('Matricule');
const Nom = sessionStorage.getItem('Nom');

function deconnexion() {
document.getElementById('deco').addEventListener('click', () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('Matricule');
  sessionStorage.removeItem('Nom');

  window.location.href = 'http://localhost:5000/';

})

}
export {
  piedPage,
  connection,
  IPPE,
  menuON,
  accueil,
  Matricule,
  Nom,
  token,
  deconnexion
};
