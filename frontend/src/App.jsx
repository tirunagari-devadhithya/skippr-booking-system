import { useState } from "react";
import BookingPage from "./pages/BookingPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [page, setPage] = useState("booking");

  return (
    <div>
      <nav className="navbar">
        <button onClick={() => setPage("booking")}>
          Booking
        </button>

        <button onClick={() => setPage("admin")}>
          Admin
        </button>
      </nav>

      {page === "booking" ? (
        <BookingPage />
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
}

export default App;