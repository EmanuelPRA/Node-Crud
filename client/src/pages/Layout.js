import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-articles?theme=Politics">Politics</Link>
          </li>
          <li>
            <Link to="/all-articles?theme=Entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
