import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";

const Nav = ({minimal, authToken, setShowModal}) => {
    return (
        <nav>
        <div className="logo-container">
            <img className="logo" src={minimal ? logo : logo2} alt="logo"/>
        </div>
        <div>
        {!authToken && !minimal && <button className="nav-button" onClick={setShowModal}>Log in</button>}
        </div>
        </nav>
    )
}

export default Nav;