import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let url = "http://localhost:5007/user/SignIn";
  const SignIn = () => {
    axios
      .post(url, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          localStorage.token = response.data.token;
          navigate("/dashboard");
        } else {
          console.log("wrong credentials");
        }
      });
    setEmail(""), setPassword("");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mx-auto shadow-sm">
            <h1>SIGN IN PAGE</h1>
            <input
              type="text"
              placeholder="Email"
              className="form-control my-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Password"
              className="form-control my-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button onClick={SignIn} className="btn btn-warning w-100 my-2">
              sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
