import { Link } from "react-router-dom";
import { useNavigationContext } from "../context/navigationContext";

/* Icons */
import { GiHamburgerMenu } from "react-icons/gi";
import { MdPersonAdd, MdPersonRemove } from "react-icons/md";
import { FaEye } from "react-icons/fa";

/* Nav Logo */
import Logo from "./Logo";

/* Auth0 */
import { LoginButton, LogoutButton } from "./Login_Logout-btns";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  const { setIsMenuOpen, currentPage, changeCurrentPage } =
    useNavigationContext();

  return (
    <nav className="navbar">
      <Logo />
      <ul className="navbar-nav-btns">
        <li className={`${currentPage === "Home" ? "active" : ""}`}>
          <Link to="/" onClick={(e) => changeCurrentPage(e)}>
            Home
          </Link>
        </li>
        <li className={`${currentPage === "About" ? "active" : ""}`}>
          <Link to="/about" id="about" onClick={(e) => changeCurrentPage(e)}>
            About
          </Link>
        </li>
        <li className={`${currentPage === "Explore" ? "active" : ""}`}>
          <Link to="/all-countries" onClick={(e) => changeCurrentPage(e)}>
            Explore
          </Link>
        </li>
      </ul>
      <section className="navbar-btns">
        <Link to="/wishlist" onClick={(e) => changeCurrentPage(e)}>
          <FaEye />
          <p>Wishlist</p>
          <span>1</span>
        </Link>
        <div className="log-btns">
          {isAuthenticated ? (
            <div className="user-info">
              <aside>
                <img src={user.picture} alt={`${user.name}'s picture'`} />
                <h6>{user.name}</h6>
              </aside>
              <div className="logout-btn">
                <LogoutButton /> <MdPersonRemove />
              </div>
            </div>
          ) : (
            <div className="login-btn">
              <LoginButton /> <MdPersonAdd />
            </div>
          )}
        </div>
      </section>
      <button id="burger-btn" onClick={() => setIsMenuOpen(true)}>
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;
