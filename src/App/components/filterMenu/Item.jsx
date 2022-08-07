import React from "react";

function Item({ activeId, id, setActive }) {
  return (
    <div className="main-toggle">
      <div className="toggle" onClick={() => setActive(id)}>
        Cetagory name{" "}
        <i
          className={activeId == id ? "uil uil-arrow-up" : "uil uil-arrow-down"}
        ></i>
      </div>
      <div
        className={activeId == id ? "toggle-menu toggle-active" : "toggle-menu"}
      >
        <div className="item">
          <input type="checkbox" />
          <p>Item name here</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Item name here</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Item name here</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Item name here</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Item name here</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
