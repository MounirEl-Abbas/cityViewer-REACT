import { Link } from "react-router-dom";
import { useNavigationContext } from "../context/navigationContext";

/* Icons */
import { MdPersonAdd, MdPersonRemove } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Logo from "./Logo";

/* Auth0 */
import { LoginButton, LogoutButton } from "./Login_Logout-btns";
import { useAuth0 } from "@auth0/auth0-react";

const Sidemenu = () => {
  const { user, isAuthenticated } = useAuth0();

  const { isMenuOpen, setIsMenuOpen, currentPage, changeCurrentPage } =
    useNavigationContext();

  return (
    <nav className={`${isMenuOpen ? "sidemenu sidemenu-open" : "sidemenu"}`}>
      {isMenuOpen && (
        <>
          <div className="sidemenu-header">
            <Logo />
            <button onClick={() => setIsMenuOpen(false)}>
              <ImCross />
            </button>
          </div>
          <ul className="sidemenu-nav-btns">
            <li>
              <Link
                className={`${currentPage === "Home" ? "active" : ""}`}
                to="/"
                onClick={(e) => changeCurrentPage(e)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${currentPage === "About" ? "active" : ""}`}
                to="/about"
                id="about"
                onClick={(e) => changeCurrentPage(e)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${currentPage === "Explore" ? "active" : ""}`}
                to="/countries"
                onClick={(e) => changeCurrentPage(e)}
              >
                Explore
              </Link>
            </li>
          </ul>
          <div className="sidemenu-btns">
            <Link to="/wishlist" onClick={(e) => changeCurrentPage(e)}>
              <FaEye />
              <p>Wishlist</p>
              <span>1</span>
            </Link>
            <div className="log-btns">
              {isAuthenticated ? (
                <div className="user-info">
                  <aside>
                    <img src={user.picture} alt={`${user.name}'s profile'`} />
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
          </div>
        </>
      )}
    </nav>
  );
};

export default Sidemenu;
