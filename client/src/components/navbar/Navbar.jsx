import "./navbar.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from "../../assets";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaUser } from "react-icons/fa6"; 

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to={'/'} style={{ textDecoration: "none" }}>
        <div className="name">
          <img src={Logo} width={'30px'} height={'30px'} alt="BookNRest Logo" />
          <span className="logo" style={{ fontWeight: "700" }}>Book<span style={{ color: 'white', fontWeight: '700', margin: '5px' }}>N</span>Rest</span>
        </div>
      </Link>
      {
        user ? <div className="navContainer">
          <div className="profile">
            <FaUser />
            <span>{user.username}</span>
            <button onClick={handleLogout} className="navButton">Logout</button>
          </div>
        </div>
          : <div className="navContainer">
            <div className="navItems">
              <Link to="/register"><button className="navButton">Register</button></Link>
              <Link to="/login"><button className="navButton">Login <FaLongArrowAltRight /> </button></Link>
            </div>
          </div>
      }
    </div>
  )
}

export default Navbar