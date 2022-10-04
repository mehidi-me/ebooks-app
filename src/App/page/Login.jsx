import React, { useEffect, useState } from "react";
// import "../styles/form.css";
import Layout from "../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import BannerImg from "../images/banner.png";
import { useContext } from "react";
import AppContext from "../appContext";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    remember: false,
  });

const {styles,images} = useContext(AppContext);

  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await login(userData);
    if (res) {
      navigate("/");
    }
  };
 
  return (
    <Layout>
      <section className="form-page">
        <div
          className="banner signup"
          style={{
            background: `linear-gradient(
            90deg, #050915 0%, #05091587 46.35%, #050915 100%
          ), url(${images.banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="wraper">
              <div className="form-text">
                <h1>Log in</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  voluptatem deserunt sapiente eos officia, dolore eaque dolores
                  voluptates, error labore reprehenderit provident tenetur
                  doloremque qui quisquam! Vero non fugiat eveniet!
                </p>
              </div>
              <form onSubmit={onSubmit}>
                <div className="fild">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        email: e.target.value,
                      })
                    }
                    value={localStorage.getItem("email") && userData.email}
                  />
                </div>
                <div className="fild">
                  <label htmlFor="pass">Password*</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        password: e.target.value,
                      })
                    }
                    value={
                      localStorage.getItem("password") && userData.password
                    }
                  />
                </div>
                <div className="item">
                  <input
                    type="checkbox"
                    // onChange={(e) => console.log(e.target.checked)}
                    onChange={(e) =>
                      setUserData({ ...userData, remember: e.target.checked })
                    }
                    checked={userData.remember}
                  />
                  <p>Remember me</p>
                </div>
                <button className="btn" type="submit" disabled={loading}>
                  {loading ? (
                    <i className="fas fa-circle-notch fa-spin"></i>
                  ) : (
                    "Login"
                  )}
                </button>
                <p className="check">
                  Do not have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
