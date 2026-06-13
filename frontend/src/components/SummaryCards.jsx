function SummaryCards({ summary }) {
    return (
        <div className="summary-container">

            <div className="summary-card">
                <h3>Total</h3>
                <h2>{summary.total}</h2>
            </div>

            <div className="summary-card">
                <h3>Pending</h3>
                <h2>{summary.pending}</h2>
            </div>

            <div className="summary-card">
                <h3>Assigned</h3>
                <h2>{summary.assigned}</h2>
            </div>

            <div className="summary-card">
                <h3>Completed</h3>
                <h2>{summary.completed}</h2>
            </div>

        </div>
    );
}

export default SummaryCards;