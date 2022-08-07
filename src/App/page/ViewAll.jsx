import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../appContext";
import FilterMenu from "../components/filterMenu/FilterMenu";
import Layout from "../components/layout/Layout";

function ViewAll() {
  const params = useParams();
  const [data, setData] = useState([]);
  const { initData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setData(initData?.ebooks[params.id]);
  }, [params]);
  return (
    <Layout>
      <main>
        <div className="container-fluid-max">
          <div className="layout">
            <FilterMenu isAllViewPage={true} />

            <div className="right">
              <section className="sp watch">
                <div className="grid-4 mt-5">
                  {data.map((v, key) => (
                    <div
                      className="card-type-1"
                      key={key}
                      onClick={() =>
                        navigate("/ebook/" + v.title, { state: v })
                      }
                    >
                      <div className="img">
                        <img src={v.imgUrl} alt="" />
                      </div>
                      <div className="details">
                        <div className="ratings">
                          <i className="fa-solid fa-star" /> <span>4.8</span>
                        </div>
                        <p className="title">{v.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ViewAll;
