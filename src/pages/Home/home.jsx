import React from "react";
import Title from "../../common/Title/title";
import ButtonSubmit from "../../common/ButtonSubmit";
import Input from "../../common/Input";
import './home.css'
import Select from "../../common/select";
import FilmCard from "../../common/FilmCard";


const Home = () => {

    //estados de peliculas vistas 
    const [titleseen, settitleseen] = React.useState("");
    const [directorseen, setdirectorseen] = React.useState("");
    const [yearseen, setyearseen] = React.useState("");
    const [ratingseen, setratingseen] = React.useState("");
    const [generoseen, setgeneroseen] = React.useState("");
    const [typefilmseen, settypefilmseen] = React.useState("");



    //funcion que se ejecuta al hacer click en el boton submit y almacena los valores ingresados en el local storage
    const Onclick = (evento) => {

        evento.preventDefault(); //evita que se recargue la pagina al hacer click en el boton submit
        const valor = {
            title: titleseen,
            director: directorseen,
            year: yearseen,
            rating: ratingseen,
            genero: generoseen,
            typefilm: typefilmseen
        }

        const films = JSON.parse(localStorage.getItem("films")) || []; //obtiene los valores del local storage o un array vacio si no hay nada
        films.push(valor); //agrega el nuevo objeto al array

        //almacena el array en el local storage
        localStorage.setItem("films", JSON.stringify(films));

        //limpio inputs 
        settitleseen("");
        setdirectorseen("");
        setyearseen("");
        setratingseen("");
        setgeneroseen("");
        settypefilmseen("");

        // Recargar la página para mostrar los resultados
        window.location.reload();
    }


    //recuperamos datos localstorage y los mostramos en la lista con checkbox
    const [filmsrecovered, setfilmrecovered] = React.useState([]);
    React.useEffect(() => {
        const films = JSON.parse(localStorage.getItem("films")) || []; //obtiene los valores del local storage o un array vacio si no hay nada
        setfilmrecovered(films); //setea el estado con los valores obtenidos
    }, []);


    //contador de peliculas vistas
    let countviews = 0;
    if (filmsrecovered.length > 0) {
        //si hay peliculas vistas, setea el contador con la cantidad de peliculas vistas
        countviews = filmsrecovered.length;
    }

    return (
        <div className="boxHome">

            <Title text={"Peliculas Vistas"} />

            <div className="divseenfilms">

                <form action="" className="formHomeseen" >
                    <Input value={titleseen} onChange={settitleseen} placeholder={"Titulo"} type={"text"} />
                    <Input value={directorseen} onChange={setdirectorseen} placeholder={"Director"} type={"text"} />
                    <Input value={yearseen} onChange={setyearseen} placeholder={"Año"} type={"date"} />
                    <Input value={ratingseen} onChange={setratingseen} placeholder={"Rating number"} type={"number"} />
                    <Input value={generoseen} onChange={setgeneroseen} placeholder={"Genero"} type={"text"} />
                    <Select value={typefilmseen} onchange={settypefilmseen} />
                    <ButtonSubmit text={"Submit"} onClick={Onclick} />
                </form>

                <div className="divshowfilms">
                    <p>Cantidad: {countviews}</p>

                    {
                        filmsrecovered.length > 0 ? (
                            filmsrecovered.map((film, index) => (
                                <div key={index} className="boxseen">
                                    <FilmCard
                                        titulo={film.title}
                                        director={film.director}
                                        año={film.year}
                                        rating={film.rating}
                                        genero={film.genero}
                                        tipo={film.typefilm}
                                    // click={OnClickCheck}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="pnotfound">No hay peliculas vistas</p>
                        )
                    }
                </div>



            </div>
        </div>
    )
}


export default Home;