import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../../appContext";
// import Logo from "../../images/logo.png";
// import profileImg from "../../images/profile.svg";

function NavBar() {
  const {images} = useContext(AppContext)
  const [isLogin, setIslogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/login" || location.pathname == "/signup") {
      setIslogin(false);
    } else {
      setIslogin(true);
    }
  }, [location]);

  return (
    <header>
      <div className="container-fluid">
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img src={images.logo} alt="" />
        </div>
        <div className="tools">
          {/* <Link to="/login">Sign In</Link>

          <div className="lang">
            <select name="" id="">
              <option value="Eng">Eng</option>
              <option value="Eng">Eng</option>
              <option value="Eng">Eng</option>
            </select>
          </div> */}
          {isLogin ? (
            <>
              {/* <div className="item">
                <i className="uil uil-heart-alt"></i>
                Wishlist
              </div> */}
              <div class="user-profile" onClick={() => navigate("/profile")}>
                <div className="profile-pic">
                  <img src={images.profile} alt="" />
                </div>
                <div className="user-profile-info">
                  <p>Mehidi Hasan</p>
                  <span>Free user</span>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
