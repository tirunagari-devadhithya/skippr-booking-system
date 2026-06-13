import { useState } from "react";
import API from "../services/api";

function BookingForm() {

    const [formData, setFormData] = useState({
        customerName: "",
        mobile: "",
        apartmentNumber: "",
        service: "",
        bookingDate: "",
        timeSlot: "",
    });

    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);


    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    // Submit booking
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {

            const response = await API.post(
                "/bookings",
                formData
            );


            setMessage(response.data.message);


            // Clear form
            setFormData({
                customerName: "",
                mobile: "",
                apartmentNumber: "",
                service: "",
                bookingDate: "",
                timeSlot: "",
            });

        } catch (error) {

            setMessage(
                error.response?.data?.message ||
                "Failed to create booking"
            );

            console.log(error);

        } finally {

            // Runs for both success and failure
            setLoading(false);
        }
    };


    return (
        <div>

            <h2 className="title">
                Book a Service
            </h2>


            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="customerName"
                    placeholder="Customer Name"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    name="apartmentNumber"
                    placeholder="Apartment Number"
                    value={formData.apartmentNumber}
                    onChange={handleChange}
                    required
                />


                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                >
                    <option value="">
                        Select Service
                    </option>

                    <option value="Car Cleaning">
                        Car Cleaning
                    </option>

                    <option value="Washroom Cleaning">
                        Washroom Cleaning
                    </option>

                    <option value="Deep Cleaning">
                        Deep Cleaning
                    </option>
                </select>


                <input
                    type="date"
                    name="bookingDate"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.bookingDate}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    name="timeSlot"
                    placeholder="Time Slot (8 AM - 9 AM)"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                />


                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Booking..." : "Book Now"}
                </button>

            </form>


            {
                message && (
                    <p className="message">
                        {message}
                    </p>
                )
            }

        </div>
    );
}


export default BookingForm;