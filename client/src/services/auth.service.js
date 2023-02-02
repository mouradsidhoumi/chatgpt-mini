import { redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const API_URL = import.meta.env.VITE_API_BASE_URL;

const register = async function(name, email, password) {
  try {
    const response = await fetch(`${API_URL}/auth/register`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    return await response.json();
  } catch (err) {
    console.error(err)
    throw(err)
  }
}

const login = async function(email, password) { 
  try {
    const response = await fetch(`${API_URL}/auth/login`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    return await response.json();
  } catch (err) {
    console.error(err)
    throw(err)
  }
}

const logout = () => {
  cookies.remove("TOKEN", { path: "/" });
  redirect("/")
  window.location.href = "/";
}


const AuthService = {
  register,
  login,
  logout,
}
export default AuthService