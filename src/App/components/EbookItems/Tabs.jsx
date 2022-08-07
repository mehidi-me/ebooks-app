import React, { useEffect, useState } from "react";
import AllItems from "./AllItems";

function Tabs({ tabitem }) {
  const [activeItems, setActiveItems] = useState({ name: "", list: [] });
  const setActiveItem = (val) => {
    // setActiveItems([]);
    // setTimeout(() => {
    //   setActiveItems(tabitem[id]);
    // }, 500);
    setActiveItems({ name: val, list: tabitem[val] });
  };
  useEffect(() => {
    setActiveItem("ebooks");
  }, [tabitem]);
  return (
    <>
      <div className="tabs">
        {/* {tabitem?.map((v, key) => (
          <a
            style={{ cursor: "pointer" }}
            onClick={() => setActiveItem(key)}
            className={activeItems.id == v.id ? "tab-active" : ""}
          >
            {v.name}
          </a>
        ))} */}
        <a
          style={{ cursor: "pointer" }}
          onClick={() => setActiveItem("streaming")}
          className={activeItems.name == "streaming" ? "tab-active" : ""}
        >
          Streaming
        </a>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => setActiveItem("ontv")}
          className={activeItems.name == "ontv" ? "tab-active" : ""}
        >
          On TV
        </a>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => setActiveItem("ebooks")}
          className={activeItems.name == "ebooks" ? "tab-active" : ""}
        >
          eBooks
        </a>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => setActiveItem("movies")}
          className={activeItems.name == "movies" ? "tab-active" : ""}
        >
          Movies
        </a>
      </div>
      <AllItems activeItems={activeItems?.list} />
    </>
  );
}

export default Tabs;
