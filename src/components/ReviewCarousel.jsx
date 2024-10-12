import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ReviewCarousel.css";
import reviews from "../data/Reviews.json";

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: false,
    fade: true,
  };

  return (
    <div className="review-carousel">
      <h2>What Our Patients Say</h2>
      <p>
        Courtesy of{" "}
        <a
          href="https://www.google.com/search?q=dr+edward+hoffman&oq=dr+edward+hof&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBggCEEUYOTIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&sourceid=chrome&ie=UTF-8#lrd=0x80c8c09994c8f6db:0x225fcdd924eca5dc,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Reviews
        </a>
      </p>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-slide">
            <div className="review-stars">
              {[...Array(review.rating)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p className="review-text">{review.text}</p>
            <p className="review-author">- {review.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
