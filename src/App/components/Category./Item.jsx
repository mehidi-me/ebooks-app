import React, { useContext } from "react";
import AppContext from "../../appContext";
// import BannerImg from "../../images/banner.png";

function Item() {
  const {images} = useContext(AppContext)
  return (
    <div className="card">
      <img src={images.banner} alt="" />
      <div className="c-text">
        <h3>Cetagory name</h3>
      </div>
    </div>
  );
}

export default Item;
