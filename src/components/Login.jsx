import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle,logInWithEmailAndPassword } from "../Firebase";
import "./Login.css";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/Home");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login_box">
        <input
          type="text"
          className="login_einput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login_pinput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login_btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login_btn login_googlebtn" onClick={signInWithGoogle}>
          <div>
            Login with Google
            <img
              src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
              alt=""
            />
          </div>
        </button>
        <div className="extra_options">
          <div>
            <Link to="/Reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/Register">Register</Link> now.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
