# README.MD
Prueba tecnica full stackdeveloper
para el desarrollo del front end se utilizo HTML 5 en combinacion con JS vanilla CSS3 
Se aplican programacion orientada a objetos para el desarrollo de los personajes 

## Contenido

El juego esta desarrolado en una sola pagina "index.html" y se intercambian las vistas con metodologia DOM
Se tienen 5 vistas que el usuario pueda cambiar a su gusto para jugar

## Vista inicio
Tenemos el inicio con un gif que al pulsar se desencadena un evento que  nos lleva a la pagina de seleccion de personaje
debajo un enlace a github del proyecto.
![](/readme/01-pantalla inicio.jpg)



## Seleccion de personajes 

En la pantalla dos tenemos la selecciond e personajes el actor debe elegir entre 4 personajes cada uno tiene caracteristicas diferntes al aplicar metodologia POO para mejorar la jugabilidad
Los personajes solo son selecionables por un jugador quedan inabilitados patron color selecionable gris block.
al ser selecionado aparece el nombre del personaje abajo con su equipo 
ahi un delay de 2 sec para cambiar la pantalla de batalla el actor no debe pulsar para empezar la batalla
![](/readme/02-seleccion personaje.jpg)


## Pantalla Batalla

En esta pantalla la batalla es por turnos
tenemos el boton marcado en el centro donde al pulsar cada jugador de forma automatica hace un ataque
el daño esta definido en una funcion random entre 1 y 20 de 150 de vida total.
el jugador que llegue a 0 pierde
a los lados tenemos don animaciones y debajo nuestra barra de salud  color amarillo vida restante cuando se vacia se pierde la partida
![](/readme/03-batalla.jpg)
![](/readme/03-gif-batalla.jpg)

## Hall of Glory
En la pantalla tenemos un logo con el equipo que ha ganado y debajo el texto con equipo y personaje ganador
al pulsar el logo pasamos de pantalla

![](/readme/04-Hall-of-glory.jpg)

## creditos
En la pantalla final tenemos un gif con una animacion
al pulsar de limpia todo el DOM y se puede volver a jugar.

![](/readme/05-creditos.jpg)

## Documentacion

* [freepik](https://www.freepik.com/font/blackpast#&position=1&from_view=detail#&position=1&from_view=detail) -  fuentes imagenes gif
* [ROME](https://manz.dev//) - css and html and javascript vanilla
* [ROME](https://www.udemy.com/) - cursos creacion paginas web desde cero
* [ROME][(https://grid.malven.co/]referencia grid y container
* [ROME](https://es.stackoverflow.com/) - referencia en consulta errores

