import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../api/auth/auth";

const useAuth = () => {
  //   const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data) => {
    setLoading(true);
    const res = await auth.login(data);
    setLoading(false);
    if (res.ok && res.data) {
      localStorage.setItem("token", res.data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      toast.success("sucssefully login");
      return true;
    }

    if (res.status === 401 || res.status === 403) {
      //unauthorize

      toast.warning("unauthorize");
      return false;
    }

    toast.error("something was wrong try again!");
    return false;
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    toast.success("sucssefully logout");
    navigate("/login");
  };

  return { login, logOut, loading };
};

export default useAuth;
