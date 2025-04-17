import React, { useState } from "react";
import './Agregar.css';
import Title from "../../Components/Title/title";
import Input from "../../Components/Input";
import Select from "../../Components/select";
import ButtonSubmit from "../../Components/ButtonSubmit";
import Swal from "sweetalert2";

const Agregar = () => {
    const [form, setForm] = useState({
        title: "",
        director: "",
        year: "",
        rating: "",
        genero: "",
        img: "",
        description: "",
        estado: "",
        typefilm: ""
    });

    const validarCampos = () => {
        const valores = Object.values(form);
        const campoVacio = valores.some(item => item === "");

        if (campoVacio) {
            Swal.fire({
                title: "Error!",
                text: "Por favor completa todos los campos",
                icon: "error",
                draggable: true
            });
            return false;
        }

        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validarCampos()) {
            Swal.fire({
                title: "Guardado!",
                icon: "success",
                draggable: true
            });

            const films = JSON.parse(localStorage.getItem("films")) || [];
            films.push(form);
            localStorage.setItem("films", JSON.stringify(films));

            setForm({
                title: "",
                director: "",
                year: "",
                rating: "",
                genero: "",
                img: "",
                description: "",
                estado: "",
                typefilm: ""
            });

            window.location.reload();
        }
    };

    return (
        <div className="agregar-pelicula-container">
            <Title text="Añadir película" />

            <form onSubmit={handleSubmit} className="formulario-netflix">

                <div className="form-group">
                    <Input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Título"
                        type="text"
                    />
                </div>

                <div className="form-group">
                    <Input
                        name="director"
                        value={form.director}
                        onChange={handleChange}
                        placeholder="Director"
                        type="text"
                    />
                </div>

                <div className="form-group">
                    <Input
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                        placeholder="Año"
                        type="date"
                    />
                </div>

                <div className="form-group">
                    <Input
                        name="rating"
                        value={form.rating}
                        onChange={handleChange}
                        placeholder="Rating"
                        type="number"
                    />
                </div>

                <div className="form-group">
                    <Input
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="description"
                        type="text"
                    />
                </div>

                <div className="form-group">
                    <Input
                        name="img"
                        value={form.img}
                        onChange={handleChange}
                        placeholder="URL de imagen"
                        type="text"
                    />
                </div>
                
                <div className="form-group">
                    <select name="genero" value={form.genero} onChange={handleChange} required>
                        <option value="">Selecciona un género</option>
                        <option value="accion">Acción</option>
                        <option value="comedia">Comedia</option>
                        <option value="drama">Drama</option>
                        <option value="terror">Terror</option>
                        <option value="romance">Romance</option>
                        <option value="fantasia">Fantasía</option>
                    </select>
                </div>

                <div className="form-group">
                    <Select
                        name="estado"
                        value={form.estado}
                        onChange={handleChange}
                        option1="Vistas"
                        option2="Por ver"
                        type="estado"
                    />
                </div>

                <div className="form-group">
                    <Select
                        name="typefilm"
                        value={form.typefilm}
                        onChange={handleChange}
                        option1="Pelicula"
                        option2="Serie"
                        type="tipo"
                    />
                </div>

                <div className="form-group">
                    <ButtonSubmit text="Guardar" />
                </div>
            </form>
        </div>
    );
};

export default Agregar;
