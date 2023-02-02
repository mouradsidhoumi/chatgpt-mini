import { useRef } from "react";
import { useNavigate, redirect, Link } from "react-router-dom";

import AuthService from "../services/auth.service";
import Cookies from "universal-cookie";

export const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await AuthService.login(
        email.current.value,
        password.current.value
      );
      if (response.status === "ok") {
        const cookies = new Cookies();
        cookies.set("TOKEN", response.token, {
          path: "/",
        });
        navigate("/chat");
      } else alert("Please check your email and password");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div>
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <input type="email" ref={email} placeholder="Email" />
          <br />
          <input type="password" ref={password} placeholder="Password" />
          <br />
          <input type="submit" value="Enter" />
        </form>
      </div>
      <hr />
      <div>
        <p>
          First time? <Link to="/register">Register</Link>.
        </p>
      </div>
    </>
  );
};
