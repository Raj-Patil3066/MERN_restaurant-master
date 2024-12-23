import React, { useState } from "react";

const Reservation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [specialRequest, setSpecialRequest] = useState("");
  const [status, setStatus] = useState("");

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      name,
      email,
      phone,
      date,
      numPeople,
      specialRequest
    };

    try {
      const response = await fetch("http://localhost:5000/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reservationData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Reservation made successfully!");
        // Clear the form fields after submission
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setNumPeople(1);
        setSpecialRequest("");
      } else {
        setStatus("There was an error making the reservation.");
      }
    } catch (error) {
      setStatus("There was an error making the reservation.");
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
      <h2 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>Table Reservation</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "80%", padding: "10px", marginBottom: "15px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "80%", padding: "10px", marginBottom: "15px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: "80%", padding: "10px", marginBottom: "15px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <input
          type="datetime-local"
          placeholder="Reservation Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: "80%", padding: "10px", marginBottom: "15px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <input
          type="number"
          placeholder="Number of People"
          value={numPeople}
          onChange={(e) => setNumPeople(e.target.value)}
          style={{ width: "80%", padding: "10px", marginBottom: "15px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <textarea
          placeholder="Special Request (optional)"
          rows="4"
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          style={{ width: "80%", padding: "10px", marginBottom: "15px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px", resize: "none" }}
        />
        <button type="submit" style={{ width: "80%", padding: "12px", backgroundColor: "#28a745", color: "#fff", fontSize: "18px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Reserve Table
        </button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default Reservation;
