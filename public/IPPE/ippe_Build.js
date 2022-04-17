function menuIPPE() { //FONCTION QUI FAIT APPARAITRE L IPPE APRES LE CLICK (PC)
    const contenueChangeable = document.getElementById('contenueChangeable');
    const ippe = document.getElementById('ippe');
    ippe.addEventListener('click', () => {
        
    document.getElementById('enTete').className = 'is-hidden'
        document.getElementById('nav').className ='navbar-burger burger'
        document.getElementById('navmnenu1').className='navbar-menu'
        contenueChangeable.innerHTML = `<section class="hero-body ">
                            <!--box gives it the shadow-->
                            <div class="container box mt-6">
                                <h2 class="title has-text-info-dark">Interrogation personne - IPPE</h2>
                                <form class="row columns is-multiline">
                                    <!--NOM-->
                                    <div class="column is-12">
                                        <div class="field">
                                            <label class="label">Nom</label>
                                            <div class="control">
                                                <input id="nom" class="input" type="text" placeholder="Nom" required>
                                            </div>
                                        </div>
                                    </div>
                                    <!--P1-->
                                    <div class="column is-12">
                                        <div class="field">
                                            <label class="label">Prenom 1</label>
                                            <div class="control">
                                                <input id="prenom1" class="input" type="text" placeholder="Prenom 1" required>
                                            </div>
                                        </div>
                                    </div>
                                    <!--P2-->
                                    <div class="column is-12">
                                        <div class="field">
                                            <label class="label">Prenom 2</label>
                                            <div class="control">
                                                <input id="prenom2" class="input" type="text" placeholder="Prenom 2" required>
                                            </div>
                                        </div>
                                    </div>
                                    <!--SEXE-->
                                    <div class="column is-12">
                                        <div class="field">
                                            <label class="label">Sexe</label>
                                            <div class="select is-fullwidth">
                                                <select id='sexe' name='sexe' required >
                                                    <option></option>
                                                    <option>F</option>
                                                    <option>M</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                    
                                    <!--DDN-->
                                    <div class="column is-4">
                                        <label class="label">Année</label>
                                        <div class="select is-fullwidth">
                                            <select id="year" name="year" required>
                                                <option>--Choissisez l'année--</option>
                                                <option value="1940">1940</option>
                                                <option value="1941">1941</option>
                                                <option value="1942">1942</option>
                                                <option value="1943">1943</option>
                                                <option value="1944">1944</option>
                                                <option value="1945">1945</option>
                                                <option value="1946">1946</option>
                                                <option value="1947">1947</option>
                                                <option value="1948">1948</option>
                                                <option value="1949">1949</option>
                                                <option value="1950">1950</option>
                                                <option value="1951">1951</option>
                                                <option value="1952">1952</option>
                                                <option value="1953">1953</option>
                                                <option value="1954">1954</option>
                                                <option value="1955">1955</option>
                                                <option value="1956">1956</option>
                                                <option value="1957">1957</option>
                                                <option value="1958">1958</option>
                                                <option value="1959">1959</option>
                                                <option value="1960">1960</option>
                                                <option value="1961">1961</option>
                                                <option value="1962">1962</option>
                                                <option value="1963">1963</option>
                                                <option value="1964">1964</option>
                                                <option value="1965">1965</option>
                                                <option value="1966">1966</option>
                                                <option value="1967">1967</option>
                                                <option value="1968">1968</option>
                                                <option value="1969">1969</option>
                                                <option value="1970">1970</option>
                                                <option value="1971">1971</option>
                                                <option value="1972">1972</option>
                                                <option value="1973">1973</option>
                                                <option value="1974">1974</option>
                                                <option value="1975">1975</option>
                                                <option value="1976">1976</option>
                                                <option value="1977">1977</option>
                                                <option value="1978">1978</option>
                                                <option value="1979">1979</option>
                                                <option value="1980">1980</option>
                                                <option value="1981">1981</option>
                                                <option value="1982">1982</option>
                                                <option value="1983">1983</option>
                                                <option value="1984">1984</option>
                                                <option value="1985">1985</option>
                                                <option value="1986">1986</option>
                                                <option value="1987">1987</option>
                                                <option value="1988">1988</option>
                                                <option value="1989">1989</option>
                                                <option value="1990">1990</option>
                                                <option value="1991">1991</option>
                                                <option value="1992">1992</option>
                                                <option value="1993">1993</option>
                                                <option value="1994">1994</option>
                                                <option value="1995">1995</option>
                                                <option value="1996">1996</option>
                                                <option value="1997">1997</option>
                                                <option value="1998">1998</option>
                                                <option value="1999">1999</option>
                                                <option value="2000">2000</option>
                                                <option value="2001">2001</option>
                                                <option value="2002">2002</option>
                                                <option value="2003">2003</option>
                                                <option value="2004">2004</option>
                                                <option value="2005">2005</option>
                                                <option value="2006">2006</option>
                                                <option value="2007">2007</option>
                                                <option value="2008">2008</option>
                                                <option value="2009">2009</option>
                                                <option value="2010">2010</option>
                                                <option value="2011">2011</option>
                                                <option value="2012">2012</option>
                                                <option value="2013">2013</option>
                                                <option value="2014">2014</option>
                                                <option value="2015">2015</option>
                                                <option value="2016">2016</option>
                                                <option value="2017">2017</option>
                                                <option value="2018">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="column is-4">
                                        <label class="label">Mois</label>
                                        <div class="select is-fullwidth">
                                            <select id="mois" name="mois" required>
                                                <option selected value=''>--Choissisez le mois--</option>
                                                <option value='01'>Janvier</option>
                                                <option value='02'>Février</option>
                                                <option value='03'>Mars</option>
                                                <option value='04'>Avril</option>
                                                <option value='05'>Mai</option>
                                                <option value='06'>Juin</option>
                                                <option value='07'>Juillet</option>
                                                <option value='08'>Aout</option>
                                                <option value='09'>Septembre</option>
                                                <option value='10'>Octobre</option>
                                                <option value='11'>Novembre</option>
                                                <option value='12'>Décembre</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="column is-4">
                                        <label class="label">Jours</label>
                                        <div class="select is-fullwidth">
                                            <select id="jours" name="jours" required >
                                                <option>--Choissisez le jour--</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--BOUTON-->
                                    <div class="column is-12">
                                        <input id="form" class="button is-info is-fullwidth" type="button" value="Recherche">
                                    </div>
                                </form>
                            </div>
                        </section>`
       IPPEdonnee();                 
    });
    
}
function titleCase(string){
   let a = ""
    if (string === "") {
        a = ""
    }
    else {
        a = string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    return a
}
function sexeCase(string){
    let val = ""
    if(string === "F"){
        val = "masculin=false"
    }else if(string === "M"){
        val = "masculin=true"
    }
    return val
}

function formaterDate(annee,mois,jour){
    let val = `${annee}-${mois}-${jour}T00:00:00.000Z`
    return val
}

function formaterPrenom(prenom2){
    let val = ""
    if(prenom2 === ""){
        val = ''
    }else if(prenom2 !== ""){
        val = `${prenom2}`
    }
    return val
}

function IPPEdonnee(){
    
        const btn = document.getElementById('form');
        btn.addEventListener('click', () => {
            // window.location.assign('../profil/profile.html');  http://127.0.0.1:5500/appweb/Client/public/ippe/test.html?sexe=&year=1959&mois=8&jours=11#


            const nom = document.getElementById("nom").value.toLowerCase()
            const prenom1 = document.getElementById("prenom1").value.toLowerCase()
            const prenom2 = document.getElementById("prenom2").value.toLowerCase()
            const sexe = document.getElementById("sexe").value
            const year = document.getElementById("year").value
            const mois = document.getElementById("mois").value
            const jours = document.getElementById("jours").value
            console.log(prenom2)


            if (nom === "" || jours === ""  || prenom1 === ""  || sexe === ""  || year === "--Choissisez l'année--" || mois === "--Choissisez le mois--" || jours === "--Choissisez le jour--") {
                alert('Merci de remplir les champs')
            } else {
                window.location.href = `../IPPE/ippe_reponse.html?nomFamille=${titleCase(nom.toLowerCase())}&prenom1=${titleCase(prenom1.toLowerCase())}&prenom2=${titleCase(formaterPrenom(prenom2.toLowerCase()))}&${sexeCase(sexe)}&dateNaissance=${formaterDate(year,mois,jours)}`
            }


        })
}
 

export {
    menuIPPE
}