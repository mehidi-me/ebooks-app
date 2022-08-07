import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../appContext";
import Tabs from "./Tabs";

function EbookItems() {
  const [ebook, setEbook] = useState([]);
  const { initData } = useContext(AppContext);

  useEffect(() => {
    setEbook([
      { id: 1, name: "Recommended" },
      { id: 2, name: "action" },
      { id: 3, name: "drama" },
      { id: 4, name: "fiction" },
    ]);
  }, []);

  if (ebook.length > 0) {
    return (
      <>
        {ebook?.map((v, key) => (
          <section className="sp popular" key={key}>
            <div className="flex">
              <div className="typo">
                <h3 className="sub-title">{v.name}</h3>
              </div>
              <Link to={`/ebooks/${v.name}`}>
                View all <i className="uil uil-angle-double-right"></i>
              </Link>
            </div>
            <Tabs
              tabitem={{
                ebooks: initData?.ebooks[v.name],
                streaming: [],
                ontv: [],
                movie: [],
              }}
            />
          </section>
        ))}
      </>
    );
  }
}

export default EbookItems;
