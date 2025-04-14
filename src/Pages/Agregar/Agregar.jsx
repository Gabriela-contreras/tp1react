import React from "react";
import ButtonSubmit from "../../Components/ButtonSubmit";
import Input from "../../Components/Input";
import Title from "../../Components/Title/title";
import './Agregar.css'
import Select from "../../Components/select";


const Agregar = () => {

    //estados de peliculas vistas 
    const [titleseen, settitleseen] = React.useState("");
    const [directorseen, setdirectorseen] = React.useState("");
    const [yearseen, setyearseen] = React.useState("");
    const [ratingseen, setratingseen] = React.useState("");
    const [generoseen, setgeneroseen] = React.useState("");
    const [urlImg, seturlImg] = React.useState("");
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
            img: urlImg,
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
        seturlImg("");

        // Recargar la página para mostrar los resultados
        window.location.reload();
    }
    return (
        <div className="boxAgregar">
            <Title text={"Agrega tu Pelicula"} />
            
            <div className="divseenfilms">

                <form action="" className="formHomeseen" >
                    <Input value={titleseen} onChange={settitleseen} placeholder={"Titulo"} type={"text"} />
                    <Input value={directorseen} onChange={setdirectorseen} placeholder={"Director"} type={"text"} />
                    <Input value={yearseen} onChange={setyearseen} placeholder={"Año"} type={"date"} />
                    <Input value={ratingseen} onChange={setratingseen} placeholder={"Rating number"} type={"number"} />
                    <Input value={generoseen} onChange={setgeneroseen} placeholder={"Genero"} type={"text"} />
                    <Input value={urlImg} onChange={seturlImg} placeholder={"Imagen URL"} type={"text"} />
                    <Select value={typefilmseen} onchange={settypefilmseen} />
                    <ButtonSubmit text={"Submit"} onClick={Onclick} />
                </form>
            </div>
        </div>
    )
}


export default Agregar;