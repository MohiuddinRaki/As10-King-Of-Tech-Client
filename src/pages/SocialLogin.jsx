import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleLoginUser } = useContext(AuthContext);
  const naviGate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = () => {
    googleLoginUser()
      .then(() => {
        toast.success("User logged in successfully");
        naviGate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="mx-auto">
        <button
          onClick={() => handleSocialLogin()}
          className="btn btn-primary btn-sm"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
