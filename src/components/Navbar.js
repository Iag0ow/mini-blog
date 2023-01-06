import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  return (
    <nav className={styles.navbar}>
      <NavLink
        to={"/Home"}
        className={(isActive) => (isActive ? styles.brand : "")}
      >
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to={"/Home"}>Home</NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to={"/Login"}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to={"/Register"}>Cadastrar</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to={"/posts/create"}>Novo Post</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to={"/About"}>Sobre</NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
