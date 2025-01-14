import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    patientGender: {
        type: String,
        required: true
    },
    medicalHistory: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
    },
    prescription: {
        type: String,
        required: true
    },
    patientContact: {
        type: String,
        required: true
    },
    patientAddress: {
        type: String,
        required: true
    },
    patientPhone: {
        type: String,
        required: true
    },
    patientEmail: {
        type: String,
        required: true
    },
}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)