import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/Android.png";
import IMG2 from "../../Assets/Android.png";
import IMG3 from "../../Assets/Android.png";
import IMG4 from "../../Assets/Android.png";
import IMG5 from "../../Assets/Android.png";
import IMG6 from "../../Assets/Android.png";

//DO NOT THE IMAGE PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17304498-Landing-page-design",
  },

  {
    id: 2,
    image: IMG2,
    title: "NFT Marketplace Website Crypto Exchange",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19844211-NFT-Marketplace-Website",
  },

  {
    id: 3,
    image: IMG3,
    title: "Crypto Exchange - Illustrations Set",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18222114-Crypto-Exchange-Illustrations-Set",
  },

  {
    id: 4,
    image: IMG4,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/search/shots/popular/illustration?q=landing%20page",
  },

  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/search/shots/popular/illustration?q=landing%20page",
  },

  {
    id: 6,
    image: IMG6,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/search/shots/popular/illustration?q=landing%20page",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>

                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target={"_blank"}> Github </a>
                  <a href={demo} className="btn btn-primary" target={"_blank"}>Live Demo</a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
