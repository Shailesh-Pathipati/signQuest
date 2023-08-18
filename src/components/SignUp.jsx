import React, { useState } from "react";
import "./Login.css"; // Import custom CSS for styling

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState(""); // State for FullName
    const [contactNo, setContactNo] = useState(""); // State for Contactno
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Perform validation here
        if (username === "user" && password === "password") {
            setIsLoggedIn(true);
        }
    };
    const handleContactNoChange = (e) => {
        // Apply phone number formatting using regex
        const formattedNumber = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        setContactNo(formattedNumber);
    };
    return (
        <div className="login-page">
            <div className="login-container" style={{ margin: "50px 0" }}>   
            <div className="login-content">          
                <h1><b>SIGNUP</b></h1>
                <p> </p><p> </p><p> </p>
                <div className="form-group" >
                    <label><b>Enter your mail id:</b></label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <p></p>
                <div className="form-group">
                    <label><b>Enter your full name:</b></label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <p></p>
                <div className="form-group">
                    <label><b>Enter your Contact Number:</b></label>
                    <input
                        type="text"
                        value={contactNo}
                        onChange={handleContactNoChange} // Use the custom handler
                        
                    />
                </div>
                <div className="form-group">
                <label><b>Enter password:</b></label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <p></p>
                <p style={{color: "blue"}}>Already have an account?</p>
                <p> </p><p> </p><p> </p>
                <button className="login-button" onClick={handleLogin}>Sign Up</button>
                {isLoggedIn && <p>You are logged in.</p>}
                </div>   
            </div>
        </div>
    );
}