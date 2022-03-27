import {
  IPPE,piedPage,accueil,menuON,Matricule,Nom,deconnexion
} from '../commun.js';


document.addEventListener('DOMContentLoaded', () => {
// Get all "navbar-burger" elements
var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Check if there are any nav burgers
if ($navbarBurgers.length > 0) {

  // Add a click event on each of them
  $navbarBurgers.forEach(function ($el) {
    $el.addEventListener('click', function () {

      // Get the target from the "data-target" attribute
      var target = $el.dataset.target;
      var $target = document.getElementById(target);

      // Toggle the class on both the "navbar-burger" and the "navbar-menu"
      $el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
}
document.getElementById('texteChangeant').innerHTML =' Bienvenue dans notre systeme de recherche'


document.getElementById('contenueChangeable').innerHTML = `<section class="hero-body">
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

})
  


menuON();
accueil();
piedPage();
deconnexion();

//////////////////////////////// TOUT CE QUI EST EN HAUT C LES ELEMENT NECESSAIRE AU CHARGEMENT DE LA PAGE ETC..

IPPE(); /// FONCTION QUI FAIT APPARAITRE L IPPE AU CLICK