import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EbookItems from "../components/EbookItems/EbookItems";
import Layout from "../components/layout/Layout";
import BannerImg from "../images/banner.png";

function EbookDetails() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [alldata, setallData] = useState(null);

  useEffect(() => {
    setData(location.state.data);
    setallData(location.state.alldata);
  }, [location]);
  return (
    <Layout>
      <div>
        <section>
          <div
            className="banner video-banner"
            style={{
              background: `linear-gradient(
            90deg, #050915 0%, #05091587 46.35%, #050915 100%
          ), url(${data?.imgUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="container">
              <div className="video-content">
                <h1>{data?.title}</h1>
                <p>{data?.description}</p>
                <div className="actions">
                  {data?.pdfUrl ? (
                    <a href={data?.pdfUrl} target="_blank" download>
                      <button className="btn">
                        <span className="material-icons"> get_app </span>{" "}
                        Download Pdf
                      </button>
                    </a>
                  ) : null}{" "}
                  {data?.epubUrl ? (
                    <a href={data?.epubUrl} target="_blank" download>
                      <button className="btn">
                        <span className="material-icons"> get_app </span>{" "}
                        Download Epub
                      </button>
                    </a>
                  ) : null}{" "}
                  {data?.mobiUrl ? (
                    <a href={data?.mobiUrl} target="_blank" download>
                      <button className="btn">
                        <span className="material-icons"> get_app </span>{" "}
                        Download Mobi
                      </button>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="container-fluid-max">
              <div className="grid-6">
                <div className="next">
                  <i className="uil uil-arrow-circle-right" />
                </div>
                <div className="prev">
                  <i className="uil uil-arrow-circle-left" />
                </div>
                {alldata?.map((v, key) => (
                  <div className="card-type-2" key={key}>
                    <div className="img">
                      <img src={v.imgUrl} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* hero section end*/}
        {/* main section */}
        <main>
          <div className="container-fluid-max">
            {/* Right  layout */}
            <div className="right">
              <EbookItems />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default EbookDetails;
