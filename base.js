import { createConnection } from "mysql";

const db=createConnection({
    host: 'localhost',
    user: 'root',        // Reemplaza con tu usuario MySQL
    password: 'Camilo20', // Reemplaza con tu contraseña MySQL
    database: 'usuario'       // Asegúrate de que el nombre aquí coincida con el nombre de tu base de datos
  });

//Mensaje de conexión a la base de datos
db.connect((err)=>{
    if(err){
        console.error ('No conectado a la base de datos',err);
        return
    }
    console.log('Conexión exitosa');
})

//Consultar a la base de datos

db.query(" SELECT * FROM users",(err,rows) => {
    if(err){
        console.error ('Error de la consulta',err);
        return
    }
    console.log('Los resultados de la consulta');
    console.log (rows);
});