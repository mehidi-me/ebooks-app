import React from "react";
import BannerImg from "../../images/banner.png";

function Item() {
  return (
    <div className="card">
      <img src={BannerImg} alt="" />
      <div className="c-text">
        <h3>Cetagory name</h3>
      </div>
    </div>
  );
}

export default Item;
