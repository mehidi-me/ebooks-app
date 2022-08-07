import React from "react";
import "../styles/form.css";
import Layout from "../components/layout/Layout";
import ProfileImg from "../images/profile.svg";
import { Link } from "react-router-dom";
import BannerImg from "../images/banner.png";

function Signup() {
  return (
    <Layout>
      <section className="form-page">
        <div
          className="banner signup"
          style={{
            background: `linear-gradient(
            90deg, #050915 0%, #05091587 46.35%, #050915 100%
          ), url(${BannerImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="wraper">
              <div className="form-text">
                <h1>Signup</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  voluptatem deserunt sapiente eos officia, dolore eaque dolores
                  voluptates, error labore reprehenderit provident tenetur
                  doloremque qui quisquam! Vero non fugiat eveniet!
                </p>
              </div>
              <form action="#">
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
                    <span className="material-icons camera">
                      {" "}
                      photo_camera{" "}
                    </span>
                  </div>
                </label>

                <div className="fild">
                  <label htmlFor="fname">First name*</label>
                  <input
                    type="text"
                    placeholder="First name"
                    id="fname"
                    name="fname"
                  />
                </div>
                <div className="fild">
                  <label htmlFor="lname">Last name*</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    id="lname"
                    name="lname"
                  />
                </div>
                <div className="fild">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="fild">
                  <label htmlFor="password">Password*</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="fild">
                  <label htmlFor="cpass">Confirm password*</label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    id="cpass"
                    name="cpass"
                  />
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <p>Accept terms and conditions</p>
                </div>
                <button className="btn">Sign Up</button>
                <p className="check">
                  Aleady have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Signup;
