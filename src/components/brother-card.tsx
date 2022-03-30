import React from "react";
import styled from "styled-components";

import { BroImgStyled } from "./brother-modal";

const CardContent = styled.div`
  height: 22em;
  display: flex;
  flex-direction: column;
`;

const BioContent = styled.div`
  overflow-y: hidden;
  flex: 0 1 auto;
  line-height: 1.5em;

  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
`;

function googlePicIdExtractor(str: string) {
  const params = new URLSearchParams(str);
  return params.get("https://drive.google.com/open?id");
}

const BrotherCard = ({
  data,
  setShowModal,
  setSelectedBrother,
  brother,
  setBrotherImage,
}: any) => {
  if (!brother) {
    return <></>;
  }

  const image = data.allFile.nodes.find(
    (file: any) => file.name === googlePicIdExtractor(brother.picture)
  );

  return (
    <div className="card">
      <div className="card-image">
        <figure
          className="image is-4by3"
          style={{
            paddingTop: "0px",
          }}
        >
          <BroImgStyled image={image} />
        </figure>
      </div>
      <CardContent className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{brother.name}</p>
            <p className="subtitle is-6">
              {brother.major} | Class of {brother.graduationYear}
            </p>
          </div>
        </div>

        <BioContent className="content">
          {brother.bio}
          <br />
        </BioContent>
      </CardContent>
      <div className="card-footer">
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
      </div>
    </div>
  );
};

export default BrotherCard;
