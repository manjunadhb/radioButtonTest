import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let quoteInputRef = useRef();
  let navigate = useNavigate();

  return (
    <div className="App">
      <form>
        <h2
          style={{
            backgroundColor: "deeppink",
            color: "white",
            borderRadius: "20px",
            boxShadow: "10px 10px 10px black",
          }}
        >
          Login
        </h2>
        <div>
          <label>Email</label>
          <input ref={emailInputRef}></input>
        </div>
        <div>
          <label>Password</label>
          <input ref={passwordInputRef}></input>
        </div>
        <div>
          <label>Quote</label>
          <input ref={quoteInputRef}></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              if (
                emailInputRef.current.value == "sachin@gmail.com" &&
                passwordInputRef.current.value == "sachin"
              ) {
                navigate("/dashboard", {
                  state: { msg: quoteInputRef.current.value },
                });
              } else {
                alert("Email or Password is Incorrect.");
              }
            }}
          >
            Sign In
          </button>
        </div>
      </form>
      <div>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Signin;
