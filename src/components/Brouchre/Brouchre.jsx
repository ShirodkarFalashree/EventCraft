import React, { useState } from 'react';
import './Brouchre.css';

const Brouchre = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
    console.log(eventName)
  };

  const handleEventDateChange = (event) => {
    setEventDate(event.target.value);
    console.log(eventDate)

  };

  const handleEventOrganizerChange = (event) => {
    setEventOrganizer(event.target.value);
    console.log(eventOrganizer)

  };

  const handleEventDescriptionChange = (event) => {
    setEventDescription(event.target.value);
    console.log(eventDescription)

  };

  return (
    <>
      <div className='brouchre-container'>
        <form>
          <p>Fill the following</p>
          <label>Enter Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={handleEventNameChange}
          />
          <label>Enter Event Date</label>
          <input
            type="text"
            value={eventDate}
            onChange={handleEventDateChange}
          />
          <label>Enter Event Organizer</label>
          <input
            type="text"
            value={eventOrganizer}
            onChange={handleEventOrganizerChange}
          />
          <label>Enter Event Description</label>
          <input
            type="text"
            value={eventDescription}
            onChange={handleEventDescriptionChange}
          />
        </form>
      </div>
    </>
  );
};

export default Brouchre;
