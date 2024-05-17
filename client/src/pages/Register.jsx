import React, { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const baseUrl = "http://localhost:5000/api/register";

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="container mt-5">
            <h2>Register your account</h2>
            <form onSubmit={registerUser}>
                <div className="mb-3">
                    <label htmlFor="form_name" className="form-label">
                        Enter your name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="form_name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
