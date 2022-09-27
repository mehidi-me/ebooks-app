import React, { useContext } from "react";
import AppContext from "../appContext";
// import BannerImg from "../images/banner.png";

function Banner({ title, subTitle }) {
  const {images} = useContext(AppContext);
  // console.log(images.banner)
  return (
    <section>
      <div
        className="banner"
        style={{
          background: `linear-gradient(
            90deg, #050915 0%, #05091587 46.35%, #050915 100%
          ), url(${images.banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="box">
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <div className="search">
              <input type="text" placeholder="Search anything" />
              <div className="ico">
                <i className="uil uil-search"></i>
              </div>
              <button className="rounded">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
