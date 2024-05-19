import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const baseUrl = "http://localhost:5000/api/login";

    async function LoginUser(event) {
        event.preventDefault();
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) {
            console.log("Error:", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="container mt-5">
            <h2>Login to your account</h2>
            <form onSubmit={LoginUser}>
                <div className="mb-3">
                    <label htmlFor="form_email" className="form-label">
                        Enter your email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="form_email"
                        placeholder="john@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="form_password" className="form-label">
                        Enter your password:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="form_password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
