import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product A",
      description: "Description for Product A",
      image: "https://via.placeholder.com/150",
      avgRating: 4.2,
      totalRatings: 5,
    },
    {
      id: 2,
      name: "Product B",
      description: "Description for Product B",
      image: "https://via.placeholder.com/150",
      avgRating: 3.8,
      totalRatings: 8,
    },
    // Add more products as needed
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating:
                ((product.avgRating * product.totalRatings) + newRating) /
                (product.totalRatings + 1),
              totalRatings: product.totalRatings + 1,
            }
          : product
      )
    );
  };

  return (
    <div>
      <h1>Product Ratings</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRatingSubmit={handleRatingSubmit}
        />
      ))}
    </div>
  );
};

export default App;
