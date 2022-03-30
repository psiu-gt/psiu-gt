import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import BrotherModal from "../components/brother-modal";
import BrotherCard from "../components/brother-card";

const Brothers = ({ data }: any) => {
  // Wrap in useState to prevent random order from changing on modal close.
  const [brothers] = useState(
    data.allGoogleDataSheet.nodes
      // Shuffle the array order
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value)
  );
  const rows = Math.ceil(brothers.length / 3);

  const [selectedBrother, setSelectedBrother] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [brotherImage, setBrotherImage] = useState<any>(null);

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
            <div className="columns is-desktop" key={i}>
              <div className="column">
                <BrotherCard
                  data={data}
                  setShowModal={setShowModal}
                  setSelectedBrother={setSelectedBrother}
                  brother={brothers[i * 3]}
                  setBrotherImage={setBrotherImage}
                />
              </div>
              <div className="column">
                <BrotherCard
                  data={data}
                  setShowModal={setShowModal}
                  setSelectedBrother={setSelectedBrother}
                  brother={brothers[i * 3 + 1]}
                  setBrotherImage={setBrotherImage}
                />
              </div>
              <div className="column">
                <BrotherCard
                  data={data}
                  setShowModal={setShowModal}
                  setSelectedBrother={setSelectedBrother}
                  brother={brothers[i * 3 + 2]}
                  setBrotherImage={setBrotherImage}
                />
              </div>
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
    allGoogleDataSheet(
      filter: { iConsentForMyProfileToAppearOnPsiugtCom: { eq: "Yes" } }
    ) {
      nodes {
        asAChild_WhatDidYouWantToBeWhenYouGrewUp_
        bio
        brags
        graduationYear
        hobbies
        hometown
        id
        ifIWereASuperhero_MySuperpowerWouldBe
        inAnotherLife_I_mPrettySureIWas
        major
        name
        picture
        pronouns
        what_sYourFavoriteSandwichAndWhy_
        youInstantlyBecomeAnExpertInSomething_WhatWouldItBe_
        you_reAProWrestlerWhat_sYourEntranceTheme_
      }
    }
    allFile(filter: { relativeDirectory: { eq: "bros" } }) {
      nodes {
        id
        name
        publicURL
      }
    }
  }
`;
