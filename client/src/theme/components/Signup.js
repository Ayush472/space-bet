import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./../assets/css/signup.css"

const handleUserSignUp = () => {
    return(
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
        theme="light"
      />

        <div className="needs-validation">
        <div className="signup-box">
          <h4 className="text-center">Sign Up</h4>
          <div className="form sign-form mt-3">
            <div className="form-group pt-1">
              <h6>Name</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                // onChange={(e) =>
                //   setUser1({ ...user1, full_name: e.target.value })
                // }
                // value={user1.full_name}
              />
            </div>
            <div className="form-group pt-2">
            <h6>E-mail</h6>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                // onChange={(e) =>
                //   setUser1({ ...user1, email_id: e.target.value })
                // }
                // value={user1.email_id}
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
                // onChange={(e) =>
                //   setUser1({ ...user1, password: e.target.value })
                // }
                // value={user1.password}
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
                // onChange={(e) =>
                //   setUser1({ ...user1, confirm_password: e.target.value })
                // }
                // value={user1.confirm_password}
              />
            </div>

            <div className="form-check d-flex justify-content-start sign-termsC">
              <input
                type="checkbox"
                value="yes"
                id="accept"
              />
                <span> I agree all statements in </span>
                <Link to={"/"} className="text-decoration-none ">
                  Terms of service
                </Link>
            </div>
            <button
              className="sign"
              id="signup"
            //   onClick={() => {
            //     check();
            //   }}
            >
              Sign Up
            </button>
            
          </div>
        </div>
            </div>
        
        </>
    )

}


export default handleUserSignUp;