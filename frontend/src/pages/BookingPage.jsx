import BookingForm from "../components/BookingForm";

function BookingPage() {
    return (
        <div className="container">
            <div className="card">
                <h1 className="title">
                    Skippr Service Booking
                </h1>

                <p className="subtitle">
                    Book your home service easily
                </p>

                <BookingForm />
            </div>
        </div>
    );
}

export default BookingPage;