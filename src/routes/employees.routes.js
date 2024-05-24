import { Router } from "express";
import { deleteEmployee, getEmployees, createEmployee, updateEmployee, getEmployee } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', (req, res) => getEmployees(req, res));

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployee);

router.patch('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

export default router; 