import React from 'react';

const Products = ({ img, little, label, title, description }) => {
  const classCard = little ? 'card level-1' : 'card level-2';
  const classContainer = little
    ? 'card__img-container--little'
    : 'card__img-container';

  return (
    <div className={classCard}>
      <div className={classContainer}>
        <img src={img} alt="camera" width="50" />
        <div className="card__img-label">{label}</div>
      </div>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Products;
