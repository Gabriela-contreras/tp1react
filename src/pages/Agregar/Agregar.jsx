import React from "react";
import './Agregar.css'
import Title from "../../Components/Title/title";
import Input from "../../Components/Input";
import Select from "../../Components/select";
import ButtonSubmit from "../../Components/ButtonSubmit";
import Swal from "sweetalert2";

const Agregar = () => {
    //desestructuramos el objeto form para poder usarlo en el formulario
    // antes teniamos un estado para cada input, ahora tenemos un solo estado que contiene todos los inputs
    const [form, setForm] = React.useState({
        title: "",
        director: "",
        year: "",
        rating: "",
        genero: "",
        img: "",
        estado: "",
        typefilm: ""
    });

    const validarCampos = () => {
        // Convertir el objeto form a un array de valores
        const valores = Object.values(form);
        // Verificar si hay algún campo vacío
        const campoVacio = valores.some(item => item === "");
        
        if (campoVacio) {
            Swal.fire({
                title: "Error!",
                text: "Por favor completa todos los campos",
                icon: "error",
                draggable: true
            });
            console.log("Error: Campos vacíos");
            return false;
        }
        
        return true;
    }

    // Function to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    // el onclick del boton submit, guarda los datos en el local storage y resetea el formulario
    const Onclick = (evento) => {
        evento.preventDefault();

        // Validar que todos los campos estén llenos
        if (validarCampos()) {
            Swal.fire({
                title: "Guardado!",
                icon: "success",
                draggable: true
            });
            console.log("Formulario enviado:", form);
            const films = JSON.parse(localStorage.getItem("films")) || [];
            films.push(form);
            localStorage.setItem("films", JSON.stringify(films));
            // reseteamos el formulario 
            setForm({
                title: "",
                director: "",
                year: "",
                rating: "",
                genero: "",
                img: "",
                estado: "",
                typefilm: ""
            });

            // Recargamos la pagina para ver los cambios
            window.location.reload();
        }
    };

    return (
        <div className="boxAgregar">
            <Title text={"Agrega tu Pelicula"} />

            <div className="divseenfilms">
                <form action="" className="formHomeseen">
                    <Input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder={"Titulo"}
                        type={"text"}
                    />
                    <Input
                        name="director"
                        value={form.director}
                        onChange={handleChange}
                        placeholder={"Director"}
                        type={"text"}
                    />
                    <Input
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                        placeholder={"Año"}
                        type={"date"}
                    />
                    <Input
                        name="rating"
                        value={form.rating}
                        onChange={handleChange}
                        placeholder={"Rating number"}
                        type={"number"}
                    />

                    <Input
                        name="img"
                        value={form.img}
                        onChange={handleChange}
                        placeholder={"Imagen URL"}
                        type={"text"}
                    />
                    <select value={form.genero} onChange={handleChange} name="genero" id="genero" className="select">
                        <option value="genero">Genero</option>
                        <option value="accion">Accion</option>
                        <option value="comedia">Comedia</option>
                        <option value="drama">Drama</option>
                        <option value="terror">Terror</option>
                        <option value="romance">Romance</option>
                        <option value="fantasia">Fantasia</option>
                    </select>
                    <Select
                        name="estado"
                        value={form.estado}
                        onChange={handleChange}
                        option1={"Vistas"}
                        option2={"Por ver"}
                        type={"estado"}
                    />
                    <Select
                        name="typefilm"
                        value={form.typefilm}
                        onChange={handleChange}
                        option1={"Pelicula"}
                        option2={"Serie"}
                        type={"tipo"}
                    />

                    <ButtonSubmit text={"Submit"} onClick={Onclick} />
                </form>
            </div>
        </div>
    );
};

export default Agregar;