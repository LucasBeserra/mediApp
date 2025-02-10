import appointmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointment = async() => {
    return appointmentRepository.getAllAppointment();
}

const gettAppointment = async(id) => {
    return appointmentRepository.gettAppointment(id);
}

const saveAppointment = async({date, doctorId, pacientId}) => {
    return appointmentRepository.saveAppointment({date, doctorId, pacientId});
}

const updateAppointment = async(id, {date, doctorId, pacientId}) => {
    return appointmentRepository.updateAppointment(id, {date, doctorId, pacientId});
}

const deleteAppointment = async(id) => {
    return appointmentRepository.deleteAppointment(id);
}

const AppointmentService = {
    getAllAppointment,
    gettAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}

export default AppointmentService;