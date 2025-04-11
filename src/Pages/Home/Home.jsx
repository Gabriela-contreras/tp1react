import React from 'react'
import FilmCard from '../../Components/FilmCard';
import ButtonSubmit from '../../Components/ButtonSubmit';
import Input from '../../Components/Input';
import home from "./Home.css"

export default function Home() {
  return (
    <main className='main'>
        <h1>Lista de peliculas</h1>
        <div className='Filmsbox'>
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />
        </div>
        <Input placeholder={"Agrega pelicula vista"} />
        <Input placeholder={"Agrega pelicula por ver"} />
        <ButtonSubmit text="Submit" onClick={() => alert('Button clicked!')} />

    </main>
  )
}
