import React, { useEffect, useRef } from "react";
import { rainbow } from "../../scripts/rainbow";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// See https://github.com/Wikiki/bulma-carousel/issues/76
const bulmaCarousel = (() => {
  if (typeof window !== "undefined") {
    return require("bulma-carousel");
  }
})();

const HeroCarousel = ({ block }: { block: any }) => {
  const rainbowRef = useRef<HTMLDivElement>(null);

  const sliderImage1 = getImage(block.sliderImage1);
  const sliderImage2 = getImage(block.sliderImage2);
  const sliderImage3 = getImage(block.sliderImage3);

  useEffect(() => {
    bulmaCarousel.attach(".hero-carousel", {
      slidesToScroll: 1,
      slidesToShow: 1,
      effect: "fade",
      navigation: true,
      pagination: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 6000,
    });

    // Set the rainbow text effect to the title.
    // const node = ReactDOM.findDOMNode(this);
    // const titleText = node.querySelector("#inclusive");
    // rainbow(titleText);
  }, []);

  useEffect(() => {
    if (!rainbowRef.current) {
      return;
    }

    rainbow(rainbowRef.current);
  }, [rainbowRef.current]);

  return (
    <section className="hero is-large full-hero has-carousel">
      <div className="slider-overlay"></div>
      <div className="hero-carousel">
        <div className="has-background is-active">
          {sliderImage1 && (
            <GatsbyImage
              alt=""
              className="is-background"
              image={sliderImage1}
            />
          )}
        </div>
        <div className="has-background">
          {sliderImage2 && (
            <GatsbyImage
              alt=""
              className="is-background"
              image={sliderImage2}
            />
          )}
        </div>
        <div className="has-background">
          {sliderImage3 && (
            <GatsbyImage
              alt=""
              className="is-background"
              image={sliderImage3}
            />
          )}
        </div>
      </div>
      <div
        className="hero-body has-text-centered hero-carousel-text"
        id="landing-hero"
      >
        <h1 className="title has-text is-1 font-white" id="title">
          {block.title}
        </h1>
        {block.subtitle && (
          <p id="subtitle" className="subtitle is-4 font-white">
            {/* {this.props.block.subtitle} */}
            Georgia Tech's Premier Social{" "}
            <span id="inclusive" ref={rainbowRef}>
              Gender Inclusive
            </span>
            Fraternity
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;
