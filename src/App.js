import logo from './logo.svg';
import './App.css';
import ButtonSubmit from './common/ButtonSubmit';
import Input from './common/Input';
// import InputBusqueda from './common/InputBusqueda';
import Navbar from './Navbar';
import FilmCard from './common/FilmCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Lista de peliculas</h1>
        <div className='Filmsbox'>
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />
          <FilmCard title={"Que paso ayer?"} genre={"comedia"} />

          <hr className='hr'/>


        </div>
        <Input placeholder={"Agrega pelicula vista"} />
        <Input placeholder={"Agrega pelicula por ver"} />
        <ButtonSubmit text="Submit" onClick={() => alert('Button clicked!')} />

      </header>
    </div>
  );
}

export default App;
