// src/index.ts
import express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import coberturaRoutes from './routes/coberturaRoutes';
import seguroRoutes from './routes/seguroRoutes';
import clienteRoutes from './routes/clienteRoutes';
import polizaRoutes from './routes/polizaRoutes';
import pagoRoutes from './routes/pagoRoutes';
import detallePagoRoutes from './routes/detallePagoRoutes';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Crear la conexión a la base de datos Oracle utilizando Sequelize
const sequelize = new Sequelize({
  dialect: 'oracle',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 1521,
  database: process.env.DB_NAME || 'mydb',
  username: process.env.DB_USERNAME || 'username',
  password: process.env.DB_PASSWORD || 'password',
});

// Autenticar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Montar las rutas de cada entidad
app.use('/api', coberturaRoutes);
app.use('/api', seguroRoutes);
app.use('/api', clienteRoutes);
app.use('/api', polizaRoutes);
app.use('/api', pagoRoutes);

// Manejador de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejador de errores global
app.use((req, res, err) => {

  console.error('Error en la solicitud:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Puerto en el que escuchará el servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
  
  try {
    // Conectar a la base de datos
    console.log(`Servidor escuchando en http://localhost:${port}`);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
});
