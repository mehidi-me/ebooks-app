import React from "react";
import Item from "./Item";

function Category() {
  return (
    <section className="mb-5">
      <h2 className="title">Most popular cetagory</h2>
      <div className="cards-cetagory">
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
}

export default Category;
