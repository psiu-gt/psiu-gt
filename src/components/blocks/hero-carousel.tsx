import React, { useEffect, useRef } from "react";
import { rainbow } from "../../scripts/rainbow";

// See https://github.com/Wikiki/bulma-carousel/issues/76
const bulmaCarousel = (() => {
  if (typeof window !== "undefined") {
    return require("bulma-carousel");
  }
})();

const HeroCarousel = ({ block }: { block: any }) => {
  const rainbowRef = useRef<HTMLDivElement>(null);

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
          <img
            className="is-background"
            srcSet={block.sliderImage1.childImageSharp.fluid.srcSet}
            alt=""
          />
        </div>
        <div className="has-background">
          <img
            className="is-background"
            srcSet={block.sliderImage2.childImageSharp.fluid.srcSet}
            alt=""
          />
        </div>
        <div className="has-background">
          <img
            className="is-background"
            srcSet={block.sliderImage3.childImageSharp.fluid.srcSet}
            alt=""
          />
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
