# API de Libros prometidos
Te doy la bienvenida a este repo, aquí encontrarás nada más y nada menos que una API rest de Libros, con esta aplicación podrás CREAR, EDITAR, ELIMINAR Y ACTUALIZAR los libros que prometas leer.

Para poder hacer uso de ella, debes seguir los siguientes pasos:
## 0️⃣Clona el repo
```sh
git clone https://github.com/CeliaMi/book-api-node.git
```

Abre el proyecto en tu editor de código y desde la terminal👇
## 1️⃣instala las dependencias
```sh
npm i
```
## 2️⃣Pon tus datos para conectar con tus Bases de datos locales
Antes de todo esto, crea dos bases de datos con mysql una que se llame books_app y otra books_app_test.
utiliza el archivo que te he dejado de ejemplo para variables de entorno, borrale la parte de example y rellenalo con tus datos. 
```sh
DB_PASSWORD = 
DB_DEV_NAME = books_app
DB_TEST_NAME = books_app_test
DB_USER = 
```


## 3️⃣Levanta el servidor 
🚀
```sh
npm start
```

Cada uno de los endpoints te llevará a una acción diferente, puedes probarla usando POSTMAN o enlazandola con el front end que tienes en otro de mis repos ( consulta su propio readme para más info)

```sh
git clone https://github.com/CeliaMi/book-app-react.git
```

Aquí te dejo un ejemplo de los datos👀
```sh
    {
        "id": 1,
        "title": "El lenguaje secreto de la naturaleza",
        "writer": "Oscar S. Aranda",
        "book_description": "Este libro es un viaje que nos llevará por maravillosos lugares alrededor del mundo para conocer de cerca a seres que, al igual que nosotros, tienen familia, emociones, enfrentan desafíos, toman decisiones y crean alianzas."
    },
```

##4️⃣ los test🧪
Abre una nueva terminal y pon el siguiente comando
```sh
npm run test
```


