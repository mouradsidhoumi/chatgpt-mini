import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1>
        <Link to="/">Talk⋅γπτ</Link>
      </h1>
      {/*<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
        </nav>
      */}
      <Outlet />
    </>
  );
};
