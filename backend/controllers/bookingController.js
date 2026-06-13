const Booking = require("../models/Booking");


// ===============================
// Create New Booking
// POST /api/bookings
// ===============================

const createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: booking,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


// ===============================
// Get All Bookings
// GET /api/bookings
// ===============================

const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: bookings.length,
            data: bookings,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// ===============================
// Update Booking Status
// PUT /api/bookings/:id
// ===============================

const updateBookingStatus = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Status updated successfully",
            data: booking,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// ===============================
// Delete Booking
// DELETE /api/bookings/:id
// ===============================

const deleteBooking = async (req, res) => {
    try {

        const booking = await Booking.findByIdAndDelete(
            req.params.id
        );

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// ===============================
// Dashboard Summary
// GET /api/bookings/summary
// ===============================

const getBookingSummary = async (req, res) => {
    try {
        const total = await Booking.countDocuments();

        const pending = await Booking.countDocuments({
            status: "Pending",
        });

        const assigned = await Booking.countDocuments({
            status: "Assigned",
        });

        const completed = await Booking.countDocuments({
            status: "Completed",
        });

        res.status(200).json({
            success: true,
            data: {
                total,
                pending,
                assigned,
                completed,
            },
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// Export all functions
module.exports = {
    createBooking,
    getAllBookings,
    updateBookingStatus,
    deleteBooking,
    getBookingSummary,
};