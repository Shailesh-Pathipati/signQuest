import React, { useState } from "react";
import "./Login.css"; // Import custom CSS for styling

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Perform validation here
        if (username === "user" && password === "password") {
            setIsLoggedIn(true);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container" style={{ margin: "50px 0" }}>   
                <h1><b>LOGIN</b></h1>
                <p> </p><p> </p><p> </p>
                <div className="form-group">
                    <label><b>USERNAME:</b></label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <p></p>
                <div className="form-group">
                <label><b>PASSWORD:</b></label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <p style={{color: "blue"}}>Forgot password?</p>
                <p> </p><p> </p><p> </p>
                <button className="login-button" onClick={handleLogin}>Login</button>
                {isLoggedIn && <p>You are logged in.</p>}
            </div>
        </div>
    );
}