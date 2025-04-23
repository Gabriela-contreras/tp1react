const peliculas = [
    // Vistas – Película (9)
    {
      title: "De vuelta a la acción",
      director: "Seth Gordon",
      year: "2025-01-17",
      rating: "8",
      genero: "accion",
      img: "https://hips.hearstapps.com/hmg-prod/images/back-in-action-673b049daaab8.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Diez años después de su último papel, Cameron Diaz vuelve al cine junto a Jamie Foxx para reinterpretar a un matrimonio de ex espías cuya tapadera se desmorona.",
      estado: "Vistas",
      typefilm: "Pelicula"
    },
    {
      title: "Wallace y Gromit: La venganza se sirve con plumas",
      director: "Nick Park, Merlin Crossingham",
      year: "2025-01-30",
      rating: "7",
      genero: "fantasia",
      img: "https://hips.hearstapps.com/hmg-prod/images/wallace-y-gromit-la-venganza-se-sirve-con-plumas-673b0b77726c0.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Gromit sospecha que el nuevo gnomo 'inteligente' de Wallace esconde intenciones siniestras; para salvar a su amigo deberá enfrentarse a un viejo enemigo.",
      estado: "Vistas",
      typefilm: "Pelicula"
    },
    {
      title: "Algo embarazada",
      director: "Tyler Spindel",
      year: "2025-02-05",
      rating: "3",
      genero: "comedia",
      img: "https://hips.hearstapps.com/hmg-prod/images/lpmxvcdoneg4rvsijweimhhi1ah-67ea7474ebd54.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Celosa del embarazo de su mejor amiga, Amy se pone una barriga postiza y una mentira… hasta que el 'juego' la lleva a su pareja ideal.",
      estado: "Vistas",
      typefilm: "Pelicula"
    },
    {
      title: "The Witcher: Sirenas de las profundidades",
      director: "Kang Hei Chul",
      year: "2025-02-11",
      rating: "9",
      genero: "fantasia",
      img: "https://hips.hearstapps.com/hmg-prod/images/witcher-sirens-poster-679c9ce7599a1.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Geralt mediará en una guerra inminente entre la gente del mar y un pueblo costero, en una de sus primeras aventuras como brujo profesional.",
      estado: "Vistas",
      typefilm: "Pelicula"
    },
    {
      title: "Estado Eléctrico",
      director: "Anthony Russo, Joe Russo",
      year: "2025-03-14",
      rating: "6",
      genero: "fantasia",
      img: "https://hips.hearstapps.com/hmg-prod/images/the-electric-state-673b04562675b.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "En un retro futuro post guerra, una adolescente atraviesa EE. UU. con un robot y un vagabundo en busca de su hermano desaparecido.",
      estado: "Vistas",
      typefilm: "Pelicula"
    },
    {
      title: "Revelación",
      director: "Yeon Sang‑ho",
      year: "2025-03-21",
      rating: "9",
      genero: "terror",
      img: "https://hips.hearstapps.com/hmg-prod/images/revelations-netflix-revelacion-67c818b19940e.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Una inspectora atormentada por las visiones de su hermana muerta se cruza con un pastor convencido de impartir castigo divino.",
      estado: "Vistas",
      typefilm: "Pelicula"
    },
    {
      title: "Lo mejor del mundo",
      director: "Salvador Espinosa",
      year: "2025-04-09",
      rating: "5",
      genero: "comedia",
      img: "https://hips.hearstapps.com/hmg-prod/images/lo-mejor-del-mundo-504695436-large-67ea74ca5cdd8.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Padre e hijo emprenden un viaje disparatado por México para averiguar si realmente comparten lazo biológico.",
      estado: "Vistas",
      typefilm: "Pelicula"
    },
    {
      title: "iRehén",
      director: "Bobby Boermans",
      year: "2025-04-14",
      rating: "10",
      genero: "accion",
      img: "https://hips.hearstapps.com/hmg-prod/images/nmeyocldlmvocch3ufqw33rmfm6-1-67ea750a44ca0.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Recreación del atraco con rehenes que paralizó Ámsterdam en 2022; cada decisión pone vidas en la balanza.",
      estado: "Vistas",
      typefilm: "Pelicula"
    },
    {
      title: "Pánico en el tren bala",
      director: "Shinji Higuchi",
      year: "2025-04-23",
      rating: "9",
      genero: "accion",
      img: "https://hips.hearstapps.com/hmg-prod/images/bullet-train-explosion-netflix-67c819d9e758c.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Un grupo terrorista coloca una bomba en el tren Hikari 109: explotará si baja de 80 km/h. El operador debe salvar a 1 500 pasajeros.",
      estado: "Vistas",
      typefilm: "Pelicula"
    },
  
    // Por ver – Serie (9)
    {
      title: "Estragos",
      director: "Gareth Evans",
      year: "2025-04-25",
      rating: "8",
      genero: "accion",
      img: "https://hips.hearstapps.com/hmg-prod/images/havoc-netflix-67c8184e0044f.jpg?crop=0.45xw:1xh;center,top&resize=980:*",
      description:
        "Tom Hardy protagoniza un thriller vertiginoso con influencias del cine de Hong Kong, tras años de retrasos y re‑rodajes.",
      estado: "Por ver",
      typefilm: "Serie"
    },
    {
      title: "La viuda negra",
      director: "Carlos Sedes",
      year: "2025-05-30",
      rating: "6",
      genero: "drama",
      img: "https://hips.hearstapps.com/hmg-prod/images/lvn-22102024-manuelfernandezvaldes-mfv3846-67f649e52edfd.jpg?crop=0.378xw:1.00xh;0.350xw,0&resize=980:*g",
      description:
        "Basada en el caso real de la 'viuda negra de Patraix', investiga el asesinato de un hombre acuchillado siete veces en Valencia.",
      estado: "Por ver",
      typefilm: "Serie"
    },
    {
      title: "La vieja guardia 2",
      director: "Victoria Mahoney",
      year: "2025-07-02",
      rating: "5",
      genero: "accion",
      img: "https://hips.hearstapps.com/hmg-prod/images/dcglwkgg1unotuexzwxsyavboc7-1-67ea755992fbc.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Andy y su equipo de mercenarios inmortales vuelven para impedir que exploten sus poderes, ahora con la ayuda de Uma Thurman y Henry Golding.",
      estado: "Por ver",
      typefilm: "Serie"
    },
    {
      title: "Terminagolf 2",
      director: "Kyle Newacheck",
      year: "2025-07-25",
      rating: "9",
      genero: "comedia",
      img: "https://hips.hearstapps.com/hmg-prod/images/95pinr6tcqctjcdx27s3e4j95x0-67ea7559c75d3.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Adam Sandler retoma a Happy Gilmore tres décadas después, dispuesto a revolucionar de nuevo el golf con su swing demoledor.",
      estado: "Por ver",
      typefilm: "Serie"
    },
    {
      title: "Peaky Blinders",
      director: "Tom Harper",
      year: "2025-09-18",
      rating: "7",
      genero: "drama",
      img: "https://hips.hearstapps.com/hmg-prod/images/peaky-blinders-pelicula-673b07cd02951.jpg?crop=0.375xw:1.00xh;0.208xw,0&resize=980:*",
      description:
        "Cillian Murphy vuelve como Tommy Shelby para un último acto de redención tras la Gran Guerra, con nuevas caras en la banda.",
      estado: "Por ver",
      typefilm: "Serie"
    },
    {
      title: "Puñales por la espalda 3: El misterio de Lázaro",
      director: "Rian Johnson",
      year: "2025-10-24",
      rating: "9",
      genero: "drama",
      img: "https://hips.hearstapps.com/hmg-prod/images/wake-up-dead-man-punales-espalda-3-673b0856bf627.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Benoit Blanc investiga un nuevo asesinato rodeado de sospechosos de lujo: Glenn Close, Jeremy Renner, Josh Brolin, entre otros.",
      estado: "Por ver",
      typefilm: "Serie"
    },
    {
      title: "Frankenstein",
      director: "Guillermo del Toro",
      year: "2025-10-31",
      rating: "6",
      genero: "terror",
      img: "https://hips.hearstapps.com/hmg-prod/images/frankenstein-guillermo-del-toro-673b053e11d2f.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "Del Toro reinterpreta el mito de Mary Shelley con Jacob Elordi como la Criatura y Oscar Isaac como Víctor Frankenstein.",
      estado: "Por ver",
      typefilm: "Serie"
    },
    {
      title: "Fear Street: Prom Queen",
      director: "Matt Palmer",
      year: "2025-10-10",
      rating: "9",
      genero: "terror",
      img: "https://hips.hearstapps.com/hmg-prod/images/fear-street-prom-queen-673b059825a7e.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description:
        "En el baile de graduación de 1988 en Shadyside empiezan a suceder asesinatos en cadena; la coronación de la reina será mortal.",
      estado: "Por ver",
      typefilm: "Serie"
    },
    {
      title: "In Your Dreams",
      director: "Erik Benson, Alex Woo",
      year: "2025-12-05",
      rating: "5",
      genero: "fantasia",
      img: "https://hips.hearstapps.com/hmg-prod/images/in-your-dreams-netflix-673b0c731eb13.jpg?crop=0.375xw:1.00xh;0.301xw,0&resize=980:*",
      description:
        "Dos hermanos viajan al reino de los sueños para encontrar al Sandman y salvar el matrimonio de sus padres.",
      estado: "Por ver",
      typefilm: "Serie"
    }
  ];
  
export default peliculas