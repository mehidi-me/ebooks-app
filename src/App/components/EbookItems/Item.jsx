import React from "react";
import { useNavigate } from "react-router-dom";

function Item({ data, alldata }) {
  const navigate = useNavigate();
  return (
    <div
      className="card-type-2"
      onClick={() =>
        navigate("/ebook/" + data.title, { state: { data, alldata } })
      }
    >
      <div className="img">
        <img src={data.imgUrl} alt="" />
        <div className="ratings">
          <i className="fa-solid fa-star"></i> <span>4.5</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
