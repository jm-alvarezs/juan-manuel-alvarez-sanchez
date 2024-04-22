# juan-manuel-alvarez-sanchez

Back End

Base de Datos
Tecnología: MySQL
ORM: Sequelize

Estructura de Proyecto Back End

Actions
La interacción con la base de datos se abstrae a funciones en un archivo dentro de la carpeta /actions con el nombre de la entidad en plural. Ejemplo: "catalog_products.js"

Rutas
Se utiliza el Router que contiene el framework Express por defecto. Agregamos body-parser para enviar y recibir respuestas JSON.
Agregamos CORS por seguridad. La "seguridad" de las rutas que acceden al servicio de envía es débil, no tiene autenticación debido al alcance del proyecto. Se obtiene el token de usuario con base a su teléfono ("phone").

Schemas
Contiene los objetos de Joi para la validación de datos en cada solicitud

Middleware
Es una funcion que valida los datos de entrada de una solicitud. Esta función decide si continuar o abortar la solicitud.

Constants
Valores fijos que se pueden usar dentro del proyecto. Debido al error que arrojaba el API de Envia, se guardaron como constantes las respuestas de ejemplo de la documentación.

Data
Carpeta con archivos json que incluyen la información de catalog_products, access_tokens y users. Se usa para iniciar el proyecto.

Models
Modelos de sequelize para interactuar con la base de datos.

Estructura de Archivos Front End (carpeta src)

Components
Archivos de componentes reutilizables agrupados por entidad en su nombre de carpeta. Los nombres son representativos de acuerdo a si son "Cards", "Lists" o "Rows".

Context
Se guarda la información de estado de cada entidad. Se exporta de cada archivo un Context y un Provider para utilizar sus funciones y datos a lo largo del proyecto mediante el hook useContext.

Reducers
Indican la estructura del estado que se manejará para cada entidad.

Services
Llamadas al back end parametrizadas por método. Utiliza un objeto api global donde se pueden configurar headers de autenticación.

Types
Los tipos de action para utilizar entre el context y reducer. Guardar los types como constantes evita errores de dedo.

Utils
Funciones generales para distintos propósitos como validaciones.

Views
Una view representa una pantalla que interactúa con el usuario. Cada view está compuesta de components y reciben su estado y funciones de la view.

Instrucciones de Ejecución

1. Crear una base de datos local con el nombre "tendencys"
2. Agregar la contraseña de la base de datos local al archivo back-end/config/config.json
3. Ejecutar cd back-end && npm i && npm run dev
4. Ejecutrar cd front-end && npm i && npm run dev

Candidato
Juan Manuel Alvarez Sanchez
Ing en Tecnologías Computacionales UDEM 2021
jm.alvarezs98@gmail.com
