const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: [true, "Customer name is required"],
            trim: true,
        },

        mobile: {
            type: String,
            required: [true, "Mobile number is required"],
            match: [/^[0-9]{10}$/, "Enter a valid 10 digit mobile number"],
        },

        apartmentNumber: {
            type: String,
            required: [true, "Apartment number is required"],
            trim: true,
        },

        service: {
            type: String,
            required: true,
            enum: [
                "Car Cleaning",
                "Washroom Cleaning",
                "Deep Cleaning",
            ],
        },

        bookingDate: {
            type: Date,
            required: true,
        },

        timeSlot: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: ["Pending", "Assigned", "Completed"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;