import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import useAuth from "../hooks/useAuth";
import ProfileImg from "../images/profile.svg";

function AccountEdit() {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  return (
    <Layout>
      <section>
        <div className="profile-editor">
          <div className="container-sm">
            <div className="page-layout">
              {/* pic upload */}
              <input type="file" id="pic-up" />
              <label htmlFor="pic-up">
                <div
                  className="profile-pic-change"
                  style={{
                    background: `linear-gradient(#00000092, #00000095), url(${ProfileImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="material-icons camera"> photo_camera </span>
                </div>
              </label>
              {/* pic upload */}
              {/* name edit */}
              <div className="user-name-update">
                <div className="fild">
                  <input type="text" defaultValue="User name" />
                  <span className="material-icons"> edit </span>
                </div>
                <button className="btn" onClick={logOut}>
                  <span className="material-icons"> logout </span> Log out
                </button>
              </div>
              {/* name edit */}
              <form className="change-password">
                <h2 className="title">Change password</h2>
                <div className="fild">
                  <input type="password" placeholder="Old password" />
                  <span className="material-icons">visibility</span>
                </div>
                <div className="fild">
                  <input type="password" placeholder="New password" />
                  <span className="material-icons">visibility</span>
                </div>
                <div className="fild">
                  <input type="password" placeholder="Confirm password" />
                  <span className="material-icons">visibility</span>
                </div>
                <button className="btn">Change password</button>
                <a className="forgot-password" href="#">
                  Forgot password?
                </a>
              </form>
              <button className="btn save">Save changes</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AccountEdit;
