import React, { useEffect, useState } from "react";
import AllItems from "./AllItems";

function Tabs({ data }) {
  const [activeItems, setActiveItems] = useState({});
  const setActiveItem = (val) => {
    // setActiveItems([]);
    // setTimeout(() => {
    //   setActiveItems(tabitem[id]);
    // }, 500);
    setActiveItems(data[val]);
  };
  useEffect(() => {
    setActiveItem(0);
  }, [data]);
  return (
    <>
      <div className="tabs">
        {data?.map((v, key) => (
          <a
          key={key}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveItem(key)}
            className={activeItems.subCategoryName == v.subCategoryName ? "tab-active" : ""}
          >
            {v.subCategoryName}
          </a>
        ))}
        
      </div>
      <AllItems activeItems={activeItems} />
    </>
  );
}

export default Tabs;
