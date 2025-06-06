Correcciones

- Linda UI, buenas animaciones.
- Buen readme. Completo y prolijo.
- Codigo bien estilado, de gran calidad.
- Buen uso de local storage.
- Buen uso de useState y useEffect.
- Buen componente modal.

Observaciones:
- Tienen dos carpetas de /pages y /Pages. La que tiene miniscula tiene solo el navbar dentro. Este navbar
podria estar dentro components.
- Dentro de pages deberian ir unicamente componentes que renderizar una pagina. Modal no entra en esa definicion
- Borren codigo y archivos comentados o que no usan.
- Button card y Button sumbit son muy parecidos uno del otro. Lo mejor hubiera sido tener un unico componente y manejar los dos estados por medio de una prop. (tipo fullWidht)

Nota: 10

# Proyecto MyFlix React 

## Alumnas 
- Contreras Gabriela (FAI-4480)
- Contreras Katherine (FAI-4996)

## Descripción General
Este proyecto implementa una aplicación web con React, permitiendo la gestión de datos mediante una interfaz de usuario intuitiva y responsiva.

## Vercel 
https://tp1react-pied.vercel.app/


## Archivos Iniciales y Sus Funciones

### `index.js`
Punto de entrada principal de la aplicación React. Su función es renderizar el componente raíz (`App`) en el elemento DOM designado, iniciando así la aplicación.

### `App.js`
Componente principal que actúa como contenedor para toda la aplicación. Gestiona el enrutamiento entre páginas y mantiene el estado global de la aplicación.

### `index.css`
Contiene los estilos globales que se aplican a toda la aplicación, estableciendo la base visual del proyecto.

### `package.json`
Archivo de configuración que define las dependencias del proyecto, scripts de ejecución, y metadatos como nombre, versión y descripción.

## Estructura del Proyecto

### `/Components`
Contiene todos los componentes reutilizables de la aplicación. Estos componentes son los bloques fundamentales de la interfaz de usuario.

### `/Pages`
Organiza las distintas secciones de la aplicación:

- **Agregar**: Componentes y lógica para la creación de nuevas peliculas  .
- **Home**: Página principal de la aplicación.
- **Buscar**: Funcionalidad de búsqueda y filtrado de datos.
- **Modal**: Expansion de los datos de una pelicula .
- **Navbar**: Barra de navegación principal.

Cada carpeta contiene su archivo JSX con la lógica del componente y su correspondiente archivo CSS para los estilos específicos.

## Tecnologías Implementadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router**: Manejo de navegación y rutas dentro de la aplicación.
- **CSS**: Estilos personalizados para cada componente y página.
- **SweetAlert2**: Biblioteca para mostrar alertas y notificaciones estilizadas.

## Instalación y Ejecución

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

## Funcionalidades Principales

- Visualización de datos en la página principal
- Creación de nuevos registros
- Búsqueda y filtrado avanzado
- Interfaz responsive adaptada a diferentes dispositivos



¡Gracias por explorar nuestro proyecto 😊😊!
