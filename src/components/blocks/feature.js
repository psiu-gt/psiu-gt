import React from 'react'

const Feature = ({ block }) => (
  <section
    className={
      block.background
        ? `block-feature hero is-medium is-${block.background}`
        : 'block-feature hero is-medium'
    }
  >
    <div className="hero-body">
      <div className="container is-fluid">
        <div
          className={
            block.orientation && block.orientation === 'reverse'
              ? 'columns is-vcentered is-reversed'
              : 'columns is-vcentered'
          }
        >
          <div className="column is-one-half">
            {block.image && (
              <img
                alt={block.title}
                srcSet={block.image.childImageSharp.fluid.srcSet}
              />
            )}
          </div>
          <div className="column is-one-half">
            <div className="section">
              <h1 className="title is-3">{block.title}</h1>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Feature
