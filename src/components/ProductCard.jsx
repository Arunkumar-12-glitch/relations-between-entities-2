import React from 'react';
import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-rating">Average Rating: {product.avgRating.toFixed(1)}</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
