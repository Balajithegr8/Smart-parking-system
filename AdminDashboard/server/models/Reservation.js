import mongoose from "mongoose";
const Schema = mongoose.Schema;
// Location Schema
const ReservationSchema = Schema(
    {
        name: String,
        email: String,
        licence_no: String,
        loc: String,
        slot_no: String,
        date: Date,
        v_type: String,
        booked: String,
        entry_time: String,
        exit_time: String,
    },
    { timestamps: true }
);

const Reservation = mongoose.model("Reservations", ReservationSchema);

export default Reservation;
