import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import BrotherModal, { BroImgStyled } from "../components/brother-modal";

function googlePicIdExtractor(str: string) {
  const params = new URLSearchParams(str);
  return params.get("https://drive.google.com/open?id");
}

const CardFooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Brothers = ({ data }: any) => {
  const brothers = data.allGoogleDataSheet.nodes;
  console.log(data.allFile);
  const rows = Math.ceil(brothers.length / 3);

  const [selectedBrother, setSelectedBrother] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [brotherImage, setBrotherImage] = useState<any>(null);

  const broCard = (brother: any) => {
    if (!brother) {
      return;
    }

    const image = data.allFile.nodes.find(
      (file: any) => file.name === googlePicIdExtractor(brother.coolPicOfYou)
    );

    return (
      <div className="card" style={{ height: "40em" }}>
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
          </div>
        </div>
        <CardFooterStyled className="card-footer">
          <a
            onClick={() => {
              setShowModal(true);
              setSelectedBrother(brother);
              setBrotherImage(image);
            }}
            className="card-footer-item"
          >
            Read More
          </a>
        </CardFooterStyled>
      </div>
    );
  };

  return (
    <Layout>
      {selectedBrother && (
        <BrotherModal
          brother={selectedBrother}
          isActive={showModal}
          setIsActive={(isActive: boolean) => setShowModal(isActive)}
          image={brotherImage}
        />
      )}
      <section className="section page-content">
        <div className="container">
          <h1 className="title">Our Brothers</h1>

          {[...Array(rows)].map((_, i) => (
            <div className="columns is-desktop">
              <div className="column">{broCard(brothers[i * 3])}</div>
              <div className="column">{broCard(brothers[i * 3 + 1])}</div>
              <div className="column">{broCard(brothers[i * 3 + 2])}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Brothers;

export const query = graphql`
  query BrothersPageQuery {
    allGoogleDataSheet {
      nodes {
        asAChild_WhatDidYouWantToBeWhenYouGrewUp_
        bio
        coolPicOfYou
        graduationYear
        major
        name
        pSIUBrags
        superPower_
        what_sYourFavoriteSandwichAndWhy_
        youInstantlyBecomeAnExpertInSomething_WhatWouldItBe_
        you_reAProWrestlerWhat_sYourEntranceTheme_
      }
    }
    allFile(filter: { relativeDirectory: { eq: "bros" } }) {
      nodes {
        id
        name
        childrenImageSharp {
          gatsbyImageData(
            width: 800
            transformOptions: { fit: COVER, cropFocus: ATTENTION }
            aspectRatio: 1.333
          )
        }
      }
    }
  }
`;
