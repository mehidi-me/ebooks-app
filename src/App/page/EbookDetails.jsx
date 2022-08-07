import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EbookItems from "../components/EbookItems/EbookItems";
import Layout from "../components/layout/Layout";
import BannerImg from "../images/banner.png";

function EbookDetails() {
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(location.state);
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
                  <button
                    className="btn"
                    onClick={() => window.open(data?.pdfUrl, "_blank").focus()}
                  >
                    <span className="material-icons">
                      {" "}
                      play_circle_outline{" "}
                    </span>{" "}
                    Read now
                  </button>

                  <a href={data?.pdfUrl} target="_blank" download>
                    <button className="btn empty">
                      <span className="material-icons"> get_app </span>
                      Download
                    </button>
                  </a>
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
                <div className="card-type-2">
                  <div className="img">
                    <img src={BannerImg} alt="" />
                  </div>
                </div>
                <div className="card-type-2">
                  <div className="img">
                    <img src={BannerImg} alt="" />
                  </div>
                </div>
                <div className="card-type-2">
                  <div className="img">
                    <img src={BannerImg} alt="" />
                  </div>
                </div>
                <div className="card-type-2">
                  <div className="img">
                    <img src={BannerImg} alt="" />
                  </div>
                </div>
                <div className="card-type-2">
                  <div className="img">
                    <img src={BannerImg} alt="" />
                  </div>
                </div>
                <div className="card-type-2">
                  <div className="img">
                    <img src={BannerImg} alt="" />
                  </div>
                </div>
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
