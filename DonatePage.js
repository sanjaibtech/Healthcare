import React, { useState } from 'react';
import './styles/DonatePage.css';

function DonatePage() {
  const [amount, setAmount] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Donation Amount:', amount);
  };

  return (
    <div className="container donate-page">
      <section className="donate">
        <h2>Support Our Mission</h2>
        <p>Every donation makes a difference in the lives of those we serve.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Donation Amount:</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Donate Now</button>
        </form>

        <p>Other ways to donate:</p>
        <ul>
          <li>Volunteer your time</li>
          <li>Donate medical supplies</li>
          <li>Spread the word about our clinic</li>
        </ul>
      </section>
    </div>
  );
}

export default DonatePage;
