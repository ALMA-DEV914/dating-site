import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";

const Nav = ({ minimal, showModal, setShowModal, setIsSignup }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignup(false);
  };

  const authToken = false;

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? logo : logo2} alt="logo" />
      </div>
      <div>
        {!authToken && !minimal && (
          <button
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
