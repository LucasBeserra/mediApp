import express from "express";
import AppointmentService from "../services/AppointmentService.js";

const router = express.Router();

router.get('/appoinments', async(req,res) => {
    try {
        const appoinments = await AppointmentService.getAllAppointment();
        res.send(appoinments)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/appoinment/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appoinment = await AppointmentService.gettAppointment(id);
        res.send(appoinment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});


router.post('/appoinment', async(req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
        const appoinment = await AppointmentService.saveAppointment({date, doctorId, pacientId});
        res.send(appoinment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});


router.put('/appoinment/:id', async(req, res) => {
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try {
        const appoinment = await AppointmentService.updateAppointment(id, {date, doctorId, pacientId});
        res.send(appoinment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});


router.delete('/appoinment/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appoinment = await AppointmentService.deleteAppointment(id);
        res.send(appoinment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;