// src/components/AppointmentBooking.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppointmentBooking({ doctorId }) {
    const [slots, setSlots] = useState([]);
    const [selectedSlotId, setSelectedSlotId] = useState('');

    useEffect(() => {
        const fetchSlots = async () => {
            const response = await axios.get(`/api/doctors/${doctorId}`);
            setSlots(response.data.availableSlots);
        };

        fetchSlots();
    }, [doctorId]);

    const handleBookSlot = async () => {
        try {
            const patientId = 'some_patient_id'; // Replace with actual patient ID
            await axios.post(`/api/doctors/${doctorId}/book/${selectedSlotId}`, { patientId });
            alert('Appointment booked successfully');
        } catch (error) {
            console.error('Error booking appointment', error);
        }
    };

    return (
        <div>
            <h2>Available Slots</h2>
            {slots.map(slot => (
                <div key={slot._id}>
                    <p>{`${slot.date} at ${slot.time}`}</p>
                    <button onClick={() => setSelectedSlotId(slot._id)}>Select</button>
                </div>
            ))}
            <button onClick={handleBookSlot} disabled={!selectedSlotId}>Book Appointment</button>
        </div>
    );
}

export default AppointmentBooking;
