import React, { useState } from "react";
import Item from "./Item";

function FilterMenu({ isAllViewPage = false }) {
  const [activeId, setActiveId] = useState("0");
  const data = ["0", "1", "2", "3", "4", "5"];
  const setActive = (id) => {
    if (id == activeId) {
      setActiveId("");
    } else {
      setActiveId(id);
    }
  };
  return (
    <div className="left-menu">
      {isAllViewPage ? (
        <div className="search menu-search">
          <input type="text" placeholder="Search anything" />
          <button className="rounded">Search</button>
        </div>
      ) : null}
      {data.map((v) => (
        <Item activeId={activeId} id={v} setActive={setActive} />
      ))}
    </div>
  );
}

export default FilterMenu;
