import { Router } from "express";
// import { pool } from "../db.js";
import { pong } from "../controllers/index.controller.js";

const router = Router();

// router.get('/ping', async(req, res) => {
//     const [ result ] = await pool.query('SELECT "Pong" AS result');
//     res.send(result);
// });

router.get('/ping', pong);

export default router;