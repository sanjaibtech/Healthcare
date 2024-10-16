// models/Doctor.js
const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: String,
    availableSlots: [{
        date: String, // Date in 'YYYY-MM-DD' format
        time: String, // Time in 'HH:MM' format
        isBooked: {
            type: Boolean,
            default: false
        },
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        }
    }],
    clinic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clinic'
    }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
