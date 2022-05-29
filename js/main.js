//Selección de personajes

let choose1 = (DEMON) => {

    if(personaje1 == ""){
        personaje1 = alldemons[DEMON];
        let demonFirst = document.getElementById(DEMON);
        let energiargent = document.getElementById("data" + 1);

        demonFirst.onclick = "";//Bloqueo personaje
        demonFirst.classList.add("selected");
        energiargent.innerHTML = `${personaje1.name}`;
        
        
    } else if( personaje2 == ""){
        personaje2 = alldemons[DEMON];
        let demonFirst = document.getElementById(DEMON);
        let energiargent = document.getElementById("data" + 2);
        demonFirst.onclick = "";//bloqueo personaje
        demonFirst.classList.add("selected");
        energiargent.innerHTML = `${personaje2.name}`;        

        setTimeout(() => {
            changeScreen(3);
            displayGame();
        }, 1200);
    }
}

//Limpieza del juego antes de inicio

const cleanGame = () => {

        window.location.reload();
      
    changeScreen(1);
}

//Cambio de pantalla 

const changeScreen = (change) => {

    let selectedScreen = "screen" + change;

    let arrayScreens = ["screen1", "screen2", "screen3", "screen4","screen5"];

    //Le decimos a filter que si encuentra el valor que le pasamos en el array, no lo incluya
    arrayScreens = arrayScreens.filter(val => !selectedScreen.includes(val));
    //Le ponemos display "block" a la pantalla deseada
    document.getElementById(selectedScreen).style.display = "block";
    //Recorremos el arrayPantallas para poner el display:none
    for(let screen of arrayScreens) {
        document.getElementById(screen).style.display = "none";
    }

 
}

//Display Pokemons elegidos en screen3
let img1 = document.getElementById("imgFighter1");
let img2 = document.getElementById("imgFighter2");

let statspersonaje1 = document.getElementById("stats1");
let statspersonaje2 = document.getElementById("stats2");

let winner = document.getElementById("winner");

   
const displayGame= () => {
        img1.innerHTML = `<img class="fighter1" src="img/luchadoresDOOM/doom4.gif" alt="fighter1" >`;
        img2.innerHTML = `<img class="fighter2" src="img/luchadoresDOOM/doom6.gif" alt="fighter2" >`;

        

        statspersonaje1.innerHTML = `<div class="lifeBar"><div id="lifeBar1"></div>`;
        statspersonaje2.innerHTML = `<div class="lifeBar"><div id="lifeBar2"></div>`;
}

//Funcion pelea

const fight= () => {

    personaje1.atack();
    personaje2.atack();
    
    

    if(personaje1.life <= 0) {  

        changeScreen(4);
        
        winner.innerHTML = `<img class="winner" src="img/logos/batalla.png" alt="winner" > 
        </br> Ganador el  jugador 2 con el personaje ${personaje2.name}`;
    } 

    if(personaje2.life <= 0) {

        changeScreen(4);

        winner.innerHTML = `<img class="winner" src="img/logos/logo2.png" alt="winner" > </br> Ganador el jugador 1 con el personaje ${personaje1.name}`;
    }

    statspersonaje1.innerHTML = `<div class="lifeBar"><div id="lifeBar1"></div>`;
    statspersonaje2.innerHTML = `<div class="lifeBar"><div id="lifeBar2"></div>`;

    document.getElementById("lifeBar1").style.width = personaje1.life + "%";
    document.getElementById("lifeBar2").style.width = personaje2.life + "%";


}
    

//Funcion para random
const functions = {
    
    random(min, max){
        //genero número random
        return Math.floor(Math.random() * (max - min) + min);
    }
    
}


//Declaración de la class Pokemon

class ARGENT {

    constructor(name, id, type, life, fight ) {
        this.name = name;
        this.id = id;
        this.type = type;
        this.life = 100;
        this.fight = functions.random(2,20);
    }

    atack() {
       
        this.life -= this.fight;

        this.fight=functions.random(2,20);
    
    }
};

//Instanciando personajes

let BARON = new ARGENT("BARON", "1",  "DEMON", 150, 150);
let SLAYER = new ARGENT("SLAYER", "2", "SLAYER", 150, 150);
let MANCUBUS = new ARGENT("MANCUBUS", "3", "ARGENT", 130, 150);
let PINKY = new ARGENT("PINKY", "4", "MASCOTA", 200, 170);

//Genero un traductor/diccionario

let alldemons = {
    1 : BARON,
    2 : SLAYER,
    3 : MANCUBUS,
    4 : PINKY
}

//Generando variables básicas de entorno

let personaje1 = "";

let personaje2 = "";
