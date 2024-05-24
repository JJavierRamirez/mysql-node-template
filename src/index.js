import express from 'express';
import morgan from 'morgan';
// import { pool } from "./db.js";
import {PORT} from './config.js';
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// app.get('/ping', async(req, res) => {
//     const [ result ] = await pool.query('SELECT "Pong" AS result');
//     res.send(result);
// });

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Using routes
app.use(indexRoutes);
app.use('/api',employeesRoutes);

// Default route
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

app.listen(PORT);
console.log(`Server runing on port ${PORT}`);