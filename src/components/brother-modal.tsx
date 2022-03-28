import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

export const BroImg = ({ image }: any) => {
  if (image.childrenImageSharp.length < 1) {
    return <div></div>;
  }
  const ref = image.childrenImageSharp[0];
  const img = getImage(ref);
  return img ? <GatsbyImage image={img} alt="" /> : <div></div>;
};

export const BroImgStyled = styled(BroImg)`
  object-fit: cover;
`;

const BrotherModal = ({ brother, isActive, setIsActive, image }: any) => {
  return (
    <div id="modal" className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background"></div>

      <div className="modal-content">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3" style={{ paddingTop: "0px" }}>
              <BroImgStyled image={image} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{brother.name}</p>
                <p className="subtitle is-6">
                  {brother.major} | Class of {brother.graduationYear}
                </p>
              </div>
            </div>

            <div className="content">
              {brother.bio}
              <br />
              <p>
                <p>
                  <br />
                  <strong>
                    As a child, what did you want to be when you grew up?
                  </strong>
                  <br />

                  {brother.asAChild_WhatDidYouWantToBeWhenYouGrewUp_}
                </p>
                <p>
                  <strong>Psi U Brags?</strong>
                  <br />
                  {brother.pSIUBrags}
                </p>
                <p>
                  <strong>What superpower would you have?</strong>
                  <br />
                  {brother.superPower_}
                </p>
                <p>
                  <strong>What's your favorite sandwich and why?</strong>
                  <br />
                  {brother.what_sYourFavoriteSandwichAndWhy_}
                </p>
                <p>
                  <strong>
                    If you instantly become an expert in something, what would
                    it be?
                  </strong>
                  <br />
                  {brother.youInstantlyBecomeAnExpertInSomething_WhatWouldItBe_}
                </p>
                <p>
                  <strong>What's your pro-wrestler enterance theme?</strong>
                  <br />
                  {brother.you_reAProWrestlerWhat_sYourEntranceTheme_}
                </p>
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setIsActive(false)}
      ></button>
    </div>
  );
};

export default BrotherModal;
