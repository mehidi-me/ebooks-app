import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../appContext";
import Tabs from "./Tabs";

function EbookItems() {
  const { initData } = useContext(AppContext);

 

  if (initData?.length > 0) {
    return (
      <>
        {initData?.map((v, key) => (
          <section className="sp popular" key={key}>
            <div className="flex">
              <div className="typo">
                <h3 className="sub-title">{v.categoryName}</h3>
              </div>
              <Link to={`/${v.categoryName}`}>
                View all <i className="uil uil-angle-double-right"></i>
              </Link>
            </div>
            <Tabs data={v.data} />
          </section>
        ))}
      </>
    );
  }
}

export default EbookItems;
