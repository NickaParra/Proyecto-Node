import express from 'express';
import mysql from 'mysql2/promise';


// Creando nuestro servidor
const app = express();


// Middleware para analizar el cuerpo de la solicitud
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de la conexión de la base de datos
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'usuario',
  password: 'Camilo20',
});

// Ruta principal
app.get('/', (req, res) => res.send('Hey! Esto funciona'));

// Ruta para login
app.get('/login', async (req, res) => {
  const datos = req.query;
  try {
    const [results, fields] = await pool.query(
      "SELECT * FROM `users` WHERE `Nombre` = ? AND `Contraseña` = ?",
      [datos.usuario, datos.contraseña],

    );
  if (results.length >0) {
    res.status(200).send('Inicio de sesión correctamente'); 
  }
  else{
    res.status(401).send('No inicio sesión'); 

  }

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
  console.log(datos);
 
});






// Ruta local
app.listen(3000);
console.log ('Servidor en el puerto', 3000);

// Configuración para insertar las imágenes y los estilos
app.use(express.static('public'));