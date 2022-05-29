# README.MD
Prueba tecnica full stackdeveloper
para el desarrollo del front end se utilizo HTML 5 en combinacion con JS vanilla CSS3 
Se aplican programacion orientada a objetos para el desarrollo de los personajes 

## Contenido

El juego esta desarrolado en una sola pagina "index.html" y se intercambian las vistas con metodologia DOM
Se tienen 5 vistas que el usuario pueda  jugar.

## Vista inicio
Tenemos el inicio con un gif que al pulsar se desencadena un evento que nos lleva a la pagina de seleccion de personaje
debajo un enlace a github del proyecto.

![](/readme/01-pantalla-inicio.jpg)



## Seleccion de personajes 

En la pantalla 2 tenemos la seleccion de personajes donde el actor debe elegir entre 4 personajes cada uno tiene caracteristicas diferentes al aplicar metodologia POO para mejorar la jugabilidad.
Los personajes solo son selecionables por un jugador quedando inabilitados con el patron color selecionable y gris block.
Al ser selecionado aparece el nombre del personaje en su equipo .
Tenemos un delay de 2 sec para cambiar la pantalla de batalla el actor no debe pulsar para empezar la batalla
![](/readme/02-seleccion-personaje.jpg)


## Pantalla Batalla

En esta pantalla discurre la batalla que es por turnos.
disponemos de  el boton marcado en el centro donde al pulsar cada equipo  de forma automatica genera un ataque.
El daño esta definido en una funcion random entre 1 y 20 sobre  150 de vida total.
El jugador que consiga hacer perder toda la energia al contrario gana. 
A los lados tenemos don animaciones y debajo nuestra barra de salud  color amarillo vida restante cuando se vacia se pierde la partida.
![](/readme/03-batalla.jpg)
![](/readme/03-gif-batalla.jpg)

## Hall of Glory
En la pantalla tenemos un logo con el equipo que ha ganado y debajo el texto con equipo y personaje ganador
al pulsar el logo desencadenamos el evento y pasamos a la siguente pantalla. 

![](/readme/04-Hall-of-glory.jpg)

## creditos
En la pantalla final tenemos un gif con una animacion
al pulsar de limpia todo el DOM y se puede volver a jugar.

![](/readme/05-creditos.jpg)

## Documentacion

* [freepik](https://www.freepik.com/font/blackpast#&position=1&from_view=detail#&position=1&from_view=detail) -  fuentes imagenes gif
* [manz.dev](https://manz.dev//) - css and html and javascript vanilla
* [udemy](https://www.udemy.com/) - cursos creacion paginas web desde cero
* [grid][(https://grid.malven.co/]referencia grid y container
* [stackoverflow](https://es.stackoverflow.com/) - referencia en consulta errores

