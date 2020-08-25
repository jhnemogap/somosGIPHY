# somosGIPHY

Es una aplicación en React JS para realizar búsquedas de GIF consumiendo el API de [GIPHY](https://giphy.com/).

## Instalación

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

## Consideraciones en el despliegue sobre Heroku

Deben existir en el archivo `package.json` los scripts:

* `build`
* `heroku-postbuild`
* `start`
