import React, { useState } from 'react';
import UserDashBoard from './UserDashBoard';

const TurfBooking = () => {
  // State to manage booking form inputs
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    addOns: [], // New state property for add-ons
  });

  // Available time slots for the turf
  const timeSlots = [
    '06:00 AM - 07:00 AM',
    '07:00 AM - 08:00 AM',
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
    '08:00 PM - 09:00 PM',
    '09:00 PM - 10:00 PM',
  ];

  // List of available add-ons
  const addOnsList = ['Boots', 'Water','jersey'];

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle add-on checkbox change
    if (type === 'checkbox') {
      setBookingDetails((prevDetails) => {
        const updatedAddOns = checked
          ? [...prevDetails.addOns, value]
          : prevDetails.addOns.filter((addOn) => addOn !== value);
        return { ...prevDetails, addOns: updatedAddOns };
      });
    } else {
      setBookingDetails({ ...bookingDetails, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', bookingDetails);
    // Make an API call to submit the booking details here
  };

  return (
    <div>
      <UserDashBoard />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2>Book Your Turf</h2>
          <form onSubmit={handleSubmit} className="p-4 border rounded">
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={bookingDetails.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Field */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={bookingDetails.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date Field */}
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Booking Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={bookingDetails.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Time Slot Field */}
            <div className="mb-3">
              <label htmlFor="timeSlot" className="form-label">Time Slot</label>
              <select
                className="form-select"
                id="timeSlot"
                name="timeSlot"
                value={bookingDetails.timeSlot}
                onChange={handleChange}
                required
              >
                <option value="">Select Time Slot</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Add-ons Field */}
            <div className="mb-3">
              <label className="form-label">Add-ons</label>
              <div className="form-check">
                {addOnsList.map((addOn, index) => (
                  <div key={index} className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`addOn-${index}`}
                      name="addOns"
                      value={addOn}
                      checked={bookingDetails.addOns.includes(addOn)}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={`addOn-${index}`}>
                      {addOn}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TurfBooking;
