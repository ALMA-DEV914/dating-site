import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";

const Nav = (minimal, authToken) => {
    return (
        <nav>
        <div className="logo-container">
            <img className="logo" src={minimal ? logo : logo2} alt="logo"/>
        </div>
        {authToken && <button className="nav-button">Log in</button>}
        </nav>
    )
}

export default Nav;