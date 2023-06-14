import React from "react";
import "./../assets/css/forgotpage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Forgotpage(props) {

  const [loginErr, setLoginErr] = useState({
    err: false,
    errMsg: ''
  })

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleForget = () => {

    let formData = new FormData();
    formData.append("email", email);
    console.log(email);

    fetch("http://192.168.74.5:4499/forget", {
      method: "post",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoginErr({ ...loginErr, err: true, errMsg: 'Mail Sent Successfully, Please Check Your Mail' });
        setTimeout(() => {
          {props.onSuccess()}
        }, 2000);
      });
  };
  return (
    <>
      {
              loginErr.err &&
              <div className="alert alert-warning alert-dismissible" id="alertBox" role="alert">
                <strong>{loginErr.errMsg}</strong>
                <button className="close" onClick={()=>setLoginErr({...loginErr, err: false })} >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            }
      <div className="for-box">
        <h4 className="text-center">Forgot Password??</h4>
        <div className="form ">
          <div className="form-group pt-2">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <button
          onClick={(e) => handleForget({ ...email, email: e.target.value })}
          className="sign"
        >
          Send
        </button>
      </div>
    </>
  );
}

export default Forgotpage;
