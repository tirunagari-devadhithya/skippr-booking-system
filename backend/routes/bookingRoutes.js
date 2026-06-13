const express = require("express");

const {
    createBooking,
    getAllBookings,
    updateBookingStatus,
    deleteBooking,
    getBookingSummary,
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createBooking);

router.get("/", getAllBookings);

router.get("/summary", getBookingSummary);

router.put("/:id", updateBookingStatus);

router.delete("/:id", deleteBooking);

module.exports = router;