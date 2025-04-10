import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    } else {
      alert("Please select a rating between 1 and 5.");
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
            style={{
              color: (hoveredRating || rating) >= star ? "gold" : "gray",
              cursor: "pointer",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;
