import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import regi from "./../assets/images/register-modal.png";
import logw from "./../assets/images/login-modal.png";
import Forgotpage from "./Forgotpage";
import { FaGooglePlusSquare } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import logo from "./../assets/images/fulllogo.png";
import "./../assets/css/navbar.css";
import Popup from "reactjs-popup";
import Signup from "./../components/Signup";
import { useDispatch, useSelector } from "react-redux";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

import * as ServiceURL from "./../Redux/services/serviceUrl";
import {
  LOGIN_FAIL,
  USER_DETAILS,
  SIGNUP_FAIL,
  USER_SIGNUP,
} from "../Redux/action/type";
function NavBar(children, triggerLogin,props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);
  useEffect(() => {
    console.log("useEffect", userData);
  }, []);

  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [forgot, setForgot] = useState(false);
  const closeforgot = () => setForgot(false);
  const [user, setUser] = useState({
    login_email_id: "",
    login_password: "",
  });
  const [user1, setUser1] = useState({
    full_name: "",
    email_id: "",
    password: "",
    confirm_password: "",
  });
  const emailValidation =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  const passValidation =
  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  

  const handleUserLogin = () => {
    ServiceURL.userDetails(user.login_email_id, user.login_password)
      .then((response) => {
        console.log("data", response);
        dispatch({
          type: USER_DETAILS,
          payload: response,
        });
        toast.success("You are successfully login");
        setTimeout(() => {
          navigate("/homepage");
        }, 1500);
      })
      .catch((error) => {
        toast.error("Please Enter valid email or password");
        dispatch({
          type: LOGIN_FAIL,
          payload: "Something went wrong, please try again later",
        });
        console.log("error call ", userData);
      });
  };

  const handleGoogleLogin = (IResolveParams) => {
    console.log("response of login google", IResolveParams);
    let obj = {
      is_social_media_account: true,
      email: IResolveParams.data.email,
      name: IResolveParams.data.name,
      social_media_account_id: IResolveParams.data.sub,
    };
    console.log(obj);
    ServiceURL.socialMediaLogin(obj)
      .then((res) => {
        dispatch({
          type: USER_DETAILS,
          payload: res,
        });
        if (res.status === "success") {
          toast.success("You are login Successfully with Google");
          localStorage.setItem("login", true);
          setTimeout(() => {
            navigate("/homepage");
          }, 1500);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong");
        dispatch({
          type: LOGIN_FAIL,
          payload: "Something went wrong, please try again later",
        });
        console.log("error call ", userData);
      });
  };

  const handleUserSignUp = () => {
    ServiceURL.userSignUp(
      user1.full_name,
      user1.email_id,
      user1.password,
      user1.confirm_password
    )
      .then((response) => {
        console.log("response", response.status);

        dispatch({
          type: USER_SIGNUP,
          payload: response,
        });
        toast.success("Register Successfully");
        setTimeout(() => {
          {
            props.onSuccess();
          }
        }, 3500);
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_FAIL,
          payload: "Sign Up fail, please try again",
        });
      });
  };
  const check = () => {
    if (user.login_email_id === "" || user.login_password === "") {
      toast.error("Please Fill all fields");
    } else if (!emailValidation.test(user.login_email_id) === true) {
      toast.error("Please Enter Valid Email");
    } else if (!passValidation.test(user.login_password) === true) {
      toast.error("Please Enter Correct Password");
    } else {
      navigate("/homepage")
      handleUserLogin();

    }
  };
  const check1 = () => {
    // if (
    //   user1.full_name === "" ||
    //   user1.email_id === "" ||
    //   user1.password === "" ||
    //   user1.confirm_password === ""
    // ) {
    //   toast.warn("Please fill all fields");
    // } else if (!emailValidation.test(user1.email_id)) {
    //   toast.error("Please Enter Valid Email");
    // } else if (!passValidation.test(user1.password)) {
    //   toast.warn("Please Enter Valid Password");
    // } else if (user1.password !== user1.confirm_password) {
    //   toast.error("Please Enter Same Password");
    // } else if (document.getElementById("accept").checked == false) {
    //   toast.warn("Please accept Terms & Conditions");
    // } else {
      
    //   handleUserSignUp();
    // }
  };
  const [PopupType, setPopupType] = useState("xyz");

  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {

    console.log("useeffect", isLogin);
  }, [isLogin]);
  const [chaekLogin, setchaekLogin] = useState(false);

  const [up, setUp] = useState(false);
  const closeUp = () => setUp(false);

  const showSignUpPopUp = () => {
    setSignup(!signup);
    setLogin(!login);
  };
  const showUPPopUp = () => {
    setUp(!up);
    setPopupType("xyz");
  };
  const showUSignUpPPopUp = () => {
    setUp(!up);
    setPopupType("abc");
  };

  const handleNavbar = () => {
    console.log(isLogin);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
    setTimeout(() => {
      setLogin(false);
    }, 1500);
    if (data) {
      setIsLogin(!isLogin);
      console.log(isLogin);
    }
  };
  let data = localStorage.getItem("user");

  

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <nav className="navbar navbar-expand-lg  navbar-expand-md  navbar-expand-sm navbar-light">
        <Link className="navbar-brand">
          <img src={logo} alt="Crashgame Logo" />
        </Link>

        
        <div className="d-flex flex-row">
        
         
       
              <button
                id="login"
                type="button"
                className="nav-link nav-item sign-btn"
                onClick={() => showUPPopUp()}
              >
                Login
              </button>
              <button
                id="login"
                type="button"
                className="nav-link nav-item sign-btn"
                onClick={() => showUSignUpPPopUp()}
              >
                Sing-Up
              </button>
         
        </div>

    

        <button
          className="navbar-toggler hidee"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <Popup open={up} closeOnDocumentClick onClose={closeUp}>
        <div className="logbox">
     

          <Nav justify variant="tabs">
            <Nav.Item className={PopupType === "abc" ? "active" : ""}>
              <Nav.Link onClick={() => setPopupType("abc")}>Signup</Nav.Link>
            </Nav.Item>
            <Nav.Item className={PopupType === "xyz" ? "active" : ""}>
              <Nav.Link onClick={() => setPopupType("xyz")}>login</Nav.Link>
            </Nav.Item>
          </Nav>

          {PopupType === "abc" && (
            <>
              <div className="spop">
                <img src={regi} alt="" className="regiseter" />
                <div className="pop-signup">
                  <div className="form sign-form mt-3">
                    <div className="form-group pt-1">
                      <h6>Name</h6>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={(e) =>
                          setUser1({ ...user1, full_name: e.target.value })
                        }
                        value={user1.full_name}
                      />
                    </div>
                    <div className="form-group pt-2">
                      <h6>E-mail</h6>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) =>
                          setUser1({ ...user1, email_id: e.target.value })
                        }
                        value={user1.email_id}
                      />
                    </div>
                    <div className="form-group pt-2">
                      <h6>Password</h6>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        maxLength={9}
                        minLength={6}
                        onChange={(e) =>
                          setUser1({ ...user1, password: e.target.value })
                        }
                        value={user1.password}
                      />
                    </div>
                    <div className="form-group pt-2">
                      <h6>Confirm Password</h6>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        id="inputValidationEx2"
                        maxLength={9}
                        minLength={6}
                        required
                        onChange={(e) =>
                          setUser1({
                            ...user1,
                            confirm_password: e.target.value,
                          })
                        }
                        value={user1.confirm_password}
                      />
                    </div>

                    <div className="form-check d-flex justify-content-start sign-termsC">
                      <input type="checkbox" value="yes" id="accept" />
                      <span> I agree all statements in </span>
                      <Link to={"/"} className="text-decoration-none ">
                        Terms of service
                      </Link>
                    </div>
                    <button
                      className="sign"
                      id="signup"
                      onClick={() => {
                        check1();
                      }}
                    >
                      Sign Up
                    </button>
              
                  </div>
                </div>
              </div>
            </>
          )}
          {PopupType === "xyz" && (
            <div className="login">
              <img src={logw} alt="" className="logw" />
              <div className="form login-popup-dash">
                <div className="form-group pt-2">
                  <h6>E-mail</h6>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    id="exampleFormControlInput1"
                    name="email"
                   
                    onChange={(e) =>
                      setUser({ ...user, login_email_id: e.target.value })
                    }
                    value={user.login_email_id}
                  />
                </div>
                <div className="form-group pt-2">
                  <h6>Password</h6>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    maxLength={9}
                    minLength={6}
                    required
                    // onChange={(e) =>
                    //   setUser({ ...user, password: e.target.value })
                    // }

                    onChange={(e) =>
                      setUser({ ...user, login_password: e.target.value })
                    }
                    value={user.login_password}
                  />
                </div>
                <button
                  id="login"
                  className="sign"
                  onClick={() => check()}
                >
                  Log In
                </button>
                <div className="flex-button">
                  <button
                    type="button"
                    onClick={() => showSignUpPopUp()}
                    className="login-btn me-2"
                  >
                    Sign-Up
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setForgot(!forgot);
                      setLogin(!login);
                    }}
                    className="forgot-btn-dash"
                  >
                    Forgot Password?
                  </button>
                </div>
                <Link to={"/"}>
                <LoginSocialGoogle
                  cssClass="btnFacebook"
                  client_id={
                    process.env.REACT_APP_GG_APP_ID ||
                    "1004636243676-mqdbvkl3dhr31dauqk5nlo85ga5ila8h.apps.googleusercontent.com"
                  }
                  // onLoginStart={onLoginStart}
                  // redirect_uri={REDIRECT_URI}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={(IResolveParams) => {
                    handleGoogleLogin(IResolveParams);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <FaGooglePlusSquare size={50} />
                </LoginSocialGoogle>
              </Link>
              </div>
            </div>
          )}
        </div>
      </Popup>
      <Popup open={forgot} closeOnDocumentClick onClose={closeforgot}>
        <Forgotpage onSuccess={closeforgot} />
      </Popup>
    </>
  );
}
export default NavBar;
