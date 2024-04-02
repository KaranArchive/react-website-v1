import React from 'react';

// This component represents the explanation for a single card
const Phrase = ({ title, text }) => (
  <div className="card-explanation">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default Phrase;
