import React from "react";
import BannerImg from "../../images/banner.png";

function Item() {
  return (
    <div className="card-type-1">
      <div className="img">
        <img src={BannerImg} alt="" />
      </div>
      <div className="details">
        <div className="ratings">
          <i className="fa-solid fa-star"></i> <span>4.8</span>
        </div>
        <p className="title">Movies, books, TV shows that you have watched</p>
      </div>
    </div>
  );
}

export default Item;
