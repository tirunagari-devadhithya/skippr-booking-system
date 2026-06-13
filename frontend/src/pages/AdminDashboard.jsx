import { useEffect, useState } from "react";
import API from "../services/api";
import BookingTable from "../components/BookingTable";
import SummaryCards from "../components/SummaryCards";

function AdminDashboard() {

    const [bookings, setBookings] = useState([]);

    const [summary, setSummary] = useState({
        total: 0,
        pending: 0,
        assigned: 0,
        completed: 0,
    });


    // Fetch all bookings
    const fetchBookings = async () => {
        try {
            const response = await API.get("/bookings");

            setBookings(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };


    // Fetch dashboard summary
    const fetchSummary = async () => {
        try {
            const response = await API.get("/bookings/summary");

            setSummary(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };


    // Run when component loads
    useEffect(() => {
        fetchBookings();
        fetchSummary();
    }, []);


    // Update booking status
    const updateStatus = async (id, status) => {
        try {

            await API.put(
                `/bookings/${id}`,
                { status }
            );

            // Update booking table immediately
            setBookings(
                bookings.map((booking) =>
                    booking._id === id
                        ? {
                            ...booking,
                            status,
                        }
                        : booking
                )
            );

            // Update summary cards
            fetchSummary();

        } catch (error) {
            console.log(error);
        }
    };
    // Delete booking
const deleteBooking = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    try {

        await API.delete(
            `/bookings/${id}`
        );

        setBookings(
            bookings.filter(
                (booking) => booking._id !== id
            )
        );

        fetchSummary();

    } catch (error) {

        console.log(error);

    }
};


    return (
        <div className="container">

            <div className="card">

                <h1 className="title">
                    Admin Dashboard
                </h1>

                <p className="subtitle">
                    Manage all service bookings
                </p>


                {/* Summary Cards */}
                <SummaryCards summary={summary} />


                {/* Booking Table */}
                <BookingTable
                bookings={bookings}
                updateStatus={updateStatus}
                deleteBooking={deleteBooking}
                />

            </div>

        </div>
    );
}

export default AdminDashboard;