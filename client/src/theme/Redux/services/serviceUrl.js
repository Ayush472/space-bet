import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const userDetails = (email, password) => {
  let formData = new FormData();
  formData.append("login_email_id", email);
  formData.append("login_password", password);

  return new Promise(function (resolve, reject) {
    fetch("http://192.168.74.5:4499/login", {
      method: "post",
      body: formData,
      crossdomain: true,
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success") {
          localStorage.setItem('userData', JSON.stringify(response));
          resolve(response);
        } else {
          reject(response);
        }
      })
      .then((error) => {
        reject(error);
      });
  });
};

export const socialMediaLogin = (obj) => {
  let formData = new FormData();
  formData.append("is_social_media_account", obj.is_social_media_account);
  formData.append("email_id", obj.email);
  formData.append("name", obj.name);
  formData.append("social_media_account_id", obj.social_media_account_id);

  return new Promise(function (resolve, reject) {
    fetch("http://192.168.74.5:4499/social_media_account_api", {
      method: "post",
      body: formData,
      crossdomain: true,
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success") {
          localStorage.setItem('userData', JSON.stringify(response));
          resolve(response);
        } else {
          reject(response);
        }
      })
      .then((error) => {
        reject(error);
      });
  });
};

export const userSignUp = (is_social_media_account,name, email, password, conform_password) => {

  let formData = new FormData();
  formData.append("is_social_media_account",JSON.stringify(is_social_media_account));
  formData.append("full_name", name);
  formData.append("email_id", email);
  formData.append("password", password);
  formData.append("confirm_password", conform_password);

  return new Promise(function (resolve, reject) {
    <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    fetch("http://192.168.74.5:4499/register", {
      method: "post",
      body: formData,
      crossdomain: true,
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success") {
          console.log("response", response);
          localStorage.setItem('Register', JSON.stringify(response));
          resolve(response);
          console.log("ayush");
        }else if(response.status === "error"){
      toast.error("Email Already Exist, Please try with another Email");
        }
      })
      .then((error) => {
        reject(error);
      });
  });
};
