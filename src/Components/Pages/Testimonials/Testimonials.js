import React from "react";
import "./Testimonials.css";
import AVATR1 from "../../Assets/me.jpg";
import AVATR2 from "../../Assets/me.jpg";
import AVATR3 from "../../Assets/me.jpg";
import AVATR4 from "../../Assets/me.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATR1,
    name: "John Deo",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis neque similique in dolores corrupti doloribus iste tempora suscipit sequi, quae consequuntur, omnis eaque quas, veniam dolorum optio soluta explicabo culpa.",
  },

  {
    avatar: AVATR2,
    name: "John Deo",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis neque similique in dolores corrupti doloribus iste tempora suscipit sequi, quae consequuntur, omnis eaque quas, veniam dolorum optio soluta explicabo culpa.",
  },

  {
    avatar: AVATR3,
    name: "John Deo",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis neque similique in dolores corrupti doloribus iste tempora suscipit sequi, quae consequuntur, omnis eaque quas, veniam dolorum optio soluta explicabo culpa.",
  },

  {
    avatar: AVATR4,
    name: "John Deo",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis neque similique in dolores corrupti doloribus iste tempora suscipit sequi, quae consequuntur, omnis eaque quas, veniam dolorum optio soluta explicabo culpa.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
