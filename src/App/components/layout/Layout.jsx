import React from "react";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <>
      <div className="alert-box">
        <div className="notification">
          <span className="material-icons remove"> close </span>
          <div className="img">
            <img src="images/banner.png" alt="" />
          </div>
          <div className="alert-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              voluptas iure eius aspernatur hic nam vitae perspiciatis, ea nihil
              officiis in!
            </p>
          </div>
        </div>
      </div>
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
