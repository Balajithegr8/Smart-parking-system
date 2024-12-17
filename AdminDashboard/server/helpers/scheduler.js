import cron from "node-cron";
import Reservation from "../models/Reservation.js";
import Location from "../models/Locations.js";
import PastBooking from "../models/PastBookings.js";

const automateSlotTransition = async () => {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    try {
        console.log(`date: ${today} - Automating slot transition...`);

        const reservations = await Reservation.find({ date: { $gte: today, $lt: tomorrow }, });

        for (let reservation of reservations) {
            const { loc, slot_no, name, email, licence_no, entry_time, exit_time } = reservation;
            const locationSlot = await Location.findOne({ loc, slot_no });

            if (locationSlot && locationSlot.booked === "yes") {
                const pastBooking = new PastBooking({
                    name: locationSlot.name,
                    email: locationSlot.email,
                    licence_no: locationSlot.licence_no,
                    loc: locationSlot.loc,
                    slot_no: locationSlot.slot_no,
                    v_type: locationSlot.v_type,
                    booked: "no",
                    entry_time: locationSlot.entry_time,
                    exit_time: locationSlot.exit_time,
                });
                await pastBooking.save();
            }

            await Location.updateOne({ loc, slot_no }, {
                name,
                email,
                licence_no,
                booked: "yes",
                entry_time,
                exit_time,
            });
            await Reservation.deleteOne({ _id: reservation._id });
            console.log(`Updated slot ${slot_no} at location ${loc} and removed reservation ${reservation._id}`);


        }
    }
    catch (error) {
        console.error("Error in scheduled task:", error);
    }
};

const scheduleTask = () => {
    cron.schedule("0 8 * * *", automateSlotTransition);
    console.log("Scheduler is set to run daily at 8 AM.");
};

export default scheduleTask;
