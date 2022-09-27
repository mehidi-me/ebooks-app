import React from "react";
import { useContext } from "react";
import AppContext from "../../appContext";
// import BannerImg from "../../images/banner.png";

function Item() {
  const {images} = useContext(AppContext)
  return (
    <div className="card-type-1">
      <div className="img">
        <img src={images.banner} alt="" />
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
