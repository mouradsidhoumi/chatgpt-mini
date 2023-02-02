import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

export const Register = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const response = await AuthService.register(
        name.current.value,
        email.current.value,
        password.current.value
      );
      if (response.status === "ok") {
        alert("Registered successfully!");
        navigate("/login");
      } else alert("Email already used.");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div>
        <h2>Registration</h2>
        <form onSubmit={handleRegister}>
          <input type="text" ref={name} placeholder="Name" />
          <br />
          <input type="email" ref={email} placeholder="Email" />
          <br />
          <input type="password" ref={password} placeholder="Password" />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
      <hr />
      <div>
        <p>
          Already registered? <Link to="/login">Log in</Link>.
        </p>
      </div>
    </>
  );
};
