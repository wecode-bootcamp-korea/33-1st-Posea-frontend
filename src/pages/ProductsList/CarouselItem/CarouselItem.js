import React from 'react';
import { Link } from 'react-router-dom';
import './CarouselItem.scss';

const CarouselItem = ({ product }) => {
  const { imgSrc, title, size, price } = product;

  return (
    <li className="carouselItem">
      <Link to="/">
        <img
          alt={`${title} 구매하러 가기`}
          src={imgSrc}
          className="carouselItemImg"
        />
        <h4>{title}</h4>
        <div>
          <span>{size.length > 1 && `${size.length} 사이즈 / `}</span>
          <span>
            &#8361; {price.toLocaleString()} 원
            {`${size.length > 1 ? '부터' : ''}`}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default CarouselItem;
