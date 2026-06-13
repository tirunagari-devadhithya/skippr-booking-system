function BookingTable({ bookings, updateStatus, deleteBooking }) {
    return (
        <table className="booking-table">
            <thead>
                <tr>
                    <th>Booking ID</th>
                    <th>Customer</th>
                    <th>Apartment</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {bookings.map((booking) => (
                    <tr key={booking._id}>

                        <td>
                            {booking._id.slice(-6).toUpperCase()}
                        </td>

                        <td>
                            {booking.customerName}
                        </td>

                        <td>
                            {booking.apartmentNumber}
                        </td>

                        <td>
                            {booking.service}
                        </td>

                        <td>
                            {new Date(
                                booking.bookingDate
                            ).toLocaleDateString()}
                        </td>

                        <td>
                            <select
                                value={booking.status}
                                onChange={(e) =>
                                    updateStatus(
                                        booking._id,
                                        e.target.value
                                    )
                                }
                            >
                                <option>Pending</option>
                                <option>Assigned</option>
                                <option>Completed</option>
                            </select>
                        </td>

                        <td>
                            <button
                                className="delete-btn"
                                onClick={() =>
                                    deleteBooking(booking._id)
                                }
                            >
                                Delete
                            </button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookingTable;