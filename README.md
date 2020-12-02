# somosGIPHY

Es una aplicación en React JS para realizar búsquedas de GIF consumiendo el API de [GIPHY](https://giphy.com/). 

El demo se ha desplegado usando [Heroku](https://www.heroku.com/) por lo que el primer llamado podría tardar mientras levanta el servicio, ver [Demo](https://somosgiphy-extra.herokuapp.com/).

## Instalación

Para el empaquetando aplicaciones se uso [Parcel](https://parceljs.org/) en especifico su última _release_ [v2.parceljs](https://v2.parceljs.org/blog/beta1/).

1. Clonar el repositorio
2. Acceder a la carpeta `somosGIPHY/`
3. `npm i`

### Previo a probar

Es necesario contar con la `api_key` de GIPHY. Y usarla en el archivo `.env` según el archivo de ejemplo `.env_example`.

### Modo desarrollo

Ejecute el sigue comando y se abrirá el proyecto en el navegador por defecto.

```bash
npm run dev
```

### Probar el resultado de _deploy_ en local

Ejecute los siguientes comandos en el orden indicado sigue comando y se abrirá el proyecto en el navegador por defecto.

Este construye una replica similar a la que se haría en el despliegue sobre Heroku.

```bash
npm run buildLocal
```

Ejecuta el proyecto en la url `http://localhost:3000/. Por defecto en el puerto 3000 en caso de que sea diferente remitirse a usar el que se indica en la terminal al ejecutar la instrucción. 

```bash
npm run start
```

### Consideraciones en el despliegue sobre Heroku

Deben existir en el archivo `package.json` los scripts:

* `build`
* `heroku-postbuild`
* `start`

## Tecnologías o herramientas empleadas

 1. **React.js**
 2. **React Router** _(manejo de la navegación / rutas)_
 3. **React Redux** _(estado global de la aplicación)_
 4. **React Bootstrap** _(sistema de diseño visual)_
 5. **Prop-types** _(tipado y valores por defecto de las props)_
 6. **Babel** _(compilador de javascript moderno)_
 7. **ESLint** y **Prettier** _(estilo y formateo código "estándar")_
 8. **Husky** y **Lint-staged** _(pre commit y push commit)_
 9. **Parcel** _(empaquetador de aplicaciones web)_

## Estructura del proyecto

- **`root`**
  - _archivos de configuración_
  - _`server.js`_: el empaquetador Parcel genera una estructura de archivos estáticos (html5, css y javascript) donde el punto de entrada es el `index.html`. Y dado que Heroku sirve aplicaciones de Node.js pero no estáticos, es necesario levantar un servidor de archivos estáticos para finalmente servirlos.
  - **`src`**
    - _`index.html`_: el punto de inicio de la aplicación (Parcel)
    - _`index.js`_: archivo de lógica inicial generando el render, importando estilos globales, la estrategía de estado global (redux).
    - **[`routes`](#Routes)**: contiene toda la estrategia de navegación.
      - _`App.js`_: componente de react.js que ejecuta la generación de rutas y las vistas.
      - _`routes.js`_ y _`paths.js`_: ver detalles adicionales en [Routes](#Routes)
    - **`pages`**: cada componente de react.js que se diferencia de los demás por ser usados para las vistas en la navegación / rutas. Cada página se comporta en estructura de ficheros igual que los _components_ descritos abajo.
    - **`components`**: cada componente de react.js tiene su propia carpeta. Cada fichero debe tener el mismo nombre del componente más un detalle extra y su propia extensión (ej: Hola.jsx, Hola.css, Hola.test.js, Hola.aux.js). Así se facilita la búsqueda de archivos.
    - **`redux`**: ver detalles adicionales en [Redux](#Redux)
      - `actions.js`
      - `reducers.js`
    - **`utils`**: cualquier lógica o proceso separable de los componentes.
    - **`styles`**: estilos globales.
    - **`assets`**: contiene fuentes tipográficas e imágenes.

## Estrategias adicionales DRY para redux y routes

### Routes

1. Se uso un archivo extra llamado `paths.js` donde se exponen las rutas que tendrá toda la aplicación usando funciones que retornan el _string_ esperado. De esta forma se evitan errores de tipos pues solo se escribe una vez, luego solo es necesario importar la función de la ruta deseada y ejecutarla para obtener la cadena.
2. En `App.js` para evitar que el componente se llene de muchas líneas por cada nueva ruta, se emplea el fichero `routes.js` que expone un arreglo de objeto, donde cada uno tendrá las propiedades requeridas por `react-router-dom/Route`. Es más fácil leer cada objeto y sus propiedades de está forma _(puede ser discutible)_; lo que si es cierto es que se asemeja a lo que se debe hacer con las rutas al implementar un SSR.

### Redux

De manera semejante al punto 1. de Routes, aquí se desea evitar re-escribir el valor de la propiedad `type`. Por tal motivo, en el archivo de `actions.js` se generan constantes con el valor de cada `type` por acción y se exportan de modo por defecto.

Con esta estrategia en los _reducers_ se puede importar las constantes según se necesite y usarlas, previniendo los errores de escritura por la convención de nomenclatura _Upper Snake Case_.

