import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { rainbow } from '../scripts/rainbow'

// See https://github.com/Wikiki/bulma-carousel/issues/76
const bulmaCarousel = (() => {
  if (typeof window !== 'undefined') {
    return require('bulma-carousel')
  }
})()

const NewHeroCarousel = ({ imgs }) => {
  /**
   * Wait for component initialization to construct the carousel and rainbow
   * text effect.
   */
  useEffect(() => {
    bulmaCarousel.attach('.hero-carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      effect: 'fade',
      navigation: true,
      pagination: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 6000,
    })

    // Set the rainbow text effect to the title.
    // const node = ReactDOM.findDOMNode(this)
    // const titleText = node.querySelector('#inclusive')
    // rainbow(titleText)
  }, [])

  return (
    <section className="hero is-large full-hero has-carousel">
      <div className="slider-overlay"></div>
      <div className="hero-carousel">
        <div className="has-background is-active">
          <img className="is-background" srcSet={imgs[0]} alt="" />
        </div>
        <div className="has-background">
          <img className="is-background" srcSet={imgs[1]} alt="" />
        </div>
        <div className="has-background">
          <img className="is-background" srcSet={imgs[2]} alt="" />
        </div>
      </div>
      <div
        className="hero-body has-text-centered hero-carousel-text"
        id="landing-hero"
      >
        <h1 className="title has-text is-1 font-white" id="title">
          {/* {this.props.block.title} */}
          We are Building the Future
        </h1>
        {/* this.props.block.subtitle */}
        {true && (
          <p id="subtitle" className="subtitle is-4 font-white">
            {/* {this.props.block.subtitle} */}
            Join Us on the Journey to Build a New Deck
          </p>
        )}
      </div>
    </section>
  )
}

export default NewHeroCarousel
