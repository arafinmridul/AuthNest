import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const history = useNavigate();
    const [quote, setQuote] = useState("");
    const [tempQuote, setTempQuote] = useState("");

    async function populateQuote() {
        const req = await fetch("http://localhost:5000/api/quote", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        });

        const data = await req.json();
        if (data.status === "ok") {
            setQuote(data.quote);
        } else {
            alert(data.error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch("http://localhost:5000/api/decode", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            })
                .then((res) => res.json())
                .then((user) => {
                    if (!user) {
                        localStorage.removeItem("token");
                        history.replace("/login");
                    } else {
                        populateQuote();
                    }
                })
                .catch((err) => {
                    console.error(err);
                    localStorage.removeItem("token");
                    history.replace("/login");
                });
        }
    }, []);

    async function updateQuote(event) {
        event.preventDefault();

        const req = await fetch("http://localhost:5000/api/quote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                quote: tempQuote,
            }),
        });

        const data = await req.json();
        if (data.status === "ok") {
            setQuote(tempQuote);
            setTempQuote("");
        } else {
            alert(data.error);
        }
    }

    return (
        <div className="container mt-4">
            <form onSubmit={updateQuote}>
                <input
                    type="text"
                    placeholder="Quote"
                    value={tempQuote}
                    onChange={(e) => setTempQuote(e.target.value)}
                />
                <input type="submit" value="Update quote" />
            </form>
            <h1 className="mt-4">
                Your quote:{" "}
                <span className="text-primary">
                    {quote || "No quote found"}
                </span>
            </h1>
        </div>
    );
};

export default Dashboard;
