import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonials.css";
import "../styles/testimonialsResponsiveness.css";



const testimonialsData = [
  {
    title: "Best User Experience",
    content:
      "Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others stand firm. This variation in erosion speed causes the formation of pinnacles, or 'hoodoos' of stable rock.",
    author: "Derek Dunn",
    authorImage: "/path/to/author1.jpg", 
  },
  {
    title: "Friendly staff",
    content:
      "Whether it is a driving tour, a cruise, or a bus, leaf viewing is a great way to spend a fall vacation. It's also big for business and there are many options.",
    author: "Derek Dunn",
    authorImage: "/path/to/author2.jpg", 
  },
  {
    title: "Efficient Customer Support",
    content:
      "Whether it is a driving tour, a cruise, or a bus, leaf viewing is a great way to spend a fall vacation. It's also big for business and there are many options.",
    author: "Derek Dunn",
    authorImage: "/path/to/author2.jpg", 
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-heading">
        <h2 className="testimonials-title">
          What customers <span className="highlight">say about us.</span>
        </h2>
      </div>

      <Slider {...settings} className="testimonials-slider">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <h3 className="testimonial-title">{testimonial.title}</h3>
            <p className="testimonial-content">{testimonial.content}</p>
            <div className="testimonial-author">
              <img
                src={testimonial.authorImage}
                alt={testimonial.author}
                className="author-image"
              />
              <span className="author-name">{testimonial.author}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
