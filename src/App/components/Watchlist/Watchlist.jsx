import React from "react";
import Item from "./Item";

function Watchlist() {
  return (
    <section className="sp watch">
      <h2 className="title">What to watch</h2>
      <div className="flex">
        <div className="typo">
          <h3 className="sub-title">From your Watchlist</h3>
          <p>Movies, books, TV shows that you have watched</p>
        </div>
        <a href="#">
          View all <i className="uil uil-angle-double-right"></i>
        </a>
      </div>
      <div className="grid-4">
        <div className="next">
          <i className="uil uil-arrow-circle-right"></i>
        </div>
        <div className="prev">
          <i className="uil uil-arrow-circle-left"></i>
        </div>

        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
}

export default Watchlist;
